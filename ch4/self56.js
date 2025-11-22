var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log('start');
// Типизировать объект phones
var phones = [
    {
        company: "Nokia",
        number: 1285637,
        size: "5.5",
        companyPartner: "MobileNokia",
        manufactured: new Date("2022-09-01"),
    },
    {
        company: "Samsung",
        number: 4356637,
        size: "5.0",
        companyPartner: "SamMobile",
        manufactured: new Date("2021-11-05"),
    },
    {
        company: "Apple",
        number: 4552833,
        size: "5.7",
        companyPartner: "no data",
        manufactured: new Date("2022-05-24T12:00:00"),
    },
];
// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе
function filterPhonesByDate(phones, key, initial) {
    return phones
        .filter(function (phone) {
        var manufactored = phone[key];
        if (manufactored instanceof Date
            && manufactored.getTime() > new Date(initial).getTime()) {
            return phone;
        }
    })
        .map(function (phone) {
        var newObj = __assign(__assign({}, phone), { initialDate: initial });
        return newObj;
    });
}
// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта
console.log('test');
console.log('res', filterPhonesByDate(phones, "manufactured", "2022-01-01"));
