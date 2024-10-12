import * as contentful from "contentful"
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'rlx5jqzvnc1n',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '5OGYgwN18wUBl178FBfIyZvq2jNAGAoVUnVjBE7JoZU',
})
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
client.getSpace('rlx5jqzvnc1n')
.then((space) => space.getEnvironment('PhotoGalleriesEnv'))
  .then((environment) => {
    "fields": {
    "title": "Playsam Streamliner",
    "file": {
      "fileName": "quwowooybuqbl6ntboz3.jpg",
      "contentType": "image/jpg",
      "details": {
        "image": {
          "width": 600,
          "height": 446
        },
        "size": 27187
      },
      "url": "//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"
    }
  }
  });




