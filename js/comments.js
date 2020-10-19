let commentForm = document.querySelector('.comment-f__form');  // форма добавления комментария
let commentList = document.querySelector('.comments__list');          // список новых комментариев
let commentUserName = document.querySelector('#name-user');    // имя пользователя
let commentField = document.querySelector('.comment-f__text');    // поле ввода комментария
let commentUserMail = document.querySelector('#email-user');      // поле ввода почты полльзователя
let submitButton = document.querySelector('.contact-f__button'); // находим кнопку отправки комментария

commentForm.onsubmit = function (evt) {                // устанавливаем обработку события на отправку формы
    evt.preventDefault();                             // сбрасываем работу кнопки по умолчанию

    let newComment = document.createElement('li');     // создаем новый элемент комментарий
    newComment.classList.add('comments__item');        // добавляем элементу классы
    newComment.classList.add('comment');               // добавляем элементу классы
    let newContainer = document.createElement('div');  // создаем новый элемент бокс для имени и аватара
    newContainer.classList.add('comment__header');     // добавляем контейнеру классы
    let newText = document.createElement('p');         // создаём элемент содержащий текст сообщения
    newText.classList.add('comment__text');            // добавляем элементу классы
    newText.textContent = commentField.value;          // добавляем элементу текст из поля ввода
    newComment.append(newContainer, newText);          // добавляем нашему новому комментарию новые элементы
    let newImg = document.createElement('img');        // создаем элемент аватара 
    newImg.classList.add('comment__img');              // добавляем новому элементу классы
    newImg.setAttribute('src', 'img/newAvatar.png');   // добавляем аватару источкин для картинки
    newImg.setAttribute('alt', 'Аватар автора комментария');   // добавляем аватару атрибут alt
    let newUserName = document.createElement('p');     // создаём элемент содержащий имя автора комментарий
    newUserName.classList.add('comment__user-name');   // добавляем новому элементу классы
    newUserName.textContent = commentUserName.value;   // добавляем элементу текст из поля ввода 
    newContainer.append(newImg, newUserName);          // добавляем аватар и имя пользователя в контейнер
    commentList.append(newComment);                    // добавляем новый комментарий в DOM
    commentField.value = '';                           // очищаем поле ввода комментария
    commentUserName.value = '';                        // очищаем поле ввода имя полььзователя
    commentUserMail.value = '';                        // очищаем поле ввода Email
}

commentField.oninput = function () {                   // обработка события на ввод данных
    if (commentField.value.length < 10 || commentField.value.length > 200) {    // условие соответсвия на количество символов
        commentField.classList.add('red-text');        // добавление класса, на изменение цвета текста
        submitButton.disabled = true;                 // фиксируем кнопку в положении - отключена
    }
    else {
        submitButton.disabled = false;                 // включаем кнопку отправки форы
        commentField.classList.remove('red-text');      // удаляем выделение цвета текста красным
    }
}