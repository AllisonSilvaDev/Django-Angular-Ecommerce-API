from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import *
from .serializer import *


# Create your views here.
class ProdutoView(ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
