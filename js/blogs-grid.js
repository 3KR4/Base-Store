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
{
  img:"img/blog-04.jpg"
},
{
  img:"img/blog-05.jpg"
},
{
  img:"img/blog-06.jpg"
},
]



let blogCards = document.querySelector(".blogs .cards")
function rednderblogs() {
let blogItems = blogs.map((item) => {
  return`
  <div class="col-sm-12 col-lg-4 col-md-6">
    <div class="card">
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
</div>
  `
}).join("") 
blogCards.innerHTML = blogItems
}
rednderblogs();