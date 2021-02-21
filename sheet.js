
const {GoogleSpreadsheet} = require('google-spreadsheet');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const express = require('express')
const app = express()

app.use(express.urlencoded({
  extended: true
}));
app.post('/submit-form', (req, res) => {
  const username = req.body.username
  console.log(username);
  res.end()
})

const doc = new GoogleSpreadsheet('1CIsHssVTyPFq6uZBK7ChJHDxxSMhG3qkPacP4xr05yQ');
const creds = require('./client_secret.json');

async function getData() {
  
  const options = {
    contentType: 'text/html',
  };
  let strs = [];
  
  
  JSDOM.fromFile("./login.html").then(dom => {
    dom.window.document.querySelectorAll('button').addEventListener("click", function(){
      dom.window.document.querySelectorAll('#user').forEach(str => {
        strs.push(str.textContent)
    })

    })
    console.log(strs);
  });
  
  await doc.useServiceAccountAuth(creds);

  await doc.loadInfo();

  
  const sheet = doc.sheetsByIndex[1];
  /* const larryRow = await sheet.addRow({ Name: 'Manea', Number: 'Robert' }); */


}
getData();




