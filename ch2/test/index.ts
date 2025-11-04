// let msg: 'Hello' = 'Hello'
//
// msg = 'Hello';

const port3000: number = 3000;
const port3001: number = 3001;

const startServer: (protocol: 'http' | 'https', port: 3000 | 3001) => string = (protocol: 'http' | 'https', port: 3000 | 3001): 'Server Started' => {
  if (port == port3000 || port == port3001) {
    console.log(`Server started: ${protocol}://server:${port}`);
  } else {
    console.error("Invalid port")
  }
  return 'Server Started'
}

startServer('https', 3001);

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
