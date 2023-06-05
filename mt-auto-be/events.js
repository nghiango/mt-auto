const { BrowserWindow } = require('electron');

const sendResponse = (event, resonseKey, responseData) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  window.webContents.send(resonseKey, responseData);
}

module.exports = {
  sendResponse,
}

