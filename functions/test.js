

exports.handler = async(event, callback) => {
  // console.log('callback', callback)
  if(event.httpMethod === 'POST'){
    callback(null, {
      statusCode: 200,
      body: {
        challenge: event.body.challenge
      }
    })
  }
  return{
    statusCode: 200,
    body: JSON.stringify("Hello Everyone!")
  }
}
