function processingData<T>(data: T): T {
  return data;
}

let res1 = processingData(1);
let res2 = processingData("1");
const res3 = processingData<number>(3);

interface PrintUK {
  design: number;
}

interface PrintES {
  design: string;
}

interface Print<T> {
  design: T;
}

const somePrint: Print<string> = {
  design: ""
}

const someOtherPrint: Print<number> =
    {
      design: 0
    }
