import { initExchange } from "../utils";
import { executeMethod } from "./createWithdrawal";

describe("createWithdrawal", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should create withdrawal", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "from": {
          "exchangeAccount": {
            "exchangeId": "bitfinex",
            "exchangeInstanceId": "224733-283220-103608-518205-136531",
          },
          "transaction": {
            "amount": 12,
            "fee": {
              "amount": 1,
              "tokenSymbol": "USDT",
            },
            "status": "ok",
            "timestamp": 1698779452875,
            "tokenSymbol": "USDT",
            "transactionId": "353337180071",
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
            "timestamp": 1698779452875,
            "tokenSymbol": "USDT",
            "transactionId": "84993205205",
          },
          "wallet": {
            "depositAddress": "0xundefined",
            "walletType": "spot",
          },
        },
        "type": "withdrawal",
      }
    `);
  });
});
