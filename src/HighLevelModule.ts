// Что было плохо и почему:
// HighLevelModule напрямую зависит от LowLevelModule, что нарушает принцип инверсии зависимостей (Solid).
// Это делает код сложным для тестирования и модификации.

// Что стало лучше и почему:
// Добавлена абстракция, при которой отсутствует жесткая привязка к конкретной реализации.
// Это улучшает тестируемость и гибкость кода, позволяя легко изменять поведение без изменения самого класса.

interface ILowLevelModule {
  doSomething(): void;
}

class LowLevelModule implements ILowLevelModule {
  doSomething() {
    // реализация
  }
}

class HighLevelModule {
  private lowLevelModule: ILowLevelModule;

  constructor(lowLevelModule: ILowLevelModule) {
    this.lowLevelModule = lowLevelModule;
  }

  doSomethingElse() {
    this.lowLevelModule.doSomething();
  }
}
