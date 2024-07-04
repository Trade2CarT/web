import os

def generate_html_from_images(folder_path):
    # List all files in the folder
    files = os.listdir(folder_path)
    
    # Filter image files (you can extend this list with other image formats if needed)
    image_files = [file for file in files if file.endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]

    # Initialize HTML string
    html_content = ""
    
    # Generate HTML for each image
    for idx, image_file in enumerate(image_files, start=1):
        image_name, image_extension = os.path.splitext(image_file)
        product_number = f"product{idx}"
        
        html_content += f'''
    <div class="card">
        <img src="products/bamboo/{image_name}{image_extension}" alt="{image_name}" onclick="openModal('products/bamboo/{image_name}{image_extension}')">
        <h1>{product_number}</h1>
        <p class="price">{image_name}</p>
        <p><button onclick="openWhatsApp1()">Buy Now</button></p>
    </div>
    '''
    
    return html_content

# Specify the path to your folder containing images
folder_path = r"D:\k.g.n\kgn"

# Generate HTML
html_output = generate_html_from_images(folder_path)

# Save the generated HTML to a file
with open("output.html", "w") as file:
    file.write(html_output)

print("HTML has been generated and saved to output.html")
