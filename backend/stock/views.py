from django.http.response import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Stock
from .serializers import StockSerializer

# Create your views here.


class StockDetail(APIView):
    def get_object(self, code):
        try:
            return Stock.objects.get(stockCode=code)
        except Stock.DoesNotExist:
            raise Http404

    def get(self, request, code, format=None):
        stock = self.get_object(code)
        serializer = StockSerializer(stock)
        return Response(serializer.data)
