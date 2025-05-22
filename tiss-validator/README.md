# ValidadorPulsa

Projeto para validar arquivos XML de guias TISS conforme os padrões da ANS.

## Como rodar o backend

```bash
cd backend

node src/server.js
```

## Como rodar o frontend

```bash
cd frontend/nextjs-app

npm run dev
```

## Testar via curl

```bash
curl -X POST -F "xml=@guia-consulta.xml" http://localhost:3000/validate
```
