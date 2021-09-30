from django.db import models

# Create your models here.


class Stock(models.Model):
    INDUSTRY_CHOICES = (
        ('CAR', 'CAR'),
        ('PHONE', 'PHONE'),
    )
    stockName = models.CharField(max_length=50)
    stockCode = models.CharField(max_length=50)
    industry = models.CharField(max_length=50, choices=INDUSTRY_CHOICES)
    webPage = models.CharField(max_length=100, blank=True, null=True)
    # logo_image = models.ImageField()
    # back_image = models.ImageField()

    value_open = models.IntegerField()
    value_high = models.IntegerField()
    value_low = models.IntegerField()
    value_close = models.IntegerField()
    volume = models.IntegerField()
    day_over_day = models.IntegerField()
    fluct_rate = models.FloatField()

    # ratings = models.FloatField()

    def __str__(self):
        return self.stockName
