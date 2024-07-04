from PIL import Image
import os

def resize_images(input_folder, output_folder, size):
    # Ensure the output folder exists
    os.makedirs(output_folder, exist_ok=True)
    
    for image_file in os.listdir(input_folder):
        if image_file.endswith(('.jpg', '.jpeg', '.png', '.gif')):
            img_path = os.path.join(input_folder, image_file)
            with Image.open(img_path) as img:
                # Resize the image
                resized_img = img.resize(size, Image.Resampling.LANCZOS)
                
                # Convert images to RGB mode if needed
                if resized_img.mode in ('RGBA', 'P'):
                    resized_img = resized_img.convert('RGB')
                
                # Save the resized image
                output_path = os.path.join(output_folder, image_file)
                resized_img.save(output_path)
                print(f'Resized and saved {image_file}')

# Define the input and output folders and the size to resize to
input_folder = r"D:\k.g.n\New folder (2)\unused products"
output_folder = r"D:\k.g.n\New folder (2)\unused products\resized"
size = (300, 300)  # Example size, adjust as needed

# Resize the images
resize_images(input_folder, output_folder, size)
