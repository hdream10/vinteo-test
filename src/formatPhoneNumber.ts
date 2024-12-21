// Что было плохо и почему:
// Отсутствует типизация, что усложняет поддержку кода и приводит к возможным ошибкам.
// Отсутствует валидация/форматирование в `formatPhoneNumber`.

// Что стало лучше и почему:
// Добавлены типы, что улучшает читаемость и предотвращает типовые ошибки.
// В функции formatPhoneNumber добавлено базовое форматирование номера телефона.
// Что позволяет избежать нежелательный результа

function calculateTotalPrice(quantity: number, price: number): number {
  return quantity * price;
}

function formatPhoneNumber(number: string): string {
  const digits = number.replace(/\D/g, '');

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
