import styles from "./loading.module.css";

// при создании файла loading.js Next сам будет его искать и использовать как заглушку при загрузке NOTE
export default function MealsLoadingPage() {
  return <p className={styles.loading}>Загрузка блюд...</p>;
}
