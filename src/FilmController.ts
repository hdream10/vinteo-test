// Что было плохо и почему:
// Класс `FilmController` нарушает принцип единой ответственности, управляя состоянием попапа.
// Логика открытия попапа и состояния попапа не разделена, что усложняет тестирование и поддержку.

// Что стало лучше и почему:
// Логика управления попапом выделена в отдельный класс `PopupManager`,
// что позволило классу `FilmController` сосредоточиться только на своей логике.
// Управление состоянием попапа теперь централизовано, что упрощает тестирование и управление состоянием.

class PopupManager {
  private popupOpened: boolean = false;

  openPopup(): void {
    const popup = new Popup();
    this.popupOpened = true;
  }

  closePopup(): void {
    this.popupOpened = false;
  }

  isPopupOpened(): boolean {
    return this.popupOpened;
  }
}

class FilmController {
  private popupManager: PopupManager;

  constructor() {
    this.popupManager = new PopupManager();
  }

  openDetails() {
    this.popupManager.openPopup();
  }

  isPopupOpened(): boolean {
    return this.popupManager.isPopupOpened();
  }
}