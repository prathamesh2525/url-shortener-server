const shortid = require("shortid")
const URL = require("../models/url")

const generateShortURL = async (req, res) => {
  const body = req.body
  if (!body.url) return res.status(404).json({ message: "url is required" })
  const shortId = shortid()
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  })

  res.json({ id: shortId })
}

const getAnalytics = async (req, res) => {
  const shortId = req.params.shortId
  const result = await URL.findOne({ shortId })
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  })
}

module.exports = { generateShortURL, getAnalytics }
