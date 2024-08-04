import os
import re

def generate_div_cards(base_dir):
    div_cards = ""
    
    for folder_name in os.listdir(base_dir):
        folder_path = os.path.join(base_dir, folder_name)
        if os.path.isdir(folder_path):
            print(f"Processing folder: {folder_path}")  # Debug print
            # List of files in the folder
            files = os.listdir(folder_path)
            # Filter image files based on specific extensions
            image_files = [file for file in files if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]
            
            if not image_files:
                print(f"No image files found in {folder_path}")  # Debug print
                continue  # Skip this folder if no images are found
            
            # Determine if we need to add a number suffix
            add_number_suffix = len(image_files) > 1
            
            for idx, image_name in enumerate(image_files):
                image_path = os.path.join(folder_path, image_name)
                if os.path.isfile(image_path):
                    print(f"Processing file: {image_path}")  # Debug print
                    
                    # Remove text inside parentheses
                    image_name_cleaned = re.sub(r'\s*\(.*?\)\s*', '', image_name)
                    
                    # Extract price from the cleaned image name
                    price = os.path.splitext(image_name_cleaned)[0]
                    
                    # Determine product number
                    product_counter = idx + 1 if add_number_suffix else ''
                    
                    div_card = f'''
                    <div class="card">
                        <img src="products/Services/{folder_name}/{image_name}" alt="{folder_name} {product_counter}" onclick="openModal('products/Services/{folder_name}/{image_name}')">
                        <h1>{folder_name} {product_counter}</h1>
                        <p class="price">₹{price}</p>
                        <p><button onclick="openWhatsApp('{folder_name} {product_counter}','Services', '{price}')">Buy Now</button></p>
                    </div>
                    '''
                    div_cards += div_card

    return div_cards

# Set the base directory where your product folders are located
base_dir = r'D:\veg\Services\resized'

# Generate the div cards HTML
div_cards_html = generate_div_cards(base_dir)

# Print the generated HTML to verify
print(div_cards_html)

# Optionally, write the generated HTML to a file
with open('product_cards.html', 'w', encoding='utf-8') as f:
    f.write(div_cards_html)
