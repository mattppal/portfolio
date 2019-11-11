from django.urls import path
from . import views



urlpatterns = [
    path('', views.index, name='apps'),
    path('quiz', views.quiz, name='quiz'),
    path('todo', views.todo, name='todo'),
    path('weather', views.weather, name='weather'),
    path('chat', views.chat, name='chat'),
]
