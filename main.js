require('@electron/remote/main').initialize()

const { app, BrowserWindow } = require('electron')
const url = require('url');
const { registerEvents } = require('./mt-auto-be/event-register');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  if (process.env.DEVELOPMENT_MODE) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadURL(
      url.format({
        pathname: '',
        protocol: 'file:',
        slashes: true,
      })
    )
  }
  // win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})


registerEvents();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('browser-window-created', (_, window) => {
  require("@electron/remote/main").enable(window.webContents)
})

try {
  require('electron-reloader')(module)
} catch (_) {}
