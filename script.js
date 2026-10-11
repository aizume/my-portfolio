// Mobile Menu Toggle
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Scroll reveal animation
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }
  });
}

// Initialize scroll animation
window.addEventListener('load', () => {
  animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
          });
      }
  });
});

// Image Modal functionality
function openModal(imgSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  
  modal.style.display = 'flex';
  modalImg.src = imgSrc;
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// Close modal when clicking outside the image
window.addEventListener('click', function(event) {
  const modal = document.getElementById('imageModal');
  if (event.target === modal) {
      closeModal();
  }
});

// Project Slides Modal functionality
let currentSlide = 0;
let currentProjectSlides = [];

function showProjectSlides(projectName) {
  // Define slides for each project
  const projects = {
      'WasteWise': [
          { src: 'img/projects/wastewise1.jpg', caption: 'Wireframe Design' },
          { src: 'img/projects/wastewise2.jpg', caption: 'User Flow Diagram' },
          { src: 'img/projects/wastewise3.jpg', caption: 'Final UI Design' }
      ],
      'MedicalGrading': [
          { src: 'img/projects/medical1.jpg', caption: 'Login Screen' },
          { src: 'img/projects/medical2.jpg', caption: 'Dashboard View' },
          { src: 'img/projects/medical3.jpg', caption: 'Grade Input Form' }
      ]
  };
  
  if (projects[projectName]) {
      currentProjectSlides = projects[projectName];
      currentSlide = 0;
      updateSlideModal();
      document.getElementById('slideModal').style.display = 'flex';
  }
}

function updateSlideModal() {
  const slideImg = document.getElementById('slideImg');
  const slideCaption = document.getElementById('slideCaption');
  const slideCounter = document.getElementById('slideCounter');
  
  if (currentProjectSlides.length > 0) {
      slideImg.src = currentProjectSlides[currentSlide].src;
      slideCaption.textContent = currentProjectSlides[currentSlide].caption;
      slideCounter.textContent = `${currentSlide + 1}/${currentProjectSlides.length}`;
  }
}

function changeSlide(n) {
  currentSlide += n;
  
  if (currentSlide >= currentProjectSlides.length) {
      currentSlide = 0;
  } else if (currentSlide < 0) {
      currentSlide = currentProjectSlides.length - 1;
  }
  
  updateSlideModal();
}

function closeSlideModal() {
  document.getElementById('slideModal').style.display = 'none';
}

// Close slide modal when clicking outside
window.addEventListener('click', function(event) {
  const modal = document.getElementById('slideModal');
  if (event.target === modal) {
      closeSlideModal();
  }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !message) {
          alert('Please fill in all fields');
          return;
      }
      
      // Here you would typically send the form data to a server
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
  });
}

// Active link highlighting on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + 100;
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        // Add null check before accessing classList
        if (navLink) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

