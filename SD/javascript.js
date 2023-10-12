

function AutoRefresh(t) {
  setTimeout("window.location.reload(1);", t);
  }

function AutoRedirect() {
  window.setTimeout(function () {
        window.location.href = "/";
    }, 5000)
  }

 

window.addEventListener('load', function () {
  var output = document.getElementById("XmlTextArea");

  // Especifique o caminho correto para a rota /listxmlfiles em seu servidor
  fetch('/listxmlfiles')
      .then(response => response.text())
      .then(fileList => {
          output.textContent = fileList; // Defina o conteúdo do elemento textarea com a lista de nomes de arquivo
      })
      .catch(error => {
          console.error('Erro ao carregar a lista de arquivos XML:', error);
      });
});
function updatemenu() {
  if (document.getElementById('nav-bar').checked == true) {
    document.getElementById('nav-toggle').style.borderBottomRightRadius = '0';
    document.getElementById('nav-toggle').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('nav-toggle').style.borderRadius = '25px';
  } 
} 
