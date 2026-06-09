import os
import cv2

dir_path = "public/images/team"
backup_path = "public/images/team_backup/rile.jpg"
img_path = "public/images/team/rile.jpg"

# Load Haar Cascade face detector
cascade_path = os.path.join(cv2.data.haarcascades, 'haarcascade_frontalface_default.xml')
face_cascade = cv2.CascadeClassifier(cascade_path)

# Load original image
img = cv2.imread(backup_path)
if img is None:
    print("Failed to read rile.jpg from backup.")
    exit(1)

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=4, minSize=(60, 60))
h_img, w_img = img.shape[:2]

if len(faces) == 0:
    print("No face detected. Using default crop.")
    crop_h = h_img
    crop_w = int(crop_h * (3.0/4.0))
    x = (w_img - crop_w) // 2
    cropped = img[0:crop_h, x:x+crop_w]
else:
    faces = sorted(faces, key=lambda f: f[2] * f[3], reverse=True)
    fx, fy, fw, fh = faces[0]
    print(f"Face detected: x={fx}, y={fy}, w={fw}, h={fh}")
    
    # We want the face to occupy 36% of the card height
    crop_h = int(fh / 0.36)
    crop_w = int(crop_h * (3.0/4.0))
    
    center_x = fx + fw // 2
    center_y = fy + fh // 2
    
    # Normally we used 0.42. Let's use 0.32 to shift the face down on the card (giving 32% top margin)
    crop_y = int(center_y - crop_h * 0.32)
    crop_x = int(center_x - crop_w // 2)
    
    # Clamp to image boundaries
    if crop_y < 0:
        crop_y = 0
    if crop_x < 0:
        crop_x = 0
    if crop_y + crop_h > h_img:
        crop_y = h_img - crop_h
    if crop_x + crop_w > w_img:
        crop_x = w_img - crop_w
        
    cropped = img[crop_y:crop_y+crop_h, crop_x:crop_x+crop_w]

# Resize to standard size
resized = cv2.resize(cropped, (600, 800), interpolation=cv2.INTER_LANCZOS4)
cv2.imwrite(img_path, resized)
print("rile.jpg successfully cropped and saved.")
