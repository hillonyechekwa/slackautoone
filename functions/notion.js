require('dotenv').config()

const {Client} = require('@notionhq/client')

//create new notion client instance
const notion = new Client({ auth: process.env.NOTION_API_KEY});

const databaseId = process.env.NOTION_API_DATABASE

//get pages in notion database
module.exports =  {
  getDatabase: async () => {
    const response = await notion.databases.query({database_id: databaseId})
    return response.results.map((page) => {
      return{
        id: page.id,
        name: page.properties.Name.title[0]?.plain_text,
        number: Number.parseInt(page.properties.Contact.phone_number)
      }
    })
  }
};

