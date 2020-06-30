//built dynamically li as an unordered list
let element= document.getElementById("tab-content");
let element1 = document.createElement("li");
element1.insertAdjacentHTML("beforeend", "<a href='#services'>Dinner services</a>");
element.appendChild(element1);

let element2= document.createElement("li");
element2.insertAdjacentHTML("beforeend", "<a href='#about-us'>Volunteer</a>");
element.appendChild(element2);

let element3= document.createElement("li");
element3.insertAdjacentHTML("beforeend", "<a href='#catering-services'>Catering services</a>");
element.appendChild(element3);

let element4= document.createElement("li");
element4.insertAdjacentHTML("beforeend", "<a href='#contact-us'>Contact Us</a>");
element.appendChild(element4);

// Active navigation on scroll
window.addEventListener('scroll', event=>{
    let nav = document.querySelector('.nav-container');
    (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');

})

// Add active class to the current section (highlight it)
let header = document.getElementById("myDIV");
let parts = header.getElementsByClassName("part");
for (var i = 0; i < parts.length; i++) {
    parts[i].addEventListener('click', event => {
    let current = document.getElementsByClassName("your-active-class");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" your-active-class", "");
  }
    this.className += " your-active-class";
  });
}

//active navigation on scroll changing the link in the navigation bar according to which section is scroll on
window.addEventListener('scroll', event=> {
    let navigationLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;

    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
            link.classList.add('active');
        }else{
            link.classList.remove('active');
      }
    });
});

//When clicking an item from the navigation menu, the link should scroll to the appropriate section.
element1.addEventListener("click", myFunction);
function myFunction() {
    var elmnt = document.getElementById("services");
    elmnt.scrollIntoView({behavior: "smooth"});
  }
  element2.addEventListener("click", myFunction);
  function myFunction() {
      var elmnt = document.getElementById("about-us");
      elmnt.scrollIntoView({behavior: "smooth"});
    }
    element3.addEventListener("click", myFunction);
    function myFunction() {
        var elmnt = document.getElementById("catering-services");
        elmnt.scrollIntoView({behavior: "smooth"});
      }

