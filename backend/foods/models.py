from django.db import models

# Create your models here.
class Food(models.Model):
  title=models.CharField(max_length=25, blank=False, unique=True)
  price=models.FloatField(blank=False)
  chef=models.CharField(max_length=25, blank=False)
  image=models.ImageField()
  description=models.CharField(max_length=255, blank=False, default="describtion Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore consequatur suscipit deleniti pariatur quas cum unde! Atque quidem temporibus alias obcaecati voluptatibus numquam a, asperiores earum labore saepe totam!")

  def __str__(self):
    return self.title

class Order(models.Model):
  food=models.ForeignKey(Food, on_delete=models.CASCADE)
  number=models.IntegerField()
  place=models.IntegerField()

  def __str__(self):
    return f"{self.food.title} to place {self.place}"