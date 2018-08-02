const { app, BrowserWindow, Notification } = require('electron')
const ipcMain   = require('electron').ipcMain
const notifier  = require('electron-notifications')
const axios     = require('axios')

//making win variable globally available
let win
//Async function to get data
const data = async function getData(){
    try{   
        const dataPromised = axios('https://h4no2atemi.execute-api.eu-west-1.amazonaws.com/default/demoElectron');
        // await promise to get ready and be destructured 
        const [data] = await Promise.all([dataPromised]);     
        // console.log(data.data)
        return notifier.notify(data.data.title, {
            message: data.data.body,
            buttons: ['Close'],
        })
    }catch(e){
        console.log(e)
    }
}

const createWindow = () => {
    win = new BrowserWindow({
        width: 1200,
        height: 900
    })

    win.on('closed', () => {
        win = null
    })

    win.loadFile('./public/index.html')
}

app.on('ready', createWindow)

//Working, sends signal to inner DOM and shows the Notification when the inner DOM responds with the truthy decision statement
ipcMain.on('synchronous-message', (event, arg) => {
    ipcMain.on('update-notify', (event, arg) => {
        win.send('target', arg)
    })
    //Notification
    const notification = data()
    //listen for click event to close Notification, suspended for now
    // notification.on('buttonClicked', ()=>{
    //     notification.close()
    // })

    //returns the context of the notify function and shows Notification
    event.returnValue = notification
})