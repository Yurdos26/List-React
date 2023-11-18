# React JSON Server

Запросы к внешнему API и обработка полученных данных.
Использование хука useState для управления состоянием данных.
Применение конструкции try...catch для обработки исключений и ошибок,
которые могут возникнуть при работе с API.
Создание асинхронных функций для обеспечения отзывчивости приложения.

## Доступные сценарии (Available Scripts)

Инициализация проекта:

### `npm i`

### `npm i json-server`

Старт проекта:

### `npm start`

Происходит запуск приложения по адресу:

[http://localhost:3000](http://localhost:3000) смотреть в браузере.

Старт json сервера по порту 3500 и запись данных в файл по пути data/db.json:

### `npx json-server -p 3500 -w data/db.json `

Происходит открытие json файла data/db.json по адресу:

[http://localhost:3500](http://localhost:3500) смотреть в браузере.

Можно добавлять, удалять длинные записи, но:
ВНИМАНИЕ! Ссылки на веб сраницы добавлять не рекомендуется, ввиду того,
что ссылки длинные, структурированы без пробелов и при копировании в список
двигают иконку "удаление" в неизвестность. Вставленные ссылки можно удалить
ТОЛЬКО РУКАМИ, открыв файл базы данных data/db.json.

Сохранение текущих записей базы данных в db-xxxxxxxxxxx.json в корне проекта:

### `s + enter`

## Дополнительная информация:

Приложение создано на основе видеоуроков:

### Уроки React API/ #8 – React JS для начинающих

https://youtu.be/Y6s3T4YgH4U?list=PLHyIl59J60-V7-9nam_uikG3XAydd0dYT

### Уроки React Json Server / #8/2 – React JS для начинающих

https://youtu.be/q4Jtk-ZGg_Y?list=PLHyIl59J60-V7-9nam_uikG3XAydd0dYT

### Источник (оригинал), но у меня (здесь, вот прямо в этом репозитарии) код изменён:

https://github.com/Ilya-Stoyanov/react-json-server-08-2

## Сценарий развертывания приложения (видео):

### Деплой SPA (Vite + React + Router) на GitHub Pages:

https://youtu.be/PN4uPBEfxCQ?list=PLjghEzbnHcvd9tespfcewx11NN_rFKI1i

### Деплой React-приложения на Vercel, Netlify, Heroku, GitHub Pages, Surge:

https://youtu.be/-pJN9faoa8E?list=PLjghEzbnHcvdmCkAVPGm3nYKNcvEXWxac

### Как создать React JS проект и загрузить его на Github Pages:

https://youtu.be/nq3ZEvMYsl0?list=PLjghEzbnHcvd9tespfcewx11NN_rFKI1i

## Мой сценарий развертывания приложения (пошаговый):

### 1. Создаем репозиторий на gitHub.

### 2. Открываем наш репозиторий в VS Code.

### 3. Выполняем 3 команды:

### `git remote add origin https://github.com/Yurdos26/List-React.git`

### `git branch -M main`

### `git push -u origin main`

### 4. Устанавливаем пакет gh-pages:

### `npm install gh-pages --save-dev`

### 5. В файл package.json добавляем следующие строки:

### 5.1.

- "name": "list-react",

- "version": "1.1.0",

- "homepage": "https://gitname.github.io/react-gh-pages",

- "private": false,

....

### 5.2.

"scripts":

- "predeploy": "npm run build",

- "deploy": "gh-pages -d build",

  "start": "react-scripts start",

  "build": "react-scripts build",

### 6. Отправляем приложение React в репозиторий GitHub:

### `npm run deploy`
