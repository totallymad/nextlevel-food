"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// Указывает, что эта функция должна выполняться на сервере (Next.js App Router)

// также эту функцию можно написать прямо в компоненте, однако тогда нельзя будет использовать "use client" NOTE

function isInvalidText(text) {
  return !text || text.trim() === "";
}

// Асинхронная функция для обработки отправки данных о блюде
export async function shareMeal(formData) {
  // Создаем объект с данными о блюде, извлекая их из formData
  const meal = {
    title: formData.get("title"), // Название блюда
    summary: formData.get("summary"), // Краткое описание блюда
    instructions: formData.get("instructions"), // Инструкции по приготовлению
    image: formData.get("image"), // Изображение блюда
    creator: formData.get("name"), // Имя создателя блюда
    creator_email: formData.get("email"), // Email создателя блюда
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Неправильный ввод");
  }

  await saveMeal(meal);
  redirect("/meals");
}
