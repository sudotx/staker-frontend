import { useEffect } from "react";
import toast from "react-hot-toast";
import { formatEther } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { contractConfig } from "../utils/abi";

const Dashboard = () => {
    const { address } = useAccount();
    const { error } = useWriteContract();

    // Read staking contract data
    const { data: stakedAmount } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: contractConfig.abi,
        functionName: "stakedBalance",
        args: [address],
    }) as unknown as { data: bigint };

    const { data: rewardPoints } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: contractConfig.abi,
        functionName: "getRewardPoints",
        args: [address],
    }) as unknown as { data: bigint };

    const { data: lpBalance } = useReadContract({
        address: contractConfig.lptoken as `0x${string}`,
        abi: ["function balanceOf(address) view returns (uint256)"],
        functionName: "balanceOf",
        args: [address],
    }) as unknown as { data: bigint };

    const { data: stakingEndTime } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: contractConfig.abi,
        functionName: "stakingEndTime",
    }) as unknown as { data: bigint };

    useEffect(() => {
        if (error) {
            toast.error(error.name)
        }
    }, [error]);

    return (
        <div>
            <div className="w-full fixed top-0 left-0 flex justify-center flex-col items-center">
                <div className="absolute top-0 left-0 h-screen w-full -z-50">
                    <img src="/svgs/bg.svg" alt="bg-galaxy" />
                    <img src="/svgs/bg.svg" className="h-full" alt="bg-galaxy" />
                    <img src="/svgs/bg.svg" alt="bg-galaxy" />
                </div>
            </div>

            <div className="py-20 md:py-32 px-3 overflow-y-auto h-screen w-full">
                <div>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {/* Staking Status Card */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">

                            <h3 className="text-xl font-bold mb-4">Current Stake Status</h3>
                            <p className="text-white">
                                Staked Amount: {stakedAmount ? formatEther(stakedAmount) : "0"} Tokens
                            </p>
                        </div>

                        {/* Reward Points Card */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <a href="/rewards">
                                <h3 className="text-white text-xl font-bold mb-4 hover:text-primary transition-colors">Reward Points</h3>
                            </a>
                            <p className="text-white">
                                Points Earned: {rewardPoints ? formatEther(stakedAmount) : "0"} Points
                            </p>
                        </div>

                        {/* LP Token Balance Card */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <a href="/withdraw">
                                <h3 className="text-white text-xl font-bold mb-4  hover:text-primary transition-colors">LP Token Balance</h3>
                            </a>
                            <p className="text-white">
                                Available Balance: {lpBalance ? formatEther(lpBalance) : "0"} LP
                            </p>
                        </div>

                        {/* Time Remaining Card */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <a href="/stats">
                                <h3 className="text-white text-xl font-bold mb-4 hover:text-primary transition-colors">Staking Duration</h3>
                            </a>
                            <p className="text-white">
                                Time Remaining: {stakingEndTime ? "Calculate time" : "Not staked"}
                            </p>
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

export default Dashboard;
