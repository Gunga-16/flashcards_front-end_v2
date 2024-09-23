document.getElementById('btnAvancar').addEventListener('click', function() {
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'block';
});

document.getElementById('btnVirar').addEventListener('click', function() {
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'block';
});

// Para adicionar os dados nos campos:
document.getElementById('categoria').innerText = "Categoria Exemplo";
document.getElementById('subcategoria').innerText = "Subcategoria Exemplo";
document.getElementById('pergunta').innerText = "Exemplo de Pergunta";
document.getElementById('categoria2').innerText = "Categoria Exemplo";
document.getElementById('subcategoria2').innerText = "Subcategoria Exemplo";
document.getElementById('resposta').innerText = "Exemplo de Resposta";
