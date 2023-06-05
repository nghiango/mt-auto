const { ipcRenderer } = window.require('electron');

export const sendRequest = (methodKey, data) => {
  ipcRenderer.send(methodKey, data);
  return new Promise((resolve, reject) => {
    ipcRenderer.once(`${methodKey}${data.id}`, (event, response) => {
      if (response) {
        resolve(response);
      }
    })
  })
}
