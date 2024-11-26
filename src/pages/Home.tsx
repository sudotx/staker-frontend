import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

const Home = () => {
    const navigate = useNavigate();
    const { isConnected } = useAccount();

    const goDashboard = () => {
        if (!isConnected) {
            return toast.error('Please connect your wallet to continue');
        }
        navigate('/staking')
    }

    return (
        <div>
            <div className="py-20 md:py-32 px-3 overflow-y-auto h-screen w-full home">
                <div>
                    <p className="text-white px-2 py-3 text-sm md:text-base">
                        MILK is a decentralized staking platform built on web3 technology. The platform offers users flexible staking options with competitive APY through secure smart contracts, ensuring complete transparency and automated rewards distribution. Users can easily stake their tokens to earn passive income while contributing to network security and stability. Our tiered staking system allows users to maximize their earnings based on staking duration and amount.
                    </p>
                    <div className="flex w-full justify-center gap-3 py-3">
                        <button onClick={goDashboard} className="text-primary border-2 scale-[1.01] rounded-full px-8 py-2 border-primary">Investments</button>
                    </div>
                </div>

                <div className="flex w-full text-center absolute bottom-0 left-0 justify-center">
                    <p className="text-primary text-sm">&copy; {new Date().getFullYear()} MILK. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default Home