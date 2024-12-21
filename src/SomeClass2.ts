// Что было плохо и почему:
// Присутствие неиспользуемой переменной и конструктора без логики засоряло код.
// Создают лишнюю сложность при восприятии кода.

// Что стало лучше и почему:
// Удалены неиспользуемые переменные и пустой конструктор.
// Это улучшило читаемость, уменьшило сложность и сделало класс более компактным.

class SomeClass2 {
  public someMethod(): void {
    console.log('This method performs a useful action');
  }
}
