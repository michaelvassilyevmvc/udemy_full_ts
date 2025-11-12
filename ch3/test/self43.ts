interface Data {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
}

const formData: Data = {
  email: "",
  title: "",
  text: "",
  checkbox: false,
}

document.querySelectorAll('button').forEach((b) => {
  b.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email') as HTMLInputElement;
    const title = document.querySelector('#title') as HTMLInputElement;
    const text = document.querySelector('#text') as HTMLTextAreaElement;
    const checkbox = document.querySelector('#checkbox') as HTMLInputElement;

    if (email) {
      formData.email = email.value;
    }
    if (title) {
      formData.title = title.value;

    }
    if (text) {
      formData.text = text.value;
    }
    if (checkbox) {
      formData.checkbox = checkbox.checked;
    }


    if (validateFormData(formData)) {
      checkFormData(formData);
    } else {
      console.log('not valid');
    }
  })
})

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData(data: Data) {
  // Если каждое из свойств объекта data правдиво...
  if (Object.values(data).every((value) => value)) {
    return true;
  } else {
    console.log("Please, complete all fields");
    return false;
  }
}

function IsValidProperties(data: Data): boolean {
  for (const k in data) {
    const key = k as keyof Data;
    const value = data[key];
    if (typeof value === 'string' && value === '') {
      return false
    }
    if (typeof value === 'boolean' && !value) {
      return false
    }

  }
  return true;
}

function checkFormData(data: Data) {
  const {email} = data;
  const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

  // Если email совпадает хотя бы с одним из массива
  if (emails.indexOf(email) > -1) {
    console.log("This email is already exist");
  } else {
    console.log("Posting data...");
  }
}
