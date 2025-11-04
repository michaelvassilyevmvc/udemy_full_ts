const serverNewConfig: BasicConfig = {
  protocol: "https",
  port: 3001
}

const backupConfig: BasicConfig = {
  protocol: 'http',
  port: 3000
}

interface BasicConfig {
  protocol: string;
  port: number;
}

const startNewServer = (
    config: BasicConfig): 'Server Started' => {
  console.log(`Server started: ${config.protocol}://server:${config.port}`);

  return 'Server Started'
}

startNewServer(serverNewConfig);
startNewServer(backupConfig);
