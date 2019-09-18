const ethers = require("ethers");
const abi = require("../common/abi/documentStore.json");
const { INFURA_API_KEY } = require("../config");

const documentStore = async ({ network, contractAddress, method, args }) => {
  const provider = new ethers.providers.InfuraProvider(network, INFURA_API_KEY);
  const contract = new ethers.Contract(contractAddress, abi, provider);
  const result = await contract.functions[method](...args);
  return result;
};

module.exports = documentStore;
