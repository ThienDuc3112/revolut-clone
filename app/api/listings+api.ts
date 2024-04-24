import { ExpoResponse, RequestHandler } from "expo-router/server";

const API_KEY = process.env.CRYPTO_API_KEY!;

export const GET: RequestHandler = async (req) => {
  const limit = req.expoUrl.searchParams.get("limit") || 5;

  // const res = await fetch(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}&convert=SGD`,
  //   {
  //     headers: {
  //       "X-CMC_PRO_API_KEY": API_KEY,
  //     },
  //   }
  // );

  // const data = await res.json();
  // return ExpoResponse.json(data.data);
  return ExpoResponse.json(data);
};

const data = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    slug: "bitcoin",
    num_market_pairs: 11018,
    date_added: "2010-07-13T00:00:00.000Z",
    tags: [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channel",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "galaxy-digital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "bitcoin-ecosystem",
      "ftx-bankruptcy-estate",
    ],
    max_supply: 21000000,
    circulating_supply: 19689503,
    total_supply: 19689503,
    infinite_supply: false,
    platform: null,
    cmc_rank: 1,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-04-24T10:33:00.000Z",
    quote: {
      SGD: {
        price: 90388.21875047042,
        volume_24h: 32599281107.942333,
        volume_change_24h: -2.8838,
        percent_change_1h: -0.06684992,
        percent_change_24h: 0.26557451,
        percent_change_7d: 5.32423451,
        percent_change_30d: -1.11476196,
        percent_change_60d: 29.93518567,
        percent_change_90d: 65.98763311,
        market_cap: 1779699104252.0435,
        market_cap_dominance: 53.2363,
        fully_diluted_market_cap: 1898152593759.8801,
        tvl: null,
        last_updated: "2024-04-24T10:33:03.000Z",
      },
    },
  },
  {
    id: 1027,
    name: "Ethereum",
    symbol: "ETH",
    slug: "ethereum",
    num_market_pairs: 8861,
    date_added: "2015-08-07T00:00:00.000Z",
    tags: [
      "pos",
      "smart-contracts",
      "ethereum-ecosystem",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "hashkey-capital-portfolio",
      "kenetic-capital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "injective-ecosystem",
      "layer-1",
      "ftx-bankruptcy-estate",
    ],
    max_supply: null,
    circulating_supply: 122047160.17324796,
    total_supply: 122047160.17324796,
    infinite_supply: true,
    platform: null,
    cmc_rank: 2,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-04-24T10:33:00.000Z",
    quote: {
      SGD: {
        price: 4441.624201068561,
        volume_24h: 15419688509.112307,
        volume_change_24h: 7.7035,
        percent_change_1h: 0.33583937,
        percent_change_24h: 2.64322091,
        percent_change_7d: 6.11870982,
        percent_change_30d: -5.83042197,
        percent_change_60d: 10.14883725,
        percent_change_90d: 46.67449227,
        market_cap: 542087620297.18915,
        market_cap_dominance: 16.2155,
        fully_diluted_market_cap: 542087620297.18835,
        tvl: null,
        last_updated: "2024-04-24T10:33:03.000Z",
      },
    },
  },
  {
    id: 825,
    name: "Tether USDt",
    symbol: "USDT",
    slug: "tether",
    num_market_pairs: 83893,
    date_added: "2015-02-25T00:00:00.000Z",
    tags: [
      "payments",
      "stablecoin",
      "asset-backed-stablecoin",
      "avalanche-ecosystem",
      "solana-ecosystem",
      "arbitrum-ecosytem",
      "moonriver-ecosystem",
      "injective-ecosystem",
      "bnb-chain",
      "usd-stablecoin",
      "optimism-ecosystem",
    ],
    max_supply: null,
    circulating_supply: 110463515619.00531,
    total_supply: 112936550461.62344,
    platform: {
      id: 1027,
      name: "Ethereum",
      symbol: "ETH",
      slug: "ethereum",
      token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
    infinite_supply: true,
    cmc_rank: 3,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-04-24T10:33:00.000Z",
    quote: {
      SGD: {
        price: 1.3609196903898837,
        volume_24h: 70864896398.4881,
        volume_change_24h: 10.1199,
        percent_change_1h: -0.01411916,
        percent_change_24h: -0.04730274,
        percent_change_7d: -0.07283872,
        percent_change_30d: -0.05933165,
        percent_change_60d: 0.01891784,
        percent_change_90d: 0.03001779,
        market_cap: 150331973475.5948,
        market_cap_dominance: 4.4969,
        fully_diluted_market_cap: 153697575287.93,
        tvl: null,
        last_updated: "2024-04-24T10:33:03.000Z",
      },
    },
  },
  {
    id: 1839,
    name: "BNB",
    symbol: "BNB",
    slug: "bnb",
    num_market_pairs: 2151,
    date_added: "2017-07-25T00:00:00.000Z",
    tags: [
      "marketplace",
      "centralized-exchange",
      "payments",
      "smart-contracts",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "bnb-chain",
      "layer-1",
      "sec-security-token",
      "alleged-sec-securities",
      "celsius-bankruptcy-estate",
    ],
    max_supply: null,
    circulating_supply: 147588373.79354745,
    total_supply: 147588373.79354745,
    infinite_supply: false,
    platform: null,
    cmc_rank: 4,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-04-24T10:33:00.000Z",
    quote: {
      SGD: {
        price: 836.0652987197366,
        volume_24h: 1876171915.8250477,
        volume_change_24h: 23.5331,
        percent_change_1h: 0.63768946,
        percent_change_24h: 0.65649621,
        percent_change_7d: 13.46804777,
        percent_change_30d: 4.88282731,
        percent_change_60d: 61.50909079,
        percent_change_90d: 108.99207969,
        market_cap: 123393517823.26239,
        market_cap_dominance: 3.6916,
        fully_diluted_market_cap: 123393517823.26688,
        tvl: null,
        last_updated: "2024-04-24T10:33:03.000Z",
      },
    },
  },
  {
    id: 5426,
    name: "Solana",
    symbol: "SOL",
    slug: "solana",
    num_market_pairs: 655,
    date_added: "2020-04-10T00:00:00.000Z",
    tags: [
      "pos",
      "platform",
      "solana-ecosystem",
      "cms-holdings-portfolio",
      "kenetic-capital-portfolio",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "okx-ventures-portfolio",
      "layer-1",
      "ftx-bankruptcy-estate",
      "sec-security-token",
      "alleged-sec-securities",
      "cmc-crypto-awards-2024",
    ],
    max_supply: null,
    circulating_supply: 447045634.727352,
    total_supply: 574601730.7411923,
    infinite_supply: true,
    platform: null,
    cmc_rank: 5,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-04-24T10:33:00.000Z",
    quote: {
      SGD: {
        price: 214.69419564384992,
        volume_24h: 4287842913.421777,
        volume_change_24h: 25.5391,
        percent_change_1h: 0.27358078,
        percent_change_24h: 1.93215845,
        percent_change_7d: 14.20716288,
        percent_change_30d: -17.49921005,
        percent_change_60d: 54.07448239,
        percent_change_90d: 81.01756493,
        market_cap: 95978102963.8832,
        market_cap_dominance: 2.8711,
        fully_diluted_market_cap: 123363656397.04666,
        tvl: null,
        last_updated: "2024-04-24T10:33:03.000Z",
      },
    },
  },
];
