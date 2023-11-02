# Playground SDK

## Installation

Install dependencies using yarn:

```
yarn
```

## Usage with a real CEX

If you want to add a CEX, copy paste the `exchange.example.ts` file to the `exchange.ts` file and fill in the CEX credentials.

And then change the `SELECTED_CEX` entry inside the `.env` file so every commands will run using the CEX you need.

Then link the local `sdk` package with to this project.

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

The tests actually rely on the mocked coinbase CEX using the demo package and can fail in case you change the CEX or the content of the `executeMethod` function.
