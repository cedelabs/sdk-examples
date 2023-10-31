import { initExchange } from "../utils";
import { executeMethod } from "./createOrder";

describe("createOrder", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should create order", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "amount": 0.1,
        "fee": {
          "amount": 0.1,
          "tokenSymbol": "ETH",
        },
        "filled": 0.1,
        "id": "777326456345",
        "pairSymbol": "ETH/USDT",
        "price": 0.1,
        "side": "buy",
        "status": "open",
        "timestamp": 1698781449596,
        "type": "market",
      }
    `);
  });
});
