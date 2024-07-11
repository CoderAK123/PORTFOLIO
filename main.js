var typed = new Typed(".text", {
    strings:["Data Analyst","Frontend Developer" , "writer" , "Web Developer","Java Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
function myFunction() {
    var x = document.getElementById("more-info");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
