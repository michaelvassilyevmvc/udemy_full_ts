enum Directions {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM
}

enum TimingFunc {
  EASE = 'ease', EASE_IN = 'ease-in', LINEAR = 'linear'
}

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
  if (dir === Directions.RIGHT) {
    console.log(tFunc)
  }
}

frame('id', Directions.RIGHT, TimingFunc.LINEAR)