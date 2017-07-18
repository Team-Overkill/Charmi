exports.getProfile = (req, res, next) => {
  req.app.get('db').getProfile().then(function (profile) {
    res.status(200).send(profile);
  }).catch(err => console.log(err))
}