const fs = require('fs')
const axios = require('axios')
const process = require('process')
arr = []
let args = process.argv.slice(2);

function removeHttp(url) {
    return url.replace(/^https?:\/\//, '');
}

fs.readFile(args[0], 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    else {
        async function x() {
            for (l of data.toString().trim().split("\n")) {

                try {
                    let url = await axios.get(l)
                    let link = removeHttp(l)
                    fs.writeFile(`${link.split('/')[0]}.txt`, url.data, 'utf8', err => {
                        if (err) {
                            console.log('ERRORRRRRR', err)
                        }
                    })
                    console.log(`Wrote to ${link}`)
                }
                catch (e) {
                    console.log(`Couldn't download${l}`)

                }
            }
        }
        x()
    }
}
)



