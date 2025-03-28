// ===== index.js (versão enxuta, somente imagens) =====
const inicializarCliente = require('./services/whatsappClient');
const baixarFotosDoGrupo = require('./services/baixarFotos');
const registrarLog = require('./services/logger');

inicializarCliente(async (client) => {
    try {
        registrarLog('🟡 Execução manual iniciada (somente imagens).');

        registrarLog('🔍 Baixando mídias do grupo...');
        await baixarFotosDoGrupo(client);
        registrarLog('✅ Imagens salvas com sucesso.');

        registrarLog('🏁 Execução manual concluída!');
    } catch (erro) {
        registrarLog(`❌ Erro inesperado: ${erro.message}`);
    }
});
