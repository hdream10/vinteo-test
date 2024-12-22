// Что было плохо и почему:
// Функция `Warning` не являлась функцией-конструктором или классом, и её наименование с заглавной буквы было неправильным.
// Использование `push` для мутации массива может привести к неожиданным побочным эффектам, что затрудняет тестирование и поддержку.

// Что стало лучше и почему:
// Мы использовали класс `Warning` для создания объекта.
// Классы, в отличие от обычных функций, предоставляют более четкую структуру и позволяют использовать доп. возможности.
// Также, вместо прямой мутации массива через `push`, мы создаем новый массив с добавленным элементом.


type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};

class Warning implements TWarning {
  type: WarningType;

  constructor(type: WarningType) {
    this.type = type;
  }
}

const addError = (errors: TMutableList<TWarning>) => {
  return [...errors, new Warning(WarningType.LEGACY_CODE_DEPENDENCY)];
};
