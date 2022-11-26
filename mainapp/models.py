from django.db import models

# Create your models here.


class Accounts(models.Model):
    title = models.CharField(max_length=255)
    balance = models.DecimalField(max_digits=15,decimal_places=2)
    currency = models.IntegerField()
    createdOn = models.DateTimeField(auto_now=True)
    lastUpdate = models.DateTimeField(auto_now=True)
