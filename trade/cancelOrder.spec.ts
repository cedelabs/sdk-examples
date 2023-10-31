import { initExchange } from "../utils";
import { executeMethod } from "./cancelOrder";

describe("cancelOrder", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should cancel order", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
