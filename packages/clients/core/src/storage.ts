import { IWalletConnectSession } from "@rabby-wallet/wc-types";
import { isWalletConnectSession, getLocal, setLocal, removeLocal } from "@rabby-wallet/wc-utils";

class SessionStorage {
  constructor(public storageId: string = "walletconnect") {}

  public getSession(): IWalletConnectSession | null {
    let session: IWalletConnectSession | null = null;
    const json = getLocal(this.storageId);
    if (json && isWalletConnectSession(json)) {
      session = json;
    }
    return session;
  }

  public setSession(session: IWalletConnectSession): IWalletConnectSession {
    setLocal(this.storageId, session);
    return session;
  }

  public removeSession(): void {
    removeLocal(this.storageId);
  }
}

export default SessionStorage;
