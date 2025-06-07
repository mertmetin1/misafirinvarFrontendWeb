// Main JavaScript for misafirinvar Bootstrap app
document.addEventListener("DOMContentLoaded", function () {
  console.log("misafirinvar Bootstrap app loaded successfully!");

  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Smooth scrolling for anchor links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Video card click handler
  const videoCard = document.querySelector(".video-card");
  if (videoCard) {
    videoCard.addEventListener("click", function () {
      // Show modal or play video
      showVideoModal();
    });
  }

  // Join button click handler
  const joinBtn = document.getElementById("joinBtn");
  if (joinBtn) {
    joinBtn.addEventListener("click", function () {
      // Scroll to featured section
      document.getElementById("featured").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // App cards hover effects
  const appCards = document.querySelectorAll(".app-card");
  appCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("shadow-orange");
    });

    card.addEventListener("mouseleave", function () {
      this.classList.remove("shadow-orange");
    });

    // Click handler for app cards
    card.addEventListener("click", function () {
      const appName = this.querySelector(".card-title").textContent;
      showAppDetails(appName);
    });
  });

  // Navbar background change on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shadow");
    } else {
      navbar.classList.remove("shadow");
    }
  });

  // Lazy loading for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe app cards for animation
  appCards.forEach((card) => {
    observer.observe(card);
  });

  // Form validation for contact forms
  const forms = document.querySelectorAll(".needs-validation");
  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });

  // Mobile menu auto-close on link click
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });

  // Typing effect for hero title
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = "";
    typeWriter(heroTitle, text, 0, 100);
  }
});

// Function to show video modal
function showVideoModal() {
  const modal = new bootstrap.Modal(document.createElement("div"));
  const modalContent = `
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-orange-gradient text-white">
                        <h5 class="modal-title">Tanıtım Videosu</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center">
                        <div class="ratio ratio-16x9">
                            <div class="bg-light d-flex align-items-center justify-content-center">
                                <div>
                                    <i class="fas fa-play text-orange display-1 mb-3"></i>
                                    <p class="text-muted">Tanıtım videosu yakında gelecek!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.body.insertAdjacentHTML("beforeend", modalContent);
  const modalElement = document.querySelector(".modal:last-child");
  const bsModal = new bootstrap.Modal(modalElement);
  bsModal.show();

  modalElement.addEventListener("hidden.bs.modal", function () {
    modalElement.remove();
  });
}

// Function to show app details
function showAppDetails(appName) {
  const toast = `
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div class="toast" role="alert">
                <div class="toast-header bg-orange-gradient text-white">
                    <i class="fas fa-mobile-alt me-2"></i>
                    <strong class="me-auto">${appName}</strong>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body">
                    ${appName} uygulaması yakında geliyor! Haberdar olmak için bültenimize kayıt olun.
                </div>
            </div>
        </div>
    `;

  document.body.insertAdjacentHTML("beforeend", toast);
  const toastElement = document.querySelector(".toast:last-child");
  const bsToast = new bootstrap.Toast(toastElement);
  bsToast.show();

  toastElement.addEventListener("hidden.bs.toast", function () {
    toastElement.parentElement.remove();
  });
}

// Typing effect function
function typeWriter(element, text, index, speed) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(element, text, index, speed), speed);
  }
}

// API call example
async function loadAppsData() {
  try {
    const response = await fetch("/api/apps");
    const apps = await response.json();
    console.log("Apps data loaded:", apps);
    return apps;
  } catch (error) {
    console.error("Error loading apps data:", error);
    return [];
  }
}

// Utility functions
const Utils = {
  // Debounce function for performance
  debounce: function (func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Get scroll position
  getScrollPosition: function () {
    return window.pageYOffset || document.documentElement.scrollTop;
  },

  // Check if element is in viewport
  isInViewport: function (element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
};

// Export for use in other scripts
window.MisafirinvarApp = {
  showVideoModal,
  showAppDetails,
  loadAppsData,
  Utils,
};
