// Что было плохо и почему:
// Класс `Order` напрямую создает экземпляр `Customer`. Это делает его жестко связанным с конкретной реализацией `Customer`, нарушая принцип инверсии зависимости.
// Это делает систему менее гибкой и трудной для тестирования и расширения.
// Это также приводит к трудности при замене или изменении логики вычисления общей цены в будущем.

// Что стало лучше и почему:
// Добавлена абстракция и вместо того, чтобы класс `Order` сам создавал экземпляр `Customer`, инжектируем его через конструктор.
// Это позволяет гибко подменять реализацию `Customer` без изменения кода в классе `Order`, что улучшает тестируемость и соблюдение принципа инверсии зависимости.

interface ICustomer {
  calculateTotalPrice(): number;
}

class Order {
  private customer: ICustomer;

  constructor(customer: ICustomer) {
    this.customer = customer;
  }

  getTotalPrice(): number {
    return this.customer.calculateTotalPrice();
  }
}

class Customer implements ICustomer {
  private items: Item[];

  calculateTotalPrice(): number {
    // вычисление общей цены на основе items
  }
}
