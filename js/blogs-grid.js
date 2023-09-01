// ! Start pagination
const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
const prevNext = document.querySelectorAll(".prevNext");
const numbers = document.querySelectorAll(".link");

// Setting an initial step
let currentStep = 0;

// Function to upyear the button states
const upyearBtn = () => {
    count()
    // If we are at the last step
    if ( currentStep === 4 ) {
        endBtn.disabled = true ;
        prevNext[1].disabled = true ;
    } else if(currentStep === 0) {
    // If we are at the first step
        startBtn.disabled = true ;
        prevNext[0].disabled = true ;
    } else {
        endBtn.disabled = false ;
        prevNext[1].disabled = false ;
        startBtn.disabled = false ;
        prevNext[0].disabled = false ;
    }

};

// Add event listeners to the number links
numbers.forEach((number, numIndex) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
      // Set the current step to the clicked number link
        currentStep = numIndex;
      // Remove the "active" class from the previously active number link
        document.querySelector(".active").classList.remove("active");
      // Add the "active" class to the clicked number link
        number.classList.add("active");
      upyearBtn(); // Upyear the button states

    });

});

  // Add event listeners to the "Previous" and "Next" buttons
prevNext.forEach((button) => {

    button.addEventListener("click", (e) => {
      // Increment or decrement the current step based on the button clicked
    currentStep += e.target.id === "next" ? 1 : -1;
    numbers.forEach((number, numIndex) => {
        // Toggle the "active" class on the number links based on the current step
        number.classList.toggle("active", numIndex === currentStep);
        upyearBtn(); // Upyear the button states
    });
    });
});

  // Add event listener to the "Start" button
startBtn.addEventListener("click", () => {
    // Remove the "active" class from the previously active number link
    document.querySelector(".active").classList.remove("active");
    // Add the "active" class to the first number link
    numbers[0].classList.add("active");
    currentStep = 0;
    upyearBtn(); // Upyear the button states
    endBtn.disabled = false;
    prevNext[1].disabled = false;
});

  // Add event listener to the "End" button
endBtn.addEventListener("click", () => {
    // Remove the "active" class from the previously active number link
    document.querySelector(".active").classList.remove("active");
    // Add the "active" class to the last number link
    numbers[4].classList.add("active");
    currentStep = 4;
    upyearBtn(); // Upyear the button states
    startBtn.disabled = false;
    prevNext[0].disabled = false;
});



// ?  count  //

const blogGridCards = document.querySelector("#blog-grid-cards");

