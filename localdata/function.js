const fs=require("fs")

function data() {
    let i = fs.readFileSync("./localdata/data.txt", "utf-8")
    i = parseInt(i)+1
    if(isNaN(i)) i=1
    fs.writeFileSync("./localdata/data.txt", i.toString())
}

module.exports = data