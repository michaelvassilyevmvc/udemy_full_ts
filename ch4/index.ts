const arr: Array<number> = [1, 2, 3];

const roarr: ReadonlyArray<string> = ['dskdkdkd'];

interface IState {
  data: {
    name: string;
  },
  tag: string;
}

const state: Partial<IState> = {
  data: {
    name: 'John'
  }
}

const strictState: Required<IState> = {
  data: {
    name: 'ddsf',
  },
  tag: 'ddkkddk',

}

function action(state: Required<IState>) {
  state.data.name = "abc";
}