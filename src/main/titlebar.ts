import {app, ipcMain, BrowserWindow} from 'electron';
app.whenReady().then(() => {
  ipcMain.on('minimize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    if (window) {
      window.minimize();
    }
  });

  ipcMain.on('maximize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    if (window) {
      if (window.isMaximized()) {
        window.unmaximize();
      } else {
        window.maximize();
      }
    }
  });

  ipcMain.on('close', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    if (window) {
      window.close();
    }

    // 检查如果所有窗口都关闭了，退出应用
    //   if (BrowserWindow.getAllWindows().length === 0) {
    //     app.quit();
    //   }
  });
});
