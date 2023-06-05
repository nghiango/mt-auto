const { MethodKey } = require("../mt-auto-fe/src/common/method-key")
const { buildResponseKey } = require("../mt-auto-fe/src/common/utils")
const { sendResponse } = require("./events")
const { BrowserWindow } = require("@electron/remote/main")

const save = (event, data) => {
  sendResponse(event, buildResponseKey(MethodKey.SAVE_FILE, data.id), {'response': 'hello'})
}

const print = (event, data) => {
  console.log('hello the world', data)
}

module.exports = {
  save,
  print
}