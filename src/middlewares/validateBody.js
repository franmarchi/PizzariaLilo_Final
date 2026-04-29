module.exports = (requiredFields = []) => {
  return (req, res, next) => {

    // body inexistente
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        erro: 'Corpo da requisição é obrigatório'
      });
    }

    // campos obrigatórios
    for (let field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          erro: `Campo obrigatório: ${field}`
        });
      }
    }

    next();
  };
};