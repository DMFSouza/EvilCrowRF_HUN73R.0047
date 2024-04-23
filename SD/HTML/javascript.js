

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
    var navToggle = document.getElementById('nav-toggle');
    var navBar = document.getElementById('nav-bar');

    function updateMenu() {
      if (window.innerWidth <= 768) { // Defina o ponto de ruptura como 768 pixels
        navToggle.checked = true; // Marque o toggle em dispositivos com largura menor ou igual a 768 pixels
        navBar.checked = true; // Marque o navbar em dispositivos com largura menor ou igual a 768 pixels
      } else {
        navToggle.checked = false; // Desmarque o toggle em dispositivos com largura maior que 768 pixels
        navBar.checked = false; // Desmarque o navbar em dispositivos com largura maior que 768 pixels
      }

      // Atualize também o estilo do menu
      if (navBar.checked == true) {
        navToggle.style.borderBottomRightRadius = '0';
        navToggle.style.borderBottomLeftRadius = '0';
      } else {
        navToggle.style.borderRadius = '25px';
      }
    }

    // Chame a função updateMenu quando a página carregar e sempre que a janela for redimensionada
    window.addEventListener('resize', updateMenu);
    updateMenu(); // Chame a função updateMenu() uma vez para garantir que o menu seja configurado corretamente no carregamento da página

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
