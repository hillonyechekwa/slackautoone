

exports.default = async (event, callback) => {
    if(event.httpMethod === 'POST'){
            callback(null, {
              statusCode: 200,
              body: {
                challenge: event.body.challenge
              }
            })
    }
}

