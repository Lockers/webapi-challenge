const pdb = require('../helpers/projectModel');
const adb = require('../helpers/actionModel')

module.exports =
    async function validateId(req, res, next) {
    try {
        if (!isNaN(req.params.id)) {

            user = await pdb.get(req.params.id)

            if (user !== null) {
                next()
            }
            else {
                res.status(404).json({ Err: 'ID not here babycakes' })
            }
        }
        else {
            res.status(400).json({ Mesage: 'User ID is not a number' })
        }
    } catch (error) {
        console.log(error)
    }
    };


