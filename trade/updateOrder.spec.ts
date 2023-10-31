import { initExchange } from "../utils";
import { executeMethod } from "./updateOrder";

describe.skip("updateOrder", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should update order", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
