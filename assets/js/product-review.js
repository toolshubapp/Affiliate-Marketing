document.addEventListener("DOMContentLoaded", () => {

  const products = {
    earbuds: {
      name: "Wireless Earbuds Pro",
      img: "https://images.unsplash.com/photo-1518441902110-6d52c1c1b3b5",
      rating: "⭐⭐⭐⭐⭐ (4.8)",
      price: "$99",
      shortDesc: "Premium sound with noise cancellation.",
      longDesc: "These earbuds deliver high-quality sound, deep bass, and long battery life for daily use.",
      features: [
        "Noise Cancellation",
        "Bluetooth 5.3",
        "24H Battery",
        "Fast Charging"
      ],
      pros: ["Good sound", "Comfortable fit", "Long battery"],
      cons: ["No wireless charging"],
      amazon: "#"
    },

    smartwatch: {
      name: "Smart Watch Ultra",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: "⭐⭐⭐⭐⭐ (4.7)",
      price: "$79",
      shortDesc: "Track fitness and health easily.",
      longDesc: "Monitor heart rate, sleep, and daily activity with accuracy.",
      features: [
        "Heart Rate",
        "Sleep Tracking",
        "Waterproof"
      ],
      pros: ["Lightweight", "Affordable"],
      cons: ["Limited apps"],
      amazon: "#"
    }
  };

  const id = new URLSearchParams(window.location.search).get("id");
  const product = products[id];

  if (!product) {
    document.body.innerHTML = "<h2 style='text-align:center'>Product Not Found</h2>";
    return;
  }

  document.getElementById("productName").innerText = product.name;
  document.getElementById("productImg").src = product.img;
  document.getElementById("productRating").innerText = product.rating;
  document.getElementById("shortDesc").innerText = product.shortDesc;
  document.getElementById("price").innerText = product.price;
  document.getElementById("longDesc").innerText = product.longDesc;
  document.getElementById("amazonLink").href = product.amazon;

  document.getElementById("specRating").innerText = product.rating;

  product.features.forEach(f =>
    document.getElementById("features").innerHTML += `<li>${f}</li>`
  );

  product.pros.forEach(p =>
    document.getElementById("pros").innerHTML += `<li>${p}</li>`
  );

  product.cons.forEach(c =>
    document.getElementById("cons").innerHTML += `<li>${c}</li>`
  );

});
// ================= RELATED PRODUCTS =================

const relatedProducts = [
  {
    id: "earbuds",
    name: "Wireless Earbuds",
    price: "$99",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://images.unsplash.com/photo-1518441902110-6d52c1c1b3b5"
  },
  {
    id: "smartwatch",
    name: "Smart Watch",
    price: "$79",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: "headphones",
    name: "Noise Cancelling Headphones",
    price: "$129",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://images.unsplash.com/photo-1580894908361-967195033215"
  }
];

const relatedContainer = document.getElementById("relatedProducts");

if (relatedContainer) {
  relatedProducts.forEach(item => {

    // Skip current product (important)
    if (item.id === id) return;

    const card = `
      <div class="related-card">
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.rating}</p>
        <div class="price">${item.price}</div>
        <a href="product-review.html?id=${item.id}">View Details</a>
      </div>
    `;

    relatedContainer.innerHTML += card;
  });
}