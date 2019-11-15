from django.contrib import admin
from .models import User, UserToken, News, NewsComment,Garbage

# Register your models here.

# -----------用户------------------------
admin.site.register(User)
admin.site.register(UserToken)
# -----------新闻------------------------
admin.site.register(News)
admin.site.register(NewsComment)
# -----------垃圾分类--------------------
admin.site.register(Garbage)


