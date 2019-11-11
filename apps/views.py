from django.shortcuts import render
from .models import Apps
# Create your views here.

def index(request):
    app = Apps.objects
    return render(request, 'apps/index.html', {'apps':app})

def quiz(request):
    return render(request, 'apps/quiz.html')

def todo(request):
    return render(request, 'apps/todo.html')

def weather(request):
    return render(request, 'apps/weather.html')

def chat(request):
    return render(request, 'apps/chat.html')