let currentIndex = 0;
const banners = document.querySelectorAll('.banner');
const dots = document.querySelectorAll('.dot');
const bannerContainer = document.querySelector('.banner-container');

// Calculate banner width considering margins
const bannerWidth = banners[0].offsetWidth + 40; // Adjusted width considering margin

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
    // Recalculate banner width on resize
    const newBannerWidth = banners[0].offsetWidth + 40;
    if (newBannerWidth !== bannerWidth) {
        bannerWidth = newBannerWidth;
        showBanner(currentIndex);
    }
});

// Initial display
showBanner(currentIndex);

// Search Functionality
function searchProducts() {
    const input = document.querySelector('.search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const productName = card.querySelector('h1').innerText.toLowerCase();
        if (productName.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// Function to extract and display random products from HTML files
document.addEventListener('DOMContentLoaded', () => {
    displayRandomProducts();
});

document.addEventListener('DOMContentLoaded', function() {
    displayRandomProducts();
});

document.addEventListener('DOMContentLoaded', function() {
    displayRandomProducts();
});

function displayRandomProducts() {
    const htmlFiles = ['kgncanecraft.html', 'electronics.html', 'fancy_store.html', 'vegetable_and_food.html'];
    const cardsContainer = document.querySelector('.cards-container');

    if (!cardsContainer) {
        console.error('No .cards-container element found on the page.');
        return;
    }

    // Iterate through each HTML file
    htmlFiles.forEach(file => {
        // Fetch HTML content
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${file}: ${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                // Create a temporary element to parse HTML
                const tempElement = document.createElement('div');
                tempElement.innerHTML = html;

                // Extract product cards
                const cards = tempElement.querySelectorAll('.card');

                console.log(`Found ${cards.length} cards in ${file}`);

                if (cards.length > 0) {
                    // Choose a random product card
                    const randomIndex = Math.floor(Math.random() * cards.length);
                    const randomCard = cards[randomIndex].cloneNode(true);

                    // Append random card to main page
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

function searchProducts() {
    // Implement the search functionality here
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}



function openWhatsApp() {
    // Replace with your WhatsApp number and custom message
    const phoneNumber = '+919788335029';  // Replace with your WhatsApp number
    const message = 'Hello, I am interested in buying your product KGN';  // Replace with your custom message
    
    // Construct the WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
}
function openWhatsApp1() {
    // Replace with your WhatsApp number and custom message
    const phoneNumber = '+919788335029';  // Replace with your WhatsApp number
    const message = 'Hello, I am interested in buying your product Fancy';  // Replace with your custom message
    
    // Construct the WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
}

function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = src;
    modal.classList.add('show');
    modal.style.display = 'block'; // Ensure modal is visible before the transition
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    // Use a timeout to wait for the animation to complete before setting display to none
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function openWhatsApp2() {
    // Replace with your WhatsApp number and custom message
    const phoneNumber = '+919788335029';  // Replace with your WhatsApp number
    const message = 'Hello, I am interested in buying your product Electronics';  // Replace with your custom message
    
    // Construct the WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
}

function openWhatsApp3() {
    // Replace with your WhatsApp number and custom message
    const phoneNumber = '+919788335029';  // Replace with your WhatsApp number
    const message = 'Hello, I am interested in  vegtable and fruits  colab';  // Replace with your custom message
    
    // Construct the WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
}
function openWhatsApp4() {
    // Replace with your WhatsApp number and custom message
    const phoneNumber = '+919788335029';  // Replace with your WhatsApp number
    const message = 'Hello, I am interested in  your AC services';  // Replace with your custom message
    
    // Construct the WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
}
function openWhatsApp5() {
    // Replace with your WhatsApp number and custom message
    const phoneNumber = '+919788335029';  // Replace with your WhatsApp number
    const message = 'Hello, I am interested in  your shifting services';  // Replace with your custom message
    
    // Construct the WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
}

function openWhatsApp6() {
    // Replace with your WhatsApp number and custom message
    const phoneNumber = '+919788335029';  // Replace with your WhatsApp number
    const message = 'Hello, I am interested in  colab services';  // Replace with your custom message
    
    // Construct the WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
}
function openWhatsApp7() {
    // Replace with your WhatsApp number and custom message
    const phoneNumber = '+919788335029';  // Replace with your WhatsApp number
    const message = 'Hello, I am interested in  colab Refurbished products';  // Replace with your custom message
    
    // Construct the WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
}
