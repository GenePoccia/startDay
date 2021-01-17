const path = require('path')
const {execSync} = require('child_process')

const open = () => {
    let website = 'facebook.com'

    let  scriptLocation = './chrome.sh'
    let script = path.resolve(__dirname, scriptLocation)
    let cmd = `${script} ${website}`
    try {
    execSync(cmd)
    } catch(e) {
        console.log(e)
    }
}

module.exports = {
    open
}