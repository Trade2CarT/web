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
    const htmlFiles = ['kgncanecraft.html', 'electronics.html', 'fancy_store.html', 'vegetable_and_food.html','grocery.html'];
    const cardsContainer = document.querySelector('.cards-container');
    const cardsPerFile = 5;

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
                const cards = Array.from(tempElement.querySelectorAll('.card'));

                if (cards.length > 0) {
                    // Shuffle the cards and select the first 'cardsPerFile'
                    const shuffledCards = cards.sort(() => 0.5 - Math.random());
                    const selectedCards = shuffledCards.slice(0, Math.min(cardsPerFile, shuffledCards.length));

                    selectedCards.forEach(card => {
                        const clonedCard = card.cloneNode(true);
                        cardsContainer.appendChild(clonedCard);
                    });
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
    const message = `I'm interested in the product: ${productName} `;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}
document.addEventListener("DOMContentLoaded", function() {
    // Function to show the overlay
    function showOverlay() {
        document.getElementById('pageOverlay').style.display = 'flex';
    }

    // Function to hide the overlay
    function hideOverlay() {
        document.getElementById('pageOverlay').style.display = 'none';
    }

    // Example: Show the overlay when the page loads
    showOverlay();

    // Example: Hide the overlay after 3 seconds
    setTimeout(hideOverlay, 2000);
});





//demo

function showPaymentOptions() {
    document.getElementById('payment-options').style.display = 'block';
}

function handlePayment() {
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    if (paymentMethod === 'cash') {
        // Send details to WhatsApp directly
        sendToWhatsApp();
    } else {
        // Redirect to product selection page
        window.location.href = 'product_selection.html';
    }
}
