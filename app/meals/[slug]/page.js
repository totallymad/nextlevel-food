import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    // вызываем страницу ошибку
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          // такой вывод опасен из-за XSS(межсайтого скриптинга) поэтому должна быть обработка инпутов
          //  к примеру здесь буудет использоваться xss нпм пакет
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
