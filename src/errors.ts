// Что было плохо и почему:
// Функции для проверки разных статусных кодов дублировали логику.
// Это приводило к избыточности кода и усложняло его поддержку.

// Что стало лучше и почему:
// Объединили проверки в одну функцию.
// Это улучшает читаемость, сокращает избыточность и делает код более гибким.

enum HttpStatusCode {
  NOT_FOUND_404 = 404,
  FORBIDDEN_403 = 403,
  SERVICE_UNAVAILABLE_503 = 503,
}

const hasStatus = (response: Response, statusCode: HttpStatusCode): boolean => {
  return response.status === statusCode;
};
