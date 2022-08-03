# Sandbox project: Solidity

A playground project I use to discover new techniques, tools or just to try things out.

## Techstack

- [Solidity](https://solidity.readthedocs.io/en/v0.5.3/)
- [Truffle](https://truffleframework.com/)
- [Ganache](https://truffleframework.com/ganache)
- [ethers.js](https://docs.ethers.io/ethers.js/html/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node](https://typestrong.org/ts-node/)
- [Prettier](https://prettier.io/)
- [dotenv](https://github.com/motdotla/dotenv)

## Available Scripts

In the project directory, you can run:

### `compile`

Compiles the smart contracts using solc-js.

### `ts-node deploy.ts`

Runs the deploy script.

#### Deploy on a local blockchain
- Create a `.env` file in the root of the project
- Add the following variables to the `.env` file
  - `PRIVATE_KEY` - Your private key from your wallet (e.g. Ganache)
  - `RPC_URL` - Your RPC SERVER URL (e.g. Ganache)
- Run `ts-node deploy.ts`
#### Deploy on a testnet
- Create a `.env` file in the root of the project
- Add the following variables to the `.env` file
  - `PRIVATE_KEY` - Your private key from your wallet (e.g. Metamask)
  - `RPC_URL` - Your RPC / HTTPS URL (e.g. Alchemy)
- Run `ts-node deploy.ts`

### `ts-node utils/encryptKey.ts   `

Launches the script to encrypt a private key. The values (`privateKey` and `privateKeyPassword`) are stored in the `.env` file, but can be removed after privatekey is encrypted. The password is used to decrypt the key when running the `deploy.ts` script, but for now the deploy script will look directly for the private key in the `.env` file. 

If you want to make the deploy script use the encrypted key, you need to uncomment the following lines in the `deploy.ts` file.: 
```typescript
    // const privateKeyPassword = process.env.PRIVATE_KEY_PASSWORD!;
    
    // const encryptedJson = fs.readFileSync("./generated/.encryptedKey.json", "utf-8");
    // let wallet = new (ethers.Wallet.fromEncryptedJsonSync as any)(encryptedJson, privateKeyPassword);
    // wallet = await wallet.connect(provider);

```

> Please note, if you don't want to have the password in the `.env` file, you can also call the script with the password as an argument: `PRIVATE_KEY_PASSWORD=password ts-node deploy.ts`.

## Local environment file should have the following variables:
- `PRIVATE_KEY` - Your private key from your wallet (e.g. Ganache) to deploy the contract
- `PRIVATE_KEY_PASSWORD` - A password to decrypt the private key
- `RPC_URL` - Your RPC / HTTPS URL (e.g. Alchemy)