const pdb = require('../helpers/projectModel');

module.exports =
    async function validateBody(req, res, next) {
        try {
            if (Object.keys(req.body) != 0) {
                if (req.body.name && req.body.description) {
                    next()
                }
                else {
                    res.status(400).json({Error: 'You need both Name: and description: in post'})
                }
            }
            else {
                res.status(404).json({Error: 'Nothing in post request body'})
            }

        } catch (error) {
            console.log(error)
        }
    };
