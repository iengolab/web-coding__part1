var btn = document.querySelector('.btn');

// создаем событие click для объекта btn
btn.addEventListener("click", function() {
    // находим в объекте элемент с классом main
    let divMain = document.querySelector('.main');
    // создаем элемент с тегом div
    let divBlock = document.createElement('div');
    // применяем к созданному элементу класс block
    divBlock.className = "block";

    let divBlockNav = document.createElement('div');
    divBlockNav.className = "block__nav";

    let divBlockNavTitle = document.createElement('div');
    divBlockNavTitle.className = 'block__nav_title';
    // размещаем внутри указанного элемента контент/строку
    divBlockNavTitle.innerHTML = 'Меню';

    let divBlockNavHelp = document.createElement('div');
    divBlockNavHelp.className = 'block__nav_help';
    // создаем событие onmouseover для объекта
    divBlockNavHelp.onmouseover = panelInfo;
    divBlockNavHelp.innerHTML = '?';

    let divBlockNavClose = document.createElement('div');
    divBlockNavClose.className = 'block__nav_close';
    divBlockNavClose.onclick = closeBlock;
    divBlockNavClose.innerHTML = 'x';

    // включаем объект divBlockNavTitle в конец divBlockNav
    divBlockNav.append(divBlockNavTitle);
    divBlockNav.append(divBlockNavHelp);
    divBlockNav.append(divBlockNavClose);
    divBlock.append(divBlockNav);

    let divBlockContent = document.createElement('div');
    divBlockContent.className = 'block__content';
    divBlockContent.innerHTML = 'ЭТО Я!';
    divBlock.append(divBlockContent);
    // с помощью setTimeout вызываем задержку для операции
    setTimeout(function() {
        // .innerHeight узнаем текущую высоту объекта
        let h = window.innerHeight / 2;
        // выводим информацию в консоль
        console.log(h);
        // изменяем стиль объекта
        divBlockContent.style.height = h + 'px';
    }, 500); // задержка в 500 миллисекунд, в одной секунде - 1000 миллисекунд

    divMain.append(divBlock);
    // вызываем одноименную функцию
    changeText();
});

btn.addEventListener("click", function() {
    btn.style.top = '-100px';
});

function closeBlock() {
    btn.style.top = '24px';
    let divBlock = document.querySelector('.block');
    // удаляем объект с документа
    divBlock.remove();
}

function panelInfo() {
    let divBlockNav = document.querySelector('.block__nav');
    let divBlockHelpCheck = document.getElementsByClassName('block__help');
    // условие, что
    // если подсказка уже существует, то новый объект не должен создаваться
    if (divBlockHelpCheck.length == 0) {
        let divBlockHelp = document.createElement('div');
        divBlockHelp.className = 'block__help';
        divBlockHelp.innerHTML = 'Это подсказка.';
        divBlockNav.after(divBlockHelp);
        divBlockHelp.addEventListener("mouseout", function() {
            setTimeout(function() {
                document.querySelector('.block__help').remove();
            }, 500);
        });
    }
}

function changeText() {
    let divBlockContent = document.querySelector('.block__content');
    let str = divBlockContent.innerHTML;
    // текст разделяет ся на буквы и получаем массив из букв
    let splitStr = str.split('');
    // переворачиваем полученный массив
    let splitReverse = splitStr.reverse();
    // из элементов массива составляем строку
    let resStr = splitReverse.join('');
    setInterval(function() {
        let strNow = divBlockContent.innerHTML;
        if (strNow == str) {
            divBlockContent.innerHTML = resStr;
            divBlockContent.style.background = 'orange';
        }
        else {
            divBlockContent.innerHTML = str;
            divBlockContent.style.background = 'yellow';
        }
    }, 1000);
}
