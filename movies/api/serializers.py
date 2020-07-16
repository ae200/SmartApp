from rest_framework import serializers

from actionmovies.models import ActionThrillerMovie, ActionRealMovie
from adventuremovies.models import AdventureThrillerMovie, AdventureRealMovie
from comedymovies.models import ComedyThrillerMovie, ComedyRealMovie
from dramamovies.models import DramaThrillerMovie, DramaRealMovie
from fictionmovies.models import FictionThrillerMovie, FictionRealMovie
from historicalmovies.models import HistoricalThrillerMovie, HistoricalRealMovie

# class MovieSerializer(serializers.ModelSerializer):
# 	image = serializers.SerializerMethodField()
# 	class Meta:
# 		model = Movie
# 		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'genre', 'description','featured', 'image']

# 	def get_image(image, obj):
# 		return "/static/ang/assets/images/nature/3.jpg"


# class MovieDetailSerializer(serializers.ModelSerializer):
# 	image      = serializers.SerializerMethodField()
# 	is_promo   = serializers.SerializerMethodField()
# 	class Meta:
# 		model = Movie
# 		fields = [
# 		    'name',
# 		    'season',
# 		    'subtitle',
#             'slug',
#             'embed',
#             'description',
#             'featured',
#             'image',
#             'is_promo',
#             ]

# 	def get_image(image, obj):
# 		return "/static/ang/assets/images/nature/3.jpg"

# 	def get_is_promo(is_promo, obj):
# 	    return False	


class ActionThrillerMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = ActionThrillerMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class ActionThrillerMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = ActionThrillerMovie
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



class ActionRealMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = ActionRealMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class ActionRealMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = ActionRealMovie
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


	



class AdventureThrillerMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = AdventureThrillerMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class AdventureThrillerMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = AdventureThrillerMovie
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


class AdventureRealMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = AdventureRealMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class AdventureRealMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = AdventureRealMovie
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





class FictionThrillerMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = FictionThrillerMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class FictionThrillerMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = FictionThrillerMovie
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








class HistoricalThrillerMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = HistoricalThrillerMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class HistoricalThrillerMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = HistoricalThrillerMovie
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




class HistoricalRealMovieSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model = HistoricalRealMovie
		fields = ['name', 'season', 'subtitle', 'slug', 'embed', 'description','featured', 'image']

	def get_image(image, obj):
		return "/static/ang/assets/images/nature/3.jpg"


class HistoricalRealMovieDetailSerializer(serializers.ModelSerializer):
	image      = serializers.SerializerMethodField()
	is_promo   = serializers.SerializerMethodField()
	class Meta:
		model = HistoricalRealMovie
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
