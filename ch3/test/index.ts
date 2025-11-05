interface User {
  readonly login: string;
  password: string;
  age: number;
  addr: string | undefined;
  parents: {
    mother?: string;
    father?: string;
  }
}

const user: User = {
  parents: {},
  addr: undefined,
  login: 'first',
  password: 'qwerty',
  age: 50
}

// const basicPorts: readonly number[] = [3000, 3001, 5555];

