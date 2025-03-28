# wpp_project
Download automático de imagens de grupo do wpp
# 🤖 Bot de WhatsApp para Vistorias

Este projeto automatiza o processo de coleta de fotos enviadas em um grupo do WhatsApp. Ele organiza as imagens por autor e data e armazena localmente para uso em relatórios.

---

## 🚀 Funcionalidades Atuais

- Conexão automática com o WhatsApp via sessão salva
- Download de todas as imagens enviadas no grupo no dia atual
- Organização das imagens por autor e data
- Escrita assíncrona otimizada para melhor desempenho
- Estrutura modular e de fácil manutenção

---

## 🛠️ Como usar

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar o `.env`

Crie um arquivo `.env` baseado no `.env.example` com os dados:

```env
NOME_DO_GRUPO=Nome exato do grupo do WhatsApp
WPP_SESSAO_TEMPORARIA=false
```

> ⚠️ Certifique-se de que o nome do grupo está igual ao WhatsApp.

### 3. Rodar o bot

```bash
npm start
```

---

## 🧪 Modo QR Code

Se quiser usar modo temporário (QR toda vez):

```env
WPP_SESSAO_TEMPORARIA=true
```

---

## 📂 Estrutura de pastas geradas

```
imagens/
├── 2025-03-28/
│   ├── João/
│   │   ├── 2025-03-28_abc123.jpg
│   ├── Maria/
│   │   ├── 2025-03-28_def456.jpg
```

---

## 📝 Histórico de commits

- `v1.0` - Estrutura básica e funcional finalizada
- `v1.1` - Otimização com escrita assíncrona e downloads em paralelo
- `v1.2` - Login automático reativado

---

## 👨‍💻 Desenvolvedor

Projeto criado e mantido por [Seu Nome].  
Contatos e melhorias futuras são bem-vindas!

---

## 📜 Licença

Este projeto é de uso pessoal e não comercial.
