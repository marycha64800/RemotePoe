from django.db import models
from django.utils import timezone


class Metric(models.Model):

    created = models.DateTimeField(default=timezone.now)
    temperature = models.FloatField(null=False)

