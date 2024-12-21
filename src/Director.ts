// Что было плохо и почему:
// Нарушение принципа инверсии зависимостей (SOLID).
// Код жестко связанн с конкретной реализацией и усложняло тестирование и расширение.
// Также не указаны типы

// Что стало лучше и почему:
// Добавлен интерфейс `ICalendar`, чтобы `Director` зависел от абстракции, а не от конкретной реализации.
// Указали типы.
// Это улучшает гибкость, тестируемость и расширяемость кода.

interface ICalendar {
  addEvent(event: unknown): void;
}


class Calendar {
  addEvent(event: unknown): void {
    // some logic to add event
  }
}

class Director {
  calendar: Calendar;

  constructor(calendar: ICalendar) {
    this.calendar = calendar;
  }

  scheduleMeeting(event: unknown): void {
    this.calendar.addEvent(event);
  }
}
