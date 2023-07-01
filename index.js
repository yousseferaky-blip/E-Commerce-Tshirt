

// Start Chose By Category In Blog

const Tshirt = [
{
   category:"T-shirt",
   img:"Features/f1.jpg",
   price:"78",
},
{
   category:"shirt",
   img:"Features/f2.jpg",
   price:"81",
},
{
   category:"T-shirt",
   img:"Features/f3.jpg",
   price:"76",
},
{
   category:"shirt",
   img:"Features/f4.jpg",
   price:"85",
},
{
   category:"shirt",
   img:"Features/f5.jpg",
   price:"94",
},
{
   category:"T-shirt",
   img:"Features/f6.jpg",
   price:"98",
},
{
   category:"pants",
   img:"Features/f7.jpg",
   price:"88",
},
{
   category:"T-shirt",
   img:"Features/f8.jpg",
   price:"70",
},


{
   category:"T-shirt",
   img:"Features/n1.jpg",
   price:"156",
},

{
   category:"shirt",
   img:"Features/f2.jpg",
   price:"130",
},
{
   category:"T-shirt",
   img:"Features/f3.jpg",
   price:"129",
},
{
   category:"shirt",
   img:"Features/f4.jpg",
   price:"104",
},
{
   category:"T-shirt",
   img:"Features/f5.jpg",
   price:"109",
},
{
   category:"pants",
   img:"Features/f6.jpg",
   price:"119",
},
{
   category:"pants",
   img:"Features/f7.jpg",
   price:"129",
},
{
   category:"shirt",
   img:"Features/f8.jpg",
   price:"99",
},




]


let Blog = document.querySelector(".Blog")
let ProductButton = document.querySelectorAll(".Product-Button")


window.addEventListener("load",()=>{
    displayMenuItem(Tshirt)
})


ProductButton.forEach((BTN)=>{
  BTN.addEventListener("click",(e)=>{
     
    let categorys = e.currentTarget.dataset.id
    let Shirt = Tshirt.filter((Shirts)=>{
      
        if(Shirts.category  === categorys ){
            return Shirts
        }
    })
    
    if( categorys == "all"){
        displayMenuItem(Tshirt)
    }else{
        displayMenuItem(Shirt)
    } 

  })
})


function  displayMenuItem(FeatureArrivalsContainerItem){
    let FeatureItem = FeatureArrivalsContainerItem.map((item)=>{
        return `
        <div  class="Feature-Arrivals-Card">
        <img src="${item.img}">
        <h6>adidas</h6>
        <h4>Cartoon Astronout T-shirt</h4>
        <div class="Container-Star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="Feature-Arrivals-Icon">
            <h5 class="Price">$${item.price}</h5>
            <i class="fa-solid fa-cart-shopping"></i>   
        </div>
    </div>
        `
    })
    FeatureItem = FeatureItem.join(" ")
    Blog.innerHTML = FeatureItem
}




//  Start Click Up To Button

let ClickUp =document.querySelector(".Click-Up")

onscroll = function(){
    if(scrollY >= 300){
        ClickUp.style.display="block"
    }else{
        ClickUp.style.display="none"
    }
}

ClickUp.addEventListener("click",()=>{
   scroll(0,0)
})










