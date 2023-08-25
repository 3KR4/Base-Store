                                                            //! testimonials

const testimonials = [

{
  id:1, 
  mainImg:"../img/avatar/avatar 1.jpeg",
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
  name:"Senkur",
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
  <div class="card col-12 col-lg-4 col-md-6" data-aos="zoom-in-up"
  data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
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
}) 
blogCards.innerHTML = blogItems
}
rednderblogs();





