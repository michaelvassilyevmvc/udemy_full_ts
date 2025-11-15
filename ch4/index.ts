function processingData<T, S>(data: T[], options: S): string {
  data.length;

  switch (typeof data) {

    case "number":
      return `${data}, speed: ${options}`;
    case "string":
      return `${data}, speed: ${options}`;
    default:
      return 'Not valid';
  }
}

// let res1 = processingData(1, 'fast');
// let res2 = processingData("1", 29);
const res3 = processingData<number, string>([3], 'boom');

function processing<T>(data: T):T {
  return data;
}

interface DataSaver{
  processing: <T>(data:T) => T
}

const saver: DataSaver = {
  processing
}
