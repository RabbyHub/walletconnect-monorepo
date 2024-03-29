# WalletConnect v1.x.x

Open protocol for connecting Wallets to Dapps - https://walletconnect.org

## 备注

- core 初始化 transport
- transport 内通过 \_socketSend、\_socketReceive 和服务端通信
- core 内通过 \_handleIncomingMessages 处理服务端传来的消息

## Packages

| SDK           | Current Version                                                                                      | Description |
| ------------- | ---------------------------------------------------------------------------------------------------- | ----------- |
| walletconnect | [![npm version](https://badge.fury.io/js/walletconnect.svg)](https://badge.fury.io/js/walletconnect) | SDK         |

| Clients                 | Current Version                                                                                                              | Description       |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| @rabby-wallet/wc-core   | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fcore.svg)](https://badge.fury.io/js/%40walletconnect%2Fcore)     | Core Client       |
| @rabby-wallet/wc-client | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fclient.svg)](https://badge.fury.io/js/%40walletconnect%2Fclient) | Isomorphic Client |

| Providers                          | Current Version                                                                                                                                    | Description       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| @rabby-wallet/wc-ethereum-provider | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fethereum-provider.svg)](https://badge.fury.io/js/%40walletconnect%2Fethereum-provider) | Ethereum Provider |
| @rabby-wallet/wc-truffle-provider  | [![npm version](https://badge.fury.io/js/%40walletconnect%2Ftruffle-provider.svg)](https://badge.fury.io/js/%40walletconnect%2Ftruffle-provider)   | Truffle Provider  |
| @rabby-wallet/wc-web3-provider     | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fweb3-provider.svg)](https://badge.fury.io/js/%40walletconnect%2Fweb3-provider)         | Web3 Provider     |
| @rabby-wallet/wc-web3-subprovider  | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fweb3-subprovider.svg)](https://badge.fury.io/js/%40walletconnect%2Fweb3-subprovider)   | Web3 Subprovider  |

| Helpers                            | Current Version                                                                                                                                    | Description       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| @rabby-wallet/wc-browser-utils     | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fbrowser-utils.svg)](https://badge.fury.io/js/%40walletconnect%2Fbrowser-utils)         | Browser Utilities |
| @rabby-wallet/wc-http-connection   | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fhttp-connection.svg)](https://badge.fury.io/js/%40walletconnect%2Fhttp-connection)     | HTTP Connection   |
| @rabby-wallet/wc-iso-crypto        | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fiso-crypto.svg)](https://badge.fury.io/js/%40walletconnect%2Fiso-crypto)               | Isomorphic Crypto |
| @rabby-wallet/wc-qrcode-modal      | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fqrcode-modal.svg)](https://badge.fury.io/js/%40walletconnect%2Fqrcode-modal)           | QR Code Modal     |
| @rabby-wallet/wc-react-native-dapp | [![npm version](https://badge.fury.io/js/%40walletconnect%2Freact-native-dapp.svg)](https://badge.fury.io/js/%40walletconnect%2Freact-native-dapp) | React-Native Dapp |
| @rabby-wallet/wc-signer-connection | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fsigner-connection.svg)](https://badge.fury.io/js/%40walletconnect%2Fsigner-connection) | Signer Connection |
| @rabby-wallet/wc-socket-transport  | [![npm version](https://badge.fury.io/js/%40walletconnect%2Fsocket-transport.svg)](https://badge.fury.io/js/%40walletconnect%2Fsocket-transport)   | Socket Transport  |
| @rabby-wallet/wc-types             | [![npm version](https://badge.fury.io/js/%40walletconnect%2Ftypes.svg)](https://badge.fury.io/js/%40walletconnect%2Ftypes)                         | Typescript Types  |
| @rabby-wallet/wc-utils             | [![npm version](https://badge.fury.io/js/%40walletconnect%2Futils.svg)](https://badge.fury.io/js/%40walletconnect%2Futils)                         | Utility Library   |

`## Quick Start`

Find quick start examples for your platform at https://docs.walletconnect.org/quick-start

## Documentation

Read more about WalletConnect protocol and how to use our Clients at https://docs.walletconnect.org

## Contributors

This project exists thanks to all the people who contribute.
<a href="https://github.com/WalletConnect/walletconnect-monorepo/graphs/contributors"><img src="https://opencollective.com/walletconnect/contributors.svg?width=890&button=false" /></a>

All contributions are welcome! Feel free to create an Issue or make a PR in this repository

## License

Apache 2.0
