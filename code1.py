import os
from PIL import Image, ImageOps

def resize_images(folder_path, output_folder, size):
    # Check if the output folder exists, if not, create it
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # List all files in the folder
    files = os.listdir(folder_path)
    
    # Filter image files (you can extend this list with other image formats if needed)
    image_files = [file for file in files if file.endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]
    
    # Process each image
    for image_file in image_files:
        # Open an image file
        with Image.open(os.path.join(folder_path, image_file)) as img:
            # Resize image using LANCZOS interpolation
            resized_img = img.resize(size, Image.LANCZOS)
            
            # Save it back to output folder
            resized_img.save(os.path.join(output_folder, image_file))
            
            print(f"Resized and saved {image_file}")

# Specify the path to your folder containing images
input_folder = r"D:\k.g.n"
output_folder = r"D:\k.g.n\resized"
size = (300, 300)  # Specify the desired size (width, height)

# Resize images
resize_images(input_folder, output_folder, size)

print("All images have been resized and saved to the output folder.")
