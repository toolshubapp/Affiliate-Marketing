document.addEventListener("DOMContentLoaded", () => {
  const products = {
    earbuds: {
      name: "Wireless Earbuds Pro",
      img: "assets/images/earbuds.jpg",
      rating: "⭐⭐⭐⭐⭐ (4.8)",
      price: "$99",
      shortDesc: "Premium everyday audio with noise isolation and portable charging.",
      longDesc: "A practical choice for commuting, calls and daily listening. Compare comfort, microphone quality, battery endurance and codec support before purchasing.",
      features: ["Noise isolation", "Bluetooth connectivity", "Portable charging case", "Long battery life"],
      pros: ["Compact design", "Comfortable for daily use", "Useful battery life"],
      cons: ["Features vary by model", "Always verify retailer specifications"],
      amazon: "#",
      query: "wireless earbuds product"
    },
    smartwatch: {
      name: "Smart Watch Ultra",
      img: "assets/images/Smart-watch-fitness-tracker.jpg",
      rating: "⭐⭐⭐⭐⭐ (4.7)",
      price: "$79",
      shortDesc: "A fitness-focused wearable for activity and everyday health tracking.",
      longDesc: "Useful for tracking workouts, heart rate and daily activity. Before buying, compare app compatibility, battery life, sensor accuracy and water-resistance claims.",
      features: ["Heart-rate tracking", "Activity tracking", "Sleep insights", "Water-resistant design"],
      pros: ["Lightweight", "Useful daily tracking", "Accessible price point"],
      cons: ["App support varies", "Not a medical device"],
      amazon: "#",
      query: "smart watch fitness tracker"
    },
    headphones: {
      name: "Noise Cancelling Headphones",
      img: "assets/images/wireless-noise-cancelling-headphones.jpg",
      rating: "⭐⭐⭐⭐⭐ (4.7)",
      price: "$129",
      shortDesc: "Over-ear wireless headphones designed for focused listening and travel.",
      longDesc: "Compare active noise cancellation, comfort, microphone performance and battery life to find the best fit for work, travel and entertainment.",
      features: ["Over-ear comfort", "Wireless audio", "Noise cancellation", "Built-in microphone"],
      pros: ["Immersive sound", "Comfortable fit", "Good travel use"],
      cons: ["Bulkier than earbuds", "ANC performance varies by model"],
      amazon: "#",
      query: "noise cancelling headphones"
    }
  };

  const id = new URLSearchParams(window.location.search).get("id") || "earbuds";
  const product = products[id];
  if (!product) {
    const main = document.querySelector("main") || document.body;
    main.innerHTML = `<section class="section"><div class="container"><div class="notice">Product not found. <a href="best-picks.html">Return to Best Picks</a>.</div></div></section>`;
    return;
  }

  const setText = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
  setText("#productName", product.name); setText("#productRating", product.rating); setText("#shortDesc", product.shortDesc); setText("#price", product.price); setText("#longDesc", product.longDesc); setText("#specRating", product.rating);
  const img = document.getElementById("productImg"); if (img) { img.src = product.img; img.alt = product.name; }
  ["amazonLink","finalAmazonLink"].forEach(linkId => { const link = document.getElementById(linkId); if (link) link.href = product.amazon; });
  const fillList = (idName, items) => { const list = document.getElementById(idName); if (list) list.innerHTML = items.map(item => `<li>${item}</li>`).join(""); };
  fillList("features", product.features); fillList("pros", product.pros); fillList("cons", product.cons);

  const relatedContainer = document.getElementById("relatedProducts");
  if (relatedContainer) {
    relatedContainer.innerHTML = Object.entries(products).filter(([key]) => key !== id).map(([key,item]) => `
      <article class="related-card">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <h3>${item.name}</h3><p>${item.rating}</p><div class="price">${item.price}</div>
        <a href="product-review.html?id=${key}">View Details →</a>
      </article>`).join("");
  }
});