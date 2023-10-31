import { initExchange } from "../utils";
import { executeMethod } from "./createWithdrawal";

describe("createWithdrawal", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should create withdrawal", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(
      {
        from: {
          exchangeAccount: {
            exchangeId: "bitfinex",
            exchangeInstanceId: expect.any(String),
          },
          transaction: {
            amount: 12,
            fee: {
              amount: 1,
              tokenSymbol: "USDT",
            },
            status: "ok",
            timestamp: expect.any(Number),
            tokenSymbol: "USDT",
            transactionId: expect.any(String),
          },
          wallet: {
            depositAddress: "0x0_DEMO_ADDRESS",
            walletType: "spot",
          },
        },
        to: {
          account: {
            address: "0x123456789",
            network: "ETH",
          },
          transaction: {
            amount: 12,
            fee: {
              amount: 1,
              tokenSymbol: "USDT",
            },
            status: "ok",
            timestamp: expect.any(Number),
            tokenSymbol: "USDT",
            transactionId: expect.any(String),
          },
          wallet: {
            depositAddress: "0xundefined",
            walletType: "spot",
          },
        },
        type: "withdrawal",
      },
      `
      {
        "from": {
          "exchangeAccount": {
            "exchangeId": "bitfinex",
            "exchangeInstanceId": Any<String>,
          },
          "transaction": {
            "amount": 12,
            "fee": {
              "amount": 1,
              "tokenSymbol": "USDT",
            },
            "status": "ok",
            "timestamp": Any<Number>,
            "tokenSymbol": "USDT",
            "transactionId": Any<String>,
          },
          "wallet": {
            "depositAddress": "0x0_DEMO_ADDRESS",
            "walletType": "spot",
          },
        },
        "to": {
          "account": {
            "address": "0x123456789",
            "network": "ETH",
          },
          "transaction": {
            "amount": 12,
            "fee": {
              "amount": 1,
              "tokenSymbol": "USDT",
            },
            "status": "ok",
            "timestamp": Any<Number>,
            "tokenSymbol": "USDT",
            "transactionId": Any<String>,
          },
          "wallet": {
            "depositAddress": "0xundefined",
            "walletType": "spot",
          },
        },
        "type": "withdrawal",
      }
    `
    );
  });
});
