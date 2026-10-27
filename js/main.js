// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navDrawer = document.getElementById("nav-drawer");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navDrawer.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navDrawer.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll-reveal for sections
const revealTargets = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}

// Photo carousel + gallery — reads photos.json so new photos can be added
// by dropping a file in /images/ and adding one line to photos.json,
// with no HTML editing required.
const carousel = document.getElementById("photo-carousel");
if (carousel) {
  const track = document.getElementById("carousel-track");
  const counter = document.getElementById("carousel-counter");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const galleryOpenBtn = document.getElementById("gallery-open-btn");
  const galleryModal = document.getElementById("gallery-modal");
  const galleryGrid = document.getElementById("gallery-modal-grid");
  const galleryClose = document.getElementById("gallery-modal-close");
  const galleryBackdrop = document.getElementById("gallery-modal-backdrop");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  fetch("photos.json")
    .then((res) => res.json())
    .then((photos) => {
      if (!photos.length) return;

      let index = 0;
      let lightboxIndex = 0;
      let clickTimer = null;

      photos.forEach((photo, i) => {
        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.alt || "";
        img.loading = i === 0 ? "eager" : "lazy";
        track.appendChild(img);

        const thumb = document.createElement("img");
        thumb.src = photo.src;
        thumb.alt = photo.alt || "";
        thumb.loading = "lazy";

        // Single click: jump the carousel to this photo and close the gallery.
        // Double click: expand this photo full-size instead (see dblclick below).
        thumb.addEventListener("click", () => {
          clearTimeout(clickTimer);
          clickTimer = setTimeout(() => {
            goTo(i);
            closeGallery();
          }, 230);
        });
        thumb.addEventListener("dblclick", () => {
          clearTimeout(clickTimer);
          openLightbox(i);
        });

        galleryGrid.appendChild(thumb);
      });

      function goTo(i) {
        index = (i + photos.length) % photos.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        counter.textContent = `${index + 1} / ${photos.length}`;
      }

      function openLightbox(i) {
        lightboxIndex = (i + photos.length) % photos.length;
        lightboxImg.src = photos[lightboxIndex].src;
        lightboxImg.alt = photos[lightboxIndex].alt || "";
        lightbox.hidden = false;
      }
      function lightboxGoTo(i) {
        lightboxIndex = (i + photos.length) % photos.length;
        lightboxImg.src = photos[lightboxIndex].src;
        lightboxImg.alt = photos[lightboxIndex].alt || "";
      }
      function closeLightbox() {
        lightbox.hidden = true;
      }

      lightboxPrev.addEventListener("click", () => lightboxGoTo(lightboxIndex - 1));
      lightboxNext.addEventListener("click", () => lightboxGoTo(lightboxIndex + 1));
      lightboxClose.addEventListener("click", closeLightbox);

      if (photos.length < 2) {
        prevBtn.hidden = true;
        nextBtn.hidden = true;
        lightboxPrev.hidden = true;
        lightboxNext.hidden = true;
      }

      document.addEventListener("keydown", (e) => {
        if (!lightbox.hidden) {
          if (e.key === "Escape") closeLightbox();
          if (e.key === "ArrowLeft") lightboxGoTo(lightboxIndex - 1);
          if (e.key === "ArrowRight") lightboxGoTo(lightboxIndex + 1);
        } else if (galleryModal.classList.contains("is-open")) {
          if (e.key === "Escape") closeGallery();
        }
      });

      prevBtn.addEventListener("click", () => goTo(index - 1));
      nextBtn.addEventListener("click", () => goTo(index + 1));

      goTo(0);
    })
    .catch(() => {
      // photos.json couldn't be loaded (e.g. page opened directly from disk
      // instead of through a local server) — fail quietly, carousel stays empty.
    });

  function openGallery() {
    galleryModal.classList.add("is-open");
    galleryModal.setAttribute("aria-hidden", "false");
  }
  function closeGallery() {
    galleryModal.classList.remove("is-open");
    galleryModal.setAttribute("aria-hidden", "true");
  }

  galleryOpenBtn.addEventListener("click", openGallery);
  galleryClose.addEventListener("click", closeGallery);
  galleryBackdrop.addEventListener("click", closeGallery);
}

// Gig booking form submission (Formspree)
const gigForm = document.getElementById("gig-form");
const formStatus = document.getElementById("form-status");

if (gigForm) {
  gigForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.removeAttribute("data-state");
    formStatus.textContent = "Sending...";

    try {
      const response = await fetch(gigForm.action, {
        method: "POST",
        body: new FormData(gigForm),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.textContent = "Thanks! Your message has been sent.";
        formStatus.setAttribute("data-state", "success");
        gigForm.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      formStatus.textContent =
        "Something went wrong — please email cadena@stanford.edu directly.";
      formStatus.setAttribute("data-state", "error");
    }
  });
}
