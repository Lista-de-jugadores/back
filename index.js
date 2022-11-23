const {app} = require ("./app")
const {db_connect} = require ("./bd/bd")

app.listen(3002, () => {
    console.log('server run in 3002')
    db_connect()
})


