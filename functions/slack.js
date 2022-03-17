

exports.handler = async (event, callback) => {
    const challenge = event.body.challenge;

    if(event.httpMethod === 'POST'){
            const challenge = JSON.parse(event.body)
            callback(null, {
                statusCode: 200,
                body: challenge
            })
          }
}

