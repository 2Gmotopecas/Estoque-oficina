let lista = JSON.parse(localStorage.getItem('estoque')) || [];

function renderizar() {
  const div = document.getElementById('estoque');
  div.innerHTML = '';
  lista.forEach((item, i) => {
    div.innerHTML += `
      <div class="item">
        <strong>${item.nome}</strong><br>
        Código: ${item.codigo}<br>
        Quantidade: ${item.quantidade}
      </div>`;
  });
}

function adicionarItem() {
  const nome = document.getElementById('nome').value;
  const codigo = document.getElementById('codigo').value;
  const quantidade = parseInt(document.getElementById('quantidade').value);

  if (nome && codigo && quantidade > 0) {
    lista.push({ nome, codigo, quantidade });
    localStorage.setItem('estoque', JSON.stringify(lista));
    renderizar();
    document.getElementById('nome').value = '';
    document.getElementById('codigo').value = '';
    document.getElementById('quantidade').value = '';
  } else {
    alert("Preencha todos os campos corretamente!");
  }
}

renderizar();
