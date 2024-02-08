from django.contrib import admin
from app_product.models import Product


# Register your models here.
class productAdminModel(admin.ModelAdmin):
    list_display= ('name','price','description','category')



admin.site.register(Product,productAdminModel)
