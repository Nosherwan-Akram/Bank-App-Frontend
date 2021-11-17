export const users = [
  {
    firstName: "Jacklyn",
    lastName: "Tranquada",
    uniqueId: "6869281",
    email: "JacklynTranquada@gmail.com",
    accountNumber: "3044251492303",
    balance: 50000,
    bankName: "Habib Bank",
    beneficiaries: [
      {
        firstName: "Dorolisa",
        lastName: "Buchbinder",
        accountNumber: "2163135331161",
        bankName: "SCB",
      },
      {
        firstName: "Raynell",
        lastName: "Korwun",
        accountNumber: "4182932072428",
        bankName: "Meezan Bank",
      },
      {
        firstName: "Myrtice",
        lastName: "Dieterich",
        accountNumber: "1779819844682",
        bankName: "Meezan Bank",
      },
      {
        firstName: "Gizela",
        lastName: "Lynda",
        accountNumber: "9292679763982",
        bankName: "ICA Banken",
      },
      {
        firstName: "Dorisa",
        lastName: "Hansiain",
        accountNumber: "2477193300901",
        bankName: "Strommad",
      },
    ],
    createdAt: new Date("2021-08-20T15:53:38.991Z"),
    updatedAt: new Date("2021-09-09T07:42:34.134Z"),
    transactions: [
      {
        transactionId: "fd53d0b6-dcba-48a9-a330-79d3adb4fde1",
        transactionAmount: 5000,
        transactionAt: new Date("2021-08-23T04:55:26.596Z"),
        transactionType: "debit",
        transactionAccountNumber: "2163135331161",
        transactionAccountTitle: "Dorolisa Buchbinder",
        balanceAfterTransaction: 92000,
      },
      {
        transactionId: "4857592f-a30e-4d24-b62e-9bcf82c8b404",
        transactionAmount: 10000,
        transactionAt: new Date("2021-08-23T04:56:00.491Z"),
        transactionType: "debit",
        transactionAccountNumber: "4182932072428",
        transactionAccountTitle: "Raynell Korwun",
        balanceAfterTransaction: 82000,
      },
      {
        transactionId: "ecc0bea0-45c8-48d9-b7a7-9ae0ba123eed",
        transactionAmount: 5000,
        transactionAt: new Date("2021-08-23T04:57:04.522Z"),
        transactionType: "debit",
        transactionAccountNumber: "2163135331161",
        transactionAccountTitle: "Dorolisa Buchbinder",
        balanceAfterTransaction: 77000,
      },
      {
        transactionId: "629573cc-f3ae-412b-a2ab-a44d7381fe9b",
        transactionAmount: 1000,
        transactionAt: new Date("2021-08-23T04:58:02.629Z"),
        transactionType: "debit",
        transactionAccountNumber: "2163135331161",
        transactionAccountTitle: "Dorolisa Buchbinder",
        balanceAfterTransaction: 76000,
      },
      {
        transactionId: "fa5232b7-e293-4c66-9531-37b8c0c16248",
        transactionAmount: 10000,
        transactionAt: new Date("2021-08-23T05:33:47.873Z"),
        transactionType: "credit",
        transactionAccountNumber: "2163135331161",
        transactionAccountTitle: "Dorolisa Buchbinder",
        balanceAfterTransaction: 86000,
      },
      {
        transactionId: "b5b7d9b7-1f57-461c-bceb-82fd6cf809ab",
        transactionAmount: 1000,
        transactionAt: new Date("2021-08-23T05:35:12.897Z"),
        transactionType: "debit",
        transactionAccountNumber: "4182932072428",
        transactionAccountTitle: "Raynell Korwun",
        balanceAfterTransaction: 85000,
      },
      {
        transactionAmount: 3045.4228176051324,
        transactionAccountTitle: "Gas Bill",
        transactionId: "5b79db14-3273-4e34-ae68-c39ef19caff9",
        transactionAccountNumber: "123456789123456",
        balanceAfterTransaction: 81954.57718239487,
        transactionType: "debit",
        transactionAt: new Date("2021-08-24T14:51:25.583Z"),
      },
      {
        transactionAmount: 560.0752273157373,
        transactionAccountTitle: "Electricity Bill",
        transactionId: "2e45c53e-3e0a-407c-bd73-efc97e960441",
        transactionAccountNumber: "123456678123456",
        balanceAfterTransaction: 81394.50195507913,
        transactionType: "debit",
        transactionAt: new Date("2021-08-24T14:52:42.449Z"),
      },
      {
        transactionAmount: 7848.718530885164,
        transactionAccountTitle: "Electricity Bill",
        transactionId: "f1d58bf8-dcb7-465b-aad9-af9420ba53a8",
        transactionAccountNumber: "111111111111111",
        balanceAfterTransaction: 73545.78342419397,
        transactionType: "debit",
        transactionAt: new Date("2021-08-24T14:56:58.037Z"),
      },
      {
        transactionAmount: 3581.7046538618856,
        transactionAccountTitle: "Electricity Bill",
        transactionId: "a222f2ff-18ed-44a7-b6b1-ddc72bb71bba",
        transactionAccountNumber: "123232323232323",
        balanceAfterTransaction: 69964.07877033208,
        transactionType: "debit",
        transactionAt: new Date("2021-08-24T14:58:25.195Z"),
      },
      {
        transactionAmount: 7235.451100189583,
        transactionAccountTitle: "Electricity Bill",
        transactionId: "68e3ad59-86e5-46b4-9bd1-7c69bd770454",
        transactionAccountNumber: "123123123133333",
        balanceAfterTransaction: 62728.6276701425,
        transactionType: "debit",
        transactionAt: new Date("2021-08-24T15:01:49.536Z"),
      },
      {
        transactionAmount: 6317.4640528055415,
        transactionAccountTitle: "Phone Bill",
        transactionId: "b5973227-b0ee-45de-a293-71bdcbe74137",
        transactionAccountNumber: "123123412321312",
        balanceAfterTransaction: 56411.16361733696,
        transactionType: "debit",
        transactionAt: new Date("2021-08-24T15:03:59.639Z"),
      },
    ],
    bills: [
      {
        referenceNumber: "123456789123456",
        amount: 3045.4228176051324,
        amountAfterDueDate: 5545.422817605133,
        dueDate: new Date("2021-09-01T10:27:58.089Z"),
        billType: "Gas Bill",
        paid: true,
      },
      {
        referenceNumber: "123456678123456",
        amount: 560.0752273157373,
        amountAfterDueDate: 3060.0752273157373,
        dueDate: new Date("2021-09-01T10:40:43.690Z"),
        billType: "Electricity Bill",
        paid: true,
      },
      {
        referenceNumber: "111111111111111",
        amount: 7848.718530885164,
        amountAfterDueDate: 10348.718530885164,
        dueDate: new Date("2021-09-01T14:55:55.364Z"),
        billType: "Electricity Bill",
        paid: true,
      },
      {
        referenceNumber: "123232323232323",
        amount: 3581.7046538618856,
        amountAfterDueDate: 6081.704653861885,
        dueDate: new Date("2021-09-01T14:57:54.873Z"),
        billType: "Electricity Bill",
        paid: true,
      },
      {
        referenceNumber: "123123123133333",
        amount: 7235.451100189583,
        amountAfterDueDate: 9735.451100189583,
        dueDate: new Date("2021-09-01T15:01:42.392Z"),
        billType: "Electricity Bill",
        paid: true,
      },
      {
        referenceNumber: "123123412321312",
        amount: 6317.4640528055415,
        amountAfterDueDate: 8817.464052805542,
        dueDate: new Date("2021-09-01T15:03:57.771Z"),
        billType: "Phone Bill",
        paid: true,
      },
      {
        referenceNumber: "234567891234561",
        amount: 997.6596245188651,
        amountAfterDueDate: 3497.6596245188653,
        dueDate: new Date("2021-09-16T06:42:20.080Z"),
        billType: "Electricity Bill",
        paid: false,
      },
    ],
  },
];