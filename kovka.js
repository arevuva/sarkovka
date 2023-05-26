/*$(document).ready(function(){
    $('.menu_burger').click(function(event){
        $('.menu_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('_lock')
    });
});
*/
"use strict"

document.addEventListener('DOMContentLoaded', function(){
let burger=document.querySelector('.menu_burger');
let heamenu=document.querySelector('.header_menu');
let body=document.querySelector('body');
burger.addEventListener('click',
function(event){
    burger.classList.toggle('active');
    heamenu.classList.toggle('active');
    body.classList.toggle('lock');
});

let sub_call=document.querySelectorAll('.sub-call');
let call_act=document.querySelector('.call.active');
let phone=document.querySelector('.icon-phone')
let call=document.querySelector('.call');
call.addEventListener('click',
function(e){
  sub_call.forEach(element => element.classList.toggle('active'));
  if(phone.classList.contains("icon-phone")) {
    phone.classList.remove("icon-phone");
    phone.classList.add("icon-cross");
}
else {
    phone.classList.remove("icon-cross");
    phone.classList.add("icon-phone");
}
});

let kat=document.querySelector('#kat');
let slist=document.querySelector('.slide-list');
kat.addEventListener('click',
function(event){
    slist.classList.toggle('mob');
});

//Плавность прокрутки до элемента
const anchors = document.querySelectorAll('a[href*="#kacheli"]');
for (let anchor of anchors){
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};


// считываем кнопку
const goTopBtn = document.querySelector(".go-top");
// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);
function trackScroll() {
  // вычисляем положение от верхушки страницы
  const scrolled = window.pageYOffset;
  // считаем высоту окна браузера
  const coords = document.documentElement.clientHeight;
  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    goTopBtn.classList.add("go-top--show");
  } else {
    // иначе исчезает
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  // пока не вернулись в начало страницы
  if (window.pageYOffset > 0) {
    // скроллим наверх
    window.scrollBy(0, -75); // второй аргумент - скорость
    setTimeout(goTop, 0); // входим в рекурсию
  }
};


const form = document.getElementById('form');
form.addEventListener('submit', formSend);
async function formSend(e){
    e.preventDefault();
    let error=formValidate(form);
    if(error===0){
        alert('Скоро можно будет отправить')
    }
    else{
        alert('Заполните обязательные поля');
    }
};

function formValidate(form){
    let error=0;
    let formReq=document.querySelectorAll('._req');

    for (let index=0; index<formReq.length; index++){
        const input=formReq[index];
        formRemoveError(input);
        if (input.classList.contains('_email')){
            if(emailTest(input)){
                formAddError(input);
                error++;
            }
            }
        else{
            if(input.value===''){
                formAddError(input);
                error++;
            }
         }
    }
    return error;
}
function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
};
function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}
function emailTest(input){
    return !/^\w+([\.-]&\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


$(".gallery-list").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
})


