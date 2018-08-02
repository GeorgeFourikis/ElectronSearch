Electron Search assignment.
===

How to use
===

```shell
https://github.com/GeorgeFourikis/ElectronSearch.git
cd ElectronSearch
npm i
npm start
```


What does it do
===
After it starts running, it should give us a window that shows Google's landing page.The difference is that there is injected Javascript,
so in case the user searches for <i>digital attitude</i>, should give a Notification the text values of which exist through a Lambda function
(AWS)

Observations
===
*Notice that for Notifications i used the <i>electron-notifications</i> package since the <i>Notification</i> module provided by the Electron 
or the HTML5 Notification was not working although no errors would show,a fast search on  stackoverflow showed that there is valid reasons to
believe that the updated Windows 10 with the last Electron versions give us issues on the specific module*