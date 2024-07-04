import os
import json

# Define the folder containing product images
image_folder = r'D:\k.g.n\New folder (2)\unused products\resized'

# Define the base structure for product data
product_template = {
    'price': 29.99,
    'unit': 'Piece(s)'
}

# Initialize an empty list to store product data
products = []

# Read image names from the folder and create product data
for idx, image_name in enumerate(os.listdir(image_folder)):
    if image_name.endswith(('.jpg', '.jpeg', '.png', '.gif')):
        product_name = os.path.splitext(image_name)[0]  # Remove the file extension to get the product name
        product = {
            'id': idx + 1,
            'name': product_name,
            'price': product_template['price'],
            'imageUrl': f'products/trade/unused products/{image_name}',
            'unit': product_template['unit']
        }
        products.append(product)

# Convert the products list to a JSON string
products_json = json.dumps(products, indent=4)

# Generate the JavaScript content
js_content = f"""
let products = {products_json};
console.log(products);
"""

# Save the JavaScript content to a file
output_file = r'C:\Users\imran\OneDrive\Documents\web\products.js'
with open(output_file, 'w') as file:
    file.write(js_content)

print(f'JavaScript file has been generated and saved to {output_file}')