function count(){
    if( currentStep === 0){
        //!  0  //
        let cardsPagination =[{
            id:"1",
            img:"img/Blogs/A Way Out.jpg",
            name:"A Way Out",
            year:"23 mar, 2018",
            price:"29.99 $",
            p:"Free advertising for your online business",
        }
        ,{
            id:"2",
            img:"img/Blogs/assassin's creed origins.jpg",
            name:"assassin's creed origins",
            year:"27 Oct, 2017",
            price:"59.99 $",
            p:"Free advertising for your online business",
        }
        ,{
            id:"3",
            img:"img/Blogs/Batman Arkham Knight.jpg",
            name:"Batman Arkham Knight",
            year:"23 Jun, 2015",
            price:"19.99 $",
            p:"Free advertising for your online business",
        }
        ,{
            id:"4",
            img:"img/Blogs/CONTROLS.jpg",
            name:"Controls",
            year:"27 Aug, 2019",
            price:"29.5 $",
            p:"Free advertising for your online business",
        }
        ,{
            id:"5",
            img:"img/Blogs/Crysis 3.jpg",
            name:"Crysis 3",
            year:"19 Feb, 2013",
            price:"19.99 $",
            p:"Free advertising for your online business",
        }
        ,{
            id:"6",
            img:"img/Blogs/Demon Slayer.jpg",
            name:"Demon Slayer",
            year:"13 Oct, 2022",
            price:"59.99 $",
            p:"Free advertising for your online business",
        }
        ,{
            id:"7",
            img:"img/Blogs/Dark Souls 3.jpg",
            name:"Dark Souls 3",
            year:"24 Mar, 2016",
            price:"59.99 $",
            p:"Free advertising for your online business",
        }
        ,{
            id:"8",
            img:"img/Blogs/Devil may cry 5.jpg",
            name:"Devil may cry 5",
            year:"28 Mar, 2019",
            price:"29.99 $",
            p:"Free advertising for your online business",
        }
    ];
        const generatePagination = ()=> {
            return blogGridCards.innerHTML = cardsPagination
            .map((x)=>{
                let{id ,img ,name ,year ,price ,p} = x ;
                return`
        
                <!-- start ${id} -->
                <div class="card col-12 col-lg-3 col-md-6">
                        <div class="image">
                            <img src= "${img}" alt="">
                            <div><a href="#">Buy Now</a></div>
                            
                        </div>
                        <div class="info">
                            <div class="head">
                            <p>${name}</p> 
                            <div class="year-holder">
                            <p>${year}</p>
                            <span>
                            ${price}
                            </span>
                            </div>
                            </div>
                            <h2>
                            ${p}
                            </h2>
                        </div>
                        </div>
                        <!-- end ${id} --> 
                `
            }).join("");
        };
        generatePagination()
    }
    else if(currentStep === 1){
      //!  1  //
      let cardsPagination =[{
          id:"9",
          img:"img/Blogs/Assassin's Creed Unity.jpg",
          name:"Assassin's Creed Unity",
          year:"11 Nov, 2014",
          price:"29.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"10",
          img:"img/Blogs/Cyberpunk 2077.jpg",
          name:"Cyberpunk 2077",
          year:"10 Dec, 2020",
          price:"59.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"11",
          img:"img/Blogs/sikiro.jpg",
          name:"sikiro",
          year:"22 Mar, 2019",
          price:"19.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"12",
          img:"img/Blogs/Far Cry 5.jpg",
          name:"Far Cry 5",
          year:"27 Feb, 2018",
          price:"25.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"13",
          img:"img/Blogs/FIFA 23.jpg",
          name:"FIFA 23",
          year:"27 Sep, 2022",
          price:"59.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"14",
          img:"img/Blogs/Fortnite.jpg",
          name:"Fortnite",
          year:"21 Jul, 2016",
          price:"Free",
          p:"Free advertising for your online business",
      }
      ,{
          id:"15",
          img:"img/Blogs/Forza Horizon 5.jpg",
          name:"Horizon 5",
          year:"1 Nov, 2021",
          price:"40.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"16",
          img:"img/Blogs/ghost of tsushima .jpg",
          name:"ghost of tsushima",
          year:"17 Jul, 2020",
          price:"55.99 $",
          p:"Free advertising for your online business",
      }
  ];

      const generatePagination = ()=> {
          return blogGridCards.innerHTML = cardsPagination
          .map((x)=>{
            let{id ,img ,name ,year ,price ,p} = x ;
            return`
    
            <!-- start ${id} -->
            <div class="card col-12 col-lg-3 col-md-6">
                    <div class="image">
                        <img src= "${img}" alt="">
                        <div><a href="#">Buy Now</a></div>
                        
                    </div>
                    <div class="info">
                        <div class="head">
                        <p>${name}</p> 
                        <div class="year-holder">
                        <p>${year}</p>
                        <span>
                        ${price}
                        </span>
                        </div>
                        </div>
                        <h2>
                        ${p}
                        </h2>
                    </div>
                    </div>
                    <!-- end ${id} --> 
            `
        }).join("");
    };
      
      generatePagination()

    }
    else if(currentStep === 2){
        //!  2  //
        let cardsPagination =[{
          id:"17",
          img:"img/Blogs/ELDEN RING.jpg",
          name:"ELDEN RING",
          year:"25 Fep, 2022",
          price:"29.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"18",
          img:"img/Blogs/Halo Infinite.jpg",
          name:"Halo Infinite",
          year:"15 Now, 2021",
          price:"20.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"19",
          img:"img/Blogs/Hellblade 2.jpg",
          name:"Hellblade",
          year:"8 Aug, 2017",
          price:"19.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"20",
          img:"img/Blogs/Forza Motorsport.jpg",
          name:"Forza Motorsport",
          year:"10 Oct, 2023",
          price:"50.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"21",
          img:"img/Blogs/Mirror's Edge.jpg",
          name:"Mirror's Edge",
          year:"25 jun, 2008",
          price:"13.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"22",
          img:"img/Blogs/God of War 4.jpg",
          name:"God of War 4",
          year:"20 Apr, 2018",
          price:"45.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"23",
          img:"img/Blogs/GTA V.jpg",
          name:"GTA V",
          year:"17 Sep, 2013",
          price:"10.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"24",
          img:"img/Blogs/Metal Gear Solid V.jpg",
          name:"Metal Gear Solid V",
          year:"1 Sep, 2015",
          price:"29.99 $",
          p:"Free advertising for your online business",
      }
  ];

        const generatePagination = ()=> {
            return blogGridCards.innerHTML = cardsPagination
            .map((x)=>{
              let{id ,img ,name ,year ,price ,p} = x ;
              return`
      
              <!-- start ${id} -->
              <div class="card col-12 col-lg-3 col-md-6">
                      <div class="image">
                          <img src= "${img}" alt="">
                          <div><a href="#">Buy Now</a></div>
                          
                      </div>
                      <div class="info">
                          <div class="head">
                          <p>${name}</p> 
                          <div class="year-holder">
                          <p>${year}</p>
                          <span>
                          ${price}
                          </span>
                          </div>
                          </div>
                          <h2>
                          ${p}
                          </h2>
                      </div>
                      </div>
                      <!-- end ${id} --> 
              `
          }).join("");
      };
        
        generatePagination()
    }
    else if(currentStep === 3){
        //!  3  //
        let cardsPagination =[{
          id:"25",
          img:"img/Blogs/the last of us 2 .jpg",
          name:"the last of us 2 ",
          year:"19 Jun, 2020",
          price:"59.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"26",
          img:"img/Blogs/the witcher 3.jpg",
          name:"the witcher 3",
          year:"18 May, 2015",
          price:"39.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"27",
          img:"img/Blogs/the crew 2.jpg",
          name:"the crew 2",
          year:"31 May, 2018",
          price:"49.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"28",
          img:"img/Blogs/Watch Dogs 2.jpg",
          name:"Watch Dogs 2",
          year:"15 Nov, 2016",
          price:"25.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"29",
          img:"img/Blogs/Redfall.jpg",
          name:"Redfall",
          year:"1 May, 2023",
          price:"15.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"30",
          img:"img/Blogs/Resident Evil Village.jpg",
          name:"Resident Evil Village",
          year:"7 May, 2021",
          price:"49.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"31",
          img:"img/Blogs/Spiderman Miles Morales.jpg",
          name:"Spiderman Miles Morales",
          year:"12 Nov, 2020",
          price:"59.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"32",
          img:"img/Blogs/Starfield.jpg",
          name:"Starfield",
          year:"6 Sep, 2023",
          price:"55.99 $",
          p:"Free advertising for your online business",
      }
  ];

        const generatePagination = ()=> {
            return blogGridCards.innerHTML = cardsPagination
            .map((x)=>{
              let{id ,img ,name ,year ,price ,p} = x ;
              return`
      
              <!-- start ${id} -->
              <div class="card col-12 col-lg-3 col-md-6">
                      <div class="image">
                          <img src= "${img}" alt="">
                          <div><a href="#">Buy Now</a></div>
                          
                      </div>
                      <div class="info">
                          <div class="head">
                          <p>${name}</p> 
                          <div class="year-holder">
                          <p>${year}</p>
                          <span>
                          ${price}
                          </span>
                          </div>
                          </div>
                          <h2>
                          ${p}
                          </h2>
                      </div>
                      </div>
                      <!-- end ${id} --> 
              `
          }).join("");
      };
        
        generatePagination()
    }
    else if(currentStep === 4){
        //!  4  //
        let cardsPagination =[{
          id:"33",
          img:"img/Blogs/Need For Speed Heat.jpg",
          name:"Need For Speed Heat",
          year:"16 Oct, 2019",
          price:"59.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"34",
          img:"img/Blogs/Plague Tale 2.jpg",
          name:"Plague Tale 2",
          year:"17 Oct, 2022",
          price:"39.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"35",
          img:"img/Blogs/sleeping dogs.jpg",
          name:"sleeping dogs",
          year:"14 Aug, 2012",
          price:"49.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"36",
          img:"img/Blogs/Uncharted Legacy Collection.jpg",
          name:"Uncharted Legacy",
          year:"28 Jan, 2022",
          price:"25.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"37",
          img:"img/Blogs/Prototype 2.jpg",
          name:"Prototype 2",
          year:"24 Apr, 2012",
          price:"15.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"38",
          img:"img/Blogs/Red Dead Redemption 2.jpg",
          name:"Red Dead Redemption 2",
          year:"26 Oct, 2018",
          price:"49.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"39",
          img:"img/Blogs/Middle Earth Shadow Of War.jpg",
          name:"Shadow Of War",
          year:"27 Sep, 2017",
          price:"59.99 $",
          p:"Free advertising for your online business",
      }
      ,{
          id:"40",
          img:"img/Blogs/WWE 2K22.jpg",
          name:"WWE 2K22",
          year:"8 Mar, 2022",
          price:"55.99 $",
          p:"Free advertising for your online business",
      }
  ];

        const generatePagination = ()=> {
            return blogGridCards.innerHTML = cardsPagination
            .map((x)=>{
              let{id ,img ,name ,year ,price ,p} = x ;
              return`
      
              <!-- start ${id} -->
              <div class="card col-12 col-lg-3 col-md-6">
                      <div class="image">
                          <img src= "${img}" alt="">
                          <div><a href="#">Buy Now</a></div>
                          
                      </div>
                      <div class="info">
                          <div class="head">
                          <p>${name}</p> 
                          <div class="year-holder">
                          <p>${year}</p>
                          <span>
                          ${price}
                          </span>
                          </div>
                          </div>
                          <h2>
                          ${p}
                          </h2>
                      </div>
                      </div>
                      <!-- end ${id} --> 
              `
          }).join("");
      };
        
        generatePagination();
    }
}
// ? load

  //!  0  //
  let cardsPagination =[{
    id:"1",
    img:"img/Blogs/A Way Out.jpg",
    name:"A Way Out",
    year:"23 mar, 2018",
    price:"29.99 $",
    p:"Free advertising for your online business",
}
,{
    id:"2",
    img:"img/Blogs/assassin's creed origins.jpg",
    name:"assassin's creed origins",
    year:"27 Oct, 2017",
    price:"59.99 $",
    p:"Free advertising for your online business",
}
,{
    id:"3",
    img:"img/Blogs/Batman Arkham Knight.jpg",
    name:"Batman Arkham Knight",
    year:"23 Jun, 2015",
    price:"19.99 $",
    p:"Free advertising for your online business",
}
,{
    id:"4",
    img:"img/Blogs/CONTROLS.jpg",
    name:"Controls",
    year:"27 Aug, 2019",
    price:"29.5 $",
    p:"Free advertising for your online business",
}
,{
    id:"5",
    img:"img/Blogs/Crysis 3.jpg",
    name:"Crysis 3",
    year:"19 Feb, 2013",
    price:"19.99 $",
    p:"Free advertising for your online business",
}
,{
    id:"6",
    img:"img/Blogs/Demon Slayer.jpg",
    name:"Demon Slayer",
    year:"13 Oct, 2022",
    price:"59.99 $",
    p:"Free advertising for your online business",
}
,{
    id:"7",
    img:"img/Blogs/Dark Souls 3.jpg",
    name:"Dark Souls 3",
    year:"24 Mar, 2016",
    price:"59.99 $",
    p:"Free advertising for your online business",
}
,{
    id:"8",
    img:"img/Blogs/Devil may cry 5.jpg",
    name:"Devil may cry 5",
    year:"28 Mar, 2019",
    price:"29.99 $",
    p:"Free advertising for your online business",
}
];
const generatePagination = ()=> {
    return blogGridCards.innerHTML = cardsPagination
    .map((x)=>{
        let{id ,img ,name ,year ,price ,p} = x ;
        return`

        <!-- start ${id} -->
                <div class="card col-12 col-lg-3 col-md-6">
                <div class="image">
                    <img src= "${img}" alt="">
                    <div><a href="#">Buy Now</a></div>
                    
                </div>
                <div class="info">
                    <div class="head">
                    <p>${name}</p> 
                    <div class="year-holder">
                    <p>${year}</p>
                    <span>
                    ${price}
                    </span>
                    </div>
                    </div>
                    <h2>
                    ${p}
                    </h2>
                </div>
                </div>
                <!-- end ${id} --> 
        `
    }).join("");
};
generatePagination()
// ! End pagination
