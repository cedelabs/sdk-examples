import { initExchange } from "../utils";
import { executeMethod } from "./getOauthUrl";

describe("getOAuthUrl", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return an object with the url", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "url": "https://cedelabs.io/",
      }
    `);
  });
});
