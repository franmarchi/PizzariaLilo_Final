module.exports = (err, req, res, next) => {
  console.error(err);

  return res.status(500).json({
    erro: 'Erro interno no servidor'
  });
};