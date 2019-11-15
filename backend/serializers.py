from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import User, UserToken, News, NewsComment,Garbage


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('News_id', 'topic', 'content', 'photo', 'title', 'sorces', 'time',)


class NewsCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsComment
        fields = ('comment_id', 'user_id', 'user_name', 'create_time', 'content', 'avatar')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('uid', 'username', 'e_mail', 'real_name', 'avatar', 'user_description')


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'e_mail', 'password')


class UserLoginSerializer(serializers.ModelSerializer):
    email_or_username = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ('email_or_username', 'password')


class GarbageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Garbage
        fields = ('garbage_name', 'garbage_bin', 'garbage_type')