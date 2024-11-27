import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatEther, parseEther } from "viem";
import { useReadContract, useWriteContract } from "wagmi";
import { contractConfig } from "../utils/abi";

const STAKING_PERIODS = [
    { days: 30, apy: "10%" },
    { days: 60, apy: "15%" },
    { days: 90, apy: "20%" },
    { days: 180, apy: "25%" },
    { days: 360, apy: "30%" },
    { days: 720, apy: "40%" }
];

const Staking = () => {
    const [amount, setAmount] = useState<string>("");
    const [selectedPeriod, setSelectedPeriod] = useState(STAKING_PERIODS[0]);
    const { writeContract, error } = useWriteContract();

    // Read staking limits
    const { data: stakingLimit } = useReadContract({
        address: contractConfig.address as `0x${string}`,
        abi: ["function getStakingLimit(uint256) view returns (uint256)"],
        functionName: "getStakingLimit",
        args: [selectedPeriod.days],
    }) as unknown as { data: bigint };

    // Calculate expected rewards
    const calculateRewards = (amount: string, period: number) => {
        if (!amount) return "0";
        const apy = parseInt(selectedPeriod.apy) / 100;
        return (Number(amount) * apy * period / 365).toFixed(2);
    };

    const handleStake = async () => {
        if (!amount) return toast.error("Please enter an amount");

        writeContract({
            address: contractConfig.address as `0x${string}`,
            abi: contractConfig.abi,
            functionName: "lockTokens",
            args: [parseEther(amount), selectedPeriod.days],
        });
        setAmount("");
    };

    useEffect(() => {
        if (error) {
            toast.error(error.message);
        }
    }, [error]);

    return (
        <div>
            <div className="py-20 md:py-32 px-3 overflow-y-auto h-screen w-full">
                <div>
                    <div className="max-w-2xl mx-auto mt-8">
                        {/* Staking Form */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                            <div className="space-y-4">
                                {/* Amount Input */}
                                <div>
                                    <label className="text-primary block mb-2">Staking Amount</label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full p-2 bg-white/5 border border-primary rounded"
                                        placeholder="Enter amount"
                                    />
                                </div>

                                {/* Period Selection */}
                                <div>
                                    <label className="text-primary block mb-2">Lock Period</label>
                                    <select
                                        onChange={(e) => setSelectedPeriod(STAKING_PERIODS[parseInt(e.target.value)])}
                                        className="w-full p-2 bg-white/5 border border-primary rounded"
                                    >
                                        {STAKING_PERIODS.map((period, index) => (
                                            <option key={period.days} value={index}>
                                                {period.days} days - {period.apy} APY
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Staking Limits */}
                                <div className="text-white">
                                    <p>Staking Limit: {stakingLimit ? formatEther(stakingLimit) : "0"} Tokens</p>
                                </div>

                                {/* Expected Rewards */}
                                <div className="text-white">
                                    <p>Expected Rewards: {calculateRewards(amount, selectedPeriod.days)} Tokens</p>
                                </div>

                                {/* Stake Button */}
                                <button
                                    onClick={handleStake}
                                    className="w-full text-primary border-2 rounded-full px-8 py-2 border-primary hover:bg-primary hover:text-white transition-colors"
                                >
                                    Stake Tokens
                                </button>
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

export default Staking;
