let commentForm = document.querySelector('.contact__form');           // форма отправления сообщения
let commentField = document.querySelector('.contact__input-text');    // находим поле ввода сообщения
let commentUserName = document.querySelector('#name');                // находим поле ввода имя пользователя
let commentUserMail = document.querySelector('#email');               // находим поле ввода почты полльзователя
let submitButton = document.querySelector('.contact__button');        // находим кнопку отправки сообщения

commentForm.onsubmit = function (evt) {         // устанавливаем обработку события на отправку формы
    evt.preventDefault();                       // сбрасываем работу кнопки по умолчанию

    commentField.value = '';                    // очищаем поле ввода комментария
    commentUserName.value = '';                 // очищаем поле ввода имя полььзователя
    commentUserMail.value = '';                 // очищаем поле ввода Email
}

commentField.oninput = function () {                                             // обработка события на ввод данных
    if (commentField.value.length < 10 || commentField.value.length > 200) {     // условие соответсвия на количество символов
        commentField.classList.add('red-text');                                  // добавление класса, на изменение цвета текста
        submitButton.disabled = true;                                            // фиксируем кнопку в положении - отключена
    }
    else {
        submitButton.disabled = false;                  // включаем кнопку отправки форы
        commentField.classList.remove('red-text');      // удаляем выделение цвета текста красным
    }
}