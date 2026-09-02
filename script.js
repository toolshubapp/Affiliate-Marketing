// =============================
// 📌 HEADER: Hamburger Menu Toggle
// =============================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

// OPEN MENU
hamburger.addEventListener('click', () => {
  navMenu.classList.add('active');
  overlay.classList.add('active');
});

// CLOSE MENU (X BUTTON)
closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
});

// CLOSE MENU (CLICK OUTSIDE OVERLAY)
overlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
});


// =============================
// 📌 HEADER: Scroll Effects (Shadow + Hide/Show)
// =============================

const header = document.querySelector('.header');

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Add shadow when scrolling down
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Hide header on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});


// =============================
// 🔥 SECTION 2: Countdown Timer (Deal of the Day)
// =============================

// Set deal end date
const endDate = new Date("2026-04-15T23:59:59").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = endDate - now;

  // If deal expired
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Deal Expired";
    return;
  }

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update UI
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);


// =============================
// 🛒 SECTION 3: Best Sellers (Static Data Example)
// =============================

const products = [
  {
    name: "Wireless Headphones",
    price: "$129",
    old: "$179",
    img: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    rating: "4.8"
  },
  {
    name: "Smart Watch",
    price: "$89",
    old: "$129",
    img: "https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_SL1500_.jpg",
    rating: "4.5"
  }
];

console.log("You can render products dynamically later", products);


// =============================
// 🗂️ SECTION 4: Category Hover Effect
// =============================

const cards = document.querySelectorAll(".category-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});


// =============================
// ⭐ SECTION 5: Top Rated Products
// =============================

const topRatedProducts = [
  {
    name: "Wireless Earbuds",
    price: "$99",
    old: "$149",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Smart Fitness Watch",
    price: "$79",
    old: "$120",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Gaming Headset",
    price: "$59",
    old: "$89",
    rating: 4.7,
    img: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
  },
  {
    name: "Bluetooth Speaker",
    price: "$49",
    old: "$79",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=80"
  }
];

// ⭐ Generate star rating display
function generateStars(rating) {
  let stars = "";
  let fullStars = Math.floor(rating);
  let halfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) stars += "⭐";
  if (halfStar) stars += "⭐";

  return stars + ` (${rating})`;
}

// 🧩 Render Top Rated Products
const container = document.getElementById("topProducts");

topRatedProducts.forEach(product => {
  const card = `
    <div class="product-card">
      <span class="badge">Top Rated</span>
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="rating">${generateStars(product.rating)}</div>
      <div class="price">
        <span class="new">${product.price}</span>
        <span class="old">${product.old}</span>
      </div>
      <a href="#" class="btn">Check on Amazon</a>
    </div>
  `;
  container.innerHTML += card;
});


// =============================
// 📝 SECTION 6: Latest Reviews / Blog (NEW)
// =============================

const blogPosts = [
  {
    title: "Best Wireless Earbuds in 2026",
    desc: "Discover the top earbuds with amazing sound and battery life.",
    img: "https://images.unsplash.com/photo-1518441902110-6d52c1c1b3b5?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Top Smartwatches for Fitness Lovers",
    desc: "Track your health with the best smartwatches available today.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Best Gaming Headsets for Pro Players",
    desc: "Upgrade your gaming experience with immersive audio.",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80"
  }
];

// 🧩 Render Blog Posts (if container exists)
const blogContainer = document.querySelector(".blog-grid");

if (blogContainer) {
  blogPosts.forEach(post => {
    const blogCard = `
      <div class="blog-card">
        <img src="${post.img}" alt="${post.title}">
        <div class="blog-content">
          <h3>${post.title}</h3>
          <p>${post.desc}</p>
          <a href="#" class="read-more">Read More →</a>
        </div>
      </div>
    `;
    blogContainer.innerHTML += blogCard;
  });
}

// =============================
// 📊 SECTION 7: Comparison Table (Optional Dynamic)
// =============================

const comparisonData = [
  {
    name: "Earbuds Pro",
    price: "$99",
    rating: "4.8",
    battery: "24 Hours",
    best: "Music Lovers",
    img: "images/earbuds.jpg"
  },
  {
    name: "Smart Watch X",
    price: "$79",
    rating: "4.6",
    battery: "48 Hours",
    best: "Fitness Tracking",
    img: "images/watch.jpg"
  },
  {
    name: "Gaming Headset",
    price: "$59",
    rating: "4.7",
    battery: "30 Hours",
    best: "Gaming",
    img: "images/headset.jpg"
  }
];

console.log("Comparison Data Ready", comparisonData);

// =============================
// 🔥 INFINITE LOOP SLIDER (FIXED)
// =============================

const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (slider && nextBtn && prevBtn) {

  // 🔁 Clone slides for infinite effect
  const slides = Array.from(slider.children);
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });

  let scrollAmount = 0;
  const slideWidth = 270; // width + gap (adjust if needed)

  // 👉 NEXT
  nextBtn.addEventListener("click", () => {
    scrollAmount += slideWidth;
    slider.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });

    // 🔁 Reset when reaching end
    if (scrollAmount >= slider.scrollWidth / 2) {
      setTimeout(() => {
        slider.scrollTo({ left: 0, behavior: "auto" });
        scrollAmount = 0;
      }, 500);
    }
  });

  // 👉 PREV
  prevBtn.addEventListener("click", () => {
    scrollAmount -= slideWidth;

    if (scrollAmount < 0) {
      scrollAmount = slider.scrollWidth / 2;
      slider.scrollTo({ left: scrollAmount, behavior: "auto" });
    }

    slider.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  // 🔄 AUTO SLIDE (INFINITE)
  let autoSlide = setInterval(() => {
    scrollAmount += slideWidth;

    slider.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });

    // Loop reset
    if (scrollAmount >= slider.scrollWidth / 2) {
      setTimeout(() => {
        slider.scrollTo({ left: 0, behavior: "auto" });
        scrollAmount = 0;
      }, 500);
    }

  }, 3000);

  // ⏸ Pause on hover
  slider.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
  });

  // ▶ Resume
  slider.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      scrollAmount += slideWidth;

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });

      if (scrollAmount >= slider.scrollWidth / 2) {
        setTimeout(() => {
          slider.scrollTo({ left: 0, behavior: "auto" });
          scrollAmount = 0;
        }, 500);
      }

    }, 3000);
  });
}

// =============================
// 💬 TESTIMONIAL SLIDER
// =============================

const testimonialSlider = document.getElementById("testimonialSlider");

if (testimonialSlider) {

  let scrollAmount = 0;
  const cardWidth = 300; // adjust if needed

  setInterval(() => {
    scrollAmount += cardWidth;

    testimonialSlider.style.transform = `translateX(-${scrollAmount}px)`;

    // 🔁 Reset (loop)
    if (scrollAmount >= testimonialSlider.scrollWidth / 2) {
      scrollAmount = 0;
      testimonialSlider.style.transform = `translateX(0px)`;
    }

  }, 3000);
}

// =============================
// 📩 NEWSLETTER FORM
// =============================

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("emailInput").value;

    // Simple validation
    if (email === "") {
      alert("Please enter a valid email");
      return;
    }

    // Simulate success
    alert("✅ Subscribed Successfully!");

    // Reset form
    newsletterForm.reset();
  });
}

// =============================
// 💯 WHY CHOOSE US ANIMATION
// =============================

const whyCards = document.querySelectorAll(".why-card");

whyCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// =============================
// ❓ FAQ ACCORDION
// =============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    
    // Close other items (optional clean UX)
    faqItems.forEach(el => {
      if (el !== item) el.classList.remove("active");
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});
