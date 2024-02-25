const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

    // verify authentication
    const { authorization } = req.headers

    if (!authorization) {
        return req.status(401).json({ error: 'Authorization token required' })
    }
    const token = authorization.split(' ')[1]

    try {
        // to get id from the jwt.verify(token, process.env.SECRET)
        const { _id } = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (error) {
        console.log(error)
        req.status(401).json({ error: 'Request is not authorized' })
    }
}

module.exports = requireAuth