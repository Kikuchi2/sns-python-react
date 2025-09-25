from rest_framework import serializers
from .models import Tag, Post, Member

class MemberLiteSerializer(serializers.ModelSerializer):
    # フロントの author: { name: ... } に合わせる
    class Meta:
        model = Member
        fields = ("name",)

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ("id", "name")

class PostListSerializer(serializers.ModelSerializer):
    # キー名をフロントに合わせて変換
    author = MemberLiteSerializer(read_only=True)
    tags = serializers.SlugRelatedField(slug_field="name", many=True, read_only=True)
    createdAt = serializers.DateTimeField(source="created_at", read_only=True)
    imageUrl = serializers.URLField(source="image_url", read_only=True)
    likes = serializers.IntegerField(source="likes_count", read_only=True)
    comments = serializers.IntegerField(source="comments_count", read_only=True)

    class Meta:
        model = Post
        fields = (
            "id", "title", "body", "author", "createdAt",
            "tags", "imageUrl", "likes", "comments",
        )
