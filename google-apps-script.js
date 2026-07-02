function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.dataEnvio || new Date(),
    data.nome || "",
    data.nascimento || "",
    data.whatsapp || "",
    data.email || "",
    data.estadoCivil || "",
    data.igreja || "",
    data.expectativa || "",
    data.oracao || "",
    data.compromisso || "",
    data.imagem || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
