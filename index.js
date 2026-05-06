const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const scrollDownIcon = document.getElementById('scroll-icon-and-line')

const tabButtons = document.querySelectorAll('.tab-btn');
const startersSection = document.querySelector('.menu-starters');
const mainsSection = document.querySelector('.menu-mains');
const dessertsSection = document.querySelector('.menu-desserts');


const getLocationBtn = document.getElementById('getLocationBtn');



// ==========================================
// PRELOADER + WEBSITE ANIMATIONS
// ==========================================

// Wait for page to load completely
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  const mainContent = document.querySelector('.main-content');
  
  // Hide preloader after 2 seconds
  setTimeout(() => {
    if (preloader) {
      preloader.classList.add('hide');
      
      // Show main content
      if (mainContent) {
        mainContent.classList.add('visible');
      }
      
      // Remove preloader from DOM
      setTimeout(() => {
        if (preloader) {
          preloader.style.display = 'none';
        }
      }, 600);
    }
  }, 2000);
});

// Scroll Animation with Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements that need animation
document.querySelectorAll('.menu-card, .location-card, .review-box-1, .review-box-2, .review-box-3, .review-box-4, .info-item, .footer-col').forEach(el => {
  observer.observe(el);
});

// Section fade in on scroll
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section-1-container, .section-2-container, .section-3-container, .section-4-container, .section-5-container, footer').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.8s ease';
  sectionObserver.observe(section);
});



if (getLocationBtn) {
  getLocationBtn.addEventListener('click', getUserLocation);
}



// ==========================================
// SCROLL ICON CLICK FUNCTIONALITY
// ==========================================

const scrollIcon = document.getElementById('scroll-icon-and-line');

if (scrollIcon) {
  scrollIcon.addEventListener('click', function() {
    // Find the next section (section-2-container)
    const nextSection = document.querySelector('.section-2-container');
    
    if (nextSection) {
      // Get header height for offset
      const headerHeight = document.querySelector('header')?.offsetHeight || 70;
      
      // Calculate target position
      const targetPosition = nextSection.offsetTop - headerHeight;
      
      // Smooth scroll to section 2
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
}




// ==========================================
// SCROLL TO TOP BUTTON - SHOW/HIDE + CLICK
// ==========================================

const scrollTopBtn = document.getElementById('scrollTopBtn');

function toggleScrollTopBtn() {
  if (!scrollTopBtn) return;
  
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', scrollToTop);
}

window.addEventListener('scroll', toggleScrollTopBtn);
window.addEventListener('load', toggleScrollTopBtn);




function getUserLocation() {
  // Check if browser supports geolocation
  if (!navigator.geolocation) {
    showMessage('Geolocation not supported', 'error');
    return;
  }

  // Show loading state
  const originalText = getLocationBtn.textContent;
  setButtonLoading(true, 'Getting location...');

  // Get user location
  navigator.geolocation.getCurrentPosition(onSuccess, onError, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  });

  function onSuccess(position) {
    const { latitude, longitude } = position.coords;
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapsUrl, '_blank');
    
    showMessage('✓ Location found! Opening Maps...', 'success');
    resetButton(originalText, 1500);
  }

  function onError(error) {
    let message = '';
    switch(error.code) {
      case error.PERMISSION_DENIED: message = 'Please allow location access'; break;
      case error.POSITION_UNAVAILABLE: message = 'Location unavailable'; break;
      case error.TIMEOUT: message = 'Request timeout'; break;
      default: message = 'Something went wrong';
    }
    showMessage(`✗ ${message}`, 'error');
    resetButton(originalText);
  }

  function setButtonLoading(isLoading, text) {
    getLocationBtn.textContent = text || (isLoading ? 'Loading...' : originalText);
    getLocationBtn.disabled = isLoading;
  }

  function resetButton(originalText, delay = 2000) {
    setTimeout(() => {
      getLocationBtn.textContent = originalText;
      getLocationBtn.disabled = false;
      clearMessage();
    }, delay);
  }
}

// Helper: Show temporary message
let messageTimeout;
function showMessage(msg, type) {
  clearMessage();
  
  let statusDiv = document.getElementById('locationStatus');
  if (!statusDiv) {
    statusDiv = document.createElement('p');
    statusDiv.id = 'locationStatus';
    statusDiv.style.cssText = 'font-size: 0.7rem; margin-top: 0.5rem; text-align: center;';
    getLocationBtn.parentNode.appendChild(statusDiv);
  }
  
  statusDiv.textContent = msg;
  statusDiv.style.color = type === 'error' ? '#e74c3c' : '#2ecc71';
  
  messageTimeout = setTimeout(() => {
    if (statusDiv) statusDiv.textContent = '';
  }, 3000);
}

function clearMessage() {
  if (messageTimeout) clearTimeout(messageTimeout);
  const statusDiv = document.getElementById('locationStatus');
  if (statusDiv) statusDiv.textContent = '';
}

function hideAllMenus() {
  startersSection.style.display = 'none';
  mainsSection.style.display = 'none';
  dessertsSection.style.display = 'none';
}


function showMenu(menuType) {
  hideAllMenus();
  if (menuType === 'starters') startersSection.style.display = 'block';
  if (menuType === 'mains') mainsSection.style.display = 'block';
  if (menuType === 'desserts') dessertsSection.style.display = 'block';
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const menuType = btn.getAttribute('data-tab');
    showMenu(menuType);
  });
});

showMenu('starters')

// Hamburger toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
  });
});

// Theme toggle
const saved = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);
updateIcon(saved);

themeBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon(next);
});

function updateIcon(theme) {
  themeIcon.className = theme === 'dark' 
    ? 'fa-regular fa-moon' 
    : 'fa-solid fa-sun';
}




