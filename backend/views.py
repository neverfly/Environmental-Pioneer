from django.http import JsonResponse, QueryDict
from django.contrib.auth.hashers import hashlib
from django_filters.rest_framework import DjangoFilterBackend
# ----------------------------------------------------------------------------------------
from rest_framework import filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, status
# -----------------------------------------------------------------------------------------
import random

from .serializers import NewsSerializer, NewsCommentSerializer
from .serializers import UserRegisterSerializer
from .serializers import UserLoginSerializer
from .serializers import UserSerializer, GarbageSerializer

from .models import User, UserToken, News, NewsComment, Garbage
# -----------------------------------------------------------------------------------------
import random

from django.contrib.auth.hashers import hashlib
from django.http import JsonResponse
from django_filters.rest_framework import DjangoFilterBackend
# ----------------------------------------------------------------------------------------
from rest_framework import filters
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User, UserToken, News, NewsComment, Garbage
from .serializers import NewsSerializer, NewsCommentSerializer
from .serializers import UserLoginSerializer
from .serializers import UserRegisterSerializer
from .serializers import UserSerializer, GarbageSerializer


# ----------新闻----------------------
class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    ordering_fields = ['-time', ]


# -----------------垃圾分类-----------------------
class GarbageViewSet(viewsets.ModelViewSet):
    queryset = Garbage.objects.all()
    serializer_class = GarbageSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter)
    filters = ('garbage_bin', 'garbage_type')
    search_fields = ('^garbage_name',)


# ------------用户管理----------------------------
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter,)
    filter_fields = ('uid',)


# ---------新闻评论----------------------
class NewsCommentViewSet(viewsets.ModelViewSet):
    queryset = NewsComment.objects.all()
    serializer_class = NewsCommentSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter,)
    filter_fields = ('user_id', 'user_name',)
    # comments = NewsComment.objects.filter(news=id)
    ordering_fields = ('-create_time',)


# ------------注册----------------------------
class UserRegisterAPIView(APIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer

    # 重载GET方法
    def get(self, request, format=None):
        serializer = UserRegisterSerializer()
        return Response(serializer.data)

    # 重载POST方法
    def post(self, request, format=None):
        data = request.data
        if User.objects.filter(e_mail=data.get('e_mail')):
            return Response('该邮箱已被注册', status=status.HTTP_400_BAD_REQUEST)
        elif User.objects.filter(username=data.get('username')):
            return Response('用户名已存在', status=status.HTTP_400_BAD_REQUEST)
        serializer = UserRegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            uid = User.objects.get(username=data.get('username')).uid
            context = {'msg': 'Succeeded', 'id': uid}
            return JsonResponse(context)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginAPIView(APIView):
    # ---------------登录成功时为用户设置Token,返回并保存---------------
    queryset = User.objects.all()
    serializer_class = UserLoginSerializer

    # 重载GET方法
    def get(self, request, format=None):
        serializer = UserLoginSerializer()
        return Response(serializer.data)

    # 重载POST方法
    def post(self, request, format=None):
        data = request.data
        user = None
        try:
            try:
                user = User.objects.get(e_mail=data.get('email_or_username'))
            except:
                user = User.objects.get(username=data.get('email_or_username'))

            password = data.get('password')
            for i in range(2):
                password = hashlib.md5(password.encode('utf-8') + user.salt.encode('utf-8')).hexdigest()
            if password == user.password:
                random_list = 'abdjcniejknmdkjdj'
                ch = ''
                for i in range(10):
                    ch += (list(random_list)[random.randint(0, 16)])
                token = hashlib.md5(user.e_mail.encode('utf-8') + ch.encode('utf-8')).hexdigest()
                uid = user.uid
                UserToken.objects.update_or_create(owner=user, defaults={'token': token})
                context = {'msg': 'Succeeded', 'Token': token, 'id': uid}
                return JsonResponse(context)
        except:
            return Response({'msg': 'ERROR Incorrect username or password'})
