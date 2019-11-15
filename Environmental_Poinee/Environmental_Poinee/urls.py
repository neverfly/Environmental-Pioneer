"""Environmental_Poinee URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from backend import views
from . import urls
from rest_framework.routers import DefaultRouter, url
from django.views.generic import TemplateView

router = DefaultRouter()
# -------------------------------新闻----------------------------------
router.register(r'NewsViewSet', views.NewsViewSet)
# -------------------------------新闻评论------------------------------
router.register(r'NewsCommentViewSet', views.NewsCommentViewSet)
# -------------------------------用户----------------------------------
router.register(r'UserViewSet', views.UserViewSet)
# -------------------------------垃圾分类-------------------------------
router.register(r'GarbageViewset', views.GarbageViewSet)

urlpatterns = [
    url('^api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('register/', views.UserRegisterAPIView.as_view()),
    path('login/', views.UserLoginAPIView.as_view()),
]
