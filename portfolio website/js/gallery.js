import desings from "../category.json" with {"type":"json"};


const titleHtml = document.querySelector('title');
const faviconLink = document.querySelector('link[rel="icon"]');
console.log(faviconLink);


const gallery_main_body = document.querySelector(".gallery_main_body");
const tagsMainDiv = document.querySelector(".tagsMainDiv");
const desingDestails = document.querySelector(".desingDestails");
const titleCate = document.querySelector(".titleCate");
const keywordsBody = document.querySelector(".keywords-body");

const linkUrl = (window.location.href).split("/");
const idfromlink = linkUrl[linkUrl.length - 1];

// সঠিক ডিজাইন খুঁজে বের করলাম
const matchDesign = desings.find(des => des.id == idfromlink);
console.log(matchDesign);

console.log(matchDesign.image[0].href);

//  Setting fav Icon?

faviconLink.href=matchDesign.image[0].href;
titleHtml.innerHTML=matchDesign.title + " | Abu Yousuf";



if(!matchDesign){
    gallery_main_body.innerHTML=`<h2 class="displayError">No Design Found. Wrong Url Search !!</h2>`;
    // desingDestails.innerHTML=""
}




// ডুপ্লিকেট ছাড়া ক্যাটাগরি তৈরি করলাম
const categoriesHunt = [...new Set(desings.map(des => des.category))];

let filteredDesing = [];
titleCate.innerText= matchDesign.title



const bbb = ()=>{
    categoriesHunt.forEach((categore) => {
        const btn = document.createElement("button");
        btn.innerText = categore;
        tagsMainDiv.appendChild(btn);
    
        btn.addEventListener("click", (e) => {
            const allBtn = tagsMainDiv.querySelectorAll("button");
            allBtn.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
    
            filteredDesing = desings.filter(des => des.category === categore);
            console.log(filteredDesing);
    
            imageFullShow(filteredDesing);
        });
    });
}


const imageFullShow = (desingArray) => {
    gallery_main_body.innerHTML = "";
    keywordsBody.innerHTML = "";

    if (!desingArray || desingArray.length === 0) {
        gallery_main_body.innerHTML = "<p>Design Not Found</p>";
        return;
    }

    desingArray.forEach(desingData => {
        const { title, image, tags} = desingData;
        console.log();
        const isImageOk = image[0].href==="" && image[0].description==="";

        if(isImageOk){
            gallery_main_body.classList.add("nocolumn");
            gallery_main_body.innerHTML=`<h3 class="displayError">The Designs not published Yet, Contact The Owner Please</h3>`;
        
        }

        image.forEach((imgSrc) => {
            


            const imageDiv_gallery = document.createElement("div");
            imageDiv_gallery.classList.add("imageDiv_gallery");

            imageDiv_gallery.innerHTML = `
                ${imgSrc.href ? `<img src="${imgSrc.href}" class="galleryImage" alt="${imgSrc.title || ''}">` : ""}
                ${imgSrc.description ? `<p class="image_desc">${imgSrc.description}</p>` : ""}
            `;

            gallery_main_body.appendChild(imageDiv_gallery);
        });

        if( !tags || tags.length === 0){
            keywordsBody.innerText="No Related Keywords";
        }

        tags.forEach((tagdiv)=>{
            const keywords = document.createElement("div");
            keywords.classList.add("keywords");
            keywords.innerText= tagdiv;
            keywordsBody.appendChild(keywords)
        })

    });


//   Tags Set Up





};

// লোডের সময় প্রাথমিক ডিজাইন দেখাই
imageFullShow([matchDesign]);



// const msgBtn = document.querySelector(".msgBtn");
// msgBtn.addEventListener('click',()=>{openMessenger()})

// function openMessenger() {
//     const message = encodeURIComponent("Hello. I want a design");
//     const appLink = "fb-messenger://user-thread/abirabuyousuf?message=" + message;
//     const webLink = "https://m.me/abirabuyousuf?ref=" + message;

//     // Try to open Messenger app
//     const now = Date.now();
//     window.location.href = appLink;

//     // If app doesn't open in 2s, redirect to web
//     setTimeout(() => {
//       if (Date.now() - now < 2500) {
//         window.location.href = webLink;
//       }
//     }, 1500);
//   }