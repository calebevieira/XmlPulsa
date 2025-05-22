const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const validator = require('./validator');

const app = express();
const upload = multer({ dest: path.join(__dirname, '..', 'uploads') });
app.use(cors());

app.post('/validate', upload.array('xml'), async (req, res) => {
  if (!req.files) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado' });
  }
  const xsdPath = path.join(__dirname, '..', 'xsd', 'tissV3_05_00.xsd');
  const results = await Promise.all(
    req.files.map(async (file) => {
      const xmlContent = fs.readFileSync(file.path, 'utf8');
      const { isValid, errors } = validator.validateXML(xmlContent, xsdPath);
      fs.unlinkSync(file.path);
      return { file: file.originalname, isValid, errors };
    })
  );
  res.json({ results });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
