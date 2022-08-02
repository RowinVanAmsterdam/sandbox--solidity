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

### `ts-node deploy.ts`

Runs the deploy script.

### `ts-node utils/encryptKey.ts   `

Launches the script to encrypt a private key. The values (`privateKey` and `privateKeyPassword`) are stored in the `.env` file, but can be removed after privatekey is encrypted. The password is used to decrypt the key when running the `deploy.ts` script, but for now the deploy script will look directly for the private key in the `.env` file. 

If you want to make the deploy script use the encrypted key, you need to uncomment the following lines in the `deploy.ts` file.: 
```typescript
    // const privateKeyPassword = process.env.PRIVATE_KEY_PASSWORD!;
    
    // const encryptedJson = fs.readFileSync("./generated/.encryptedKey.json", "utf-8");
    // let wallet = new (ethers.Wallet.fromEncryptedJsonSync as any)(encryptedJson, privateKeyPassword);
    // wallet = await wallet.connect(provider);

```

> Please note, if you don't want to have the password in the `.env` file, you can also call the script with the password as an argument: `PRIVATE_KEY_PASSWORD=password ts-node deploy.ts`. B
