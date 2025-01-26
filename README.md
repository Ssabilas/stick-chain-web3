
![Logo](https://github.com/zackyfachrur/stick-chain-web3/blob/main/public/assets/Logo.png)
## About This Project
**IND** ~ Stick Chain dirancang untuk memudahkan pengguna dalam melakukan transaksi menggunakan mata uang kripto secara langsung, tanpa perlu mengonversinya ke mata uang negara seperti Rupiah, USD, dan lainnya.

**ENG** ~ Stick Chain is designed to make it easier for users to make transactions using cryptocurrencies directly, without the need to convert them to national currencies such as Rupiah, USD, and others.




## Optimizations

src/main.tsx *as a Metamask Provider*

src/RouterApp.tsx *as a Router*


src/View/* *as a splitting code for easy maintenance*

src/Utils/* *as a Encrypt and Decrypt URL*

src/Pages/* *as a wrapper pages of code splitting*

src/JSON/* *as a code splitting support*

src/CSS/* *for Tailwind CSS File



## Installation

#### 1. Clone this repo
```bash
 git clone https://github.com/zackyfachrur/stick-chain-web3.git
```

#### 2. Install stick-chain-web3

```bash
 cd stick-chain-web3
 npm install 
```
#### 3. API Setup
https://docs.metamask.io/services/get-started/infura/
```js
createRoot(document.getElementById("root")!).render(
  <MetaMaskProvider
    sdkOptions={{
      dappMetadata: {
        name: "Example React Dapp",
        url: window.location.href,
      },
      // Your API Key from Metamask Infura
      infuraAPIKey: import.meta.env.YOUR_API_KEY,
    }}
  >
    <StrictMode>
      <RouterApps />
    </StrictMode>
  </MetaMaskProvider>
);
```

#### 4. Crypto JS Setup
```js
// Your Secret KEY (Create in ENV File)
const SECRET_KEY = import.meta.env.REACT_APP_WEB_URL_KEY;

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (cipherText: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Decryption failed:", error);
    return "";
  }
};
```
## Tech Stack

**Client:** React, Typescript, TailwindCSS

**Server:** Node JS


## Feedback

If you have any feedback, please reach out to us at mochzackyfa@gmail.com

