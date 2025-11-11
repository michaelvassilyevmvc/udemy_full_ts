function fetchData(data: unknown): void{
  if (typeof data === 'string') {
    console.log(data.toLowerCase())
  }

}

const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData":"John"}';

function safeParse(s: string): unknown {
  return JSON.parse(s);
}

const data = safeParse(userData);

function transferData(d: unknown): void {
  if(typeof d === 'string') {
    console.log(d.toLowerCase())
  } else if (typeof d === 'object' && d) {
    console.log(data);
  } else {
    console.error('Some error');
  }
}