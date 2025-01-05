import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

// выносим функцию получения блюд на аутсорс, и затем сможем обернуть её в Suspense
// Suspense помогает обрабатывать информацию при загрузке и отображать резервный контент
async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

// в серверных компонентах мы можем использовать async прямо на компоненте

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Вкусные блюда, созданные{" "}
          <span className={styles.highlight}>тобой</span>
        </h1>
        <p>
          Выберите свой любимый рецепт и приготовьте его сами. Это легко и
          весело!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Поделитесь своим любимым рецептом</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Загрузка блюд...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
