# api/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from .views import PostViewSet, CommentViewSet

app_name = "api"  # 名前空間（reverse('api:post-detail') などに使える）

router = DefaultRouter()
# router.register(r"posts", PostViewSet, basename="post")
# router.register(r"comments", CommentViewSet, basename="comment")

urlpatterns = [
    # path("", include(router.urls)),                # /api/posts/, /api/posts/1/ など
    # path("auth/login/", ...),                     # 追加の単発エンドポイント
    # path("schema/", get_schema_view(...)),      # APIドキュメントなど
]
