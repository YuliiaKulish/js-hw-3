# 📚 Homework Assignments

## Description
This repository contains solutions to JavaScript homework assignments related to DOM manipulation, event handling, and working with external libraries.

---

# 📚 Домашні завдання

## Опис
Цей репозиторій містить розв'язки домашніх завдань з роботи з DOM, подіями в JavaScript та підключення бібліотек.

---

## 📌 Завдання

### 1️⃣ Галерея зображень (SimpleLightbox)
**Опис:**
- Використовує бібліотеку `SimpleLightbox` для створення галереї.
- Відображає підписи до зображень з `alt` через 250 мс після відкриття.
- Реалізує гортання зображень за допомогою клавіатури.

📁 **Файл:** [`01-gallery.js`](src/js/01-gallery.js)

---

### 2️⃣ Відеоплеєр (Vimeo API)
**Опис:**
- Використовує бібліотеку Vimeo Player для керування відеоплеєром.
- Зберігає поточний час відтворення у локальному сховищі.
- При перезавантаженні сторінки відновлює відтворення з того самого моменту.
- Використовує `lodash.throttle`, щоб записувати час у сховище не частіше, ніж раз на секунду.

📁 **Файл:** [`02-video.js`](src/js/02-video.js)

---

### 3️⃣ Форма зворотного зв'язку
**Опис:**
- Зберігає значення полів форми у локальному сховищі під час введення.
- При перезавантаженні сторінки заповнює поля збереженими значеннями.
- Очищує сховище та поля після сабміту, виводячи значення у консоль.
- Використовує `lodash.throttle`, щоб оновлення сховища відбувалося не частіше, ніж раз на 500 мс.

📁 **Файл:** [`03-feedback.js`](src/js/03-feedback.js)

---

## 🔗 Підключені бібліотеки

- [SimpleLightbox](https://www.npmjs.com/package/simplelightbox)
- [Vimeo Player](https://github.com/vimeo/player.js/#vimeo-player-api)
- [lodash.throttle](https://www.npmjs.com/package/lodash.throttle)