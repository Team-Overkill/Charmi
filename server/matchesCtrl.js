exports.getAllMatches = (req, res, next) => {
  req.app.get('db').getAllMatches().then(function (matches) {
    res.status(200).send(matches);
  }).catch(err => console.log(err))
}