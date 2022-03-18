

exports.handler = (event, callback) => {

    if(event.httpMethod === 'POST'){
        const {challenge} = event.body
        callback(null,{
            statusCode:200,
            body: {challenge}
        })
    }
}

