let currentIndex = 0;
const banners = document.querySelectorAll('.banner-img');
const dots = document.querySelectorAll('.dot');

function showBanner(index) {
    const offset = -index * 100;
    banners.forEach(banner => banner.style.transform = `translateX(${offset}%)`);
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

setInterval(nextBanner, 3000); // 5 minutes

window.addEventListener('resize', () => {
    showBanner(currentIndex);
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
// Function to fetch and display random products from HTML files
function displayRandomProducts() {
    const htmlFiles = ['kgncanecraft.html'];

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

                if (cards.length > 0) {
                    // Choose a random product card
                    const randomIndex = Math.floor(Math.random() * cards.length);
                    const randomCard = cards[randomIndex].cloneNode(true);

                    // Append random card to main page
                    document.querySelector('.cards-container').appendChild(randomCard);
                } else {
                    console.warn(`No product cards found in ${file}`);
                }
            })
            .catch(error => {
                console.error(`Error fetching ${file}:`, error);
            });
    });
}

// Call displayRandomProducts when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayRandomProducts();
});
