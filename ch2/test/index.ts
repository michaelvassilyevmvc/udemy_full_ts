const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = 'John';

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): void {
//   if (isBirthday) {
//     console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
//   }
// }


const userData = '{"isBirthdayData":true, "ageData":40,"userNameData":"John"}';
const userObj: {
  isBirthdayData: boolean,
  userNameData: string,
  ageData: number
} = JSON.parse(userData);

const logBrtMsg = (
    isBirthday: boolean,
    userName: string,
    age: number): void => {
  if (isBirthday) {
    console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
  }
}

logBrtMsg(isBirthdayData, userNameData, ageData);