                                                                //! Header
  // <div class="header">
  //   <nav>
                  //! html
  //   </nav>
  // </div>
let header = document.querySelector(".header")
mainHeader = () =>{
  return header.innerHTML = `
  <div class="container" data-aos="fade-up"
  data-aos-anchor-placement="top-bottom" data-aos-duration="1200">
  <div class="logo">
    <img src="img/logo.png" alt="">
    <H1>Base</H1>
  </div>

  <div class="menu">
    <a href="sign-up.html">
      <i class="fa-regular fa-user user"></i>
    </a>
    <i class="fa-solid fa-bars bars"></i>
    <ul class="nav-links">
      <li><a class="active" href="index.html">home</a></li>
      <li><a href="about.html">about</a></li>
      <li><a href="#">features</a></li>
      <li><a href="#">support</a></li>
      <li><span class="pages">Pages</span>
        <i class="fa-solid fa-angle-down down"></i>
      <!--! Mega Menu -->
      <div class="mega-menu">
        <ul class="links">

            <li>
              <a href="#">
                Features</a>
            </li>
            
            <li>
              <a href="#">
                Crafted </a>
            </li>

            <li>
              <a href="#">
                Testimonials</a>
            </li>

            <li>
              <a href="#">
                Pricing</a>
            </li>
            
            <li>
              <a href="#B">
                Blogs</a>
            </li>
            <li>
              <a href="#">
                contact</a>
            </li>
          </ul>
        </div></li>

    </ul>
  </div>

  <div class="holder">
    <div class="darkLight-searchBox">
      <div class="darkLight">
        <i class='bx bx-moon moon' ></i>
        <span class="material-symbols-outlined sun">
clear_day
</span>
      </div>

      <div class="searchBox">
        <div class="searchToggel">
          <i class='bx bx-x cancel'></i>
          <i class='bx bx-search-alt-2 search'></i>
          <div class="search-field">
            <input type="text" placeholder="Search...">
            <i class='bx bx-search-alt-2'></i>
          </div>
        </div>
      </div>
    </div>
    <a href="sign-up.html">Sign In</a>
  </div>

</div>
  `
}
mainHeader() 
let body         = document.querySelector("body"),
    nav          = document.querySelector(".header"),
    modeToggle   = document.querySelector(".darkLight"),
    searchToggle = document.querySelector(".searchToggel");    
let getMode = localStorage.getItem("mode");
      if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");
      }
    modeToggle.addEventListener("click" , () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    if(!body.classList.contains("dark")){
      localStorage.setItem("mode" , "light-mode");
    }else{
      localStorage.setItem("mode" , "dark-mode");
    }
  })
  searchToggle.addEventListener("click" , () =>{
    searchToggle.classList.toggle("active")
  })
  window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);});
                                                                  //! footer
  // <div class="footer">
                  //! html
  // </div>
let footer = document.querySelector(".footer")
mainFooter = () =>{
  return footer.innerHTML = `
  <div class="container" data-aos="fade-down"
  data-aos-anchor-placement="top-bottom" data-aos-duration="1200">
  <div class="main">
      <div class="social">
        <div class="logo">
          <img src="img/logo.png" alt="">
          <h2 class="base">Base</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div>
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-twitter' ></i></a>
          <a href="#"><i class='bx bxl-instagram-alt' ></i></a>
          <a href="#"><i class='bx bxl-tiktok' ></i></a>
        </div>
      </div>
      <div class="links">
        <h1>Quick Links</h1>
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Careers <span>Hiring</span> </li>
          <li>Pricing</li>
        </ul>
      </div>
      <div class="Services">
          <h1>Services</h1>
          <ul>
            <li>Web Development</li>
            <li>Graphics Design</li>
            <li>Digital Marketing</li>
            <li>Ui/Ux Design</li>
          </ul>
      </div>
      <div class="Support">
          <h1>Support</h1>
          <ul>
            <li>Company</li>
            <li>Press media</li>
            <li>Our Blog</li>
            <li>Contact Us</li>
          </ul>
      </div>
      <div class="newsletter">
        <h1>Newsletter</h1>
        <p>Subscribe to receive future updates</p>
        <input type="text" placeholder="Email address">
      </div>
  </div>
  <hr>
  <div class="end">
    <div>
      <h5>English</h5>
      <h5>Privacy Policy</h5>
      <h5>Support</h5>
    </div>
    <p>© 2025 Base. All rights reserved</p>
  </div>
</div>
  `
}
mainFooter() 