const { ipcRenderer } = require('electron')

document.addEventListener("DOMContentLoaded", (event) => {
    //setting the flag so it will be triggered once in a session
    let flag = false
    let existingValue = ""
    let myInput = document.querySelector("#lst-ib")

    myInput.addEventListener("keypress", () => {
        existingValue = myInput.value
        if (existingValue.toLowerCase().includes("digital attitude") && flag === false) {
            ipcRenderer.sendSync('synchronous-message', 'Searched') // sends this back to main renderer notifier object 

            //set the flag to true, means that it wont give a new Notification again
            flag = !flag
        }
    })
})