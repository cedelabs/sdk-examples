import { initExchange } from "../utils";
import { executeMethod } from "./prepareOrder";

describe("prepareOrder", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should prepare order", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
