const client = contentful.createClient({
  space: 'xyzx0flf1kvl',
  accessToken: 'YZEFnaM1EF0Yn0iwF8ZasRzJrJ7r7_GI0Aa8APUDDns'
});


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

const ImageName = (container, imageAsset, name) => {
  const imgContainer = document.createElement('div');
  imgContainer.style.display = 'inline-block';
  imgContainer.style.margin = '5px';

  const img = document.createElement('img');
  img.src = 'https:' + imageAsset.fields.file.url;
  img.style.width = '300px';

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


DisplayImages('SleepyHollow_content', 'sleepyHollow');
DisplayImages('Bristol_content', 'bristol_id');
DisplayImages('Rehearsal_content', 'RehearsalDinner');
