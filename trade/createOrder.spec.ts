import { initExchange } from "../utils";
import { executeMethod } from "./cancelOrder";

describe("createOrder", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should create order", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
