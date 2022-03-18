

exports.handler = async(event, callback) => {

    if(event.httpMethod === 'POST'){
        const challenge = await event.body.challenge
        callback(null,{
            statusCode:200,
            body: challenge
        })
    }
}

