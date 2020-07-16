from rest_framework import serializers

from comedymovies.models import ComedyThrillerMovie, ComedyRealMovie

class ComedyThrillerMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = ComedyThrillerMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class ComedyThrillerMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = ComedyThrillerMovie
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





class ComedyRealMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = ComedyRealMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class ComedyRealMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = ComedyRealMovie
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
