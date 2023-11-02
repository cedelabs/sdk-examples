import { initExchange } from "../utils";
import { executeMethod } from "./getOpenOrders";
import { executeMethod as createOrder } from "./createOrder";

let exchangeInstanceId: string;

describe("getOpenOrders", () => {
  beforeAll(async () => {
    exchangeInstanceId = await initExchange();
  });

  it("it should return open orders", async () => {
    await createOrder(exchangeInstanceId);

    const result = await executeMethod(exchangeInstanceId);

    expect(result).toMatchInlineSnapshot(
      [
        {
          amount: 0.1,
          fee: {
            amount: 0.1,
            tokenSymbol: "ETH",
          },
          filled: 0.1,
          id: expect.any(String),
          pairSymbol: "ETH/USDT",
          price: 0.1,
          side: "buy",
          status: "open",
          timestamp: expect.any(Number),
          type: "market",
        },
      ],
      `
      [
        {
          "amount": 0.1,
          "fee": {
            "amount": 0.1,
            "tokenSymbol": "ETH",
          },
          "filled": 0.1,
          "id": Any<String>,
          "pairSymbol": "ETH/USDT",
          "price": 0.1,
          "side": "buy",
          "status": "open",
          "timestamp": Any<Number>,
          "type": "market",
        },
      ]
    `
    );
  });
});
