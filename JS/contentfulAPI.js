
const client = contentful.createClient({
  space: 'xyzx0flf1kvl',
  accessToken: 'YZEFnaM1EF0Yn0iwF8ZasRzJrJ7r7_GI0Aa8APUDDns'
});


// client.getEntries().then(function (entries) {
//   // log the title for all the entries that have it
//   entries.items.forEach(function (entry) {
//     if (entry.fields.productName) {
//       console.log(entry.fields.productName);
//     }
//   });
// });

const sleepyHollowContainer = document.getElementById('SleepyHollow_content');
client.getEntries().then(function (entries) {
  entries.items.forEach(function (entry) {
    if (entry.fields.sleepyHollow) {
      entry.fields.sleepyHollow.forEach(function (imageAsset) {
        const img = document.createElement('img');
        img.src = 'https:' + imageAsset.fields.file.url;
        img.style.width = '300px';
        img.style.margin = '5px';
        sleepyHollowContainer.appendChild(img);
      });
    }
  });
});

const bristolContainer = document.getElementById('Bristol_content');
client.getEntries().then(function (entries) {
  entries.items.forEach(function (entry) {
    if (entry.fields.bristol_id) {
      entry.fields.bristol_id.forEach(function (imageAsset) {
        const img = document.createElement('img');
        img.src = imageAsset.fields.file.url;
        img.style.width = '300px';
        img.style.margin = '5px';
        bristolContainer.appendChild(img);
      });
    }
  });
});

const rehearsalContainer = document.getElementById('Rehearsal_content');
client.getEntries().then(function (entries) {
  entries.items.forEach(function (entry) {
    if (entry.fields.RehersalDinner) {
      entry.fields.RehersalDinner.forEach(function (imageAsset) {
        const img = document.createElement('img');
        img.src = imageAsset.fields.file.url;
        img.style.width = '300px';
        img.style.margin = '5px';
        rehearsalContainer.appendChild(img);
      });
    }
  });
});