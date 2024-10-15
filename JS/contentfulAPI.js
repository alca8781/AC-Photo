
const client = contentful.createClient({
    space: 'xyzx0flf1kvl',
    accessToken: 'YZEFnaM1EF0Yn0iwF8ZasRzJrJ7r7_GI0Aa8APUDDns'
  });

  
  client.getEntries().then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      if (entry.fields.productName) {
        console.log(entry.fields.productName);
      }
    });
  });

  const contentContainer = document.getElementById('content');

  // Wedding 
client.getEntries().then(function (entries) {
  entries.items.forEach(function (entry) {
    if (entry.fields.weddingID) {
      const galleryTitle = document.createElement('h2');
      galleryTitle.innerText = entry.fields.weddingID; 
      contentContainer.appendChild(galleryTitle);
    }
    if (entry.fields.sleepyHollow) {
      entry.fields.sleepyHollow.forEach(function (imageAsset) {
        const img = document.createElement('img');
        img.src = imageAsset.fields.file.url; 
        img.style.width = '300px';
        contentContainer.appendChild(img);
      });
    }
  });
});