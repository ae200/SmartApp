from rest_framework import serializers

from fictionreal.models import FictionRealMovie

from django.contrib.auth.models import User


class FictionRealMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = FictionRealMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class FictionRealMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = FictionRealMovie
		fields = [
		    'name',
		    'season',
		    'subtitle',
            'slug',
            'embed',
            'description',
            'featured',
            'image',
            'is_promo',
            ]

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"

	def get_is_promo(is_promo, obj):
	    return False	
