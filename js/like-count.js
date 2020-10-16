// cоздание Лайков и счетчика к ним 

let hend = document.querySelector('.like__img');              // элемент поднятого пальца
let likesNumber = document.querySelector('.like__count');     // цифра счетчика в html>span
let counter = 16;                                            // переменна для счетчика лайков - отсчет с 16 как в проекте

hend.onclick = function () {                                // фкнкция нажития на сердчко
    if (hend.classList.contains('like-good')) {            // если лайк был до нажатия, то
        likesNumber.textContent--;
        hend.classList.remove('like-good');                // счетчик уменьшится на 1 единицу, и удалится класс с изменением фона картинки
    } else {                                               // функция - Если условие - не верно 
        likesNumber.textContent++;
        hend.classList.add('like-good');               // счетчик увеличится на 1 единицу, и добавится класс с изменением фона 
    }
};
