
const jwt = require('jsonwebtoken');
const SECRET = 'segredo';

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ erro: 'Sem token' });

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), SECRET);
        req.userId = decoded.id;
        next();
    } catch {
        return res.status(401).json({ erro: 'Token inválido' });
    }
};
