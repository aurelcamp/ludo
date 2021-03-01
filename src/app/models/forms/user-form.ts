export class UserForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isManager: boolean;

  constructor() {
    this.isManager = false;
  }
}