const alltagsLi = document.querySelectorAll("li");

// alltagsLi.forEach((li)=>{
//     document.addEventListener("DOMContentLoaded", ()=>{
        
//     })
// })
const body = document.querySelector("body");
const iconsAndDes = document.querySelectorAll(".iconsAndDes");
const tagsAndOthers = document.querySelectorAll(".tagsAndOthers");
const myLinkimgDiv = document.querySelectorAll(".imgDiv");

const navbarFullDiv = document.querySelector(".navbarFullDiv");
const toggle = document.querySelector(".toggler");
const togBtn = document.querySelector(".togBtn");
const toggleNav = document.querySelector(".toggleNav");

const experArrow = document.querySelector(".experArrow");


// tagsAndOthers.forEach((tags, i)=>{
//     // tags.style.filter=`hue-rotate(${i * 45}deg)`;
// })




// window.addEventListener("scroll", (e)=>{

//     tagsAndOthers.forEach((tags, i)=>{
//         tags.style.transition= `${(((i+1)/10)) + 0.2}s`;

//         tags.classList.add("showTags");
//         tags.style.transform = `translateX(-150%)`;
//         tags.style.transition= `${(((i+1)/10)) + 0.2}s`;
//         tags.style.opacity=0;

//         if(window.scrollY > 900){
//             tags.style.transform = `translateX(0%)`;
//             tags.style.opacity=1;
            
//         }
//     })    
// })





toggle.addEventListener("click", ()=>{
    togBtn.classList.toggle("active");
    toggleNav.classList.toggle("active")
});








const aboutMeSection = document.querySelector(".aboutMeSection");
const myLinksDivTitle = document.querySelectorAll(".myLinksDivTitle");




window.addEventListener("scroll", ()=>{
console.log(window.scrollY);

    if(window.scrollY > 80){
        console.log("80");
        experArrow.classList.add("remove")
        // experArrow.style.opacity="0";
    }else{
        experArrow.classList.remove("remove")

        // experArrow.style.opacity="1";
    }


    iconsAndDes.forEach((section, i) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight / 1.15;
        section.style.transitionDelay=`${i * 0.15}s`

        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
            // alert(8458)
        }  else {
            section.classList.remove('visible');
        }

        // console.log(sectionTop, triggerBottom);
    });



    tagsAndOthers.forEach(tags=>{
        const sectionTop = tags.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight / 1.3;

        if (sectionTop < triggerBottom) {
            tags.classList.add('show');
            // alert(8458)
        }  else {
            tags.classList.remove('show');
        }

        // console.log(sectionTop, triggerBottom);
    });



    myLinkimgDiv.forEach(tags=>{
        const sectionTop = tags.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight / 0.8;

        if (sectionTop < triggerBottom) {
            tags.classList.add('show');
            // alert(8458)
        }  else {
            tags.classList.remove('show');
        }

        // console.log(sectionTop, triggerBottom);
    });


    myLinksDivTitle.forEach((myLinksDT, i)=>{
        
        const abcdef = myLinksDT.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight / 1;
    
            if (abcdef < triggerBottom) {
                myLinksDT.classList.add('show');
                // alert(8458)
            }  else {
                myLinksDT.classList.remove('show');
            }
    })
    



})
// window.addEventListener("scroll", ()=>{
//     const top = window.scrollY;
//     const offset = aboutMeSection.offsetTop - 100;
//     const height = aboutMeSection.offsetHeight;

//     const ifDone = top >= offset && top < offset + height;

//     // console.log(ifDone);
    

//     console.log( "Top" + " " + top);
//     console.log( "height" + " " + height);
//     console.log( "offset" + " " + offset);
//     console.log(ifDone);
    
    
// })








