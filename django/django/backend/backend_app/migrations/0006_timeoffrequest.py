# Generated by Django 5.1 on 2024-08-13 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_app', '0005_staff'),
    ]

    operations = [
        migrations.CreateModel(
            name='TimeOffRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employeeName', models.CharField(max_length=100)),
                ('startDate', models.DateField()),
                ('endDate', models.DateField()),
                ('reason', models.TextField()),
                ('status', models.CharField(choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Denied', 'Denied')], max_length=10)),
            ],
        ),
    ]