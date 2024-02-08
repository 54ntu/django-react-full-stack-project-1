from rest_framework import serializers
from app_product.models import Product

class productSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"