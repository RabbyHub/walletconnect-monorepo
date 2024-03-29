"use strict";

// updates title to display package version
updateTitle();

const WalletConnect = window.WalletConnect.default;
const WalletConnectQRCodeModal = window.WalletConnectQRCodeModal.default;

const DEFAULT_BRIDGE = "https://derelay.rabby.io";

let connector = null;

function onInit() {
  console.log("onInit", "walletConnect");
  // Create a connector
  connector = new WalletConnect({
    bridge: DEFAULT_BRIDGE, // Required
    qrcodeModal: WalletConnectQRCodeModal,
  });

  // Check if connection is already established
  if (!connector.connected) {
    // create new session
    connector.createSession();
  } else {
    const { accounts, chainId } = connector;
    onConnect({ accounts, chainId });
  }

  onSubscribe();
}

function onSubscribe() {
  if (!connector) {
    throw new Error(`connector hasn't been created yet`);
  }

  connector.on("session_received", () => {
    console.log("钱包已扫二维码");
  });

  // Subscribe to connection events
  connector.on("connect", (error, payload) => {
    if (error) {
      throw error;
    }

    // Get provided accounts and chainId
    const { accounts, chainId } = payload.params[0];

    onConnect({ accounts, chainId });
  });

  connector.on("session_update", (error, payload) => {
    if (error) {
      throw error;
    }

    // Get updated accounts and chainId
    const { accounts, chainId } = payload.params[0];

    updateView({ accounts, chainId });
  });

  connector.on("disconnect", (error, payload) => {
    if (error) {
      throw error;
    }

    // Delete connector
    connector = null;

    onDisconnect();
  });

  connector.on("transport_pong", (error, payload) => {
    if (error) {
      throw error;
    }

    console.log("pong", payload);
  });
}

function signPersonalMessage() {
  if (!connector) {
    throw new Error(`connector hasn't been created yet`);
  }

  const msg = "Test message from WalletConnect example";

  // send personal_sign request
  connector
    .signPersonalMessage([msg, connector.accounts[0]])
    .then(result => {
      // Returns message signature
      console.log(result); // eslint-disable-line
    })
    .catch(error => {
      // Error returned when rejected
      console.error(error); // eslint-disable-line
    });
}

function onClose() {
  if (!connector) {
    throw new Error(`connector hasn't been created yet`);
  }

  // close connector
  connector.killSession();
}
