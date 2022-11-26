# Generated by Django 4.1.3 on 2022-11-26 08:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Accounts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('balance', models.DecimalField(decimal_places=2, max_digits=15)),
                ('currency', models.IntegerField()),
                ('createdOn', models.DateTimeField(auto_now=True)),
                ('lastUpdate', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
