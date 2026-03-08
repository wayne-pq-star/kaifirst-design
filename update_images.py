
import re

file_path = 'constants.tsx'

with open(file_path, 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Main image (w_800)
    if "image: 'https://res.cloudinary.com/dihkqwd43/image/upload/" in line:
        new_line = line.replace(
            "image: 'https://res.cloudinary.com/dihkqwd43/image/upload/",
            "image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto,w_800/"
        )
        new_lines.append(new_line)
    # Gallery image (w_1200) - check if it's a gallery line (usually just the URL in quotes)
    elif "'https://res.cloudinary.com/dihkqwd43/image/upload/" in line:
        # Ensure we don't double replace if the line has "image:" but wasn't caught above (unlikely given the first check)
        if "image:" not in line:
             new_line = line.replace(
                "'https://res.cloudinary.com/dihkqwd43/image/upload/",
                "'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto,w_1200/"
            )
             new_lines.append(new_line)
        else:
            new_lines.append(line)
    else:
        new_lines.append(line)

with open(file_path, 'w') as f:
    f.writelines(new_lines)

print("Successfully updated constants.tsx")
