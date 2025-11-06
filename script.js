
function myForm() {
    const user = document.getElementById("user")?.value || "";
    const pass = document.getElementById("pass")?.value || "";

    if (user.length < 4) {
        alert("Username must be 4 or more characters");
        return false;
    }

    if (pass.length <= 6) {
        alert("Password must be more than 6 characters");
        return false;
    }

    window.location.href = "H.html";
    return false;
}


let slideIndex = 1;
let slideInterval = null;
const SLIDE_DELAY = 4000; 

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (!slides.length) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach((s) => s.style.display = 'none');
    dots.forEach((d) => d.classList.remove('active'));

    slides[slideIndex - 1].style.display = 'block';
    if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add('active');
}

function nextSlide(n = 1) {
    slideIndex += n;
    showSlide(slideIndex);
}

function goToSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(() => { nextSlide(1); }, SLIDE_DELAY);
}

function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}


function updateDateTime() {
    const el = document.getElementById('datetime');
    if (!el) return;
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short',
                      day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    el.textContent = now.toLocaleString(undefined, options);
}


const yearData = {
  "1": [
    { code: "CSC101", name: "Introduction to Programming", credits: 3, grade: "A" },
    { code: "CSC102", name: "Computer Systems", credits: 3, grade: "B+" },
    { code: "MTH101", name: "Calculus I", credits: 4, grade: "A-" },
    { code: "ENG101", name: "English Composition", credits: 2, grade: "B" }
  ],
  "2": [
    { code: "CSC201", name: "Data Structures", credits: 3, grade: "B+" },
    { code: "CSC202", name: "Databases", credits: 3, grade: "A" },
    { code: "CSC203", name: "Computer Networks", credits: 3, grade: "B" },
    { code: "CSC204", name: "Web Development", credits: 3, grade: "A-" }
  ],
  "3": [
    { code: "CSC301", name: "Operating Systems", credits: 3, grade: "B" },
    { code: "CSC302", name: "Software Engineering", credits: 4, grade: "A" },
    { code: "CSC303", name: "Human-Computer Interaction", credits: 2, grade: "B+" },
    { code: "CSC304", name: "Information Security", credits: 3, grade: "A-" }
  ],
  "4": [
    { code: "CSC401", name: "Distributed Systems", credits: 3, grade: "A" },
    { code: "CSC402", name: "Machine Learning", credits: 4, grade: "A-" },
    { code: "CSC403", name: "Project (Capstone)", credits: 6, grade: "Pending" },
    { code: "CSC404", name: "Professional Practice", credits: 2, grade: "B+" }
  ]
};

function showYear(year) {
  if (!year) return; 
  window.location.href = `year${encodeURIComponent(year)}.html`;
}


function showYearPreview(year) {
  
}


function clearYear() {
  const sel = document.getElementById('yearSelect');
  if (sel) sel.value = '';
  const container = document.getElementById('resultsContainer');
  if (container) container.innerHTML = '';
}


document.addEventListener('DOMContentLoaded', function() {
    
    showSlide(slideIndex);
    startAutoSlide();

    
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    if (prevBtn) prevBtn.addEventListener('click', function(){ nextSlide(-1); startAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener('click', function(){ nextSlide(1); startAutoSlide(); });

    document.querySelectorAll('.dot').forEach((dot, idx) => {
        dot.addEventListener('click', function() { goToSlide(idx + 1); startAutoSlide(); });
    });

    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }


    updateDateTime();
    setInterval(updateDateTime, 1000);
});
