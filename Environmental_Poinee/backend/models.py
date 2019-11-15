from django.db import models
from django.core.paginator import Paginator
from django.contrib.auth.hashers import hashlib
import random


# Create your models here.


class User(models.Model):
    uid = models.AutoField(primary_key=True, verbose_name="用户ID")
    username = models.CharField(max_length=10, blank=True, verbose_name="用户名")
    e_mail = models.EmailField(max_length=40,  blank=True, verbose_name="Email")
    phone = models.CharField(max_length=11, blank=True, verbose_name="电话")
    password = models.CharField(max_length=200, verbose_name="密码")
    salt = models.CharField(max_length=45, blank=True, null=True)
    real_name = models.CharField(max_length=20, blank=True, null=True, verbose_name="姓名")
    avatar = models.CharField(max_length=200, blank=True, null=True, verbose_name="头像")
    user_description = models.CharField(max_length=200, blank=True, null=True, verbose_name="简介")

    # 加密
    def save(self, *args, **kwargs):
        ch = 'fhuendhsgjlsmlmnvjjsljlsmn'
        self.salt = ''
        for i in range(10):
            self.salt += (list(ch)[random.randint(0, 25)])
        for i in range(2):
            self.password = hashlib.md5(self.password.encode('utf-8') + self.salt.encode('utf-8')).hexdigest()
        super(User, self).save(*args, **kwargs)

    class Meta:
        db_table = 'user'


class UserToken(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=64)

    class Meta:
        db_table = 'user_token'


class News(models.Model):
    News_id = models.AutoField(primary_key=True, verbose_name="用户ID")
    title = models.CharField(max_length=100, verbose_name="标题")
    sorces = models.CharField(max_length=50, verbose_name="来源")
    photo = models.CharField(max_length=200, verbose_name="照片")
    content = models.TextField(blank=True, null=True, verbose_name="内容")
    topic = models.CharField(max_length=20, verbose_name="标签")
    time = models.DateTimeField(max_length=20, verbose_name="时间")
    total_views = models.PositiveIntegerField(default=0, verbose_name="总浏览量")

    class Meta:
        db_table = 'news'


class NewsComment(models.Model):
    comment_id = models.AutoField(primary_key=True, verbose_name="评论ID")
    user_name = models.CharField(max_length=10, blank=True, verbose_name="用户名")
    user_id = models.IntegerField(verbose_name="用户ID")
    create_time = models.DateTimeField(verbose_name="创作时间")
    content = models.TextField(verbose_name="内容")
    avatar = models.CharField(max_length=45, blank=True, null=True, verbose_name="头像")

    class Meta:
        db_table = 'news_comment'


class Garbage(models.Model):
    garbage_name = models.CharField(max_length=20, verbose_name="垃圾名称")
    garbage_bin = models.CharField(max_length=60, verbose_name="垃圾桶")
    garbage_type = models.CharField(max_length=60, verbose_name="垃圾种类")

    class Meta:
        db_table = 'garbage'
