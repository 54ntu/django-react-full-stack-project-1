from django.shortcuts import render,HttpResponse
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from app_product.models import Product
from app_product.serializers import productSerializer
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
@csrf_exempt
def product(request):
    if request.method =='GET':
        queryset= Product.objects.all()
        serializer = productSerializer(queryset,many=True)
        return JsonResponse(serializer.data,status=200,safe=False)

    elif request.method =="POST":
        data= JSONParser().parse(request)
        serializer= productSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=200)
        return JsonResponse(serializer.errors)


@csrf_exempt
def up_product(request, pk):
    try:
        queryset = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return HttpResponse("data not found")
    
    if request.method=="GET":
        serializer = productSerializer(queryset)
        return JsonResponse(serializer.data,status=200)
    elif request.method =="PUT":
        data = JSONParser().parse(request)
        serializer = productSerializer(queryset,data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=200)
        return HttpResponse("something went wrong")
    
    elif request.method =="DELETE":
        queryset.delete()
        return HttpResponse("data deleted successfully")