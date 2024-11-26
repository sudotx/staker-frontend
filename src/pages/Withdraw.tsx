import { formatEther } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";

const Withdraw = () => {
    const { address } = useAccount();
    const { writeContract } = useWriteContract();

    // Read current stake details
    const { data: currentStake } = useReadContract({
        address: "YOUR_CONTRACT_ADDRESS" as `0x${string}`,
        abi: ["function getStakeDetails(address) view returns (uint256, uint256)"],
        functionName: "getStakeDetails",
        args: [address],
    }) as unknown as { data: [bigint, bigint] };

    // Read lock period remaining
    const { data: lockTimeRemaining } = useReadContract({
        address: "YOUR_CONTRACT_ADDRESS" as `0x${string}`,
        abi: ["function getLockTimeRemaining(address) view returns (uint256)"],
        functionName: "getLockTimeRemaining",
        args: [address],
    }) as unknown as { data: bigint }

    const handleWithdraw = async () => {
        writeContract({
            address: "YOUR_CONTRACT_ADDRESS" as `0x${string}`,
            abi: ["function withdraw()"],
            functionName: "withdraw",
        });
    };

    return (
        <div>
            <div className="max-w-2xl mx-auto mt-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg mb-6">
                    <h3 className="text-primary text-xl font-bold mb-4">Current Stake Details</h3>
                    <p className="text-white">
                        Staked Amount: {currentStake ? formatEther(currentStake[0]) : "0"} Tokens
                    </p>
                    <p className="text-white mt-2">
                        Stake Date: {currentStake ? new Date(Number(currentStake[1]) * 1000).toLocaleDateString() : "N/A"}
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg mb-6">
                    <h3 className="text-primary text-xl font-bold mb-4">Lock Period Status</h3>
                    <p className="text-white">
                        Time Remaining: {lockTimeRemaining ? `${Number(lockTimeRemaining) / 86400} days` : "0 days"}
                    </p>
                </div>

                <button
                    onClick={handleWithdraw}
                    className="w-full text-primary border-2 rounded-full px-8 py-2 border-primary hover:bg-primary hover:text-white transition-colors"
                >
                    {Number(lockTimeRemaining) > 0 ? "Withdraw Early (with penalty)" : "Withdraw Tokens"}
                </button>
            </div>
        </div>
    );
};

export default Withdraw;
