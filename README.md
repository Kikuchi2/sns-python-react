# sns-python-react

## 技術スタック（バージョン）
_収集日: 2025-09-10_

### Backend
- **Python**: 3.12.11  
  - 詳細: `3.12.11 (main, Aug 27 2025, 15:41:39) [Clang 17.0.0 (clang-1700.0.13.5)]`
- **Django**: 5.2.5
- **pip**: 25.2 (python 3.12)
- **主要ライブラリ**
  - djangorestframework: 3.16.1

### Frontend
- **Node**: v22.18.0
- **npm**: 10.9.3
- **yarn**: 1.22.22

#### package.json（主要パッケージ）
| パッケージ | バージョン |
|---|---|
| react | ^19.1.1 |
| react-dom | ^19.1.1 |
| typescript | ~5.8.3 |
| react-router-dom | ^7.8.2 |
| vite | ^7.1.2 |

## 開発サーバー
http://localhost:5173/

## 開発環境起動
```
cd frontend 
npm run dev
```


```
cd baekend
python manage.py runserver
```

## python仮想環境起動
```
python3 -m venv .venv
source .venv/bin/activate
```

## python仮想環境終了
```
deactivate
```

## djang管理画面起動
```
python manage.py runserver
http://localhost:8000/admin/login/?next=/admin/
```



## 参考
Django ディレクトリ構成とファイル設定
https://note.com/saito_pythonista/n/nb95c54f4c327

Djangoの導入からサーバー起動まで
https://qiita.com/South_/items/416b50a250fc1fe13df7

TailwindTemplates.io
https://tailwindtemplates.io/?utm_source=chatgpt.com


