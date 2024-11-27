import { useEffect } from "react";
import { useReadContract } from "wagmi";
import { formatEther } from "viem";
import { contractConfig } from "../utils/abi";

const Stats = () => {
    // Read total metrics
    const { data: totalStaked } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: ["function getTotalStaked() view returns (uint256)"],
        functionName: "getTotalStaked",
    }) as unknown as { data: bigint };

    const { data: totalRewardPoints } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: ["function getTotalRewardPoints() view returns (uint256)"],
        functionName: "getTotalRewardPoints",
    }) as unknown as { data: bigint };

    const { data: programEndDate } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: ["function getProgramEndDate() view returns (uint256)"],
        functionName: "getProgramEndDate",
    }) as unknown as { data: bigint };

    const { data: currentAPY } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: contractConfig.abi,
        functionName: "getCurrentAPY",
    }) as unknown as { data: bigint };

    useEffect(() => {
        // Update UI with latest stats
    }, [totalStaked, totalRewardPoints, programEndDate, currentAPY]);

    return (
        <div>
            <div className="py-20 md:py-32 px-3 overflow-y-auto h-screen w-full">
                <div>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {/* Total Staking Metrics */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <h3 className="text-primary text-xl font-bold mb-4">Total Value Locked</h3>
                            <p className="text-white text-2xl">
                                {totalStaked ? formatEther(totalStaked) : "0"} Tokens
                            </p>
                        </div>

                        {/* Total Reward Points */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <h3 className="text-primary text-xl font-bold mb-4">Total Reward Points</h3>
                            <p className="text-white text-2xl">
                                {totalRewardPoints ? formatEther(totalRewardPoints) : "0"} Points
                            </p>
                        </div>

                        {/* Program End Date */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <h3 className="text-primary text-xl font-bold mb-4">Program End Date</h3>
                            <p className="text-white text-2xl">
                                {programEndDate ? new Date(Number(programEndDate) * 1000).toLocaleDateString() : "TBD"}
                            </p>
                            <div className="mt-2 bg-primary/20 rounded-lg p-3">
                                <p className="text-white">Time Remaining: {programEndDate ? "Calculate countdown" : "N/A"}</p>
                            </div>
                        </div>

                        {/* Current APY Rates */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <h3 className="text-primary text-xl font-bold mb-4">Current APY</h3>
                            <p className="text-white text-2xl">
                                {currentAPY ? `${Number(currentAPY) / 100}%` : "0%"}
                            </p>
                            <div className="mt-2 bg-primary/20 rounded-lg p-3">
                                <p className="text-white">Updated daily based on total TVL</p>
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

export default Stats;
