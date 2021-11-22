export interface IBeneficiary {
  accountNumber: string;
  firstName: string;
  lastName: string;
  bankName: string;
}

export interface IBills {
  referenceNumber: string;
  amount: number;
  amountAfterDueDate: number;
  dueDate: Date;
  billType: string;
  paid: boolean;
}

export interface IUser {
  firstName: string;
  lastName: string;
  balance: number;
  accountNumber: string;
  uniqueId: string;
  email: string;
  bankName: string;
  bills: IBills[];
  beneficiaries: IBeneficiary[];
  transactions: ITransaction[];
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
