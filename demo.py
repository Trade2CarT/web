import os
from PIL import Image

def resize_and_save_image(image_path, output_path, size=(300, 300)):
    """Resize an image to the specified size and save it to the output path."""
    try:
        # Open the image
        img = Image.open(image_path)
        
        # Get original dimensions
        width, height = img.size
        
        # Determine the size of the square canvas
        max_dim = max(width, height)
        
        # Create a new square image with white background
        new_img = Image.new('RGB', (max_dim, max_dim), (255, 255, 255))
        
        # Paste the original image onto the center of the new square image
        new_img.paste(img, ((max_dim - width) // 2, (max_dim - height) // 2))
        
        # Resize the image to the final size
        resized_img = new_img.resize(size, Image.LANCZOS)
        
        # Save the resized image with the specified output path
        resized_img.save(output_path)
        print(f"Image successfully resized and saved as {output_path}")

    except Exception as e:
        print(f"An error occurred while processing {image_path}: {e}")

def process_folders(input_dir, output_dir, size=(300, 300)):
    """Process each folder and image in the input directory and save resized images to the output directory."""
    for root, dirs, files in os.walk(input_dir):
        for dir_name in dirs:
            # Create corresponding directory in output
            input_folder_path = os.path.join(root, dir_name)
            relative_path = os.path.relpath(input_folder_path, input_dir)
            output_folder_path = os.path.join(output_dir, relative_path)
            os.makedirs(output_folder_path, exist_ok=True)

        for file_name in files:
            if file_name.lower().endswith(('.png', '.jpg', '.jpeg')):
                # Define paths
                input_file_path = os.path.join(root, file_name)
                relative_path = os.path.relpath(root, input_dir)
                output_file_path = os.path.join(output_dir, relative_path, file_name)
                
                # Resize and save the image
                resize_and_save_image(input_file_path, output_file_path, size)

# Example usage
input_directory = r'products\KGN'
output_directory = r'products\KGN\new'
process_folders(input_directory, output_directory)
