let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    minutesNumber = document.querySelector('.minutes'),
    hoursNumber = document.querySelector('.hours');

function clock() {
    let time = new Date(),
    seconds = time.getSeconds()* 6,
    minutes = time.getMinutes()* 6,
    hours = time.getHours()* 30;

    sec.style = `transform: rotate(${seconds}deg); transition: 1s linear`;
    min.style = `transform: rotate(${minutes}deg); transition: 1s linear`;
    hour.style = `transform: rotate(${hours}deg); transition: 1s linear`;

    hoursNumber.innerHTML = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
    minutesNumber.innerHTML = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
    

    setTimeout(() => {
        clock()
    }, 1000)

}

clock();

const links =document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for(let i = 0; i < links.length; i++){

    links[i].addEventListener('click', function(e) {
        e.preventDefault();

        for(let j = 0; j < links.length; j++){
            links[j].classList.remove('active');
            tabs[j].classList.remove('active');
        }
        tab(this, tabs[i]);

    })
}

function tab(el, arr) {
    el.classList.add('active')
    arr.classList.add('active')
}

//Секундамер

let watchBtn = document.querySelector('.stopwatch__btn'), // кнопка старт
    secondWatch = document.querySelector('.stopwatch__seconds'), //секунды
    minutesWatch = document.querySelector('.stopwatch__minutes'), // минуты
    hoursWatch = document.querySelector('.stopwatch__hours'), // часы
    secondInfo = document.querySelector('.tabsLink__span'); // индикатор работы секундомера

watchBtn.addEventListener('click' ,function() {

    if(this.innerHTML == 'start'){
        this.innerHTML = 'stop';
        secondInfo.classList.add('active');
        
        let i = 0;
        setTimeout(() => stopWatch(this, i), 1000)
    }
    else if(this.innerHTML == 'stop'){
        this.innerHTML = 'clear';
        secondInfo.classList.remove('active');
        secondInfo.classList.add('active_clear');

    }else{
        this.innerHTML = 'start';
        secondInfo.classList.remove('active_clear');
        
        secondWatch.innerHTML = 0;
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;
    }    
})

function stopWatch(el, i) {
    if(el.innerHTML == 'stop'){
        if(i == 60){
            i = 0;
            secondWatch.innerHTML = i;
            if(minutesWatch.innerHTML == 59){
                minutesWatch.innerHTML = 0;
                hoursWatch.innerHTML++;
            }else{
                minutesWatch.innerHTML++;
            }
        }else{
            i++;
            secondWatch.innerHTML = i;
        }
        setTimeout(() => stopWatch(el, i), 1000)
    }

}



