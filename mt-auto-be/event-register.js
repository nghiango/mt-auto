const { ipcMain } = require('electron');
const { save, print } = require('./ipc-main-services');
const { MethodKey } = require('../mt-auto-fe/src/common/method-key');

const registerEvents = () => {
  ipcMain.on(MethodKey.SAVE_FILE, save);
  ipcMain.on(MethodKey.PRINT_FILE, print)
}

module.exports = {
  registerEvents
}