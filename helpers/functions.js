
async function search(input, modelplayer, options) {
    if (input && Number(input) == input) {
              const playerfound = await modelplayer.paginate({
            id: parseInt(input)
        }, options)
        return playerfound
    } else if (input) {
        return await modelplayer.paginate({
            $or: [
                { "status": { $regex: '.*' + input + '.*' } },
                { "nickname": { $regex: '.*' + input + '.*' } }
            ]
        }, options)
    }
    return modelplayer.paginate({}, options)
}

module.exports = { search }
