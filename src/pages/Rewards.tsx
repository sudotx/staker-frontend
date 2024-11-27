import { useEffect } from "react";
import toast from "react-hot-toast";
import { formatEther } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { contractConfig } from "../utils/abi";

const Rewards = () => {
    const { isConnected, address } = useAccount();
    const { writeContract, error } = useWriteContract();

    // Read rewards data
    const { data: earnedRewards } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: ["function getEarnedRewards(address) view returns (uint256)"],
        functionName: "getEarnedRewards",
        args: [address],
    }) as unknown as { data: bigint };

    const { data: vestingSchedule } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: ["function getVestingSchedule(address) view returns (uint256)"],
        functionName: "getVestingSchedule",
        args: [address],
    }) as unknown as { data: bigint };

    const { data: claimHistory } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: ["function getClaimHistory(address) view returns (uint256[])"],
        functionName: "getClaimHistory",
        args: [address],
    }) as unknown as { data: bigint[] };

    const handleClaimRewards = async () => {
        writeContract({
            address: contractConfig.address as `0x${string}`,
            abi: contractConfig.abi,
            functionName: "getRewards",
        });
    };

    useEffect(() => {
        if (!isConnected) return;
        if (error) {
            toast.error(error.message);
        }
    }, [error]);

    return (
        <div>
            <div className="py-20 md:py-32 px-3 overflow-y-auto h-screen w-full">
                <div>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {/* Earned Rewards Card */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <h3 className="text-primary text-xl font-bold mb-4">Earned Rewards</h3>
                            <p className="text-white">
                                Total Earned: {earnedRewards ? formatEther(earnedRewards) : "0"} Tokens
                            </p>
                            <button
                                onClick={handleClaimRewards}
                                className="mt-4 text-primary border-2 rounded-full px-8 py-2 border-primary"
                            >
                                Claim Rewards
                            </button>
                        </div>

                        {/* Vesting Schedule Card */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <h3 className="text-primary text-xl font-bold mb-4">Vesting Schedule</h3>
                            <p className="text-white">
                                Next Release: {vestingSchedule ? formatEther(vestingSchedule) : "0"} Tokens
                            </p>
                        </div>

                        {/* Release Tokens Card */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <h3 className="text-primary text-xl font-bold mb-4">Token Release</h3>
                            <p className="text-white">
                                Available to Release: {earnedRewards ? formatEther(earnedRewards) : "0"} Tokens
                            </p>
                        </div>

                        {/* Claim History Card */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <h3 className="text-primary text-xl font-bold mb-4">Claim History</h3>
                            <div className="text-white">
                                {claimHistory && Array.isArray(claimHistory) ? (
                                    claimHistory.map((claim, index) => (
                                        <div key={index} className="py-1">
                                            Claim {index + 1}: {formatEther(claim)} Tokens
                                        </div>
                                    ))
                                ) : (
                                    <p>No claims yet</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex w-full text-center absolute bottom-0 left-0 justify-center">
                    <p className="text-primary text-sm">&copy; {new Date().getFullYear()} MILK. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Rewards;
