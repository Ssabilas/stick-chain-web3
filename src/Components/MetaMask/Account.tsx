import { useAccount, useDisconnect } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  // const { data: ensName } = useEnsName({ address });

  return (
    <div className="bg-colorGrayDark/50 border-2 border-colorGrayDark rounded-xl flex flex-col fixed justify-center items-center px-5 py-5 gap-4">
      <h2 className="text-2xl font-bold">Your Account</h2>
      <i className="ri-user-fill text-2xl"></i>
      <p>{address?.slice(0, 6)}</p>
      <button
        onClick={() => disconnect()}
        className="px-5 py-2 bg-colorRed/30 rounded-xl hover:bg-colorRed/50"
      >
        Disconnect
      </button>
    </div>
  );
}
