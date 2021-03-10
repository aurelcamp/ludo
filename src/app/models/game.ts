export class Game {
  id: number;
  name: string;
  description: string;
  category: string;
  isReserved: boolean;
  age: string;
  tags: string[];

  constructor() {
    this.tags = [];
  }
}