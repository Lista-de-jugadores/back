const Player = require("../modelos/usuario")
const { search } = require("../helpers/functions")

const getplayers = async (input, page = 1, limit = 20) => {
  const options = {
    page: page,
    limit: limit,
    collation: {
      locale: 'en',
    },
  };
  return await search(input, Player, options)
}

module.exports = { getplayers }