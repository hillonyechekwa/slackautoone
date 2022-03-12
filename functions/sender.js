const axios = require('axios')

const {getDatabase} = require('./notion.js');


exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    const data = await getDatabase()
    return{
      statusCode: 200,
      body: JSON.stringify(data)
    };
  }
}
