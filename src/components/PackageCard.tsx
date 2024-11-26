import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatEther, parseAbi } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { contractConfig } from "../utils/abi";

const PackageCard = () => {
    const [stakeAmount, setStakeAmount] = useState<string>("");
    const { isConnected, address } = useAccount();
    const { data: hash, writeContract, error } = useWriteContract();

    // Read contract states
    const { data: stakedBalance } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: ["function stakedBalance(address) view returns (uint256)"],
        functionName: "stakedBalance",
        args: [address],
    });

    const handleStake = async () => {
        if (!stakeAmount) return;

        writeContract({
            address: contractConfig.address as `0x${string}`,
            abi: parseAbi(['function lockTokens(uint72 tokenAmount_, uint16 lockingPeriodInDays_)']),
            functionName: "lockTokens",
            args: [BigInt(1), Number(1)],
        });
        setStakeAmount("");
    };

    const handleUnstake = async () => {
        writeContract({
            address: contractConfig.address as `0x${string}`,
            abi: ["function unstake()"],
            functionName: "unstake",
        });
    };

    useEffect(() => {
        if (hash) {
            console.log("Transaction hash:", hash);
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
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            {isConnected ? (
                <div className="space-y-4">
                    <div className="p-4 bg-gray-100 rounded">
                        <p>Your Staked Balance:</p>
                        <p className="font-bold">{stakedBalance ? formatEther(BigInt(1)) : "0"} Tokens</p>
                    </div>

                    <div className="space-y-2">
                        <input
                            type="number"
                            value={stakeAmount}
                            onChange={(e) => setStakeAmount(e.target.value)}
                            placeholder="Amount to stake"
                            className="w-full p-2 border rounded"
                        />
                        <button
                            onClick={handleStake}
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Stake Tokens
                        </button>
                    </div>

                    <button
                        onClick={handleUnstake}
                        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                    >
                        Unstake Tokens
                    </button>
                </div>
            ) : (
                <p>Please connect your wallet to stake tokens</p>
            )}
        </div>
    );
};

export default PackageCard;
