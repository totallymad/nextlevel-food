"use client";

// по аналогии с индикатором загрузки мы можем создать файл error.js который будет
// показываться пользователю в случае ошибки при загрузке или любой другой, обязательно нужно ещё использовать 'use client'
export default function Error({ error }) {
  return (
    <main className="error">
      <h1>Произошла ошибка</h1>
      <p>Не удалось создать блюдо</p>
    </main>
  );
}
