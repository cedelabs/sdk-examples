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
            "exchangeInstanceId": "778115-811829-649110-196125-290862",
          },
          "transaction": {
            "amount": 12,
            "fee": {
              "amount": 1,
              "tokenSymbol": "USDT",
            },
            "status": "ok",
            "timestamp": 1698781449796,
            "tokenSymbol": "USDT",
            "transactionId": "1521877522438",
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
            "timestamp": 1698781449796,
            "tokenSymbol": "USDT",
            "transactionId": "1155864994358",
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
