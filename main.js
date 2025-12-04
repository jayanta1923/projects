const {app,BrowserWindow} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width :1100,
        height:900,
        webPreferences:{
            nodeIntegration:true
        }
    })
    win.loadFile("index.html");
    // win.webContents.openDevTools(); //cmd+option+i in mac for dev tools
}

app.whenReady().then(createWindow)