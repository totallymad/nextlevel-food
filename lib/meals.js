import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  // имитация загрузки на сервере
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  // имитация ошибки
  // throw new Error('Загрузка блюд не удалась');
  // по умолчанию при работе с better-sql async await использовать не нужно
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// Асинхронная функция для сохранения данных о блюде
export async function saveMeal(meal) {
  // Создание уникального slug (человекочитаемого идентификатора) на основе названия блюда
  meal.slug = slugify(meal.title, { lower: true });

  // Очистка инструкции от возможных XSS-уязвимостей
  meal.instructions = xss(meal.instructions);

  // Получение расширения файла изображения
  const extension = meal.image.name.split(".").pop();
  // Создание уникального имени файла для сохранения изображения
  const fileName = `${meal.slug}.${extension}`;

  // Создание потока для записи изображения в файловую систему
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  // Преобразование изображения в буфер
  const bufferedImage = await meal.image.arrayBuffer();

  // Запись буфера в файл
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      // Если произошла ошибка при записи, выбрасываем исключение
      throw new Error("Не удалось сохранить изображение");
    }
  });

  // Закрываем поток после записи (чтобы избежать утечки ресурсов)
  stream.end();

  // Сохраняем путь к изображению в объекте meal
  meal.image = `/images/${fileName}`;

  // Сохранение данных о блюде в базе данных
  db.prepare(
    `
      INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (         
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
  ).run(meal); // Выполняем запрос с параметрами из объекта meal
}
