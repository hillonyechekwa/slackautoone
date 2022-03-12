

exports.handler = async(event, callback) => {
  // console.log('callback', callback)
  return{
    statusCode: 200,
    body: JSON.stringify("Hello World!")
  }
}
