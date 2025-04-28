import desings from "../category.json" with {"type":"json"}

const cv1parasAll = document.querySelectorAll(".cv1paras");
const categories_body = document.querySelector(".categories_body");


cv1parasAll.forEach((cv1paras, i)=>{
    setTimeout(() => {
        cv1paras.classList.add("show")
    }, 500);
});




// ksvlksdcdk   

desings.forEach((mydes, i)=>{
    const {title, image, id, popular, category} = mydes;
    console.log(image, title);
    
    const categorySame = document.createElement("a");
    categorySame.classList.add("categorySame");
    categorySame.href=`/desings/${id}`;
    categorySame.innerHTML=`
        <img src="${image[0].href}" class="category_img" alt="">
        <p class="catagory_title">${title}</p>
    `;
    
    categories_body.appendChild(categorySame)
})







