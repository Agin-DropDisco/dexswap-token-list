const { version } = require("../package.json");

const mainnet = require("./tokens/mainnet.json");
const rinkeby = require("./tokens/rinkeby.json");
const matic = require("./tokens/matic.json");
const xdai = require("./tokens/xdai.json");
module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "DEXSwap Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/Agin-DropDisco/dexswap-token-logo/logo-dexswap/dexSwap.png",
    keywords: ["DEXSwap", "matic", "ethereum", "moonbeam"],
    tokens: [
      ...mainnet,
      ...rinkeby,
      ...matic,
      ...xdai,
      // ...moonbase,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
