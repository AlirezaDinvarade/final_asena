from django.urls import path
from . import views

app_name = 'restapi'
urlpatterns = [
    path('api/get_point', views.GetPoint.as_view(), name='get_point'),
    path('api/get_polygons', views.GetPolygons.as_view(), name='get_polygons'),
    path('api/delete_all_polygons/', views.DeletePolygons.as_view(), name='delete_all_polygons')
]