from django.db import models


class PolygonValues(models.Model):
    ALongitude = models.FloatField()
    ALatitude = models.FloatField()
    BLongitude = models.FloatField()
    BLatitude = models.FloatField()
    CLongitude = models.FloatField()
    CLatitude = models.FloatField()
    DLongitude = models.FloatField()
    DLatitude = models.FloatField()
    CO = models.FloatField()
    O3 = models.FloatField()
    NO2 = models.FloatField()
    SO2 = models.FloatField()
    PM10 = models.FloatField()
    PM2_5 = models.FloatField()
    AQI = models.FloatField()



