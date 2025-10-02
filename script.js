let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 4 seconds
}

// Balloon animation
const canvas = document.getElementById('balloons');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balloons = Array.from({ length: 20 }, () => ({
  x: Math.random() * canvas.width,
  y: canvas.height + Math.random() * 200,
  r: 20 + Math.random() * 20,
  speed: 1 + Math.random() * 2
}));

function drawBalloons() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balloons.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 60%)`;
    ctx.fill();
    b.y -= b.speed;
    if (b.y + b.r < 0) {
      b.y = canvas.height + b.r;
      b.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawBalloons);
}
drawBalloons();
