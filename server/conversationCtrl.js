exports.getConversations = (req, res, next) => {
  req.app.get('db').getConversations().then(function (conversations) {
    res.status(200).send(conversations);
  }).catch(err => console.log(err))
}