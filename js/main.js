const themeToggle = document.getElementById('themeToggle');

if(localStorage.getItem('theme') === 'dark'){
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if(document.documentElement.classList.contains('dark')){
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
