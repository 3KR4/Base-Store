const video = document.querySelector(".video")
const closeVideo = document.querySelector(".closeVideo")
const openVideo = document.querySelector(".openVideo")
openVideo.onclick = function() {
  video.classList.add("videoClicked")
}
closeVideo.onclick = function() {
  video.classList.remove("videoClicked")
}
                                                         //! checkbox
function check() {
  const checkbox = document.querySelector(".checkbox")
  const priceOne = document.querySelector(".priceOne")
  const priceTwo = document.querySelector(".priceTwo")
  const pricethere = document.querySelector(".pricethere")
    if (checkbox.checked == true) {
      priceOne.innerHTML = "<div><h3>$149</h3>/per year</div>"
      priceTwo.innerHTML = "<div><h3>$608</h3>/per year</div>"
      pricethere.innerHTML = "<div><h3>$1568</h3>/per year</div>"
    } else {
      priceOne.innerHTML = "<div><h3>$29</h3>/per month</div>"
      priceTwo.innerHTML = "<div><h3>$59</h3>/per month</div>"
      pricethere.innerHTML = "<div><h3>$139</h3>/per month</div>" 
    };}
                                                            //! Filter

const btns = [
  {
    class:"clicked",
    data: ".all",
    title:"Category",
  },
  {
    data: ".Computer",
    title:"Computer",
  },
  {
    data: ".Console",
    title:"Console",
  },
  {
    data: ".Macbook",
    title:"Macbook",
  },
  {
    data: ".Mopile",
    title:"Mopile",
  },
]
let filterBtn = document.querySelector(".filter .portfolio-nav ul")
function rednderfilterBtn() {
  let filterBtns = btns.map((item) => {
    return`
    <li data-filter= "${item.data}" class="${item.class}">
      ${item.title}
    </li>
    `
  }).join("")
  filterBtn.innerHTML = filterBtns
  }
rednderfilterBtn();

const filter = [ 
  // computer
{ 
  class: "all Computer",
  img:"img/Filter/pc/pc w  (1).jpg",
  title:"Gaming Pc",
},
{
  class: "all Computer",
  img:"img/Filter/pc/pc w  (2).jpg",
  title:"Gaming Pc",
},
{
  class: "all Computer",
  img:"img/Filter/pc/pc w  (3).jpg",
  title:"Gaming Pc",
},

// Console
{ 
  class: "all Computer",
  img:"img/Filter/pc/pc w  (4).jpg",
  title:"Gaming Pc",
},
{ 
  class: "all Console",
  img:"img/Filter/Console/console - w (1).jpg",
  title:"Play Station",
},
{
  class: "all Console",
  img:"img/Filter/Console/console - w (2).jpg",
  title:"Play Station",
},
{
  class: "all Console",
  img:"img/Filter/Console/console - w (33).jpg",
  title:"Play Station",
},
{ 
  class: "all Console",
  img:"img/Filter/Console/console - w (4).jpg",
  title:"Play Station",
},
{ 
  class: "all Macbook",
  img:"img/Filter/macbook/macbook  w  (1).jpg",
  title:"Macbook",
},
{
  class: "all Macbook",
  img:"img/Filter/macbook/macbook  w  (2).jpg",
  title:"Macbook",
},
{
  class: "all Macbook",
  img:"img/Filter/macbook/macbook  w  (3).jpg",
  title:"Macbook",
},
{ 
  class: "all Macbook",
  img:"img/Filter/macbook/macbook  w  (4).jpg",
  title:"Macbook",
},
{ 
  class: "all Mopile",
  img:"img/Filter/Mobile/Mobile  (1).jpg",
  title:"Mopile",
},
{
  class: "all Mopile",
  img:"img/Filter/Mobile/Mobile  (2).jpg",
  title:"Mopile",
},
{
  class: "all Mopile",
  img:"img/Filter/Mobile/Mobile  (3).jpg",
  title:"Mopile",
},
{ 
  class: "all Mopile",
  img:"img/Filter/Mobile/Mobile  (4).jpg",
  title:"Mopile",
},
{
  class: "all Mopile",
  img:"/img/Filter/Mobile/Mobile  (5).jpg",
  title:"Mopile",
},
{
  class: "all Mopile",
  img:"img/Filter/Mobile/Mobile  (6).jpg",
  title:"Mopile",
},
]
let filterCards = document.querySelector(".filter .mh-portfolio .main-holder .filterss")
function rednderfilter() {
let filterItems = filter.map((item) => {
  return`
  <div class="grdata-item col-sm-6 col-lg-4 ${item.class}">
  <div class="card">
    <img src="${item.img}" alt="">
    <div class="fig-caption">
      <div class="before">
        <h4>${item.title}</h4>
        <span class="">Branded Ecommerce</span>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>
</div>
  `
}).join("")
filterCards.innerHTML = filterItems
  }
