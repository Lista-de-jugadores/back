const { getplayers } = require("../services/player")

const players = async (req, res) => {
    let { input, page, limit } = req.query
        try {
        res.status(200).json(await getplayers(input, page, limit))
    } catch (error) {
        console.log({
            status: error.name,
            msg: error.message,
            path: "controller"
        })
    }
}

module.exports = { players }