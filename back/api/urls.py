from django.urls import path, include
from .views import *

urlpatterns = [
    path('produto/', ProdutoView.as_view()),
]