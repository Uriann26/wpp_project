require('dotenv').config();

module.exports = {
    nomeDoGrupo: process.env.NOME_DO_GRUPO,
    emailDestino: process.env.EMAIL_DESTINO,
    emailRemetente: {
        user: process.env.EMAIL_REMETENTE,
        pass: process.env.EMAIL_SENHA,
    },
};
