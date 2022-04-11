from rest_framework import serializers

class GetPolygonSerializer(serializers.Serializer):
    id = serializers.FloatField()
    ALongitude = serializers.FloatField()
    ALatitude = serializers.FloatField()
    BLongitude = serializers.FloatField()
    BLatitude = serializers.FloatField()
    CLongitude = serializers.FloatField()
    CLatitude = serializers.FloatField()
    DLongitude = serializers.FloatField()
    DLatitude = serializers.FloatField()
    CO = serializers.FloatField()
    O3 = serializers.FloatField()
    NO2 = serializers.FloatField()
    SO2 = serializers.FloatField()
    PM10 = serializers.FloatField()
    PM2_5 = serializers.FloatField()
    AQI = serializers.FloatField()
