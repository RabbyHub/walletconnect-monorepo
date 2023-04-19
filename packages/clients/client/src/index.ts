import Connector from "@debank/wc-core";
import { IWalletConnectOptions, IPushServerOptions } from "@debank/wc-types";
import * as cryptoLib from "@debank/wc-iso-crypto";

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
