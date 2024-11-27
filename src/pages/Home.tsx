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
                        *Ahem* Greetings, Earth dwellers! MILK is definitely NOT a secret alien cow collective- err, we mean, a totally normal Earth-based staking platform using your primitive- ahhh, advanced Web3 technology. Our completely regular Earth-cow smart contracts (not alien technology, we promise!) offer what you humans call "APY" through our perfectly normal reward distribution systems. *adjusts fake udders* Simply stake your Earth tokens, and our definitely-not-extraterrestrial algorithms will generate passive income while we study- errr, serve you! Choose from our various disguise- we mean, staking tiers, carefully designed by our Bovine... err... Board of Directors. Remember: We're just regular cows!
                    </p>
                    <div className="flex w-full justify-center gap-3 py-3">
                        <button onClick={goDashboard} className="text-primary border-2 scale-[1.01] rounded-full px-8 py-2 border-primary">Investments</button>
                    </div>
                    <img src="https://media.istockphoto.com/id/1849448372/photo/funny-portrait-of-a-screaming-cow-showing-gums-teeth-and-tongue.jpg?s=612x612&w=is&k=20&c=5IN-4zV2QUT21wb9xJPENOdTrjsujQQfY-a8lgWoLEc=" alt="" className="w-full h-fit object-cover" />
                </div>

                <div className="flex w-full text-center absolute bottom-0 left-0 justify-center">
                    <p className="text-primary text-sm">&copy; {new Date().getFullYear()} MILK. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default Home