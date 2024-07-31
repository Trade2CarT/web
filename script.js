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
});document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const banners = document.querySelectorAll('.banner');
    const dots = document.querySelectorAll('.dot');
    const bannerContainer = document.querySelector('.banner-container');

    if (banners.length === 0 || dots.length === 0 || !bannerContainer) {
        console.error('Required elements not found on the page.');
        return;
    }

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

//random

function displayRandomProducts() {
    const htmlFiles = ['kgncanecraft.html', 'electronics.html', 'fancy_store.html', 'vegetable_and_food.html', 'grocery.html'];
    const cardsContainers = document.querySelectorAll('.cards-container'); // Select all cards containers
    const cardsPerFile = 5;

    if (cardsContainers.length === 0) {
        console.error('No .cards-container elements found on the page.');
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

                    selectedCards.forEach((card, index) => {
                        if (cardsContainers[index]) {
                            const clonedCard = card.cloneNode(true);
                            cardsContainers[index].appendChild(clonedCard);
                        }
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
    // Delay hiding the overlay and logo intro
    setTimeout(function() {
        const pageOverlay = document.getElementById('pageOverlay');
        if (pageOverlay) {
            pageOverlay.style.transition = 'opacity 1s ease-out'; // Smooth transition for removal
            pageOverlay.style.opacity = '0'; // Start fading out

            // Remove the overlay from the DOM after fade-out
            setTimeout(function() {
                pageOverlay.remove();
            }, 1000); // Matches the duration of the opacity transition
        }
    }, 2000); // Show the logo and overlay for 2 seconds
});
