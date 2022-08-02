import {ethers} from "ethers";
import fs from "fs";
import 'dotenv/config';

const privateKey = process.env.PRIVATE_KEY!;
const privateKeyPassword = process.env.PRIVATE_KEY_PASSWORD!;

const encryptKey = async () => {
    const wallet = new ethers.Wallet(privateKey);
    const encryptedJsonKey = await wallet.encrypt(privateKeyPassword, privateKey);
    fs.writeFileSync("./generated/.encryptedKey.json", encryptedJsonKey);
}

encryptKey()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
