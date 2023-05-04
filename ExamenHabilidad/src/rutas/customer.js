 const {Router} =  require('express')
const router = Router();
const sistemaController = require('../api/Sistema')


router.get('/',sistemaController.obtenerEstadion)

router.get('*', function(req, res) {    
        res.status(404).json({mensaje:"Error 404", estado: false})
})
router.post('*', function(req, res) {    
        res.status(404).json({mensaje:"Error 404", estado: false})
})
module.exports = router;