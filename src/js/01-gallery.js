// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
// // Change code below this line

const imageContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryList(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", galleryMarkup);
imageContainer.addEventListener("click", onimageContainerClick);

function createGalleryList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
        alt="${description}"
        />
        </a>
      </div>
        `;
    })
    .join("");
}

function onimageContainerClick(e) {
  e.preventDefault();
  if (!e.target.dataset.source) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );

  instance.show();

  imageContainer.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
// console.log(galleryMarkup);
