const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'darkMode.js')
        },
        icon: path.join(__dirname, 'build/icon.png')
    })
    win.loadURL('https://leetcode.com/')

    win.maximize();
    win.show();
}

app.on('ready', createWindow) 