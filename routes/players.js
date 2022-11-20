const {Router} = require("express");
const {players} = require("../controllers/players");
const router = Router();

router.get("/players",players)

module.exports = router;