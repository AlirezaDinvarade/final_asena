from rest_framework.response import Response
from rest_framework.views import APIView
from .models import PolygonValues
from .serializer import GetPolygonSerializer
from .DateTime import DateTime


Date, Time = DateTime()


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
            "indicator": {"CO": ser_data.data['CO'], "O3": ser_data.data['O3'],"NO2": ser_data.data['NO2'], "SO2": ser_data.data['SO2'],"PM10": ser_data.data['PM10'],"PM2_5": ser_data.data['PM2_5'],"AQI": ser_data.data['AQI']}
        }

        print(response_json)
        return Response(data=response_json,headers={'Access-Control-Allow-Origin': 'http://localhost:3000', 'Access-Control-Allow-Credentials':True, 'Access-Control-Allow-Methods' : 'OPTIONS', 'Access-Control-Allow-Headers' : ['Origin', 'Content-Type', 'Accept']})


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

        print(response_json)
        return Response(data=response_json,headers={'Access-Control-Allow-Origin': 'http://localhost:3000', 'Access-Control-Allow-Credentials': True, 'Access-Control-Allow-Methods': 'OPTIONS', 'Access-Control-Allow-Headers': ['Origin', 'Content-Type', 'Accept']})


class DeletePolygons(APIView):
    def get(self, request):
        polygons = PolygonValues.objects.all()
        polygons.delete()
        return Response({"success":"all polygons database removed"})



