// Access the 4 tags -home,gallery,testimonial, contact -
// Store in array and use a forEach function to loop through the array 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior : "smooth"
    });  
  });
});