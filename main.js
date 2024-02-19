const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // Cria uma nova janela de navegador.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Habilite o nodeIntegration para permitir que o código do Node.js seja executado na página da web.
      nodeIntegration: true
    }
  });

  // Carrega o arquivo HTML da sua interface gráfica.
  mainWindow.loadFile('index.html');
}

// Este método será chamado quando Electron terminar de inicializar
// e estiver pronto para criar janelas do navegador.
// Algumas APIs podem ser usadas somente após este evento ocorrer.
app.whenReady().then(createWindow);

// Encerra quando todas as janelas forem fechadas, exceto no macOS. Lá, é comum para aplicativos e sua barra de menus
// permanecerem ativos até que o usuário saia explicitamente com Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // No macOS, é comum recriar uma janela no aplicativo quando o ícone da dock for clicado e
  // não houver outras janelas abertas.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
