# backend/config/urls.py
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.views.static import serve as static_serve  # これを使って順序を制御
# from django.conf.urls.static import static  # ← 今回は使わない

asset_patterns = []
if settings.DEBUG:
    # /assets/** を最優先でマッチさせる（キャッチオールより前！）
    asset_patterns = [
        path("assets/<path:path>", static_serve, {"document_root": settings.VITE_ASSETS}),
    ]

urlpatterns = (
    asset_patterns
    + [
        path("admin/", admin.site.urls),
        path("api/", include("api.urls")),
        # /api/ と /assets/ を除外して、それ以外は全部 SPA の index.html
        re_path(r"^(?!api/|assets/).*$", TemplateView.as_view(template_name="index.html")),
    ]
)
