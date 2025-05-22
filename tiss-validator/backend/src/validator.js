const fs = require('fs');
const libxmljs = require('libxmljs2');

function validateXML(xmlString, xsdPath) {
  const xsdString = fs.readFileSync(xsdPath, 'utf8');
  const xmlDoc = libxmljs.parseXml(xmlString);
  const xsdDoc = libxmljs.parseXml(xsdString);
  const isValid = xmlDoc.validate(xsdDoc);
  const errors = xmlDoc.validationErrors.map((err) => err.message.trim());
  return { isValid, errors };
}

module.exports = { validateXML };
