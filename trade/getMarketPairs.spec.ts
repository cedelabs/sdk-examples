import { initExchange } from "../utils";
import { executeMethod } from "./getMarketPairs";

describe("getMarketPairs", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return market pairs", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "active": true,
          "base": "BTC",
          "limits": {
            "amount": {
              "max": 9000,
              "min": 0.00001,
            },
            "cost": {
              "min": 10,
            },
            "price": {
              "max": 1000000,
              "min": 0.01,
            },
          },
          "maker": 0.001,
          "pairSymbol": "BTC/USDT",
          "precision": {
            "amount": 5,
            "base": 0,
            "price": 2,
            "quote": 0,
          },
          "quote": "USDT",
          "taker": 0.001,
          "type": "spot",
        },
        {
          "active": true,
          "base": "ETH",
          "limits": {
            "amount": {
              "max": 9000,
              "min": 0.0001,
            },
            "cost": {
              "min": 10,
            },
            "price": {
              "max": 1000000,
              "min": 0.01,
            },
          },
          "maker": 0.001,
          "pairSymbol": "ETH/USDT",
          "precision": {
            "amount": 4,
            "base": 0,
            "price": 2,
            "quote": 0,
          },
          "quote": "USDT",
          "taker": 0.001,
          "type": "spot",
        },
        {
          "active": true,
          "base": "LINK",
          "limits": {
            "amount": {
              "max": 90000,
              "min": 0.01,
            },
            "cost": {
              "min": 5,
            },
            "price": {
              "max": 10000,
              "min": 0.001,
            },
          },
          "maker": 0.001,
          "pairSymbol": "LINK/USDT",
          "precision": {
            "amount": 2,
            "base": 0,
            "price": 3,
            "quote": 0,
          },
          "quote": "USDT",
          "taker": 0.001,
          "type": "spot",
        },
        {
          "active": true,
          "base": "DOT",
          "limits": {
            "amount": {
              "max": 90000,
              "min": 0.01,
            },
            "cost": {
              "min": 5,
            },
            "price": {
              "max": 10000,
              "min": 0.001,
            },
          },
          "maker": 0.001,
          "pairSymbol": "DOT/USDT",
          "precision": {
            "amount": 2,
            "base": 0,
            "price": 3,
            "quote": 0,
          },
          "quote": "USDT",
          "taker": 0.001,
          "type": "spot",
        },
        {
          "active": true,
          "base": "BNB",
          "limits": {
            "amount": {
              "max": 900000,
              "min": 0.001,
            },
            "cost": {
              "min": 5,
            },
            "price": {
              "max": 100000,
              "min": 0.1,
            },
          },
          "maker": 0.001,
          "pairSymbol": "BNB/USDT",
          "precision": {
            "amount": 3,
            "base": 0,
            "price": 1,
            "quote": 0,
          },
          "quote": "USDT",
          "taker": 0.001,
          "type": "spot",
        },
        {
          "active": true,
          "base": "AVAX",
          "limits": {
            "amount": {
              "max": 90000,
              "min": 0.01,
            },
            "cost": {
              "min": 5,
            },
            "price": {
              "max": 10000,
              "min": 0.01,
            },
          },
          "maker": 0.001,
          "pairSymbol": "AVAX/USDT",
          "precision": {
            "amount": 2,
            "base": 0,
            "price": 2,
            "quote": 0,
          },
          "quote": "USDT",
          "taker": 0.001,
          "type": "spot",
        },
      ]
    `);
  });
});
