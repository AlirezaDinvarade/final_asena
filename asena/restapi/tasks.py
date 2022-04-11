from celery import shared_task
from .models import PolygonValues
from .serializer import GetPolygonSerializer
from modules.new_polygon_value_rbf_model import main_polygon_value
from .DateTime import DetailTime


@shared_task(autoretry_for=(Exception,), retry_kwargs={'max_retries': 7, 'countdown': 5})
def get_polygon_module_task():
    insert_list = []
    year, month, day, time = DetailTime()

    json_values = main_polygon_value(year = year , month = month, day = day , time = time )
    IndicatorsList = json_values["indicator"]

    for indicator in IndicatorsList:
        info = GetPolygonSerializer(data=indicator)
        if info.is_valid():
            insert_list.append(PolygonValues(id=info.validated_data['id'],
                ALongitude = info.validated_data['ALongitude'],ALatitude = info.validated_data['ALatitude'],
                BLongitude = info.validated_data['BLongitude'],BLatitude = info.validated_data['BLatitude'],
                CLongitude = info.validated_data['CLongitude'],CLatitude = info.validated_data['CLatitude'],
                DLongitude = info.validated_data['DLongitude'],DLatitude = info.validated_data['DLatitude'],
                CO=info.validated_data['CO'],O3=info.validated_data['O3'], NO2=info.validated_data['NO2'], 
                SO2=info.validated_data['SO2'], PM10=info.validated_data['PM10'], 
                PM2_5=info.validated_data['PM2_5'], AQI=info.validated_data['AQI']))
        else:
            print(info.errors)
    
    try:
        PolygonValues.objects.bulk_create(insert_list)
    except:
        PolygonValues.objects.bulk_update(insert_list, fields=['CO', 'O3', 'NO2', 'SO2', 'PM10', 'PM2_5','AQI'])             
    print('Database polygon updated')