var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
document.querySelectorAll('button').forEach(function (b) {
    b.addEventListener('click', function (e) {
        e.preventDefault();
        var email = document.querySelector('#email');
        var title = document.querySelector('#title');
        var text = document.querySelector('#text');
        var checkbox = document.querySelector('#checkbox');
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
        if (IsValidProperties(formData)) {
            checkFormData(formData);
        }
        else {
            console.log('not valid');
        }
    });
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    console.log('validateFormData', data);
    if (IsValidProperties(data)) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function IsValidProperties(data) {
    for (var k in data) {
        var key = k;
        var value = data[key];
        if (typeof value === 'string' && value === '') {
            return false;
        }
        if (typeof value === 'boolean' && !value) {
            return false;
        }
    }
    return true;
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if (emails.indexOf(email) > -1) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
