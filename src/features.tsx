import Abi from "./abi_json/abi.json";
const { ethers } = require("ethers");
// let window:Window;
declare global {
  interface Window {
    ethereum: import('ethers').providers.ExternalProvider;
  }
}
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract_address = "0xDD2Ec3E684Bc770e132631904a099201438C3533";
const abi = Abi.abi;
let deadline = 0;
let price = 0;
let requests;
const project_details = new ethers.Contract(contract_address, abi, provider);
export async function connectMetamask() {
  await provider.send("eth_requestAccounts", []);
}

// export async function getBalance() {
//   const balance = await signer.getBalance();
//   const convertToEth = 1e18;
//   // console.log(
//   //   "account balance in ether is :",
//   //   balance.toString() / convertToEth
//   // );
// }

export async function getAssignedProjectDetails() {
  deadline = await project_details.getDeadline();
  price = await project_details.getPrice();
  let eth_price = ethers.utils.formatEther(price);
  return { deadline, eth_price };
}
export async function view_Requests() {
  requests = await project_details.getAllRequests();
  return requests;
}
export async function create_request(title: String, price: Number) {
  const StageChange = project_details.connect(signer);
  const dum = await StageChange.createRequest(title, price);
  return dum;
}
export async function Unlock_request(index: Number) {
  const stageChange = project_details.connect(signer);
  const dum = await stageChange.unlockRequest(index);
  return dum;
}
export async function withdraw() {
  console.log("withdraw ");
  const StageChange = project_details.connect(signer);
  const dum = await StageChange.withdraw();
  return dum;
}
export async function pay_request(index: Number) {
  console.log("pay ");
  const StageChange = project_details.connect(signer);
  const dum = await StageChange.payRequest(index);
  return dum;
}
