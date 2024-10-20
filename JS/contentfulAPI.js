const client = contentful.createClient({
  space: 'xyzx0flf1kvl',
  accessToken: 'YZEFnaM1EF0Yn0iwF8ZasRzJrJ7r7_GI0Aa8APUDDns'
});

// CART 
let cartCount = 0; 
let cartItems = []; 
let isCartVisible = false; 

// Cart count display
const cartCountDisplay = document.getElementById('cartCountContainer');
const cartCountText = document.createElement('span');
cartCountText.style.marginLeft = '-10px';
cartCountText.style.marginTop = '20px';  
cartCountText.style.fontSize = '18px'; 
cartCountText.textContent = ` ${cartCount}`;

cartCountDisplay.appendChild(cartCountText);

// cart list 
const cartListDisplay = document.getElementById('cartListContainer');
const viewCartButton = document.getElementById('viewCartButton');

// Cart display on click
viewCartButton.addEventListener('click', () => {
  isCartVisible = !isCartVisible; 
  
  if (isCartVisible) {
    cartListDisplay.innerHTML = ''; 
    if (cartItems.length > 0) {
      cartListDisplay.innerHTML = '<h3>Cart Items:</h3>';
      const list = document.createElement('ul');
      cartItems.forEach(itemName => {
        const listItem = document.createElement('li');
        listItem.textContent = itemName;
        list.appendChild(listItem);
        cartListDisplay.innerHTML = '<p> copy & paste cart selections <br> and email <br> ac@allycadyphotography.com <br> ---------------------------------</p>';
      });
      cartListDisplay.appendChild(list);
    } else {
      cartListDisplay.innerHTML = '<p> cart is empty.</p>';
    }
  } else {
    cartListDisplay.innerHTML = '';
  }
});




// IMAGES 
const DisplayImages = (containerId, fieldKey) => {
  const container = document.getElementById(containerId);

  client.getEntries().then(function (entries) {
    entries.items.forEach(function (entry) {
      if (entry.fields[fieldKey]) {
        entry.fields[fieldKey].forEach(function (imageAsset) {
          const name = imageAsset.fields.title || "No name available";
          ImageName(container, imageAsset, name);
        });
      }
    });
  });
};

// image with name 
const ImageName = (container, imageAsset, name) => {
  const imgContainer = document.createElement('div');
  imgContainer.style.display = 'inline-block';
  imgContainer.style.margin = '5px';

  const img = document.createElement('img');
  img.src = 'https:' + imageAsset.fields.file.url;
  img.style.width = '300px';

  // click add/remove from cart
  img.addEventListener('click', () => {
    if (img.style.filter === 'opacity(70%)') {
      img.style.filter = 'none';
      cartCount--; 
      cartItems = cartItems.filter(item => item !== name); // Remove image name from cart
    } else {
      img.style.filter = 'opacity(70%)';
      cartCount++; 
      cartItems.push(name); // Add image name to cart
    }
    // Update the cart count text
    cartCountText.textContent = ` ${cartCount}`;

  });

  // Display image name
  const caption = document.createElement('span');
  caption.textContent = name;
  caption.style.display = 'block'; 
  caption.style.textAlign = 'center';
  caption.style.fontFamily = 'Raleway';
  caption.style.fontSize = '8pt';

  imgContainer.appendChild(img);
  imgContainer.appendChild(caption);
  container.appendChild(imgContainer);
};


// Call DisplayImages for the various content sections
DisplayImages('SleepyHollow_content', 'sleepyHollow');
DisplayImages('Bristol_content', 'bristol_id');
DisplayImages('Rehearsal_content', 'RehearsalDinner');
DisplayImages('FunnyFam_content', 'FunnyFamPhoto');
