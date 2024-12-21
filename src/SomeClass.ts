// Что было плохо и почему:
// Метод `neverUsedMethod` никогда не вызывается и лишь засоряет код.
// Условие `if (false)` содержит всегда ложное выражение, из-за чего код внутри никогда не выполняется.
// Странная конструкция `Exception e` - больше к java подходит, `printStackTrace` - отсутствует в стандартной ошибке,
// если используется кастомная, то точно стоит указать тип и сделать проверку. Может привести к ошибке.

// Что стало лучше и почему:
// Удалены неиспользуемые методы и "мертвый код", что улучшило читаемость и снизило сложность.
// Замена `Exception e`. Указан тип для ошибки и добавлена проверка типа, чтобы избежать ошибок.

class CustomError {
  printStackTrace() {}
}

class SomeClass {
  public someMethod() {
    try {
      this.doSomethingSafe();
    } catch (e) {
      if (e instanceof CustomError) {
        e.printStackTrace();
      } else {
        console.error(e);
      }
    }
  }

  private doSomethingSafe() {
    console.log('Safe operation');
  }
}
