"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  // State для хранения выбранного изображения
  const [pickedImage, setPickedImage] = useState();

  // Ссылка на скрытый input для выбора файла
  const imageInput = useRef();

  // Функция, которая вызывается при клике на кнопку выбора изображения
  function handlePickClick() {
    // Триггерим клик по скрытому input
    imageInput.current.click();
  }

  // Функция, которая обрабатывает изменение input (выбор изображения)
  function handleImageChange(event) {
    const file = event.target.files[0]; // Берем первый выбранный файл

    // Если файл не выбран, сбрасываем state
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader(); // Создаем FileReader для чтения файла

    // Когда файл успешно загружен, обновляем state с результатом (base64)
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    // Читаем файл как Data URL (base64)
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>Изображение еще не выбрано.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="Изображение выбранное пользователем"
              fill
            />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Выбрать изображение
        </button>
      </div>
    </div>
  );
}
