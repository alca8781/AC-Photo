fetch('https://github.com/contentful/contentful.js')



const contentful = require('contentful')

const client = contentful.createClient({
  space: 'iz0llk80rvzb',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'd2HXMWGMqyvnW8eBK3Hgu4upxzzakCBi4qQv4p627Aw'
})

client.getEntry('1dWMgZjiSc61M6ZVD49FrV')
  .then((entry) => console.log(entry))
  .catch(console.error) 