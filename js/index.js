/*класс Validator.
статические методы
  static isRequired,
   static isEmail,
    static isDate итд.
обработчик сабмита формы form.addEventListener 
 В нем все значения формы с помощью
  formData 
if (!Validator.isEmail(emailValue)) showError() ...
*/
//получим ссылку на нашу форму:
let form = document.querySelector('#myform');

//класс для валидации формы
class Validator {
    static isRequired(value) {
 return value !== "";
}
    static isEmail(email) {
        let ok = true;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)){
 return ok ;
    }}
    static isPassword(password, confirmPassword) {
        let yes = true;
        if ( password === confirmPassword) {
            return yes;
        }
    }
    static isString(value) {
        let str = true;
        if (typeof value === 'string') {
            console.log(typeof value);
            return str;
        }
    }
    static isTooShort(value) {
        let norm = true;
        if (value.length>3) {
            return norm;
        }
    }
    static isTooLong(value) {
        let norm = true;
        if (value.length<15) {
            return norm;
        }
    }
    static isBio(value) {
        let bio = true;
        if (value.length >100) {
            return bio;
        }
    }
    static isAdult(value) {
        let adult = true;
        if(value>18) {
            return adult;
        }
    }
    }
   
    //делаем обработчик сабмита формы
form.addEventListener('submit', function(event) {
    "use strict";
    event.preventDefault();// Отменить отправку формы
    let formData = new FormData(form);
    
       for (let value of formData.values()) {
    
        if(!Validator.isRequired(value)) {
        
         alert('please,fill out the form');
         
       } 
    }
            
    if (!Validator.isEmail(formData.get('email'))){
                alert('please, fill in email correct');
        }
    if (!Validator.isPassword(formData.get('password'),formData.get('confirmPassword'))) {
        alert('password is not confirmed');
    }
    if (!Validator.isString(formData.get('firstName'))){
        alert('please, fill in correct name');
    }
    if (!Validator.isString(formData.get('lastName'))){
        alert('please, fill in correct last name');
    }
    if (!Validator.isTooShort(formData.get('firstName'))) {
        alert('firstname is too short');
    }
    if (!Validator.isTooShort(formData.get('lastName'))) {
        alert('lasstname is too short');
    }
    if (!Validator.isTooLong(formData.get('firstName'))) {
        alert('firstname is too long');
    }
    if (!Validator.isTooLong(formData.get('lastName'))) {
        alert('lastname is too long');
    }
    if (!Validator.isBio(formData.get('text'))) {
        alert ('please, tell more about you');
    }
    if (!Validator.isAdult(formData.get('age'))){
        alert ('sorry,you are very young');
    }
})
