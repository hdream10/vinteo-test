// Что было плохо и почему:
// Мутация `payment` в функции `auth`.
// Это может привести к неожиданным последствиям, так как изменения могут быть неявными для вызывающего кода.

// Что стало лучше и почему:
// Вместо того чтобы мутировать входной объект, возвращаем новый с обновленным значением.
// Это избегает побочных эффектов и делает код более предсказуемым и удобным для тестирования.

type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService): TPayment => {
  const rcCode = gateway.sendAuth(payment);

  return { ...payment, rcCode };
};
