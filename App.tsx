/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Web3AuthOptions} from '@web3auth/modal';
import {OpenloginAdapter} from '@web3auth/openlogin-adapter';
import {SafeAreaView, Text} from 'react-native';
import {SafeAuthKit} from '@safe-global/auth-kit';

// https://dashboard.web3auth.io/
const WEB3_AUTH_CLIENT_ID =
  'BBOwvTW1U6ulq1alEzvfae4FnwRqNi9-PtYeQoJXOBlcCQVIvDHSRdYo-TtfJ1n7ENE0436y5IfUrkZ41LkTb4A';

// https://web3auth.io/docs/sdk/web/modal/initialize#arguments
const options: Web3AuthOptions = {
  clientId: WEB3_AUTH_CLIENT_ID,
  web3AuthNetwork: 'testnet',
  chainConfig: {
    chainNamespace: 'eip155',
    chainId: '0x5',
    // https://chainlist.org/
    rpcTarget: 'https://rpc.ankr.com/eth_goerli',
  },
  uiConfig: {
    theme: 'dark',
    loginMethodsOrder: ['google', 'facebook'],
  },
};

// https://web3auth.io/docs/sdk/web/modal/whitelabel#whitelabeling-while-modal-initialization
const openloginAdapter = new OpenloginAdapter({
  loginSettings: {
    mfaLevel: 'mandatory',
  },
  adapterSettings: {
    uxMode: 'popup',
    whiteLabel: {
      name: 'Safe',
    },
  },
});

const App = () => {
  useEffect(() => {

  }, []);

  return (
    <SafeAreaView>
      <Text>rn-safe-core-sdk-boilerplate</Text>
    </SafeAreaView>
  );
};

export default App;
