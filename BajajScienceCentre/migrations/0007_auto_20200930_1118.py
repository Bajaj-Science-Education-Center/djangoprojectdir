# Generated by Django 2.2.4 on 2020-09-30 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BajajScienceCentre', '0006_auto_20200930_1114'),
    ]

    operations = [
        migrations.AlterField(
            model_name='visitingfaculty',
            name='image_source',
            field=models.CharField(max_length=1000, null=True),
        ),
    ]