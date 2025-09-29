# api/urls.py
# SPAアプリ用ルーティング
from django.urls import path, include
from django.http import JsonResponse
from rest_framework.routers import DefaultRouter
from .views import MemberViewSet, PostViewSet, TagViewSet

app_name = "api"  # 名前空間（reverse('api:post-detail') などに使える）

def healthz(_request):
    return JsonResponse({"ok": True})

router = DefaultRouter()
router.register(r"posts", PostViewSet, basename="posts")
router.register(r"tags", TagViewSet, basename="tags")
# router.register(r"members", MemberViewSet, basename="member")

urlpatterns = [
    path("healthz/", healthz),
    path("", include(router.urls)),  # /api/posts/, /api/posts/{id}/ など
]
