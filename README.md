<h1 align="center">
    <b>Cede Playground SDK</b>
</h1>

<p align="center">
  <img src="https://sdk.cede.store/_next/static/media/sdk_banner.c901be80.svg" alt="CEDE">
</p>

Cede SDK is a centralized exchange (CEX) connectivity solution that unifies access to multiple CEX APIs. At present, we
support connections to over 10 CEXs using both API keys and OAuth. This SDK enables B2B stakeholders to effortlessly
incorporate features like account balances, withdrawals, transaction histories, trades, and public data.

This repository demonstrates the API of this SDK in sandbox mode (exchange API keys are not required). Below, you will
find numerous available features.

## Installation

```
git clone https://github.com/cedelabs/sdk-examples
yarn
```

If you want to install the demo version of the SDK in your project, run:

```
yarn i @cedelabs/demo-sdk
```

## Commands

Each command file is located inside the corresponding use case folder: authentication, balances, deposit, exchange,
prices, trade, withdraw.

You can use the `yarn execute` commande to execute any command:

```js
yarn execute ./deposit/getDepositableTokens

// [
//   { tokenSymbol: 'ETH', networks: [ [Object] ] },
//   { tokenSymbol: 'MATIC', networks: [ [Object] ] }
// ]
```

## Features

You will find supported features in the tables below. For more detailed documentation, please visit
https://sdk.cede.store/documentation/general-info.

### Authentication

To authenticate your requests, you need to register an exchange instance and provide credentials for future requests.
You can register it using either an API key pair (apiKey and secretKey) or an OAuth key pair (accessToken and
refreshToken). If you're in "MOCK" mode, providing keys is not necessary.

| Feature              | Command                                            | Description                                                                                                                          |
| -------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| register an exchange | `yarn execute ./exchange/registerExchangeInstance` | Creates an exchange instance with the provided credentials (API keys or OAuth tokens).                                               |
| remove an exchange   | `yarn execute ./exchange/removeExchangeInstance`   | Removes an exchange instance, deleting API keys from memory, revoking OAuth tokens, etc.                                             |
| exchange registered  | `yarn execute ./exchange/isRegistered`             | Checks if the exchange instance is already registered.                                                                               |
| OAuth URL            | `yarn execute ./exchange/getOAuthUrl`              | Provides the URL of the exchange to initiate the OAuth flow. After redirection, you will be able to retrieve the authorization code. |
| Get OAuth tokens     | `yarn execute ./exchange/getOAuthTokens`           | After obtaining the authorization code, call this method to retrieve the access and refresh tokens.                                  |

### Balances and other data

| Feature             | Command                                         | Description                                                                                                                         |
| ------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| balances            | `yarn execute ./balances/getBalances`           | Provides balances by wallet type (spot, futures, margin, etc.). You can find the supported wallet types in `getSupportedExchanges`. |
| prices              | `yarn execute ./prices/getPrices`               | Provides prices in USD for all tokens supported by the SDK.                                                                         |
| supported exchanges | `yarn execute ./exchange/getSupportedExchanges` | Lists all supported exchanges along with their metadata.                                                                            |

### Withdrawal use case

| Feature               | Command                                           | Description                                                                                                                                                      |
| --------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| withdrawal networks   | `yarn execute ./withdraw/getWithdrawableNetworks` | Provides a list of networks available for withdrawing a specific token on a given exchange.                                                                      |
| withdrawable tokens   | `yarn execute ./withdraw/getWithdrawableBalances` | Provides balances of tokens available for withdrawal from one or more wallet types.                                                                              |
| prepare a withdrawal  | `yarn execute ./withdraw/prepareWithdrawal`       | Prepares a withdrawal. More info: https://sdk.cede.store/documentation/api-reference/withdraw#prepare-withdrawal                                                 |
| create a withdrawal   | `yarn execute ./withdraw/createWithdrawal`        | Sends a withdrawal request to the exchange. If more than one wallet type is used, the SDK executes an internal transfer to have enough funds for the withdrawal. |
| retrieve a withdrawal | `yarn execute ./withdraw/getWithdrawalById`       | Retrieves a withdrawal.                                                                                                                                          |

### Deposit use case

| Feature            | Command                                       | Description                                                                                |
| ------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| deposit networks   | `yarn execute ./deposit/getNetworks`          | Provides a list of networks available for depositing a specific token on a given exchange. |
| depositable tokens | `yarn execute ./deposit/getDepositableTokens` | Provides a list of tokens available for deposit on a given exchange.                       |
| deposit address    | `yarn execute ./deposit/getDepositAddress`    | Retrieves the deposit address for a specific token and network on a given exchange.        |

### Trade use case

| Feature               | Command                               | Description                                                                                                          |
| --------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| market pairs          | `yarn execute ./trade/getMarketPairs` | Provides a list of existing market pairs.                                                                            |
| market rate           | `yarn execute ./trade/getMarketRate`  | Provides the best buy and sell prices from the order book, useful for estimating `amountOut`.                        |
| minimum trade amounts | `yarn execute ./trade/getMinAmounts`  | Provides minimum trade amounts.                                                                                      |
| prepare an order      | `yarn execute ./trade/prepareOrder`   | Estimates the exchange fee and the amount to be received. Provides the object to pass to the `createOrder` function. |
| create an order       | `yarn execute ./trade/createOrder`    | Send an order to the exchange.                                                                                       |
| update an order       | `yarn execute ./trade/updateOrder`    | Updates the open order (type, side, amount, price).                                                                  |
| open orders           | `yarn execute ./trade/getOpenOrders`  | Lists all open orders.                                                                                               |
| retrieve an order     | `yarn execute ./trade/getOrder`       | Retrieves an order.                                                                                                  |

## Tests

The tests actually rely on the mocked coinbase CEX using the demo package and can fail in case you change the CEX or the
content of the `executeMethod` function.

## Usage with a real CEX

First, install the private package @cedelabs-private/sdk. To obtain access, please contact the Cede Labs team:

- [Discord](https://discord.com/invite/V7hgKf6NWf)
- [Email](mailto:gabriel.begazo@cedelabs.io)

If you want to add a CEX, copy paste the `exchanges.example.ts` file to the `exchanges.ts` file and fill in the CEX
credentials.

And then change the `SELECTED_CEX` entry inside the `.env` file so every commands will run using the CEX you need.

Then link the local `sdk` package with to this project.
