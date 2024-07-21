# Import necessary modules
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from bs4 import BeautifulSoup
import csv
import os

# Function to connect to Google Drive and authenticate
def connect_to_drive(client_secrets_path):
    gauth = GoogleAuth()
    gauth.LoadClientConfigFile(client_secrets_path)
    gauth.LocalWebserverAuth()
    drive = GoogleDrive(gauth)
    return drive

# Function to upload image to Google Drive and return the URL
def upload_image_to_drive(drive, local_image_path):
    file = drive.CreateFile({'title': os.path.basename(local_image_path)})  # Use the base name as title
    file.SetContentFile(local_image_path)
    file.Upload()
    return file['alternateLink']  # Use alternateLink for web viewable link

# Example HTML content (replace with your own parsing logic)
html_content = """
<html>
<body>

                    {
        "id": 1,
        "name": "ms iron",
        "price": 25,
        "imageUrl": "products/trade/iron/ms iron .jpg",
        "unit": "KG(s)"
    },
    {
        "id": 2,
        "name": "iron metal sheet",
        "price": 21,
        "imageUrl": "products/trade/iron/iron metal sheet.jpg",
        "unit": "KG(s)"
    },
    
    {
        "id": 3,
        "name": "paint and iron tins",
        "price": 15,
        "imageUrl": "products/trade/iron/pain and iron tins.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 4,
        "name": "plastic",
        "price": 17,
        "imageUrl": "products/trade/plastic/plastic.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 5,
        "name": "pvc plastic",
        "price": 20,
        "imageUrl": "products/trade/plastic/pvc plastic.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 6,
        "name": "stainless steel",
        "price": 35,
        "imageUrl": "products/trade/metals/stainless steel.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 7,
        "name": "cotton box",
        "price": 9,
        "imageUrl": "products/trade/papers/cotton box.jpg",
        "unit": "KG(s)"
    },
   
    {
        "id": 8,
        "name": "school books",
        "price": 10,
        "imageUrl": "products/trade/papers/school books.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 9,
        "name": "note book",
        "price": 15,
        "imageUrl": "products/trade/papers/note book.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 10,
        "name": "Tamil-News-Paper",
        "price": 17,
        "imageUrl": "products/trade/papers/Tamil-News-Paper.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 11,
        "name": "Tamil & English Navels",
        "price": 5,
        "imageUrl": "products/trade/papers/Books_06.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 12,
        "name": "BB cards",
        "price": 2,
        "imageUrl": "products/trade/papers/Pirated-DVDs-of24236.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 13,
        "name": "aluminum",
        "price": 130,
        "imageUrl": "products/trade/metals/aluminum.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 14,
        "name": "bc aluminum ",
        "price": 110 ,
        "imageUrl": "products/trade/metals/bc aluminum.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 15,
        "name": "bc mixed",
        "price": 70,
        "imageUrl": "products/trade/metals/bc mixed.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 16,
        "name": "copper",
        "price": 600,
        "imageUrl": "products/trade/metals/copper.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 17,
        "name": "brass",
        "price": 400,
        "imageUrl": "products/trade/metals/brass.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 18,
        "name": "Radiator",
        "price": 60,
        "imageUrl": "products/trade/battery/images (15).jpeg.jpg",
        "unit": "KG(s)"
    },
    
    {
        "id": 19,
        "name": "mc battery",
        "price": 59,
        "imageUrl": "products/trade/battery/mc battery.jpg",
        "unit": "KG(s)"
    },
    {
        "id": 20,
        "name": "vehicle battery",
        "price": 700,
        "imageUrl": "products/trade/battery/vehicle battery.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 21,
        "name": "ups battery",
        "price": 1600,
        "imageUrl": "products/trade/battery/ups battery.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 22,
        "name": "black plastic",
        "price": 5,
        "imageUrl": "products/trade/plastic/black plastic .jpg",
        "unit": "KG(s)"
    },
    {
        "id": 23,
        "name": "govt fan",
        "price": 55,
        "imageUrl": "products/trade/unused products/govt fan.jpg",
        "unit": "Unit(s)"
    },

    {
        "id": 24,
        "name": "govt mixxer",
        "price": 60,
        "imageUrl": "products/trade/unused products/govt mixxer.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 25,
        "name": "govt grainder",
        "price": 185,
        "imageUrl": "products/trade/unused products/govt grainder.jpg",
        "unit": "Unit(s)"
    },

    {
        "id": 26,
        "name": "company table fan",
        "price": 85,
        "imageUrl": "products/trade/unused products/comany table fan.jpg",
        "unit": "Unit(s)"
    },
   
    {
        "id": 27,
        "name": "company mixxer",
        "price": 85,
        "imageUrl": "products/trade/unused products/company mixxer.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 28,
        "name": "company grainder",
        "price": 185,
        "imageUrl": "products/trade/unused products/company grainder.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 29,
        "name": "hotel big grainder",
        "price": 550,
        "imageUrl": "products/trade/unused products/hotel big grainder .jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 30,
        "name": "Water Purifier",
        "price": 75,
        "imageUrl": "products/trade/unused products/images (16).jpeg.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 31,
        "name": "TV stabilizer",
        "price": 50,
        "imageUrl": "products/trade/unused products/TV stabilizer.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 32,
        "name": "AC stabilizer",
        "price": 90,
        "imageUrl": "products/trade/unused products/AC stabilizer.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 33,
        "name": "water heater",
        "price": 30,
        "imageUrl": "products/trade/unused products/water heater.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 34,
        "name": "cooler tower fan",
        "price": 60,
        "imageUrl": "products/trade/unused products/cooler tower.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 35,
        "name": "cooler fan",
        "price": 200,
        "imageUrl": "products/trade/unused products/cooler fan.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 36,
        "name": "ups inverter",
        "price": 220,
        "imageUrl": "products/trade/unused products/ups inverter.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 37,
        "name": "old model geyser",
        "price": 450,
        "imageUrl": "products/trade/unused products/old geyser.png",
        "unit": "Unit(s)"
    },


    



    {
        "id": 38,
        "name": "new model geysar",
        "price": 300,
        "imageUrl": "products/trade/unused products/new model geysar.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 39,
        "name": "Single door small Fridge",
        "price": 450,
        "imageUrl": "products/trade/unused products/single door small.jpg",
        "unit": "Unit(s)"
    },
   
    {
        "id": 40,
        "name": "single door big Fridge",
        "price": 600,
        "imageUrl": "products/trade/unused products/single door big.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 41,
        "name": "double door Fridge",
        "price": 900,
        "imageUrl": "products/trade/unused products/double door.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 42,
        "name": "washing machine semi plastic",
        "price": 450,
        "imageUrl": "products/trade/unused products/washing machine semi plastic.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 43,
        "name": "Washing Machine TOpLoad",
        "price": 600,
        "imageUrl": "products/trade/unused products/images (9).jpeg.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 43,
        "name": "washing machine frontload",
        "price": 750,
        "imageUrl": "products/trade/unused products/washing machine frontload.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 44,
        "name": "de frezer small",
        "price": 800,
        "imageUrl": "products/trade/unused products/de frezer small.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 45,
        "name": "de frezer big",
        "price": 1100,
        "imageUrl": "products/trade/unused products/images (14).jpeg.jpg",
        "unit": "Unit(s)"
    },
    
    
   
    {
        "id": 46,
        "name": "AC 1 ton",
        "price": 1600,
        "imageUrl": "products/trade/unused products/AC 1 ton.jpg",
        "unit": "Unit(s)"
    },
    {
        "id": 47,
        "name": "AC 1.5 ton",
        "price": 1950,
        "imageUrl": "products/trade/unused products/AC 1.5 ton.jpg",
        "unit": "Unit(s)"
    },
    
    {
        "id": 48,
        "name": "cell phone",
        "price": 20,
        "imageUrl": "products/trade/unused products/cell phone.jpg",
        "unit": "Unit(s)"
    },
  
   
    
   
   
    {
        "id": 49,
        "name": "electronic e waste",
        "price": 8,
        "imageUrl": "products/trade/unused products/electronic e waste.jpg",
        "unit": "Unit(s)"
    }
    
                    
</body>
</html>
"""

