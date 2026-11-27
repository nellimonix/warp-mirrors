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

В `mirrors.json` поле `catalog` содержит массив зеркал в Base64 (UTF-8). Чтобы обновить зеркало, декодируйте `catalog`, обновите нужную запись и закодируйте массив обратно. Значение `url` каждой записи тоже хранится в Base64.
