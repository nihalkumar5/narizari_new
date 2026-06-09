import os
import cv2
import numpy as np
from PIL import Image

# Directories
dir_path = "public/images/team"
output_dir = "public/images/team"
backup_dir = "public/images/team_backup"

# Ensure backup exists
if not os.path.exists(backup_dir):
    os.makedirs(backup_dir)

# Load Haar Cascade face detector
cascade_path = os.path.join(cv2.data.haarcascades, 'haarcascade_frontalface_default.xml')
face_cascade = cv2.CascadeClassifier(cascade_path)

# Aspect ratio of the card is 3:4 (w:h)
target_ratio = 3.0 / 4.0

for filename in sorted(os.listdir(dir_path)):
    if not filename.endswith(".jpg"):
        continue
        
    img_path = os.path.join(dir_path, filename)
    backup_path = os.path.join(backup_dir, filename)
    
    # Backup original if not already backed up
    if not os.path.exists(backup_path):
        img_temp = Image.open(img_path)
        img_temp.save(backup_path)
        print(f"Backed up {filename} to backup folder.")
    
    # Always read from the original backup to allow reruns
    img = cv2.imread(backup_path)
    if img is None:
        print(f"Failed to read {filename}")
        continue
        
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Detect faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=4, minSize=(60, 60))
    h_img, w_img = img.shape[:2]
    
    if len(faces) == 0:
        print(f"No face detected in {filename}. Using default center crop.")
        target_w = int(h_img * target_ratio)
        if target_w <= w_img:
            x = (w_img - target_w) // 2
            y = 0
            w = target_w
            h = h_img
        else:
            target_h = int(w_img / target_ratio)
            x = 0
            y = 0
            w = w_img
            h = target_h
        cropped = img[y:y+h, x:x+w]
    else:
        # Sort by size to pick the largest face
        faces = sorted(faces, key=lambda f: f[2] * f[3], reverse=True)
        fx, fy, fw, fh = faces[0]
        print(f"Detected face in {filename}: x={fx}, y={fy}, w={fw}, h={fh}")
        
        # We want the face to occupy about 36% of the card height
        crop_h = int(fh / 0.36)
        crop_w = int(crop_h * target_ratio)
        
        # Align face center vertically at 42% from the top of the card
        center_x = fx + fw // 2
        center_y = fy + fh // 2
        
        crop_y = int(center_y - crop_h * 0.42)
        crop_x = int(center_x - crop_w // 2)
        
        # Clamp to image boundaries
        if crop_y < 0:
            crop_y = 0
        if crop_x < 0:
            crop_x = 0
        if crop_y + crop_h > h_img:
            crop_y = h_img - crop_h
            if crop_y < 0:
                crop_y = 0
                crop_h = h_img
        if crop_x + crop_w > w_img:
            crop_x = w_img - crop_w
            if crop_x < 0:
                crop_x = 0
                crop_w = w_img
                
        cropped = img[crop_y:crop_y+crop_h, crop_x:crop_x+crop_w]
        
    # Resize to exactly 600x800 for consistent layout rendering
    resized = cv2.resize(cropped, (600, 800), interpolation=cv2.INTER_LANCZOS4)
    cv2.imwrite(img_path, resized)
    print(f"Resized {filename} to 600x800.")
