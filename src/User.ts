// Что было плохо и почему:
// Нарушение принципа единой ответственности. Затрудняет поддержку кода и тестирование.

// Что стало лучше и почему:
// Класс был разбит на несколько классов, каждый из которых отвечает за отдельную часть данных пользователя.
// Код легче поддерживать и изменять.

class UserContact {
  private address: string;
  private phoneNumber: string;
  private email: string;

  constructor(address: string, phoneNumber: string, email: string) {
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  // Геттеры для доступа к данным
}

class UserStatus {
  private isActive: boolean;
  private isVerified: boolean;
  private isPremium: boolean;
  private role: string;

  constructor(isActive: boolean, isVerified: boolean, isPremium: boolean, role: string) {
    this.isActive = isActive;
    this.isVerified = isVerified;
    this.isPremium = isPremium;
    this.role = role;
  }

  // Геттеры для доступа к данным
}

class UserProfile {
  private name: string;
  private age: number;
  private profilePicture: string;
  private bio: string;
  private interests: string[];

  constructor(name: string, age: number, profilePicture: string, bio: string, interests: string[]) {
    this.name = name;
    this.age = age;
    this.profilePicture = profilePicture;
    this.bio = bio;
    this.interests = interests;
  }

  // Геттеры для доступа к данным
}

class User {
  private contact: UserContact;
  private status: UserStatus;
  private profile: UserProfile;
  private lastLogin: Date;
  private registrationDate: Date;

  constructor(
    profile: UserProfile,
    contact: UserContact,
    status: UserStatus,
    lastLogin: Date,
    registrationDate: Date,
  ) {
    this.profile = profile;
    this.contact = contact;
    this.status = status;
    this.lastLogin = lastLogin;
    this.registrationDate = registrationDate;
  }

  // Геттеры для доступа к данным
}
