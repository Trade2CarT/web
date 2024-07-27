from PIL import Image
import os

def resize_images_in_subfolders(input_folder, output_folder, size):
    # Ensure the output folder exists
    os.makedirs(output_folder, exist_ok=True)
    
    # Iterate through each subfolder in the input folder
    for subfolder in os.listdir(input_folder):
        subfolder_path = os.path.join(input_folder, subfolder)
        
        if os.path.isdir(subfolder_path):
            # Create a corresponding folder in the output folder
            output_subfolder = os.path.join(output_folder, subfolder)
            os.makedirs(output_subfolder, exist_ok=True)
            
            for image_file in os.listdir(subfolder_path):
                if image_file.endswith(('.jpg', '.jpeg', '.png', '.gif')):
                    img_path = os.path.join(subfolder_path, image_file)
                    with Image.open(img_path) as img:
                        # Resize the image
                        resized_img = img.resize(size, Image.Resampling.LANCZOS)
                        
                        # Convert images to RGB mode if needed
                        if resized_img.mode in ('RGBA', 'P'):
                            resized_img = resized_img.convert('RGB')
                        
                        # Save the resized image in the corresponding output subfolder
                        output_path = os.path.join(output_subfolder, image_file)
                        resized_img.save(output_path)
                        print(f'Folder: {subfolder} | Image: {image_file}')

# Define the input and output folders and the size to resize to
input_folder = r"D:\veg"
output_folder = r"D:\veg\resized"
size = (300, 300)  # Example size, adjust as needed

# Resize the images
resize_images_in_subfolders(input_folder, output_folder, size)
