# Hexagonal Pattern API

### Requisitos

- [Node.js](https://nodejs.org/)
- [Mock API]()

### Start Express Server

Por definição o server esta disponibilizado na porta 3001
```sh
npm run start:express
```

### Endpoints
```txt
GET http://localhost:3000/payable 
response {
    "totalAmountAvailable": number,
    "totalAmountUnavailable": number,
    "totalFees": number
}

POST http://localhost:4000/transaction
request {
    "totalAmount": number,
    "description": string,
    "paymentType": ENUM(CREDIT_CARD, DEBIT_CARD),
    "cardBin": number,
    "cardLast4": number,
    "cardCvv": number,
    "clientName": string,
    "expirationDate": string(mm/yy)
},
response {
    "status": "success" --> acao concluida
}
```