// Download CV button animation
const downloadBtn = document.querySelector('.cta-button');
if (downloadBtn) {
  downloadBtn.addEventListener('click', function() {
      // Add animation class
      this.classList.add('downloading');
      
      // Remove animation class after animation completes
      setTimeout(() => {
          this.classList.remove('downloading');
      }, 1000);
  });
}

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    }
});
// ในไฟล์ script.js
document.addEventListener('DOMContentLoaded', function() {
  // เก็บตำแหน่งปัจจุบันก่อนรีเฟรช
  if (performance.navigation.type === 1) {
      // ถ้าเป็นรีเฟรช ให้เลื่อนไปที่ Hero Section
      const heroSection = document.getElementById('home');
      if (heroSection) {
          setTimeout(() => {
              heroSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
      }
  }
  
  // หรือใช้วิธีนี้เพื่อป้องกันการ scroll to top เมื่อรีเฟรช
  window.onbeforeunload = function() {
      window.scrollTo(0, 0);
  }
});


    function showWork(company) {
      const details = document.getElementById('workDetails');
      const data = workData[company];

      document.querySelectorAll('.company-list div').forEach(div => {
        div.classList.remove('active');
      });
      event.target.classList.add('active');

      let html = `
        <h3>${data.title} <a href="${data.link}"> ${data.company}</a></h3>
        <p class="date">${data.date}</p>
        <ul>
          ${data.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      `;
      details.innerHTML = html;
    } // JavaScript for image popup
    document.addEventListener("DOMContentLoaded", function () {
        const popup = document.getElementById("image-popup");
        const popupImage = document.getElementById("popup-image");
        const closeBtn = document.querySelector(".close-btn");
        const popupImages = document.querySelectorAll(".popup-img");

        popupImages.forEach(img => {
            img.addEventListener("click", () => {
                popupImage.src = img.src;
                popup.style.display = "flex";
            });
        });

        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });

        // Optional: Click outside the image to close
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
    });

    function openImagePopup(src) {
  const popup = document.getElementById('image-popup');
  const image = document.getElementById('popup-image');
  image.src = src;
  popup.classList.add('active');
}
document.querySelector('.close-btn').addEventListener('click', () => {
  const popup = document.getElementById('image-popup');
  popup.classList.remove('active');
});

  window.onscroll = function () {
    const btn = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    function showWork(role) {
        const details = document.getElementById('workDetails');
        if (role === 'intern') {
            details.innerHTML = `
                <h3>Intern <a>@ Center for Innovation and Educational Technology</a></h3>
                <p class="date">November 2023 – February 2024</p>
                <ul>
                    <li>Developed frontend (HTML, CSS, JavaScript) and backend (PHP, MySQL) features</li>
                    <li>Improved UI/UX and enhanced system performance</li>
                    <li>Wrote clean, maintainable code and collaborated via Git</li>
                    <li>Gained real-world experience working in an organizational environment</li>
                </ul>
            `;
        } else if (role === 'sales') {
            details.innerHTML = `
                <h3>Sales Admin <a>@ Kubota Anantapun Co., Ltd.</a></h3>
                <p class="date">May 2022 – August 2022</p>
                <ul>
                    <li>Handled customer orders and managed inventory records</li>
                    <li>Coordinated with sales and warehouse teams</li>
                    <li>Prepared reports and documentation using Microsoft Office</li>
                </ul>
            `;
        }
    }


document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("image-popup");
    const popupImage = document.getElementById("popup-image");
    const closeBtn = document.querySelector(".close-btn");
    const popupImages = document.querySelectorAll(".popup-img");

    // เมื่อคลิกที่ภาพ ให้แสดงภาพแบบเต็มจอ
    popupImages.forEach(img => {
        img.addEventListener("click", () => {
            popupImage.src = img.src;
            popup.style.display = "flex";
        });
    });

    // เมื่อคลิกปุ่มกากบาท ให้ปิดภาพ
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // เมื่อคลิกพื้นที่นอกภาพ ให้ปิดภาพด้วย
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
 const workData = {
    kitsomboon: {
      title: 'IT Support / Software Tester',
      company: 'Kitsomboon Business and Technology Co., Ltd.',
      date: 'July 2025 – Sept 2026',
      items: [
        'Provide user support across hardware, software, and network issues',
        'Install and maintain PCs, printers, switches, routers, and LAN/Wi-Fi systems',
        'Manage backups, antivirus, firewall, and user permissions, and coordinate with external vendors',
        'Analyze requirements to design test cases and test scenarios covering all system functions',
        'Prepare test plans, test reports, bug reports, and UAT documents, and retest fixes with the development team',
        'Prepare contracts and official documents, and use e-Government systems to submit work to government agencies',
        'Advise staff and clients on using IT equipment and systems'
      ]
    },
    intern: {
      title: 'Intern',
      company: 'Center for Innovation and Educational Technology',
      date: 'November 2024 – February 2025',
      items: [
        'Developed frontend (HTML, CSS, JavaScript) and backend (PHP, MySQL) features',
        'Improved UI/UX and enhanced system performance',
        'Wrote clean, maintainable code and collaborated via Git',
        'Gained real-world experience working in an organizational environment'
      ]
    },
    sales: {
      title: 'Sales Admin',
      company: 'Kubota Anantaphan Nakhon Ratchasima Co., Ltd.',
      date: 'May 2021 – April 2022',
      items: [
        'Managed stock records and store accounts',
        'Prepared sales support documents',
        'Served and assisted customers at the store'
      ]
    }
  };

  function showWork(key, el) {
    const job = workData[key];
    document.getElementById('workDetails').innerHTML = `
      <h3>${job.title} <a>@ ${job.company}</a></h3>
      <p class="date">${job.date}</p>
      <ul>${job.items.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
    document.querySelectorAll('.company-list div').forEach(d => d.classList.remove('active'));
    el.classList.add('active');
  }


document.addEventListener("DOMContentLoaded", function () {

  const projectImages = document.querySelectorAll(
    ".project-image[data-images]"
  );

  const lightbox = document.getElementById("imageLightbox");
  const lightboxImage = document.getElementById("lightboxImage");

  const closeButton = document.getElementById("lightboxClose");
  const prevButton = document.getElementById("lightboxPrev");
  const nextButton = document.getElementById("lightboxNext");

  const counter = document.getElementById("lightboxCounter");

  let images = [];
  let currentIndex = 0;


  /* =========================
     OPEN LIGHTBOX
  ========================= */

  projectImages.forEach(function (project) {

    project.addEventListener("click", function () {

      const imageData = project.getAttribute("data-images");

      if (!imageData) return;

      images = imageData
        .split(",")
        .map(function (image) {
          return image.trim();
        })
        .filter(function (image) {
          return image.length > 0;
        });

      if (images.length === 0) return;

      currentIndex = 0;

      showImage();

      lightbox.classList.add("active");

      document.body.style.overflow = "hidden";

    });

  });


  /* =========================
     SHOW IMAGE
  ========================= */

  function showImage() {

    lightboxImage.src = images[currentIndex];

    counter.textContent =
      (currentIndex + 1) + " / " + images.length;


    /* ถ้ามีภาพเดียว */

    if (images.length <= 1) {

      prevButton.style.display = "none";
      nextButton.style.display = "none";

    } else {

      prevButton.style.display = "block";
      nextButton.style.display = "block";

    }

  }


  /* =========================
     NEXT
  ========================= */

  function nextImage() {

    if (images.length <= 1) return;

    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    showImage();

  }


  /* =========================
     PREVIOUS
  ========================= */

  function previousImage() {

    if (images.length <= 1) return;

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    showImage();

  }


  nextButton.addEventListener("click", function (event) {

    event.stopPropagation();

    nextImage();

  });


  prevButton.addEventListener("click", function (event) {

    event.stopPropagation();

    previousImage();

  });


  /* =========================
     CLOSE
  ========================= */

  function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

  }


  closeButton.addEventListener("click", function () {

    closeLightbox();

  });


  /* คลิกพื้นที่ดำเพื่อปิด */

  lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

      closeLightbox();

    }

  });


  /* =========================
     KEYBOARD
  ========================= */

  document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("active")) return;


    if (event.key === "Escape") {

      closeLightbox();

    }


    if (event.key === "ArrowRight") {

      nextImage();

    }


    if (event.key === "ArrowLeft") {

      previousImage();

    }

  });


  /* =========================
     SWIPE MOBILE
  ========================= */

  let touchStartX = 0;
  let touchEndX = 0;


  lightbox.addEventListener("touchstart", function (event) {

    touchStartX = event.changedTouches[0].screenX;

  }, { passive: true });


  lightbox.addEventListener("touchend", function (event) {

    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();

  }, { passive: true });


  function handleSwipe() {

    const swipeDistance = touchEndX - touchStartX;

    /* ปัดซ้าย */

    if (swipeDistance < -50) {

      nextImage();

    }

    /* ปัดขวา */

    if (swipeDistance > 50) {

      previousImage();

    }

  }

});