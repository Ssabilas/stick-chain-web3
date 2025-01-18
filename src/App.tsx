import { useSDK } from "@metamask/sdk-react";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState<string>();
  const { sdk, connected, chainId } = useSDK();

  const connect = async () => {
    try {
      const account = await sdk?.connect();
      setAccount(account?.[0]);
    } catch (err) {
      console.warn("Failed to Connect", err);
    }
  };

  return (
    <div className="App">
      <button style={{ padding: 10, margin: 10 }} onClick={connect}>
        Connect
      </button>
      {connected && (
        <div>
          <>
            {chainId && `Connected chain: ${chainId}`}
            <p></p>
            {account && `Connected account: ${account}`}
          </>
        </div>
      )}
    </div>
  );
}

export default App;
