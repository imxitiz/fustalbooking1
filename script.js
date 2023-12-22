const lists = document.querySelector('.list');
function welcome(){
     lists.classList.toggle('listshow');
}
function menubar(){
     lists.classList.toggle('listshow');
}
function fustImag(){
     document.querySelector('.container').style.display = 'none';
     document.querySelector('.fdes1').style.display = 'block';
}
function fustImag1(){
     document.querySelector('.container').style.display = 'none';
     document.querySelector('.fdes2').style.display = 'block';
}
function fustImag2(){
     document.querySelector('.container').style.display = 'none';
     document.querySelector('.fdes3').style.display = 'block';
}
function fustImag3(){
     document.querySelector('.container').style.display = 'none';
     document.querySelector('.fdes4').style.display = 'block';
}

function cancel(){
     document.querySelector('.fdes1').style.display = 'none';
     document.querySelector('.fdes2').style.display = 'none';
     document.querySelector('.fdes3').style.display = 'none';
     document.querySelector('.fdes4').style.display = 'none';
     document.querySelector('.booking1').style.display = 'none';
     document.querySelector('.booking2').style.display = 'none';
     document.querySelector('.booking3').style.display = 'none';
     document.querySelector('.booking4').style.display = 'none';
     document.querySelector('.container').style.display = 'block';
}

function Book1(){
     document.querySelector('.booking1').style.display = 'block';
}
function Book2(){
     document.querySelector('.booking2').style.display = 'block';
}
function Book3(){
     document.querySelector('.booking3').style.display = 'block';
}
function Book4(){
     document.querySelector('.booking4').style.display = 'block';
}


// Js for date
const after3days = document.querySelectorAll('.after3days');
const d = new Date();

d.setDate(d.getDate()+2);
after3days.forEach(item =>{
    item .innerHTML = d.toLocaleString('default',{day: 'numeric', month: 'short'})
})


// js for slider
const Slider = () =>{
const fustalimage = document.querySelector('.fustal-box');
const slidebutton = document.querySelectorAll('.slide-button');
const maxScrollLeft = fustalimage.scrollWidth - fustalimage.clientWidth;
 
// console.log(maxScrollLeft)

slidebutton.forEach(button =>{
     button.addEventListener('click',()=>{
          const direction = button.id === 'prev-slide'? -1 : 1;
          const scrollAmt = fustalimage.clientWidth *direction;
          fustalimage.scrollLeft = ({left: scrollAmt, behavior: 'smooth'});
     });
});
const handleSlideButtons = () => {
     slidebutton[0].style.display = fustalimage.scrollLeft <= 0 ? 'none' : 'block';
     slidebutton[1].style.display = fustalimage.scrollLeft >= maxScrollLeft ? 'none' : 'block';
 };
 fustalimage.addEventListener('scroll', ()=>{
     handleSlideButtons();
 });

}
window.addEventListener('load',Slider);



 



