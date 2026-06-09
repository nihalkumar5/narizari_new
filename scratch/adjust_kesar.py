import cv2

backup_path = "public/images/team_backup/kesar.jpg"
img_path = "public/images/team/kesar.jpg"

# Load original image
img = cv2.imread(backup_path)
if img is None:
    print("Failed to read kesar.jpg from backup.")
    exit(1)

# Correct face coordinates
fx, fy, fw, fh = 328, 379, 190, 190

# Calculate crop dimensions (face occupies 36% of card height)
crop_h = int(fh / 0.36)
crop_w = int(crop_h * (3.0/4.0))

center_x = fx + fw // 2
center_y = fy + fh // 2

# Align vertically at 42% from top of card
crop_y = int(center_y - crop_h * 0.42)
crop_x = int(center_x - crop_w // 2)

# Crop the image
cropped = img[crop_y:crop_y+crop_h, crop_x:crop_x+crop_w]

# Resize to standard 600x800
resized = cv2.resize(cropped, (600, 800), interpolation=cv2.INTER_LANCZOS4)
cv2.imwrite(img_path, resized)
print("kesar.jpg successfully cropped and saved.")
