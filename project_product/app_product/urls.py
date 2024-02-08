from django.urls import path
from . import views

urlpatterns = [
    path('',views.product,name='product'),
    path('up_product/<int:pk>/', views.up_product, name='up-product'),

]
