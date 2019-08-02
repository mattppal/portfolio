from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=255)
    pubdate = models.DateTimeField()
    body = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, default='')

    def __str__(self):
        return self.title

    def summary(self):
        return self.body[:100]

    def pub_date_formatted(self):
        return self.pubdate.strftime('%b. %e, %Y')

    
