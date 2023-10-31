import { initExchange } from "../utils";
import { executeMethod } from "./getOrder";

describe.skip("getOrder", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return get order", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
