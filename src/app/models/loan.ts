import { Game } from "./game";
import { User } from "./user";

export class Loan {
  id: number;
  game: Game;
  borrower: User;
  isReturned: boolean;
}