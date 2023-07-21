const URL = require("../models/url")

const redirectToMainURL = async (req, res) => {
  const shortId = req.params.shortId
  const data = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  )
  res.redirect(data.redirectUrl)
}

module.exports = { redirectToMainURL }
