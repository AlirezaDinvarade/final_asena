from rest_framework.response import Response
from rest_framework.views import APIView
from .models import PolygonValues
from .serializer import GetPolygonSerializer
from .DateTime import DateTime
from django.db import connection


Date ,Time = DateTime()

class GetPoint(APIView):
    def post(self, request):
        try:
            Longtitude = request.data['lon']
            Latitude = request.data['lat']
            if float(Longtitude) > 51.62 or float(Latitude) > 35.83:
                return Response('this point is out of area')
            point = PolygonValues.objects.filter(ALongitude__lt = Longtitude, ALatitude__lt = Latitude).order_by('-ALongitude','-ALatitude')[0]
        except :
            return Response('this point is out of area')
        ser_data = GetPolygonSerializer(point)

        response_json = {
            	"Date": Date,
                "Time": Time,
	            "indicator": {"CO": ser_data.data['CO'], "O3": ser_data.data['O3'],"NO2": ser_data.data['NO2'],"SO2": ser_data.data['SO2'],"PM10": ser_data.data['PM10'],"PM2_5": ser_data.data['PM2_5'],"AQI": ser_data.data['AQI']}
        } 

        return Response(data=response_json,headers={'Access-Control-Allow-Origin':'http://localhost:3000','Access-Control-Allow-Credentials':True, 'Access-Control-Allow-Methods' : 'OPTIONS', 'Access-Control-Allow-Headers' : ['Origin', 'Content-Type', 'Accept']})


class GetPolygons(APIView):
    def post(self, request):
        all = PolygonValues.objects.all().values()

        colors = ['#01F0FF','#0DF5A6','#19FB4D','#2EFF01','#72FF01','#B7FF01','#FAFE01','#FBC401','#FC8C01','#FD5301','#FE3C01','#FE2501','#FF0F01','#FF0106','#FF0117','#9F000A','#6F068B']
        final_indicator = []

        for idx, k in enumerate(range(10,180,10)):
            indicator = {"color" : None, "coordinates": []}
            indicator["color"] = colors[idx]
            AQIFiltered =  list(filter(lambda sub : sub['AQI'] >= k and sub['AQI'] < k+10, all))
            for data in AQIFiltered:
                indicator["coordinates"].append([[[data['ALongitude'], data['ALatitude']],[data['BLongitude'], data['BLatitude']],[data['CLongitude'], data['CLatitude']],[data['DLongitude'], data['DLatitude']],[data['ALongitude'], data['ALatitude']]]])
            final_indicator.append(indicator) 

        response_json = {
            	"Date": Date,
                "Time": Time,
	            "indicator": final_indicator
        } 

        # print(len(connection.queries))
        return Response(data=response_json,headers={'Access-Control-Allow-Origin':'http://localhost:3000','Access-Control-Allow-Credentials':True, 'Access-Control-Allow-Methods' : 'OPTIONS', 'Access-Control-Allow-Headers' : ['Origin', 'Content-Type', 'Accept']})



        # good1 = PolygonValues.objects.filter(AQI__range=(0, 10))
        # good2 = PolygonValues.objects.filter(AQI__range=(10, 20))
        # good3 = PolygonValues.objects.filter(AQI__range=(20, 30))
        # good4 = PolygonValues.objects.filter(AQI__range=(30, 40))
        # good5 = PolygonValues.objects.filter(AQI__range=(40, 50))
        # Moderate1 = PolygonValues.objects.filter(AQI__range=(50, 60))
        # Moderate2 = PolygonValues.objects.filter(AQI__range=(60, 70))
        # Moderate3 = PolygonValues.objects.filter(AQI__range=(70, 80))
        # Moderate4 = PolygonValues.objects.filter(AQI__range=(80, 90))
        # Moderate5 = PolygonValues.objects.filter(AQI__range=(90, 100))
        # Unhealthy_for_Sensitive1 = PolygonValues.objects.filter(AQI__range=(100, 110))
        # Unhealthy_for_Sensitive2 = PolygonValues.objects.filter(AQI__range=(110, 120))
        # Unhealthy_for_Sensitive3 = PolygonValues.objects.filter(AQI__range=(120, 130))
        # Unhealthy_for_Sensitive4 = PolygonValues.objects.filter(AQI__range=(130, 140))
        # Unhealthy_for_Sensitive5 = PolygonValues.objects.filter(AQI__range=(140, 150))
        # Unhealthy = PolygonValues.objects.filter(AQI__range=(150, 200))
        # Very_Unhealthy = PolygonValues.objects.filter(AQI__range=(200, 250))

        # ranges = [good1,good2,good3,good4,good5,Moderate1,Moderate2,Moderate3,Moderate4,Moderate5,Unhealthy_for_Sensitive1,Unhealthy_for_Sensitive2,Unhealthy_for_Sensitive3,Unhealthy_for_Sensitive4,Unhealthy_for_Sensitive5,Unhealthy,Very_Unhealthy]
        # colors = {good1:'#01F0FF',good2:'#0DF5A6',good3:'#19FB4D',good4:'#2EFF01',good5:'#72FF01',Moderate1:'#B7FF01',Moderate2:'#FAFE01',Moderate3:'#FBC401',Moderate4:'#FC8C01',Moderate5:'#FD5301',Unhealthy_for_Sensitive1:'#FE3C01',Unhealthy_for_Sensitive2:'#FE2501',Unhealthy_for_Sensitive3:'#FF0F01',Unhealthy_for_Sensitive4:'#FF0106',Unhealthy_for_Sensitive5:'#FF0117',Unhealthy:'#9F000A',Very_Unhealthy:'#6F068B'}

        # final_indicator = []
        # for situation in ranges:
        #     indicator = {"color" : None, "coordinates": []}
        #     indicator["color"] = colors[situation]
        #     for data in situation:
        #         indicator["coordinates"].append([[[data.ALongitude, data.ALatitude],[data.BLongitude, data.BLatitude],[data.CLongitude, data.CLatitude],[data.DLongitude, data.DLatitude],[data.ALongitude, data.ALatitude]]])
        #     final_indicator.append(indicator)

        # response_json = {
        #     	"Date": Date,
        #         "Time": Time,
	    #         "indicator": final_indicator
        # } 

        # print(len(connection.queries))
        # return Response(data=response_json,headers={'Access-Control-Allow-Origin':'http://localhost:3000','Access-Control-Allow-Credentials':True, 'Access-Control-Allow-Methods' : 'OPTIONS', 'Access-Control-Allow-Headers' : ['Origin', 'Content-Type', 'Accept']})


class DeletePolygons(APIView):
    def get(self, request):
        polygons = PolygonValues.objects.all()
        polygons.delete()
        return Response({"success":"all polygons database removed"})



