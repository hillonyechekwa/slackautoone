

exports.default = async (event, callback) => {
    try{
        const {challenge} = event.body
        callback(null, {
            statusCode: 200,
            body: {challenge}
        })
        return{
            statusCode: 200,
            body: JSON.stringify("challenge sent")
        }
    }catch(err){
        console.log('err', err)
        callback(err)
        return{
            statusCode: 500,
            body: JSON.stringify(err)
        }
    }
}

