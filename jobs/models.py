from django.db import models

class Job(models.Model):
    image = models.ImageField(upload_to='images/')
    summary = models.TextField(max_length=800, blank=True)
    link = models.URLField(blank=True)
    num = models.IntegerField(blank=True, null=True)
