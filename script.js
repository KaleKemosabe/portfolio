// mobile menu

const mobileMenu = () => {
    const menu = document.querySelector('ul');
  
    menu.classList.toggle('mobilemenu')
  };
  
  // **********back to top button*********
  const toTop = document.querySelector('.to-top');
  
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 700) {
          toTop.classList.add('active');
      } else {
          toTop.classList.remove('active');
      };
  });
  
  // *********projects section*********
  
  // individual project data
  const projects = [
      {
        id: 1,
        name: "Superhero Server",
        img:
        "img/superheroes.png",
        text:
        "In this project, I created a simple HTTP server with Node & Express.",
      },
      {
        id: 2,
        name: "Nature Quiz",
        img:
        "img/luontovisailu.png",
        text:
        "A simple quiz app created for a group of friends to decide who is the mastermind of our weekend hike. HTML, CSS, JS, Finnish only.",
      },
      {
        id: 3,
        name: "Platform Game",
        img:
        "img/platformer-game.png",
        text:
        "This was a group project. We created a multi-level platform game that's based on a book called Eloquent JavaScript by Marijn Haverbeke.",
      },
      {
        id: 4,
        name: "Website Replication",
        img:
        "img/jobs-in-finland-final.png",
        text:
        "I did a complete website replication of a Jobs in Finland website by using HTML, CSS and JavaScript.",
      },
      {
        id: 5,
        name: "Movie Search",
        img:
          "img/omdb-app.png",
        text:
        "In this project, I used Ajax with jQuery to search for movie information through OMDb API.",
      },
      {
        id: 6,
        name: "Weather App",
        img:
        "img/weather-app.png",
        text:
        "Weather app was done by using OpenWeatherMap API and JavaScript fetch method.",
      },
      {
        id: 7,
        name: "JavaScript Clock",
        img:
          "img/js-clock.png",
        text:
        "This analog clock was created with HTML/CSS/JavaScript",
      },
  ];
  
  // items selection
  const img = document.getElementById("project-img");
  const name = document.getElementById("name");
  // const details = document.getElementById("details");
  const info = document.getElementById("info");
    
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
    
  // set first project item
  let currentItem = 0;
    
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    showProject(currentItem);
  });
    
  // show correct project details based on item
  function showProject(project) {
    const item = projects[project];
    img.src = item.img;
    name.textContent = item.name;
    // details.textContent = item.details;
    info.textContent = item.text;
  }
  
  // show next
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > projects.length - 1) {
      currentItem = 0;
    }
    showProject(currentItem);
  });
  
  // show prev
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = projects.length - 1;
    }
    showProject(currentItem);
  });