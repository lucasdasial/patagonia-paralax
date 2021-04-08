const rellax = new Rellax(".rellax") 

//-------------------------------------------//

const target = document.querySelectorAll('[data-anime]')
const animeteClass = "animate"

function animeteScroll() {
    const windowTop = pageYOffset + ((window.innerHeight*3)/4);
    target.forEach((e) => {
        
        if(windowTop > e.offsetTop){
            e.classList.add(animeteClass)
        }
    })
}

window.addEventListener("scroll",() => {
    animeteScroll();
})