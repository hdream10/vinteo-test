// Что было плохо и почему:
// Осутствие типов - может привести к ошибкам.
// Использование `forEach` - для этого приходится создавать переменную, которая требует лишнего выделения памяти.

// Что стало лучше и почему:
// Добавили типы - улучшает читаемость и предсказуемость.
// Заменили метод `forEach` на `reduce`, который позволяет вычислить значение, без создания переменной.
// Это делает код более функциональным, более выразительным и снижает потребность в дополнительной памяти.

type Item = {
  price: number;
};

function calculateTotalPrice(items: Item[]): number {
  return items.reduce((acc, item) => acc + item.price, 0);
}

function applyDiscount(totalPrice: number, discountPercentage: number): number {
  return totalPrice * (1 - discountPercentage / 100);
}
