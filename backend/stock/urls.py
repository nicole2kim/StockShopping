from django.urls import path
from .views import *

app_name = 'stockapi'
urlpatterns = [
    path('<str:code>/', StockDetail.as_view(), name='stockDetail')
]
