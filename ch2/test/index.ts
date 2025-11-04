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