# Generated by Django 3.2.7 on 2021-09-28 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stockName', models.CharField(max_length=50)),
                ('stockCode', models.CharField(max_length=50)),
                ('industry', models.CharField(choices=[('CAR', 'CAR'), ('PHONE', 'PHONE')], max_length=50)),
                ('webPage', models.CharField(blank=True, max_length=100, null=True)),
                ('value_open', models.IntegerField()),
                ('value_high', models.IntegerField()),
                ('value_low', models.IntegerField()),
                ('value_close', models.IntegerField()),
                ('volume', models.IntegerField()),
                ('day_over_day', models.IntegerField()),
                ('fluct_rate', models.FloatField()),
            ],
        ),
    ]