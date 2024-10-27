from django.http import JsonResponse
from .models import Food, Order
import json

# Create your views here.
def index(request):
  slag = request.GET.get("slag")
  if slag:
    food = Food.objects.filter(pk=slag[slag.rfind('-')+1:]).values()[0]
    return JsonResponse({ "food": {**food, "image": "/media/"+food["image"]} }, status=200)

  foods = list(map(lambda food: {**food, "image": "/media/"+food["image"]}, Food.objects.values()))
  return JsonResponse({ "foods": foods }, status=200)

def order(req):
  if req.method != "POST":
    return JsonResponse({ "error": "should be use 'POST' method to access" }, status=400)

  newOrder = json.loads(req.body.decode("utf-8"))

  food = Food(pk=newOrder["food"])

  order = Order()
  order.food = food
  order.number = newOrder["number"]
  order.place = newOrder["place"]

  try:
    order.save()
    return JsonResponse({ "error": False }, status=201)
  except:
    return JsonResponse({ "error": True }, status=500)
