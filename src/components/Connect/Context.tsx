'use client';

import { createContext, useContext, useCallback, useState, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

import { MetaMaskInpageProvider } from "@metamask/providers";
import Web3 from 'web3'
import { Cookie } from '@next/font/google';
import { COOKIE_NAME_PRERENDER_BYPASS } from 'next/dist/server/api-utils';
import { connected } from 'process';

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}

export interface WalletContextValue {
  connected: boolean;
  account?: string;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

interface WalletProviderProps {}

export const WalletContext = createContext<WalletContextValue>({
  connected: false,
  connect: () => Promise.resolve(),
  disconnect: () => Promise.resolve(),
});

export const WalletProvider = ({ children }: PropsWithChildren<WalletProviderProps>) => {
  const router = useRouter();
  const [state, setState] = useState<Omit<WalletContextValue, 'connect' | 'disconnect'>>({
    connected: false,
  });
 

  const connect = useCallback(async () => {
    if (state.connected) {
      Promise.resolve();
      return;
    }
    //0x6818b6Fd1D8b4363EB62dA50c1677794898B2adD
    if(window!.ethereum){
      // Do something 
    
      const res = await window.ethereum.request({method:'eth_requestAccounts'}) as any 
      res && setState({ connected: true, account: res[0]});
      res && router.push('/challenges/08-connect-wallet');
    
    }else
      throw new Error('User rejected the connection')
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.connected]);

  const disconnect = useCallback(async () => {
    const { ethereum } = window
    if(ethereum) {
      //const web3 = new Web3(window?.ethereum)
      //web3.eth?.currentProvider?.connection?.close()
      //web3.eth.defaultAccount = null;
      //web3.accounts.deleteProperty()
      //console.log(web3)
    }
   localStorage.clear()
   setState({ connected: false , account: ''});
  }, [state.connected]);

  return (
    <WalletContext.Provider
      value={{
        ...state,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
