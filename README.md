# 📦 Projeto: Bot de WhatsApp - Vistorias Automáticas

Este bot automatiza a coleta de fotos e mensagens enviadas em um grupo do WhatsApp, separando por autor e data, salvando tudo localmente e enviando por e-mail às 08:00 todos os dias.

---

## ⚙️ Funcionalidades

- Conecta ao WhatsApp via WhatsApp Web
- Baixa fotos do grupo especificado
- Agrupa por autor e data
- Salva mensagens de texto associadas
- Envia tudo por e-mail automaticamente
- Gera logs da execução
- Utiliza Docker + Docker Compose para execução isolada

---

## 📁 Estrutura do Projeto

```
wpp_project/
├── index.js
├── config.js
├── .env.example
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── .vscode/settings.json
├── services/
│   ├── baixarFotos.js
│   ├── enviarEmail.js
│   ├── logger.js
│   └── whatsappClient.js
```

---

## 🚀 Como executar (via Docker)

### 1. Crie um arquivo `.env` baseado no `.env.example`

```env
EMAIL_REMETENTE=seuemail@gmail.com
EMAIL_SENHA=sua_senha_de_app
EMAIL_DESTINO=leogbpa@gmail.com
NOME_DO_GRUPO=Grupo das Vistorias
```

> 🛡️ Use uma **senha de app** do Gmail: https://myaccount.google.com/apppasswords

---

### 2. Construa a imagem Docker

```bash
docker-compose build
```

### 3. Execute o projeto

```bash
docker-compose up
```

> A primeira vez vai pedir o QR Code do WhatsApp.

---

### 4. Parar a execução

```bash
docker-compose down
```

---

## ✅ Scripts úteis com npm

```bash
npm install           # Instala dependências
npm start             # Executa o bot localmente
npm run lint          # Verifica estilo de código
npm run lint:fix      # Corrige automaticamente
npm run format        # Formata com Prettier
```

---

## 🧪 Testar manualmente (sem esperar 08h)

Altere o `index.js` para rodar diretamente sem agendamento com cron:

```js
inicializarCliente(async (client) => {
    const ontem = new Date();
    ontem.setDate(ontem.getDate() - 1);
    const dataOntem = ontem.toISOString().split('T')[0];

    const mensagensPorAutor = await baixarFotosDoGrupo(client);
    await enviarRelatorioPorEmail(dataOntem, mensagensPorAutor);
});
```

---

## 👤 Autor

Projeto desenvolvido por [Seu Nome].  
Para dúvidas ou suporte, entre em contato.
