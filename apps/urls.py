from django.urls import path
from . import views



urlpatterns = [
    path('', views.index, name='apps'),
    path('quiz', views.quiz, name='quiz'),
    path('todo', views.todo, name='todo')]
