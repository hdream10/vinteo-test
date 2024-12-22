// Что было плохо и почему:
// Использовались магические строки для формата 'bytes' и 'Mb', что снижает читаемость и увеличивает вероятность ошибок при вводе.
// Использовалось магическое число - усложняет понимание и измение кода.
// Переменные для трафика `sentUserVideoTraffic` и `sentShareVideoTraffic` не были типизированы, могло привести к ошибкам.
// Переменная `isActiveAutoFormatTraffic` не использовалась непосредственно в бизнес-логике, что делает её неочевидной.

// Что стало лучше и почему:
// Использование enum `TFormatType` для управления типами формата делает код более читаемым и уменьшает вероятность ошибок, связанных с неправильно переданными строками.
// Константа `BYTES_IN_ONE_MB` вынесена за пределы метода, что делает код гибким и облегчает поддержку.
// Метод `calculateTotalTraffic` выделяет логику подсчёта трафика, что упрощает тестирование и поддержку.
// Указаны типы, что делает код более безопасным и понятнее.
// Указаны модификаторы у свойств класса.
// Добавлена обработка случая, если формат передан неверно (`default` в `switch`).

enum TFormatType {
  BYTES = 'bytes',
  MB = 'Mb',
}

const BYTES_IN_ONE_MB = 1_048_576;

class StatisticsCollector {
  private sentUserVideoTraffic: number = 0;
  private sentShareVideoTraffic: number = 0;

  private calculateTotalTraffic(): number {
    return this.sentUserVideoTraffic + this.sentShareVideoTraffic;
  }

  private formatTraffic(trafficInBytes: number, formatType: TFormatType) {
    switch (formatType) {
      case TFormatType.BYTES:
        return trafficInBytes;
      case TFormatType.MB:
        return trafficInBytes / BYTES_IN_ONE_MB;
      default:
        throw new Error('Invalid format type');
    }
  }

  public getSentVideoTraffic(formatType: TFormatType = TFormatType.BYTES) {
    const totalTrafficInBytes = this.calculateTotalTraffic();

    return this.formatTraffic(totalTrafficInBytes, formatType);
  }
}
