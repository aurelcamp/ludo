export class Game {
  id: number;
  name: string;
  description: string;
  category: string;
  isReserved: boolean;
  tags: string[];

  constructor() {
    this.tags = [];
  }
}