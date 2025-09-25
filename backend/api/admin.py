# backend/api/admin.py
from django.contrib import admin
from .models import Member, Tag, Post

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "created_at", "deleted_at")
    search_fields = ("name",)

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "mail", "deleted_at")
    search_fields = ("name", "mail")

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "author", "created_at", "deleted_at")
    search_fields = ("title", "body")
    list_filter = ("author", "tags")
