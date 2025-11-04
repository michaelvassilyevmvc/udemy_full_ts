//
const port3000: number = 3000;
const port3001: number = 3001;

// type Config = { protocol: 'http' | 'https', port: 3000 | 3001 }

interface Config {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
  log: (msg: string) => void;
}

// type Role = {
//   role: string
// }
// type ConfigWithRole = Config & Role

interface Role {
  role: string
}

interface ConfigWithRole extends Config, Role {

}

const serverConfig: ConfigWithRole = {
  log(msg: string): void {
    console.log(msg);
  },
  role: "admin",
  protocol: "https",
  port: 3001
}

// const backupConfig: ConfigWithRole = {
//   role: "sysadmin",
//   protocol: 'http',
//   port: 3000
// }

type StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001,
    log: (msg: string) => void
) => string

const startServer: StartFunction = (protocol: 'http' | 'https',
                                    port: 3000 | 3001,
                                    log: (msg: string) => void): 'Server Started' => {
  if (port == port3000 || port == port3001) {
    log(`Server started: ${protocol}://server:${port}`);
  } else {
    console.error("Invalid port")
  }
  return 'Server Started'
}

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationID = string | number;

function createAnimation(id: AnimationID,
                         animName: string,
                         timingFunc: AnimationTimingFunc = 'ease',
                         duration: number,
                         iterCount: "infinite" | number
): void {
  // const elem = document.querySelector(`#${id}`) as HTMLElement;
  // if (elem) {
  console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
  //   elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
  // }
}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite');

interface Styles {
  [key:string]: string
}

const styles: Styles = {
  position: 'absolute',
  top: '20px',
  left: '50px'
}