
                                                                //! Header
  // <div class="header">
  //   <nav>
                  //! html
  //   </nav>
  // </div>
let header = document.querySelector(".header")
let page = document.querySelector(".menu ul li")
mainHeader = () =>{
  return header.innerHTML = `
  <div class="container">
  <div class="logo">
    <img src="img/logo.png" alt="">
    <a href="index.html"><H1>Base</H1></a>
  </div>

  <div class="menu">
    <a href="sign-up.html">
      <i class="fa-regular fa-user user"></i>
    </a>
    <div class="barBtn">
    <i class="fa-solid fa-bars bars"></i>
    <i class="fa-solid fa-xmark xClose"></i>
    </div>
    <ul class="nav-links">
      <li><a class="active" href="index.html">home</a></li>
      <li><a href="">about</a></li>
      <li><a href="#">features</a></li>
      <li><a href="#">support</a></li>
      <li><span class="pages">Pages</span>
        <i class="fa-solid fa-angle-down down"></i>
      <!--! Mega Menu -->
      <div class="mega-menu">
        <ul class="links">

            <li>
            <a href="blogs-grid.html">
              Blogs</a>
            </li>
            
            <li>
              <a href="blogs-single.html">
                Blogs Single</a>
            </li>

            <li>
              <a href="#team">
              team</a>
            </li>

            <li>
              <a href="#Prices">
                Pricing</a>
            </li>

            <li>
              <a href="#testimonials">
                Testimonials</a>
            </li>

            <li>
              <a href="#form">
                contact</a>
            </li>
            <li>
              <a href="error.html">
                Error 404</a>
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
            <i class='bx bx-search-alt-2 search2'></i>
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
let body         = document.querySelector("body")
    nav          = document.querySelector(".header")
    modeToggle   = document.querySelector(".darkLight")
    searchToggle = document.querySelector(".search")
    searchInput = document.querySelector(".searchToggel .search-field")

let getMode = localStorage.getItem("mode")
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
    searchInput.classList.toggle("active")
  })

    bars     = document.querySelector(".bars") 
    xClose   = document.querySelector(".xClose") 
    navLinks = document.querySelector(".nav-links")
    lastLi   = document.querySelector(".pages")
    megaMenu = document.querySelector(".mega-menu")
    
    lastLi.onclick = function() {
      megaMenu.classList.toggle("viewTwo")
    }
    bars.onclick = function() {
      navLinks.classList.toggle("view")
      xClose.classList.add("viewss")
      bars.classList.toggle("viewss")
    }
    xClose.onclick = function() {
      navLinks.classList.remove("view")
      xClose.classList.remove("viewss")
      bars.classList.toggle("viewss")
    }
    window.onclick = function(event) {
      if (!event.target.matches(".pages")) {
        let megaMenu = document.querySelector(".mega-menu")
        if (megaMenu.classList.contains("viewTwo")) {
          megaMenu.classList.remove("viewTwo")
        };
      };
        if (xClose.classList.contains("viewss")) {
          xClose.classList.remove("viewss")
        };
        if (bars.classList.contains("viewss")) {
          bars.classList.remove("viewss")
        };
      };
    
    window.addEventListener("scroll", function() {
      let header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 0);});

                                                                //! ScrollBar / States
const scrollBar = document.querySelector(".scrollBar")
let nums = document.querySelectorAll(".num")
let states = document.querySelector(".states") 
let started = false;

window.onscroll = function() {
  if (window.scrollY >= 200) {
    scrollBar.style.display = "block";
  } else {
    scrollBar.style.display = "none";
  };
  if (window.scrollY >= states.offsetTop - 900) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
scrollBar.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++
    if (el.textContent == goal) {
      clearInterval(count)
    }
  }, 2000 / goal);
};

                                                                  //! footer
  // <div class="footer">
                  //! html
  // </div>
let footer = document.querySelector(".footer")
mainFooter = () =>{
  return footer.innerHTML = `
  <div class="container">
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
        <div class="input-holder">
        <input type="text" placeholder="Email address">
        <i class="fa-regular fa-envelope"></i>
      </div>
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