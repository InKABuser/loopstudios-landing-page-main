const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const svg = document.querySelector('svg');
const navL = document.querySelector('.navL')
const width = screen.width;


hamburger.addEventListener('click', () => {
    const bar1V = bar1.getAttribute('y1');
    if (bar1V === '10%') {
    bar1.setAttribute('y1', '90%')
    bar3.setAttribute('y1', '10%')
    bar2.style.opacity = '0'
    navL.style.display ='flex'
 }else {
    bar1.setAttribute('y1', '10%')
    bar3.setAttribute('y1', '90%')
    bar2.style.opacity = '1'
    navL.style.display ="none"
 }
})

window.addEventListener('load', () =>{
   if (window.innerWidth > 760) {
      navL.style.display = 'flex';
   }
   else {
      bar1.setAttribute('y1', '10%')
      bar3.setAttribute('y1', '90%')
      bar2.style.opacity = '1'
      navL.style.display = 'none';
   }
})
window.addEventListener('resize', () =>{
   if (window.innerWidth > 760) {
      navL.style.display = 'flex';
   }
   else {
      bar1.setAttribute('y1', '10%')
      bar3.setAttribute('y1', '90%')
      bar2.style.opacity = '1'
      navL.style.display = 'none';
   }
})

