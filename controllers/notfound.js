const notFoundController = (req, res, next) => {
  res.status(404).render("404", {pageTitle: 'Not Foundd'});
}

module.exports = notFoundController;