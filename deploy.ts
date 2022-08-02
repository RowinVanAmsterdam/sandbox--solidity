import {ethers} from "ethers";
import fs from "fs";
import 'dotenv/config';

const rpcServer = process.env.RPC_URL!;
const privateKey = process.env.PRIVATE_KEY!;
// const privateKeyPassword = process.env.PRIVATE_KEY_PASSWORD!;
const abiPath = "./generated/contracts_SimpleStorage_sol_SimpleStorage.abi";
const binaryPath = "./generated/contracts_SimpleStorage_sol_SimpleStorage.bin";

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(rpcServer);
    const wallet = new ethers.Wallet(privateKey, provider);
    // const encryptedJson = fs.readFileSync("./generated/.encryptedKey.json", "utf-8");
    // let wallet = new (ethers.Wallet.fromEncryptedJsonSync as any)(encryptedJson, privateKeyPassword);
    // wallet = await wallet.connect(provider);
    const abi = fs.readFileSync(abiPath, "utf-8");
    const binary = fs.readFileSync(binaryPath, "utf-8");

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("deploying contract, please wait...");
    const contract = await contractFactory.deploy();
    await contract.deployTransaction.wait(1);
    console.log("Contract deployed at", contract.address);


    // Contract functions
    const currentFavoriteNumber = await contract.retrieve();
    console.log(`Current Favorite Number: ${currentFavoriteNumber.toString()}`);

    const transactionResponse = await contract.store(10);
    await transactionResponse.wait(1);
    const updatedFavoriteNumber = await contract.retrieve();
    console.log(`Updated Favorite Number: ${updatedFavoriteNumber.toString()}`);


};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
