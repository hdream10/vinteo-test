// Что было плохо и почему:
// Функция нарушала принцип единой ответственности (SOLID).
// Она выполняет несколько действий, включая работу с разными системами, что затрудняет расширяемость и тестирование.
// Также зависимость от конкретных реализаций вместо абстракций нарушает принцип инверсии зависимостей (SOLID).

// Что стало лучше и почему:
// Разделили создание платежей на два класса, каждый из которых отвечает за создание определенного типа платежа.
// Такая реализация позволяет легко расширять функционал и тестировать код.

interface IPaymentProcessor {
  processPayment(): void;
}

class TokenPaymentProcessor implements IPaymentProcessor {
  private token: string;
  
  constructor() {
    this.token = getUrl().slice();
  }

  public processPayment(): void {
    system.createTransaction(this.token).setTransaction();
  }
}

class CardPaymentProcessor implements IPaymentProcessor {
  private cardNumber: string;
  
  constructor() {
    this.cardNumber = account.getCardNumber();
  }

  public processPayment(): void {
    userAccount.createCardPayment(this.cardNumber).postTransactionToServer();
  }
}

const createPayment = (isToken: boolean): void => {
  let paymentProcessor: IPaymentProcessor;

  if (isToken) {
    paymentProcessor = new TokenPaymentProcessor();
  } else {
    paymentProcessor = new CardPaymentProcessor();
  }

  paymentProcessor.processPayment();
};