rednderfilter();

let switcherli = document.querySelectorAll(".mh-portfolio li");

switcherli.forEach((li) => {
  li.addEventListener("click", removeClicked)
  li.addEventListener("click", manageFilter)
});
function removeClicked() {
  switcherli.forEach((li) => {
    li.classList.remove("clicked")
    this.classList.add("clicked")
  });
}
function manageFilter() {
  document.querySelectorAll(".main-holder .filterss .grdata-item").forEach((el) => {
    el.style.display = 'none';
  });
  document.querySelectorAll(this.dataset.filter).forEach((el) => {
    el.style.display = "block";
  });
}
                                                            //! testimonials
const testimonials = [

  {
    id:1, 
    mainImg:"img/avatar/avatar 1.png",
    name:"Eren Yeager",
    year:2013,
    anime:"Attack On Titan",
    img:"img/dropcom.png"
  },
  {
    id:2, 
    mainImg:"img/avatar/avatar 2.jpeg",
    name:"Monkey D. Luffy",
    year:1999,
    anime:"One Piece",
    img:"img/dropcom.png"
  },
  {
    id:3,
    mainImg:"img/avatar/avatar 3.jpeg", 
    name:"Naruto",
    year:2000,
    anime:"Naruto hippuden",
    img:"img/dropcom.png"
  },
  {
    id:4, 
    mainImg:"img/avatar/avatar 4.jpeg",
    name:"Gojo Satoru",
    year:2020,
    anime:"jujutsu kaisen",
    img:"img/dropcom.png"
  },
  {
    id:5, 
    mainImg:"img/avatar/avatar 5.jpeg",
    name:"Senku",
    year:2019,
    anime:"Dr.Stone",
    img:"img/dropcom.png"
  },
  {
    id:6, 
    mainImg:"img/avatar/avatar 6.jpeg",
    name:"Asta",
    year:2016,
    anime:"Black Clover",
    img:"img/dropcom.png"
  },
  {
    id:7,
    mainImg:"img/avatar/avatar 7.jpeg",
    name:"Thorfinn",
    year:2019,
    anime:"Vinland Saga",
    img:"img/dropcom.png"
  }
  ];
  let testCards = document.querySelector(".testimonials .cards .mySwiper  .swiper-wrapper ")
  function rednderTestimonials() {
  let testItems = testimonials.map((item) => {
  
    return`
    
    <div class="swiper-slide">
      <div class="card">
      <img src="${item.mainImg}" alt="">
      <div class="text-holder">
        <h1>${item.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Vero ut voluptates optio, delectus amet illo reiciendis tempore, 
          odio cum inventore sapiente consequuntur natus a ab sunt 
          culpa dolorem veritatis hic.</p>
        <div class="holder">
          <div class="info">
            <h5>${item.year}</h5>  
            <p>${item.anime}</p>
          </div>
          <img class="logo" src="${item.img}" alt="">
        </div>
      </div>
    </div>
    </div>
    `
  }) 
  testCards.innerHTML = testItems
  };
  rednderTestimonials();
                                                            //! blogs

const blogs = [ 
{
  img:"img/blog-01.png"
},
{
  img:"img/blog-02.png"
},
{
  img:"img/blog-03.png"
},
]
let blogCards = document.querySelector(".blogs .cards")
function rednderblogs() {
let blogItems = blogs.map((item) => {
  return`
  <div class="card col-12 col-lg-4 col-md-6">
  <div class="img-holder">
    <img src="${item.img}" alt="">
    <div class="animation"><a href="#">Read More</a></div>
  </div>
  <div class="info">
    <div class="users">
      <p><i class="fa-regular fa-user"></i> Musharof Chy</p>
      <p><i class="fa-regular fa-file-lines"></i> 25 Dec, 2025</p>
    </div>
    <h3>Free advertising for your online business</h3>
  </div>
</div>
  `
}).join("") 
blogCards.innerHTML = blogItems
}
rednderblogs();
