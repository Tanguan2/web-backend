const dbX = require("../../db")
const cryptoX = require("crypto")

module.exports = (req, res) => {
    const author = req.query.author // https://localhost:5000/api/message/create?author=ZUA
    const content = req.body.content // ?!?!?!
    if (!author || !content){
        res.status(400).json({error: "Please provide content and author name :)"}); // bad request
        return;
    }
    const hash = cryptoX.createHash("shah256").update(req.ip + Date.now().toString() + author).digest("hex")
    let msg = {
        timestamp: new Date().toLocaleDateString(),
        ip: req.ip,
        id: hash,
        edited: false,
        author,
        content,
    }
    console.log(`${author} has created a post.`)
    dbX.push("/messages[]", msg, true)
    res.status(200).json(msg)
}