<h1 align="center">
    <b>Cede Playground SDK</b>
</h1>

<p align="center">
  <img src="https://sdk.cede.store/sdk-banner.svg" alt="Cede SDK">
</p>

Cede SDK is a centralized exchange (CEX) connectivity solution that unifies access to multiple CEX APIs. At present, we
support connections to 15 CEXs using both API keys and OAuth. This SDK enables B2B stakeholders to effortlessly
incorporate features like account balances, withdrawals, transaction histories, trades, and public data.

The Cede CLI is a developer tool to help you build, test, and manage your integration with CEXs through Cede SDK directly from the command line.

## Installation

**I. Demo** - If you want to try the SDK without having the `clientId`, you can install it with a single command:

```
curl -sSL https://raw.githubusercontent.com/cedelabs/sdk-examples/refs/heads/master/install.sh | bash
```

In the public version of the SDK, exchanges are mocked. You don't need to provide API keys to test or start the
integration.

**II. Production** - If you have the `clientId` and wish to interact with real exchange APIs, follow these steps:

1. Install the playground and the SDK:

```
git clone https://github.com/cedelabs/sdk-examples
cd sdk-examples
yarn
./switchToProd.sh
```

2. You'll also need to copy and paste the `exchanges.example.ts` file to `exchanges.ts` with your API keys.

3. You can specify the exchange and the `clientId` you want to use in `config.ts` or directly in CLI.

In the public version of the SDK, exchanges are mocked. You don't need to provide API keys to test or start the
integration.

If `./switchToProd.sh` didn't work, you can install manually the production SDK by doing the following:

- Install the private `@cedelabs-private/sdk` package
- Replace the `"@cedelabs/demo-sdk"` in `./sdk.ts` with `"@cedelabs-private/sdk"`.

## Commands

Each command file is located inside the corresponding use case folder: authentication, balances, deposit, exchange,
prices, trade, withdraw.

You can use the `yarn start` command to launch the CLI.

```js
yarn start
```

Then, follow the menu to execute any method, switch the mode, or change the exchange.

## Features

You will find supported features in the tables below. For more detailed documentation, please visit
https://docs-sdk.cede.store/documentation/general-info.

### Authentication

To authenticate your requests, you need to register an exchange instance and provide credentials for future requests.
You can register it using either an API key pair (apiKey and secretKey) or an OAuth key pair (accessToken and
refreshToken). If you're in "demo" mode, providing keys is not necessary.

| Feature              | Method                     | Description                                                                                                                          |
| -------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| register an exchange | `registerExchangeInstance` | Creates an exchange instance with the provided credentials (API keys or OAuth tokens).                                               |
| remove an exchange   | `removeExchangeInstance`   | Removes an exchange instance, deleting API keys from memory, revoking OAuth tokens, etc.                                             |
| exchange registered  | `isRegistered`             | Checks if the exchange instance is already registered.                                                                               |
| OAuth URL            | `getOAuthUrl`              | Provides the URL of the exchange to initiate the OAuth flow. After redirection, you will be able to retrieve the authorization code. |
| Get OAuth tokens     | `getOAuthTokens`           | After obtaining the authorization code, call this method to retrieve the access and refresh tokens.                                  |

### Balances and other data

| Feature             | Method                  | Description                                                                                                                         |
| ------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| balances            | `getBalances`           | Provides balances by wallet type (spot, futures, margin, etc.). You can find the supported wallet types in `getSupportedExchanges`. |
| prices              | `getPrices`             | Provides prices in USD for all tokens supported by the SDK.                                                                         |
| supported exchanges | `getSupportedExchanges` | Lists all supported exchanges along with their metadata.                                                                            |

### Withdrawal use case

| Feature               | Method                    | Description                                                                                                                                                      |
| --------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| withdrawal networks   | `getWithdrawableNetworks` | Provides a list of networks available for withdrawing a specific token on a given exchange.                                                                      |
| withdrawable tokens   | `getWithdrawableBalances` | Provides balances of tokens available for withdrawal from one or more wallet types.                                                                              |
| prepare a withdrawal  | `prepareWithdrawal`       | Prepares a withdrawal. More info: https://sdk.cede.store/documentation/api-reference/withdraw#prepare-withdrawal                                                 |
| create a withdrawal   | `createWithdrawal`        | Sends a withdrawal request to the exchange. If more than one wallet type is used, the SDK executes an internal transfer to have enough funds for the withdrawal. |
| retrieve a withdrawal | `getWithdrawalById`       | Retrieves a withdrawal.                                                                                                                                          |

### Deposit use case

| Feature            | Method                 | Description                                                                                |
| ------------------ | ---------------------- | ------------------------------------------------------------------------------------------ |
| deposit networks   | `getNetworks`          | Provides a list of networks available for depositing a specific token on a given exchange. |
| depositable tokens | `getDepositableTokens` | Provides a list of tokens available for deposit on a given exchange.                       |
| deposit address    | `getDepositAddress`    | Retrieves the deposit address for a specific token and network on a given exchange.        |

### Trade use case

| Feature               | Method           | Description                                                                                                          |
| --------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| market pairs          | `getMarketPairs` | Provides a list of existing market pairs.                                                                            |
| market rate           | `getMarketRate`  | Provides the best buy and sell prices from the order book, useful for estimating `amountOut`.                        |
| minimum trade amounts | `getMinAmounts`  | Provides minimum trade amounts.                                                                                      |
| prepare an order      | `prepareOrder`   | Estimates the exchange fee and the amount to be received. Provides the object to pass to the `createOrder` function. |
| create an order       | `createOrder`    | Send an order to the exchange.                                                                                       |
| update an order       | `updateOrder`    | Updates the open order (type, side, amount, price).                                                                  |
| open orders           | `getOpenOrders`  | Lists all open orders.                                                                                               |
| retrieve an order     | `getOrder`       | Retrieves an order.                                                                                                  |

### Sub Accounts

| Feature                                 | Method                  | Description                                                         |
| --------------------------------------- | ----------------------- | ------------------------------------------------------------------- |
| list sub-accounts                       | `getSubAccounts`        | Provides a list of available sub-accounts.                          |
| retrieve sub-account balance            | `getSubAccountBalances` | Provides balances of a given sub-account.                           |
| transfer between master and sub-account | `subAccountTransfer`    | Transfers from master to sub-account or from sub-account to master. |

## Tests

The tests actually rely on the mocked coinbase CEX using the demo package and can fail in case you change the CEX or the
content of the `executeMethod` function.

## Usage with a real CEX

First, install the private package @cedelabs-private/sdk. To obtain access, please contact the Cede Labs team:

- [Discord](https://discord.com/invite/V7hgKf6NWf)
- [Email](mailto:gabriel.begazo@cedelabs.io)

If you want to add a CEX, copy paste the `exchanges.example.ts` file to the `exchanges.ts` file and fill in the CEX
credentials.

Then link the local `sdk` package with to this project.