# Parse HTML content
soup = BeautifulSoup(html_content, 'html.parser')
items = soup.find_all('div', class_='card')

# Prepare CSV file
csv_filename = 'items.csv'
csv_columns = ['Title', 'Description', 'Price', 'Image URL']

# Example path to your client secrets file
client_secrets_path = 'D:/client_secret_883581237364-t84fig0ile4dsjer8ki4bomh7u3quprb.apps.googleusercontent.com.json'  # Replace with your actual path

# Connect to Google Drive
drive = connect_to_drive(client_secrets_path)

# Write data to CSV and upload images
with open(csv_filename, mode='w', newline='', encoding='utf-8') as csv_file:
    writer = csv.DictWriter(csv_file, fieldnames=csv_columns)
    writer.writeheader()

    for item in items:
        title = item.find('h1').text.strip()
        price = item.find('p', class_='price').text.strip()
        image_url = item.find('img')['src']

        # Example path, replace with your actual local image path
        local_image_path = image_url  # Use the image URL directly

        # Upload image to Google Drive
        drive_image_url = upload_image_to_drive(drive, local_image_path)

        # Write row to CSV
        writer.writerow({
            'Title': title,
            'Description': '',  # No description in your example HTML
            'Price': price,
            'Image URL': drive_image_url
        })

print(f'CSV file "{csv_filename}" and images uploaded to Google Drive successfully.')
