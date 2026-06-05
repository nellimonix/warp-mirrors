# WARP Generator — static (GitHub Pages)

Статическая сборка для GitHub Pages. Список зеркал загружается в рантайме из `mirrors.json`.

## Файлы

- `index.html` — разметка страницы
- `style.css` — стили (порт `styles/globals.css`)
- `app.js` — фетчит `mirrors.json` и рендерит блоки зеркал
- `mirrors.json` — данные по зеркалам
- `*.ico` — иконки аватаров

## Деплой

Settings → Pages → Source: ветка `gh-pages`, папка `/ (root)`.

Чтобы обновить зеркала, отредактируйте `mirrors.json` в этой ветке (источник на `main` — `data/mirrors.json`).
