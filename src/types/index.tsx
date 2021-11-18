export interface IBeneficiary {
  accountNumber: string;
  firstName: string;
  lastName: string;
  bankName: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  balance: number;
  accountNumber: string;
}

export interface ITransaction {
  transactionId: string;
  transactionAmount: number;
  transactionAt: Date;
  transactionType: string;
  transactionAccountNumber: string;
  transactionAccountTitle: string;
  balanceAfterTransaction: number;
}
