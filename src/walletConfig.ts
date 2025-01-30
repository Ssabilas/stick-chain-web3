import { http, createConfig } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { metaMask, coinbaseWallet } from "wagmi/connectors";

// const projectId = "<WALLETCONNECT_PROJECT_ID>";

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [metaMask(), coinbaseWallet()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
