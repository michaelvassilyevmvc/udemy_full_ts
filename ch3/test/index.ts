const fetchData = (url: string, method: "GET" | "POST"): void => {
  console.log(method);
}

const reqOptions = {
  url: 'https://someurl.com',
  method: 'GET'
}

fetchData('qqq', 'GET');
fetchData(reqOptions.url, <"GET">reqOptions.method);


const box = document.querySelector('.box') as HTMLElement;
const input = <HTMLInputElement>document.querySelector('input');

const someNumber:number = +input.value;
console.log(someNumber.toFixed());

