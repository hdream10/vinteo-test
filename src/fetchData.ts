// Что было плохо и почему:
// Использование `.then()` и `.catch()` снижает читаемость.
// Нет типизации для аргументов и возвращаемого значения.

// Что стало лучше и почему:
// Использование async/await для улучшения читаемости и взаимодействия с результатом.
// Добавлена типизация для аргументов и возвращаемых значений.

const DEFAULT_TIMEOUT = 5000;

async function fetchData(url: string): Promise<void> {
  try {
    const response: Response = await fetch(url, { timeout: DEFAULT_TIMEOUT });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
