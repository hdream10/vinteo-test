// Что было плохо и почему:
// Использовались магические числа, которые делали код трудным для понимания и поддержки.
// Код плохо отформатирован, отсутствуют отступы, из-за чего он сложен для визуального восприятия.

// Что стало лучше и почему:
// Вынесли магические числа в константы, чтобы код стал более читаемым.
// Добавлены отступы, что сделало код более структурированным и понятным

const STRAIGHT_TIME = 400;
const OVERTIME_MULTIPLIER = 1.5;
const BASE_MULTIPLIER = 1.0;

function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate: number = getTenthRate();
  const tenthsWorked: number = getTenthsWorked();

  const straightTime: number = Math.min(STRAIGHT_TIME, tenthsWorked);
  const overTime: number = Math.max(0, tenthsWorked - straightTime);
  const straightPay: number = straightTime * tenthRate;

  const overtimeRate: number = overtime ? OVERTIME_MULTIPLIER : BASE_MULTIPLIER * tenthRate;
  const overtimePay: number = Math.round(overTime * overtimeRate);

  return straightPay + overtimePay;
}
