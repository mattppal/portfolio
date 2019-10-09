from django.db import models

class Apps(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    image = models.URLField()
    url = models.CharField(blank=True, max_length=100)

    def __str__(self):
        return self.title

    def summary(self):
        return self.body
