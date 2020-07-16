from django.db import models
from django.db.models import Q
from django.db.models.signals import pre_save

from .utils import unique_slug_generator


# class MovieQuerySet(models.query.QuerySet):
#     def active(self):
#         return self.filter(active=True)

#     def featured(self):
#         return self.filter(featured=True)     

#     def search(self, query):
#         return self.filter(
#                 Q(name__icontains=query)  |
#                 Q(slug__icontains=query)  |
#                 Q(embed__icontains=query) |
#                 Q(genre__icontains=query) 
#             )                   

# class MovieManager(models.Manager):
#     def get_queryset(self):
#         return MovieQuerySet(self.model, using=self._db)

#     def all(self):
#         return self.get_queryset().active()    

#     def featured(self):
#         return self.get_queryset().featured().active()

#     def search(self, query):
#         return self.get_queryset().search(query).active()

# # Create your models here.
# class Movie(models.Model):
#     name        = models.CharField(max_length=220)
#     season      = models.CharField(max_length=220, blank=True) 
#     subtitle    = models.CharField(max_length=220, blank=True)
#     slug        = models.SlugField(unique=True, blank=True)
#     embed       = models.CharField(max_length=120, help_text='Domain embed code', null=True, blank=True)
#     active      = models.BooleanField(default=True)
#     description = models.CharField(max_length=1500)
#     genre       = models.CharField(max_length=220, blank=True)
#     timestamp   = models.DateTimeField(auto_now_add=True)
#     featured    = models.BooleanField(default=False)

#     objects = MovieManager()       

#     def __str__(self):
#     	return self.name

#     @property
#     def title(self):
#     	return self.name
    	

# def movie_pre_save_receiver(sender, instance, *args, **kwargs):
# 	if not instance.slug:
# 		instance.slug = unique_slug_generator(instance)

# pre_save.connect(movie_pre_save_receiver, sender=Movie)

class ActionThrillerMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class ActionThrillerMovieManager(models.Manager):
    def get_queryset(self):
        return ActionThrillerMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class ActionThrillerMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=True)
    member_required = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = ActionThrillerMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def actionthrillermovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(ActionThrillerMovie.actionthrillermovie_pre_save_receiver, sender=ActionThrillerMovie)


class ActionRealMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class ActionRealMovieManager(models.Manager):
    def get_queryset(self):
        return ActionRealMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class ActionRealMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=False)
    member_required = models.BooleanField(default=True)
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = ActionRealMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def actionrealmovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(ActionRealMovie.actionrealmovie_pre_save_receiver, sender=ActionRealMovie)


class AdventureMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class AdventureThrillerMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class AdventureThrillerMovieManager(models.Manager):
    def get_queryset(self):
        return AdventureThrillerMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class AdventureThrillerMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=True)
    member_required = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = AdventureThrillerMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def adventurethrillermovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(
    AdventureThrillerMovie.adventurethrillermovie_pre_save_receiver,
    sender=AdventureThrillerMovie)





class AdventureRealMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class AdventureRealMovieManager(models.Manager):
    def get_queryset(self):
        return AdventureRealMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class AdventureRealMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=False)
    member_required = models.BooleanField(default=True)
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = AdventureRealMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def adventurerealmovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(
    AdventureRealMovie.adventurerealmovie_pre_save_receiver,
    sender=AdventureRealMovie)




class ComedyThrillerMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class ComedyThrillerMovieManager(models.Manager):
    def get_queryset(self):
        return ComedyThrillerMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class ComedyThrillerMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=True)
    member_required = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = ComedyThrillerMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def comedythrillermovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(ComedyThrillerMovie.comedythrillermovie_pre_save_receiver, sender=ComedyThrillerMovie)






class ComedyRealMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class ComedyRealMovieManager(models.Manager):
    def get_queryset(self):
        return ComedyRealMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class ComedyRealMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=False)
    member_required = models.BooleanField(default=True) 
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = ComedyRealMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def comedyrealmovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(ComedyRealMovie.comedyrealmovie_pre_save_receiver, sender=ComedyRealMovie)






class DramaThrillerMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class DramaThrillerMovieManager(models.Manager):
    def get_queryset(self):
        return DramaThrillerMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class DramaThrillerMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=True)
    member_required = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = DramaThrillerMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def dramathrillermovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(DramaThrillerMovie.dramathrillermovie_pre_save_receiver, sender=DramaThrillerMovie)





class DramaRealMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class DramaRealMovieManager(models.Manager):
    def get_queryset(self):
        return DramaRealMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class DramaRealMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=False)
    member_required = models.BooleanField(default=True)
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = DramaRealMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def dramarealmovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(DramaRealMovie.dramarealmovie_pre_save_receiver, sender=DramaRealMovie)





class FictionThrillerMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class FictionThrillerMovieManager(models.Manager):
    def get_queryset(self):
        return FictionThrillerMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class FictionThrillerMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=True)
    member_required = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = FictionThrillerMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def fictionthrillermovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(
    FictionThrillerMovie.fictionthrillermovie_pre_save_receiver,
    sender=FictionThrillerMovie)





class FictionRealMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class FictionRealMovieManager(models.Manager):
    def get_queryset(self):
        return FictionRealMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class FictionRealMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=False)
    member_required = models.BooleanField(default=True)
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = FictionRealMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def fictionrealmovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(
    FictionRealMovie.fictionrealmovie_pre_save_receiver,
    sender=FictionRealMovie)





class HistoricalThrillerMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class HistoricalThrillerMovieManager(models.Manager):
    def get_queryset(self):
        return HistoricalThrillerMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class HistoricalThrillerMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=True)
    member_required = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = HistoricalThrillerMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def historicalthrillermovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(
    HistoricalThrillerMovie.historicalthrillermovie_pre_save_receiver,
    sender=HistoricalThrillerMovie)




class HistoricalRealMovieQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
            Q(name__icontains=query) |
            Q(slug__icontains=query) |
            Q(embed__icontains=query)

        )


class HistoricalRealMovieManager(models.Manager):
    def get_queryset(self):
        return HistoricalRealMovieQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()

# Create your models here.


class HistoricalRealMovie(models.Model):
    name = models.CharField(max_length=220)
    season = models.CharField(max_length=220, blank=True)
    subtitle = models.CharField(max_length=220, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    embed = models.CharField(
        max_length=120,
        help_text='Domain embed code',
        null=True,
        blank=True)
    free = models.BooleanField(default=False)
    member_required = models.BooleanField(default=True) 
    active = models.BooleanField(default=True)
    description = models.CharField(max_length=1500)
    timestamp = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    objects = HistoricalRealMovieManager()

    def __str__(self):
        return self.name

    @property
    def title(self):
        return self.name

    def historicalrealmovie_pre_save_receiver(sender, instance, *args, **kwargs):
        if not instance.slug:
            instance.slug = unique_slug_generator(instance)


pre_save.connect(
    HistoricalRealMovie.historicalrealmovie_pre_save_receiver,
    sender=HistoricalRealMovie)
