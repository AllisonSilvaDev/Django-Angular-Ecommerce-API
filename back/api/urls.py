from django.urls import path, include
from .views import *

urlpatterns = [
    path('produtos/', ProdutoView.as_view()),
    path('produtos/<int:pk>/', ProdutoDetailView.as_view())
]