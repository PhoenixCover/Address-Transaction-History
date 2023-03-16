require('dotenv').config();
const { Alchemy, Network, AssetTransfersCategory } = require('alchemy-sdk');

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your desired network.
};

const alchemy = new Alchemy(settings);
async function main() {
  const getTransfers = await alchemy.core.getAssetTransfers({
    fromBlock: '0x0',
    toBlock: 'latest',
    toAddress: '0x616ed054e0e0fdbfCAd3fA2F42daeD3d7d4eE448',
    excludeZeroValue: true,
    category: [AssetTransfersCategory.ERC721],
  });
  console.log(getTransfers);
}

main();
