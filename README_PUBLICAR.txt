COMO PUBLICAR NO GITHUB PAGES

1. Crie um repositório no GitHub chamado: discipulado-homens
2. Envie estes arquivos:
   - index.html
   - style.css
   - script.js
3. No GitHub, vá em Settings > Pages.
4. Em Branch, escolha main / root.
5. Salve.

O link ficará assim:
https://SEU-USUARIO.github.io/discipulado-homens/

COMO CONECTAR COM GOOGLE SHEETS

1. Crie uma planilha.
2. Coloque os cabeçalhos:
Data, Nome, Nascimento, WhatsApp, Email, Estado Civil, Igreja, Expectativa, Oração, Compromisso, Imagem
3. Vá em Extensões > Apps Script.
4. Cole o conteúdo de google-apps-script.js.
5. Clique em Implantar > Nova implantação.
6. Tipo: App da Web.
7. Executar como: Você.
8. Quem tem acesso: Qualquer pessoa.
9. Copie a URL.
10. Cole a URL no arquivo script.js na linha:
const GOOGLE_SCRIPT_URL = "";
