window.onload = function() {
    let obj = document.querySelector('.obj');
    obj.style.left = 'calc(50% - 24px)';
    obj.style.top = 'calc(100% - 96px)';
}

let el = document.querySelector('.content');
let mill = document.querySelector('.mill');
let obj = document.querySelector('.obj');
let mSVG = document.getElementById('millSVG');
// настройки для разбития двери
let mSVGStartX = mSVG.clientWidth * 0.44 + mill.offsetLeft;
let mSVGEndX = mSVG.clientWidth * 0.56 + mill.offsetLeft;
let mSVGStartY = mSVG.clientHeight * 0.43 + (window.innerHeight - mSVG.clientHeight) / 2;
let mSVGEndY = mSVG.clientHeight * 0.58 + (window.innerHeight - mSVG.clientHeight) / 2;
let door = document.getElementById('door');
let amogus = document.getElementById('amogus');
let textA = document.querySelector('#aText');
let textS = document.querySelector('#sText');

let n = 2;
let timerId = setInterval(
    function() {
        let snitchCoordX = obj.offsetLeft;
        let snitchCoordY = obj.offsetTop;
        if (snitchCoordX >= mSVGStartX && snitchCoordX <= mSVGEndX && snitchCoordY >= mSVGStartY && snitchCoordY <= mSVGEndY) {
            if (n == 0) {
                door.style.opacity = 0;
                textS.innerHTML = 'Дверь открыта!';
                textA.innerHTML = 'Спасибо!<br/>Кликни на меня';
                setTimeout(function() {
                    door.remove();
                    amogus.style.display = 'block';
                    setTimeout(function() {
                        amogus.style.opacity = 1;
                    }, 100);
                    clearInterval(timerId);
                }, 500);
                setTimeout(function() {
                    textS.innerHTML = 'Лечу за курсором!';
                }, 2000);
            }
            else {
                let rCenter = [
                    [],
                    ['rotate(-90 1592 1573)', 'rotate(90 1382 1562)'],
                    ['rotate(-120 1593 1490)', 'rotate(135 1382 1509)']
                ];
                let second;
                if (n == 2) second = 'top';
                if (n == 1) second = 'down';
                let idLog_first = '#log__' + second + '_1';
                let idLog_second = '#log__' + second + '_2';
                let elemLog_first = document.querySelector(idLog_first);
                let elemLog_second = document.querySelector(idLog_second);
                elemLog_first.setAttribute("transform", rCenter[n][0]);
                elemLog_second.setAttribute("transform", rCenter[n][1]);
                textS.innerHTML = 'Разбил доску!';
                n = n - 1;
            }
        }
    }, 250
);

amogus.addEventListener("click",
    function(e) {
        textA.innerHTML = 'Вышел!';
        setTimeout(function() {
            textA.innerHTML = 'Пока!<br/> Прими участие в <a href="https://saydyyfest.iengo.ru/">SaydyyFEST</a>!';
            document.getElementById("motion").setAttribute("begin", 0);
        }, 3500);
    }
);

el.addEventListener("mousemove",
    function(e) {
        let diff = (obj.offsetLeft - e.clientY) / (obj.offsetTop - e.clientX);
        let tn = (Math.atan(diff) * 180 / Math.PI) * (-1);
        obj.style.left = (e.clientX - 24) + 'px';
        obj.style.top = (e.clientY - 24) + 'px';
        obj.style.transform = 'rotate(' + tn + 'deg)';
        setTimeout(
            function() {
                obj.style.transform = 'rotate(0deg)';
            }, 2000
        );
    }
);
