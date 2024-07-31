from PIL import Image, ImageOps

def resize_image(input_path, output_path='output.jpg', final_size=(300, 300)):
    try:
        # Open the input image
        img = Image.open(input_path)
        
        # Get original dimensions
        width, height = img.size
        
        # Determine the size of the square canvas
        max_dim = max(width, height)
        
        # Create a new square image with white background
        new_img = Image.new('RGB', (max_dim, max_dim), (255, 255, 255))
        
        # Paste the original image onto the center of the new square image
        new_img.paste(img, ((max_dim - width) // 2, (max_dim - height) // 2))
        
        # Resize the image to the final size
        resized_img = new_img.resize(final_size, Image.LANCZOS)
        
        # Save the resized image with the specified output path
        resized_img.save(output_path)
        print(f"Image successfully resized and saved as {output_path}")

    except FileNotFoundError:
        print(f"File not found: {input_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage with raw string for file path
resize_image(r'products\KGN\chair\12000.jpg')
