const fs = require('fs')
const toMs = require('ms')

/**
 * Add premium user.
 * @param {String} userId 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addPremiumUser = (userId, expired) => {
    let _dir = JSON.parse(fs.readFileSync('./database/premium.json'));
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
    fs.writeFileSync('./database/premium.json', JSON.stringify(_dir, null, 2))
}

/**
 * Get premium user position.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getPremiumPosition = (userId) => {
    let _dir = JSON.parse(fs.readFileSync('./database/premium.json'));
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
const getPremiumExpired = (userId) => {
    let _dir = JSON.parse(fs.readFileSync('./database/premium.json'));
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
const checkPremiumUser = (userId) => {
    let _dir = JSON.parse(fs.readFileSync('./database/premium.json'));
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
const expiredCheck = (vreden) => {
    setInterval(() => {
    let _dir = JSON.parse(fs.readFileSync('./database/premium.json'));
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
        let teks = `*</> VIP EXPIRED </>*

*Makaseh udah beli*

*Benefit Regular* :
- Download : 30MB
- Limit : 100
- Request : 1/5s
- VIP Access : No
- User Priority : No
`
            		const contentText = {
            			text: teks,
            			contextInfo: {
            				mentionedJid: vreden.ments(teks),
            				externalAdReply: {
        					title: `VIP EXPIRED 💳`,
        					previewType: "PHOTO",
        					thumbnailUrl: `https://pomf2.lain.la/f/lswq2r83.jpg`,
        					sourceUrl: "-"
            				}
            			}
            		};
            		vreden.sendMessage(_dir[position].id, contentText)
            console.log(`Premium expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./database/premium.json', JSON.stringify(_dir, null, 2))
        }
    }, 1000)
}

/**
 * Get all premium user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllPremiumUser = () => {
    let _dir = JSON.parse(fs.readFileSync('./database/premium.json'));
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

module.exports = {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser
}
