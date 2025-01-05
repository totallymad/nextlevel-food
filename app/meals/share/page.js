import ImagePicker from "@/components/meals/image-picker";
import styles from "./page.module.css";
import { shareMeal } from "@/lib/action";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function ShareMealPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Поделитесь своим{" "}
          <span className={styles.highlight}>любимым блюдом</span>
        </h1>
        <p>Или любым другим блюдом, которым вы считаете нужным поделиться!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMeal}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Ваше имя</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Ваш адрес электронной почты</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Название</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Краткое содержание</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Инструкции</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Ваше изображение" name="image" />
          <p className={styles.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
