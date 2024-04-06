from django.contrib import admin
from .models import SurploModel

class SurploAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'quantity', 'price', 'expired')

# Register your models here.

admin.site.register(SurploModel, SurploAdmin)


#username : surploadmin
#pswd : surplo123