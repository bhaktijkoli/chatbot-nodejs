window.addEventListener('scroll', function(e){
  let navbar = document.getElementById('navbar');
  if(navbar.classList.contains('nav-toggle')) {
    if(window.scrollY > 70) {
      navbar.classList.add('nav-raised');
      navbar.classList.remove('nav-transparent');
    } else {
      navbar.classList.remove('nav-raised');
      navbar.classList.add('nav-transparent');
    }
  }
});
