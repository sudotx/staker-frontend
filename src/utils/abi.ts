export const contractConfig = {
    "address": "0xBd4089Cc3B7903A582F4Fa7b8351F8ad59f3a8e4",
    "lptoken": "0x93323bB3896C5eff97320BC63E4FbccB41D0C8C4",
    "abi": [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "rewardToken_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "stakingDurationIn_",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "stakingFundAmount_",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "vestingDuration_",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                { "name": "owner_", "type": "address", "internalType": "address" },
                {
                    "name": "annualYieldRate_",
                    "type": "uint128",
                    "internalType": "uint128"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "annualYieldRate",
            "inputs": [],
            "outputs": [{ "name": "", "type": "uint128", "internalType": "uint128" }],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "calculateStakingRewardPoints",
            "inputs": [
                { "name": "tokenAmount_", "type": "uint72", "internalType": "uint72" },
                {
                    "name": "lockingPeriodIn",
                    "type": "uint24",
                    "internalType": "uint24"
                }
            ],
            "outputs": [
                {
                    "name": "stakingRewardPoints",
                    "type": "uint128",
                    "internalType": "uint128"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRewards",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "grantedTokens",
            "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
            "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "lockTokens",
            "inputs": [
                { "name": "tokenAmount_", "type": "uint72", "internalType": "uint72" },
                {
                    "name": "lockingPeriodInDays_",
                    "type": "uint16",
                    "internalType": "uint16"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "poolToken",
            "inputs": [],
            "outputs": [
                { "name": "", "type": "address", "internalType": "contract IERC20" }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "release",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "releasedTokens",
            "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
            "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "rewardPointsEarned",
            "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
            "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "rewardToken",
            "inputs": [],
            "outputs": [
                { "name": "", "type": "address", "internalType": "contract IERC20" }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "setPoolToken",
            "inputs": [
                { "name": "poolToken_", "type": "address", "internalType": "address" },
                {
                    "name": "stakingFundAddress_",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "stakes",
            "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
            "outputs": [
                { "name": "tokenAmount", "type": "uint72", "internalType": "uint72" },
                {
                    "name": "lockingPeriodIn",
                    "type": "uint24",
                    "internalType": "uint24"
                },
                { "name": "startBlock", "type": "uint32", "internalType": "uint32" },
                {
                    "name": "expectedStakingRewardPoints",
                    "type": "uint128",
                    "internalType": "uint128"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "stakingFundAmount",
            "inputs": [],
            "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "stakingProgramEnds",
            "inputs": [],
            "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "totalRewardPoints",
            "inputs": [],
            "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "unlockTokens",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "vestingDuration",
            "inputs": [],
            "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
            "stateMutability": "view"
        },
        {
            "type": "event",
            "name": "RewardGranted",
            "inputs": [
                {
                    "name": "recipient",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "amountEarned",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "StakeLocked",
            "inputs": [
                {
                    "name": "recipient",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "tokenAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "lockingPeriodIn",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "expectedStakingRewardPoints",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "StakeUnlocked",
            "inputs": [
                {
                    "name": "recipient",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "tokenAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "lockingPeriodIn",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "rewardPoints",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "StakeUnlockedPrematurely",
            "inputs": [
                {
                    "name": "recipient",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "tokenAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "lockingPeriodIn",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "actualLockingPeriodIn",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "grantedTokensReleased",
            "inputs": [
                {
                    "name": "recipient",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        { "type": "error", "name": "ReentrancyGuardReentrantCall", "inputs": [] }
    ]
}