let intro = document.querySelector('.intro')
let logoSpan = document.querySelectorAll('.logo')

//Intro animation

const animation = [ window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade')
                }, (idx + 1) * 50);
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 2300);
    });
})
]
setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting) {
                entry.target.classList.add('show')
            }
        })
    }) 
    const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

}, 3200);




export default animation