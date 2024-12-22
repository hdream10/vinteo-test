// Что было плохо и почему:
// Нарушение принципа единой ответственности.
// Методы, связанные с потоком, были в классе `ScreenShare`, который выполнял как базовую логику,
// так и более сложные сценарии, такие как `startPresentationWithoutSound`.
// Это усложняло понимание и расширение кода

// Что стало лучше и почему:
// Логика управления стримом вынесена в отдельный класс. Также была добавлена абстракция.
// Принципы единой ответственности и инверсии зависимостей соблюдены.
// Это улучшает читаемость кода, масштабируемость и делает код более гибким.

interface IStream {
  stop: () => void;
  start: (mediaStream: MediaStream) => void;
  muteAudio: () => void;
}

class Stream implements IStream {
  stop() {}
  start(mediaStream: MediaStream) {}
  muteAudio() {}
}

class ScreenShare {
  private stream: IStream;

  constructor(stream: IStream) {
    this.stream = stream;
  }

  startPresentationWithoutSound(mediaStream: MediaStream, isExistsAudioTracks: boolean) {
    this.stream.stop();
    this.stream.start(mediaStream);

    if (isExistsAudioTracks) {
      this.stream.muteAudio();
    }
  }
}
