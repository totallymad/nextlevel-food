import Link from "next/link";

import styles from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Еда нового уровня для гурманов нового времени!</h1>
            <p>Попробуйте и поделитесь блюдами со всего мира</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Присоединяйтесь к сообществу</Link>
            <Link href="/meals">Исследуйте блюда</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>Как это работает</h2>
          <p>
            NextLevel Food - это платформа для гурманов, где они могут
            поделиться своими любимыми рецептами со всем миром. Это место для
            открытия новых блюд, и общаться с другими любителями еды.
          </p>
          <p>
            NextLevel Food - это место для знакомства с новыми блюдами и общения
            с другими любителями еды.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Почему NextLevel Food?</h2>
          <p>
            NextLevel Food - это платформа для гурманов, где они могут
            поделиться своими любимыми рецептами со всем миром. Это место для
            открытия новых блюд, и общаться с другими любителями еды.
          </p>
          <p>
            NextLevel Food - это место для знакомства с новыми блюдами и общения
            с другими любителями еды.
          </p>
        </section>
      </main>
    </>
  );
}
