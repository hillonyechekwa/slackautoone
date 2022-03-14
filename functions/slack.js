

exports.default = async (event, callback) => {
    const challenge = event.body.challenge;

    if(event.httpMethod === 'POST'){
            callback(null, {
              statusCode: 200,
              body: {
                challenge: challenge
              }
            })
    }
}

