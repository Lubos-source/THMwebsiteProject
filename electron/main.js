// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
var fs = require('fs');
var array;

const hashe="$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$OTFz0Txx41lGL9OMfLCIyLWdZF1Am6xu\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$q2/vxZCq8Kah/m/7ZdCEK7w2CFG6G7ol\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$sVnwfl4rAqT9bW51KcXYNxSOfkYKpV9/\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$dDu32acMEMfapjSXGmrJa9SkK+t1AmDF\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$tMMIW90BJZSkJprC1lobWy6YqppvOlQE\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$Wf5khzh+PAXVMMHjG5QKU4W93GRn1VuJ\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$7BpGFgHGvhWp48gZ1nobdsFaIqo/yKL3\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$rnrjJKS+QVVrA6CN+lZ0UzD7V0KmCu7W\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$i3LKjKd6n0CEFY4lTUz2GD0Y8xkjwspE\n"

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
       nodeIntegration: true,
       contextIsolation: false,
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');
  fs.readFile('../flags.txt', function(err,data){
    if (err){
      fs.writeFile('../flags.txt', hashe, function(err){
      if (err) throw err;
      console.log("finaly");
      fs.readFile('../flags.txt', function(err,data){
        if (err) throw err;
        array=data;
      })
    });
    }
    array=data;
  });
  console.log(array);
  
  /*else{
    
    cesta = app.getAppPath();
    fs.writeFile('flags.txt', hashe, function(err){
      if (err) throw err;
      console.log("finaly");
    });
  }*/

  // Open the DevTools.
   //mainWindow.webContents.openDevTools()

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
