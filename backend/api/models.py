from contextlib import nullcontext
from enum import unique
from hashlib import blake2b
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import make_password, check_password
from django.conf import settings

class User(AbstractUser):
  display_name = models.CharField(max_length=50)

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="profile")
    # 旧 Member 由来の追加属性を移設（name, gender など）

# class Member(models.Model):
#     name = models.CharField('名前', max_length=255)
#     mail = models.EmailField('メール', max_length=255)
#     password = models.CharField('パスワード', max_length=255)
#     gender = models.BooleanField('性別')
#     created_at = models.DateTimeField('作成日', auto_now_add=True)
#     deleted_at = models.DateTimeField('削除日', null=True, blank=True, default=None, db_index=True)

#     def soft_delete(self):
#       """論理削除"""
#       self.deleted_at = timezone.now()
#       self.save(update_fields=['deleted_at'])

#     # 平文で入力されたパスワードをハッシュ化
#     def set_password(self, raw_password: str):
#       self.password = make_password(raw_password)

#     # 引数の文字列が保存されているパスワードと一致するか確認 
#     # 一致 True 不一致 False
#     def check_password(self, raw_password: str) -> bool:
#       return check_password(raw_password, self.password)

#     def __str__(self):
#        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=64, unique=True)

    # 追加
    created_at = models.DateTimeField('作成日時', auto_now_add=True)  # 新規作成時に自動で入る（既存行は後述のmigrateで埋める）
    deleted_at = models.DateTimeField('削除日時', null=True, blank=True, default=None, db_index=True)

    def __str__(self):
       return self.name

class Post(models.Model):
  author = models.ForeignKey(User, on_delete=models.PROTECT, related_name='posts')
  title = models.CharField(max_length=255)
  body = models.TextField()
  image_url = models.URLField(blank=True, default="")
  likes_count = models.PositiveIntegerField(default=0)
  comments_count = models.PositiveIntegerField(default=0)
  tags = models.ManyToManyField(Tag, blank=True, related_name='posts')

  created_at = models.DateTimeField('作成日時', auto_now_add=True)
  uodated_at = models.DateTimeField('更新日時', auto_now=True)
  deleted_at = models.DateTimeField('削除日時', null=True, blank=True, default=None, db_index=True)

  # djangは自作または、外部ライラリを用いて論理削除を実装する必要がある
  def soft_delete(self):
    self.deleted_at = timezone.now()
    self.save(update_fields=['delete_at'])

  def __str__(self):
     return self.title