import Connector from "@rabby-wallet/wc-core";
import { IWalletConnectOptions, IPushServerOptions } from "@rabby-wallet/wc-types";
import * as cryptoLib from "@rabby-wallet/wc-iso-crypto";

class WalletConnect extends Connector {
  constructor(connectorOpts: IWalletConnectOptions, pushServerOpts?: IPushServerOptions) {
    super({
      cryptoLib,
      connectorOpts,
      pushServerOpts,
    });
  }
}

export default WalletConnect;
