// Что было плохо и почему:
// Отсутствие типизации у `comment`, что усложняет понимание кода и может привести к ошибкам.
// Логика проверки и получение комментария в одном методе может снизить читаемость и тестируемость. 
// Это также нарушает принцип единой ответственности.

// Что стало лучше и почему:
// Добавлени тип для `comment` для избежания ошибок.
// Получение комментария вынесено из условия, что улучшает читаемость и поддержку кода.

interface IComment {
  id: number;
  // ...
}

class Some {
  updateComment(comment: IComment) {
    const savedComment = this.getComment(comment.id);

    if (savedComment) {
      return this.requestToUpdateComment(comment.id, comment);
    }

    return this.requestToCreateComment(comment);
  }
}
