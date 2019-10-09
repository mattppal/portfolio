from django.shortcuts import render
# Create your views here.

def index(request):
    return render(request, 'apps/index.html')

def quiz(request):
    return render(request, 'apps/quiz.html')
