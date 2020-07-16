from rest_framework import serializers

from dramamovies.models import DramaThrillerMovie, DramaRealMovie

class DramaThrillerMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = DramaThrillerMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class DramaThrillerMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = DramaThrillerMovie
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






class DramaRealMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = DramaRealMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class DramaRealMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = DramaRealMovie
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
