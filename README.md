# Playground SDK

## Installation

Install dependencies using yarn:

```
yarn
```

## Usage

If you want to add a CEX, copy paste the `exchange.example.ts` file to the `exchange.ts` file and fill in the CEX credentials.

And then change the `SELECTED_CEX` entry inside the `.env` file so every commands will run using the CEX you need.

### Commands

Every command file are located inside the related `Use case` folder: `authentication, balances, deposit, exchange, prices, trade, withdraw`.

You can use the `yarn execute` commande to execute any command:

```js
yarn execute ./deposit/getDepositabletokens

// [
//   { tokenSymbol: 'ETH', networks: [ [Object] ] },
//   { tokenSymbol: 'MATIC', networks: [ [Object] ] }
// ]
```

## Tests

The tests actually rely on the mocked bitfinex CEX and can fail in case you change the CEX or the content of the `executeMethod` function.
