
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'constants.tsx');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let updatedData = data;

  // Update main project images (w_800)
  // Look for: image: 'https://res.cloudinary.com/dihkqwd43/image/upload/v...
  updatedData = updatedData.replace(
    /image: 'https:\/\/res\.cloudinary\.com\/dihkqwd43\/image\/upload\/(v[0-9]+\/[^']+)'/g,
    "image: 'https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto,w_800/$1'"
  );

  // Update gallery images (w_1200)
  // Look for: 'https://res.cloudinary.com/dihkqwd43/image/upload/v...
  // But NOT starting with "image: " (which we just handled)
  // We can use a negative lookbehind if supported, or just a broader replace and then fix the double replace if any.
  // A safer way in JS regex without lookbehind support in all environments:
  // We can iterate line by line or use a specific pattern for the gallery array items.
  // Gallery items are usually indented and just the string.
  
  updatedData = updatedData.replace(
    /^\s*'https:\/\/res\.cloudinary\.com\/dihkqwd43\/image\/upload\/(v[0-9]+\/[^']+)'/gm,
    (match, p1) => {
        // Check if it was already replaced by the previous rule (unlikely given the ^\s* anchor and lack of "image:")
        return match.replace(
            `https://res.cloudinary.com/dihkqwd43/image/upload/${p1}`,
            `https://res.cloudinary.com/dihkqwd43/image/upload/f_auto,q_auto,w_1200/${p1}`
        );
    }
  );

  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Successfully updated constants.tsx');
    }
  });
});
