export enum Color {
  RED = "#eb4034",
  GREEN = "#34eb5c",
  BLUE = "#3462eb",
}

// Користувач. Позиція в рейтинговій таблиці визначається позицією в
// масиві користувачів

export interface User {
  // Улюблений колір
  color: Color;
  // Повне ім'я
  name: string;
  // Швидкість заїзду
  speed: number;
  // Час заїзду. Виражено в мілісекундах
  time: number;
}
