const fs = require('fs')
const toMs = require('ms')

/**
 * Add premium user.
 * @param {String} userId 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addBulananUser = (userId, expired) => {
    let _dir = JSON.parse(fs.readFileSync('./database/bulanan.json'));
    if (expired === undefined) {
        expired = 'PERMANENT'
    } else {
        expired = expired
    }
    
    let expired_at = 'PERMANENT'
    
    if (expired === 'PERMANENT') {
        expired_at = 'PERMANENT'
    } else {
        expired_at = Date.now() + toMs(expired)
    }

    const obj = { id: userId, expired: expired_at }
    _dir.push(obj)
    fs.writeFileSync('./database/bulanan.json', JSON.stringify(_dir, null, 2))
}

/**
 * Get premium user position.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getBulananPosition = (userId) => {
    let _dir = JSON.parse(fs.readFileSync('./database/bulanan.json'));
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get premium user expire.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getBulananExpired = (userId) => {
    let _dir = JSON.parse(fs.readFileSync('./database/bulanan.json'));
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check user is premium.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkBulananUser = (userId) => {
    let _dir = JSON.parse(fs.readFileSync('./database/bulanan.json'));
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking premium.
 * @param {Object} _dir 
 */
const expiredBulananCheck = (vreden) => {
    setInterval(() => {
    let _dir = JSON.parse(fs.readFileSync('./database/bulanan.json'));
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Bulanan expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./database/bulanan.json', JSON.stringify(_dir, null, 2))
        }
    }, 1000)
}

/**
 * Get all premium user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllBulananUser = () => {
    let _dir = JSON.parse(fs.readFileSync('./database/bulanan.json'));
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

module.exports = {
    addBulananUser,
    getBulananExpired,
    getBulananPosition,
    expiredBulananCheck,
    checkBulananUser,
    getAllBulananUser
}
