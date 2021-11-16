export interface CreateSessionProps {
  email: string;
  password: string;
}

export interface SignupProps extends CreateSessionProps {
  username: string;
}

export interface SessionPanelUser {
  token: string;
  user: User;
}

export interface User {
  firstName: "";
  lastName: "";
  uniqueId: "";
  balance: 0;
  accountNumber: "";
}
