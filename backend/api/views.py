from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Q, query
from .models import Post, Tag, User
from .serializers import MemberWriteSerializer, PostListSerializer, TagSerializer, MemberWriteSerializer
# from backend.api import serializers

class PostViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = PostListSerializer

    def get_queryset(self):
        qs = Post.objects.select_related("author").prefetch_related("tags") \
               .filter(deleted_at__isnull=True)
        # ?q= で title/body を部分一致検索
        q = self.request.query_params.get("q")
        if q:
            qs = qs.filter(Q(title__icontains=q) | Q(body__icontains=q))
        # ?tag=旅行 のようにタグ名で絞り込み
        tag = self.request.query_params.get("tag")
        if tag:
            qs = qs.filter(tags__name=tag)
        return qs.order_by("-created_at")

    # 例: 直近N件を返すサブエンドポイント /api/posts/recent/?limit=5
    @action(detail=False, methods=["get"])
    def recent(self, request):
        limit = int(request.query_params.get("limit", "5"))
        qs = self.get_queryset()[:limit]
        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)

class TagViewSet(mixins.ListModelMixin,
                 mixins.RetrieveModelMixin,
                 viewsets.GenericViewSet):
    queryset = Tag.objects.all().order_by("name")
    serializer_class = TagSerializer

class MemberViewSet(viewsets.ModelViewSet):
    # queryset = User.objects.filter(deleted_at__isnull=True).order_by("-id")
    
    def get_serializer_class(self):
        if self.action in ("create", "update", "partial_update"):
            return MemberWriteSerializer

    def perform_destroy(self, instance):
        instance.soft_delete() #論理削除

    def create(self, request, *args, **kwargs):
        in_ser = MemberWriteSerializer(data=request.data)
        in_ser.is_valid(raise_exception=True)
        member = in_ser.save()
        out_ser = MemberWriteSerializer(member)
        return Response(out_ser. data, status=status.HTTP_201_CREATED)