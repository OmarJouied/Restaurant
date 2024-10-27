# Generated by Django 5.1.2 on 2024-10-27 19:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foods', '0002_alter_food_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='description',
            field=models.CharField(default='describtion Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore consequatur suscipit deleniti pariatur quas cum unde! Atque quidem temporibus alias obcaecati voluptatibus numquam a, asperiores earum labore saepe totam!', max_length=255),
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField()),
                ('place', models.IntegerField()),
                ('food', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='foods.food')),
            ],
        ),
    ]
