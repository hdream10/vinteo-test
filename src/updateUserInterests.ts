// Что было плохо и почему:
// Дублирование кода. Нарушение принципа DRY.
// Нет типизации параметров функций, что снижает читаемость и может привести к ошибкам.

// Что стало лучше и почему:
// Создание общей функции `updateUserData`, которая инкапсулирует общую логику для работы с запросами, уменьшает повторение кода, облегчая поддержку и масштабирование.
// Добавлена типизация параметров, что повышает безопасность типов и читаемость.
// Можно использовать одну точку входа для различных типов данных пользователя.
// Эндпоинты вынесены в enum, для указания типа и для передачи значения при вызове функции, чтобы избежать ошибки при передаче параметра.

enum Endpoints {
  HANDLE = 'handle',
  INTERESTS = 'interests',
}

const updateUserData = <T>(endpoint: Endpoints, data: T): Promise<Response> => {
  if (!isLoggedIn()) {
    toLoginPage();

    return Promise.reject('Not logged');
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(`${domain}/v1/users/${endpoint}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
  });
};
