let currentIndex = 0;
const banners = document.querySelectorAll('.banner');
const dots = document.querySelectorAll('.dot');
const bannerContainer = document.querySelector('.banner-container');

let bannerWidth = banners[0].offsetWidth + 40; // Adjusted width

function showBanner(index) {
    const offset = -index * bannerWidth;
    bannerContainer.style.transform = `translateX(${offset}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextBanner() {
    currentIndex = (currentIndex + 1) % banners.length;
    showBanner(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showBanner(index);
    });
});

setInterval(nextBanner, 3000); // Auto slide every 3 seconds

window.addEventListener('resize', () => {
    const newBannerWidth = banners[0].offsetWidth + 40;
    if (newBannerWidth !== bannerWidth) {
        bannerWidth = newBannerWidth;
        showBanner(currentIndex);
    }
});

// Initial display
showBanner(currentIndex);

function searchProducts() {
    const input = document.querySelector('.search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const productName = card.querySelector('h1').innerText.toLowerCase();
        card.style.display = productName.includes(input) ? "block" : "none";
    });
}

// Function to extract and display random products from HTML files
document.addEventListener('DOMContentLoaded', () => {
    displayRandomProducts();
    document.getElementById('closeModal').addEventListener('click', closeModal);
});

function displayRandomProducts() {
    const htmlFiles = ['kgncanecraft.html', 'electronics.html', 'fancy_store.html', 'vegetable_and_food.html'];
    const cardsContainer = document.querySelector('.cards-container');

    if (!cardsContainer) {
        console.error('No .cards-container element found on the page.');
        return;
    }

    htmlFiles.forEach(file => {
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${file}: ${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                const tempElement = document.createElement('div');
                tempElement.innerHTML = html;
                const cards = tempElement.querySelectorAll('.card');

                if (cards.length > 0) {
                    const randomIndex = Math.floor(Math.random() * cards.length);
                    const randomCard = cards[randomIndex].cloneNode(true);
                    cardsContainer.appendChild(randomCard);
                } else {
                    console.warn(`No product cards found in ${file}`);
                }
            })
            .catch(error => {
                console.error(`Error fetching ${file}:`, error);
            });
    });
}

function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = src;
    modal.classList.add('show');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

function openWhatsApp(productName, productType, price) {
    const phoneNumber = '+919788335029';
    const message = `I'm interested in buying ${productType} product: ${productName} with price: ₹${price}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}
function openWhatsApp1(productName, ) {
    const phoneNumber = '+919788335029';
    const message = `I'm interested to colab product: ${productName} `;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}