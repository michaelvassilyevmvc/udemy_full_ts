const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: {
    error: "Error"
  }
}

function logBrtMsg({isBirthdayData, userNameData, ageData, messages: {error}}: {
  isBirthdayData: boolean,
  userNameData: string,
  ageData: number,
  messages: { error: string }
}): string {
  return ''
}

logBrtMsg(userData)

const departments: string[] = ['dev', 'design', 'marketing']
const nums: number[] = [3, 5, 6]

const report = departments.filter((d: string) => d !== 'dev')
    .map((d: string) => `${d} - done`)

const userDataTuple: [boolean, number, ...string[]] = [true, 40, "John",'Alex','Ann'];

const res = userDataTuple.map((t) => `${t} - data`)
const [bthd, age, username] = userDataTuple;