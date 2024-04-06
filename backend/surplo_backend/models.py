from django.db import models

# Create your models here.

class SurploModel(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    quantity = models.TextField()
    price = models.FloatField()
    expired = models.BooleanField()

    def _str_(self):
        return self.title