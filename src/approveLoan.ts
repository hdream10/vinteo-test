// Что было плохо и почему:
// В коде присутствуют "магические значения", которые делают код трудным для понимания и поддержки.
// Также для чистоты кода можно вынести проверку условий в отдельную функцию.

// Что стало лучше и почему:
// Вынесли значения в константы с понятными именами - улучшает читаемость и делает код более гибким.
// Вынесли проверку условий в отдельную функцию. Повысилась читаемость.

const MIN_AGE = 18;
const MAX_AGE = 65;
const EMPLOYED_STATUS = 'employed';
const CRIMINAL_RECORD = false;

const isApprovedForLoan = (user: User): boolean => {
  return (
    user.age >= MIN_AGE &&
    user.age <= MAX_AGE &&
    user.employmentStatus === EMPLOYED_STATUS &&
    user.criminalRecord === CRIMINAL_RECORD
  );
};

if (isApprovedForLoan(user)) {
  approveLoan();
}
