from django.urls import path
from . import views

app_name = 'restapi'
urlpatterns = [
    path('get_point', views.GetPoint.as_view(), name='get_point'),
    path('get_polygons', views.GetPolygons.as_view(), name='get_polygons'),
    path('delete_all_polygons/', views.DeletePolygons.as_view(), name='delete_all_polygons')
]