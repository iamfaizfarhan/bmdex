import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, bsc, mainnet, polygon } from 'viem/chains';

export const config = getDefaultConfig({
  appName: 'BuildMyDex',
  projectId: '20395b80a6a2b8d363713147dec5d3de',
  chains: [mainnet, polygon, bsc, arbitrum],
  ssr: true,
});