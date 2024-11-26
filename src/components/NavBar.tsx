import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAccount, useDisconnect, useWriteContract } from "wagmi";

const Navbar = () => {
    const { isConnected, address } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: hash, error } = useWriteContract()

    useEffect(() => {
        if (hash) {
            console.log("Transaction hash:", hash);
            console.log("Address:", address);
            toast.success(
                <div>
                    Transaction sent!
                    <a
                        href={`https://testnet.bscscan.com/tx/${hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline ml-1"
                    >
                        View on BscScan
                    </a>
                </div>
            );
        }
    }, [hash]);

    useEffect(() => {
        if (error) {
            toast.error(error.name)
        }
    }, [error])

    return (
        <div className="fixed top-0 w-full flex justify-between py-2 px-3 md:py-10 md:px-28 backdrop-blur-md z-40">
            <div className="my-auto">
                <div className="text-2xl md:text-4xl my-auto font-bold">
                </div>
            </div>
            <div className="gap-2 flex">
                {
                    isConnected ? (
                        <button onClick={() => disconnect()} className="outline-none text-white scale-[1.01] rounded-full px-8 py-2 bg-primary">Disconnect</button>
                    ) : (
                        <ConnectButton />
                    )
                }
            </div>
        </div>
    )
}

export default Navbar