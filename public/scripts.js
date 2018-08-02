//Developer tools for the inner DOM -- webview --
const browserView = document.getElementById('main')
browserView.addEventListener('dom-ready', () => {
  const browser = browserView.getWebContents()
  // browser.openDevTools()  
})
