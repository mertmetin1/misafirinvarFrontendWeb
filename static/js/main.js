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

  // Smooth scrolling for navigation links
  initSmoothScrolling();

  // Scroll animations
  initScrollAnimations();

  // Section highlighting in navigation
  initSectionHighlight();

  // Video card click handler
  const videoCards = document.querySelectorAll(
    ".video-preview, .play-button-large",
  );
  videoCards.forEach((card) => {
    card.addEventListener("click", function () {
      showVideoModal();
    });
  });

  // Join button click handler
  const joinBtn = document.getElementById("joinBtn");
  if (joinBtn) {
    joinBtn.addEventListener("click", function () {
      // Scroll to video section
      document.getElementById("video").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // Feature buttons click handlers
  initFeatureButtons();

  // Navbar background change on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shadow");
      navbar.style.backgroundColor = "rgba(255, 107, 53, 0.95)";
    } else {
      navbar.classList.remove("shadow");
      navbar.style.backgroundColor = "";
    }
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
});

// Smooth scrolling initialization
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
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
}

// Scroll animations initialization
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        // Add staggered animation for child elements
        const children = entry.target.querySelectorAll(
          ".fade-in-up, .fade-in-left, .fade-in-right",
        );
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.animationDelay = `${index * 0.1}s`;
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe sections for animation
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("scroll-reveal");
    observer.observe(section);
  });
}

// Section highlight in navigation
function initSectionHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Feature buttons initialization
function initFeatureButtons() {
  // Misafirlik button
  const misafirlikBtn = document.querySelector("#misafirlik .btn-orange");
  if (misafirlikBtn) {
    misafirlikBtn.addEventListener("click", function () {
      showFeatureToast(
        "Misafirlik",
        "Konaklama arama özelliği yakında gelecek!",
      );
    });
  }

  // Etkinlikler button
  const etkinliklerBtn = document.querySelector("#etkinlikler .btn-orange");
  if (etkinliklerBtn) {
    etkinliklerBtn.addEventListener("click", function () {
      showFeatureToast("Etkinlikler", "Etkinlik takvimi yakında gelecek!");
    });
  }

  // UniSpot button
  const unispotBtn = document.querySelector("#unispot .btn-orange");
  if (unispotBtn) {
    unispotBtn.addEventListener("click", function () {
      showFeatureToast("UniSpot", "Kampüs haritası yakında gelecek!");
    });
  }
}

// Function to show video modal
function showVideoModal() {
  const modal = new bootstrap.Modal(document.createElement("div"));
  const modalContent = `
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header bg-orange-gradient text-white">
                        <h5 class="modal-title">
                            <i class="fas fa-play me-2"></i>Tanıtım Videosu
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body p-0">
                        <div class="ratio ratio-16x9">
                            <div class="bg-dark d-flex align-items-center justify-content-center">
                                <div class="text-center text-white">
                                    <i class="fas fa-play display-1 mb-4 text-orange"></i>
                                    <h3 class="mb-3">Tanıtım Videosu</h3>
                                    <p class="text-muted mb-4">Platformumuzu tanıtan video yakında gelecek!</p>
                                    <div class="row g-3 justify-content-center">
                                        <div class="col-auto">
                                            <div class="d-flex align-items-center">
                                                <i class="fas fa-users text-orange me-2"></i>
                                                <span>Misafirlik</span>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="d-flex align-items-center">
                                                <i class="fas fa-calendar-alt text-orange me-2"></i>
                                                <span>Etkinlikler</span>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="d-flex align-items-center">
                                                <i class="fas fa-map-marker-alt text-orange me-2"></i>
                                                <span>UniSpot</span>
                                            </div>
                                        </div>
                                    </div>
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

// Function to show feature toast
function showFeatureToast(featureName, message) {
  const toastHtml = `
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div class="toast" role="alert">
                <div class="toast-header bg-orange-gradient text-white">
                    <i class="fas fa-info-circle me-2"></i>
                    <strong class="me-auto">${featureName}</strong>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body">
                    ${message}
                </div>
            </div>
        </div>
    `;

  document.body.insertAdjacentHTML("beforeend", toastHtml);
  const toastElement = document.querySelector(".toast:last-child");
  const bsToast = new bootstrap.Toast(toastElement, {
    autohide: true,
    delay: 4000,
  });
  bsToast.show();

  toastElement.addEventListener("hidden.bs.toast", function () {
    toastElement.parentElement.remove();
  });
}

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroCircle = document.querySelector(".hero-circle");
  const heroTitle = document.querySelector(".hero-title");

  if (heroCircle && scrolled < window.innerHeight) {
    heroCircle.style.transform = `translateY(${scrolled * 0.3}px)`;
  }

  if (heroTitle && scrolled < window.innerHeight) {
    heroTitle.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

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
  showFeatureToast,
  Utils,
};
