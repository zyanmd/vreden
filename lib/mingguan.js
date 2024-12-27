const fs = require('fs')
const toMs = require('ms')

/**
 * Add premium user.
 * @param {String} userId 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addMingguanUser = (userId, expired) => {
    let _dir = JSON.parse(fs.readFileSync('./database/mingguan.json'));
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
    fs.writeFileSync('./database/mingguan.json', JSON.stringify(_dir, null, 2))
}

/**
 * Get premium user position.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getMingguanPosition = (userId) => {
    let _dir = JSON.parse(fs.readFileSync('./database/mingguan.json'));
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
const getMingguanExpired = (userId) => {
    let _dir = JSON.parse(fs.readFileSync('./database/mingguan.json'));
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
const checkMingguanUser = (userId) => {
    let _dir = JSON.parse(fs.readFileSync('./database/mingguan.json'));
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
const expiredMingguanCheck = (vreden) => {
    setInterval(() => {
    let _dir = JSON.parse(fs.readFileSync('./database/mingguan.json'));
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Mingguan expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./database/mingguan.json', JSON.stringify(_dir, null, 2))
        }
    }, 1000)
}

/**
 * Get all premium user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllMingguanUser = () => {
    let _dir = JSON.parse(fs.readFileSync('./database/mingguan.json'));
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

module.exports = {
    addMingguanUser,
    getMingguanExpired,
    getMingguanPosition,
    expiredMingguanCheck,
    checkMingguanUser,
    getAllMingguanUser
}
