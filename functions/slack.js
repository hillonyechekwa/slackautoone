const { json } = require("express/lib/response");

exports.handler = async (event,context, callback) => {
    const {challenge} = await JSON.parse(event.body)
  
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({challenge})
    });
    return{
        statusCode: 200,
        body: "done!"
    }
  };

