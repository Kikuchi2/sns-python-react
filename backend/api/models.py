from contextlib import nullcontext
from enum import unique
from hashlib import blake2b
from django.db import models
from django.utils import timezone

class Member(models.Model):
    name = models.CharField('名前', max_length=255)
    mail = models.EmailField('メール', max_length=255)
    gender = models.BooleanField('性別')
    created_at = models.DateTimeField('作成日', auto_now_add=True)
    deleted_at = models.DateTimeField('削除日', null=True, blank=True, default=None, db_index=True)

    def soft_delete(self):
      """論理削除"""
      self.deleted_at = timezone.now()
      self.save(update_fields=['deleted_at'])

    def __str__(self):
       return self.name

class Tag(models.Model):
    name = models.CharField(max_length=64, unique=True)

    # 追加
    created_at = models.DateTimeField('作成日時', auto_now_add=True)  # 新規作成時に自動で入る（既存行は後述のmigrateで埋める）
    deleted_at = models.DateTimeField('削除日時', null=True, blank=True, default=None, db_index=True)

    def __str__(self):
       return self.name

class Post(models.Model):
  author = models.ForeignKey(Member, on_delete=models.PROTECT, related_name='posts')
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