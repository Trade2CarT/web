const totalAmountTradeWaste = /* Get this value from previous page or session */;

function loadProducts() {
    // Fetch and display products dynamically
    fetch('products.json') // Replace with actual source
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('products-container');
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <input type="number" id="${product.id}-quantity" min="0" max="${Math.floor(totalAmountTradeWaste / product.price)}" value="0">
                `;
                container.appendChild(productElement);
            });
        });
}

function submitSelection() {
    const selectedProducts = [];
    let totalAmountProducts = 0;

    document.querySelectorAll('#products-container div').forEach(div => {
        const id = div.querySelector('input').id.split('-')[0];
        const quantity = parseInt(div.querySelector('input').value);
        const price = parseFloat(div.querySelector('p').textContent.split(': ')[1]);

        if (quantity > 0) {
            selectedProducts.push({ id, quantity, price });
            totalAmountProducts += quantity * price;
        }
    });

    const remainingAmount = totalAmountTradeWaste - totalAmountProducts;
    
    if (remainingAmount < 0) {
        alert('Selected products exceed the total trade waste amount.');
        return;
    }

    // Send data to WhatsApp
    sendToWhatsApp(selectedProducts, totalAmountProducts, remainingAmount);
}

function sendToWhatsApp(selectedProducts, totalAmountProducts, remainingAmount) {
    const productsDetails = selectedProducts.map(p => `Product: ${p.id}, Price: ${p.price}, Quantity: ${p.quantity}, Total: ${p.quantity * p.price}`).join('\n');
    const message = `Trade Waste Details:\nTotal Trade Waste Amount: ${totalAmountTradeWaste}\nTotal Amount for Products: ${totalAmountProducts}\nRemaining Amount: ${remainingAmount}\n\nSelected Products:\n${productsDetails}`;
    
    window.open(`https://wa.me/${YOUR_PHONE_NUMBER}?text=${encodeURIComponent(message)}`);
}

// Call loadProducts on page load
document.addEventListener('DOMContentLoaded', loadProducts);
