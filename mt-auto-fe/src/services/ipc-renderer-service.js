const { MethodKey } = require("../common/method-key");
const { sendRequest } = require("./server-connector");
const { BrowserWindow } = window.require("@electron/remote");
const path = window.require("path");
const fs = window.require("fs");
const win = BrowserWindow.getFocusedWindow();

export const save = () => {
  return sendRequest(MethodKey.SAVE_FILE, { id: 123 });
};

export const print = () => {
  return sendRequest(MethodKey.PRINT_FILE, { id: 1235 });
};
export const printVerFe = () => {
  let options = {
    silent: false,
    printBackground: true,
    color: false,
    margin: {
      marginType: "printableArea",
    },
    landscape: false,
    pagesPerSheet: 1,
    collate: false,
    copies: 1,
    header: "Header of the Page",
    footer: "Footer of the Page",
  };
  // win.webContents.print(options, (success, failureReason) => {
  //   if (!success) { console.log(failureReason);}
  // });

  const filePath = path.join(__dirname, "../assets/pdf1.pdf");
  options = {
    marginsType: 0,
    pageSize: "A4",
    printBackground: true,
    printSelectionOnly: false,
    landscape: false,
  };
  win.webContents
    .printToPDF(options)
    .then((data) => {
      fs.writeFile(filePath, data, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("PDF Generated Successfully");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
