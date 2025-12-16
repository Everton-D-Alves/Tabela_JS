"use strict";
// Pegando a tag <body></body> com tudo o que têm dentro dele no HTML:
const corpo = document.body;
// Criando a tag 'tabela':
const tabela = document.createElement("table");
// Mostrando a tag na página web:
corpo.appendChild(tabela);
// Criando a tag 'thead':
const tabelaTitulo = document.createElement("thead");
// Colocando a tag 'thead' dentro da tag 'table':
tabela.appendChild(tabelaTitulo);
// Criando a tag 'tbody':
const tabelaCorpo = document.createElement("tbody");
// Colocando a tag 'tbody' dentro da tag 'table':
tabela.appendChild(tabelaCorpo);
// Criando a tag 'tfoot':
const tabelaFinal = document.createElement("tfoot");
// Colocando a tag 'tfoot' dentro da tag 'table':
tabela.appendChild(tabelaFinal);
// Criando a tag 'tr' para a tag 'thead':
const tabelaLinhaInicio = document.createElement("tr");
// Colocando a tag 'tr' dentro da tag 'thead':
tabelaTitulo.appendChild(tabelaLinhaInicio);
// Criando as tags 'th's para a tag 'tr' (da tag 'thead'):
const tituloGeral1_1 = document.createElement("th");
const tituloGeral1_2 = document.createElement("th");
const tituloGeral1_3 = document.createElement("th");
// Colocando as tags 'th's dentro da tag 'tr' (da tag 'thead'):
tabelaLinhaInicio.appendChild(tituloGeral1_1);
tabelaLinhaInicio.appendChild(tituloGeral1_2);
tabelaLinhaInicio.appendChild(tituloGeral1_3);
// Escrevendo em cada 'th':
tituloGeral1_1.innerText = "Nome";
tituloGeral1_2.innerText = "Quantidade";
tituloGeral1_3.innerText = "Estoque";
// Criando as tags 'tr's para a tag 'tbody':
const tabelaLinhaCorpo1 = document.createElement("tr");
const tabelaLinhaCorpo2 = document.createElement("tr");
const tabelaLinhaCorpo3 = document.createElement("tr");
const tabelaLinhaCorpo4 = document.createElement("tr");
// Colocando as tags 'tr's na tag 'tbody':
tabelaCorpo.appendChild(tabelaLinhaCorpo1);
tabelaCorpo.appendChild(tabelaLinhaCorpo2);
tabelaCorpo.appendChild(tabelaLinhaCorpo3);
tabelaCorpo.appendChild(tabelaLinhaCorpo4);
// Criando as tags 'td's para as tags 'tr's (da tag 'tbody'):
const tituloGeral2_1 = document.createElement("td");
const tituloGeral2_2 = document.createElement("td");
const tituloGeral2_3 = document.createElement("td");
const tituloGeral2_4 = document.createElement("td");
const tituloGeral2_5 = document.createElement("td");
const tituloGeral2_6 = document.createElement("td");
const tituloGeral2_7 = document.createElement("td");
const tituloGeral2_8 = document.createElement("td");
const tituloGeral2_9 = document.createElement("td");
const tituloGeral2_10 = document.createElement("td");
const tituloGeral2_11 = document.createElement("td");
const tituloGeral2_12 = document.createElement("td");
// Colocando as tags 'td's dentro das tags 'tr's (da tag 'tbody'):
/* 1ª fruta: */
tabelaLinhaCorpo1.appendChild(tituloGeral2_1);
tabelaLinhaCorpo1.appendChild(tituloGeral2_2);
tabelaLinhaCorpo1.appendChild(tituloGeral2_3);
/* 2ª fruta: */
tabelaLinhaCorpo2.appendChild(tituloGeral2_4);
tabelaLinhaCorpo2.appendChild(tituloGeral2_5);
tabelaLinhaCorpo2.appendChild(tituloGeral2_6);
/* 3ª fruta: */
tabelaLinhaCorpo3.appendChild(tituloGeral2_7);
tabelaLinhaCorpo3.appendChild(tituloGeral2_8);
tabelaLinhaCorpo3.appendChild(tituloGeral2_9);
/* 4ª fruta: */
tabelaLinhaCorpo4.appendChild(tituloGeral2_10);
tabelaLinhaCorpo4.appendChild(tituloGeral2_11);
tabelaLinhaCorpo4.appendChild(tituloGeral2_12);
// Escrevendo dentro de cada tag 'td' da tag 'tr' (da tag 'tbody'):
/* 1ª fruta: */
tituloGeral2_1.innerText = "Melancia";
tituloGeral2_2.innerText = 30;
tituloGeral2_3.innerText = 20;
/* 2ª fruta: */
tituloGeral2_4.innerText = "Jaca";
tituloGeral2_5.innerText = 15;
tituloGeral2_6.innerText = 30;
/* 3ª fruta: */
tituloGeral2_7.innerText = "Côco";
tituloGeral2_8.innerText = 30;
tituloGeral2_9.innerText = 45;
/* 4ª fruta: */
tituloGeral2_10.innerText = "Côco Verde";
tituloGeral2_11.innerText = 20;
tituloGeral2_12.innerText = 70;
// Criando a tag 'tr' para a tag 'tfoot':
const tabelaLinhaFinal = document.createElement("tr");
// Colocando a tag 'tr' dentro da tag 'tfoot':
tabelaFinal.appendChild(tabelaLinhaFinal);
// Criando a tag 'td' para a tag 'tr' (da tag 'tfoot'):
const tituloGeralFinal = document.createElement("td");
// Colocando a tag 'td' dentro da tag 'tr' (da tag 'tfoot'):
tabelaLinhaFinal.appendChild(tituloGeralFinal);
// Escrevendo dentro da tag 'td' da tag 'tr' (da tag 'tfoot'):
tituloGeralFinal.innerText = "Todos os direitos reservados!";
tituloGeralFinal.colSpan = 3;
tituloGeralFinal.style.textAlign = "center";
// Colocando cores na tabela:
tabela.style.color = "white";
tabelaTitulo.style.backgroundColor = "blue";
tabelaFinal.style.backgroundColor = "yellow";
tabelaFinal.style.backgroundImage = "linear-gradient(to right, green, transparent)";
if(tabelaLinhaCorpo1 % 2 == 0){
    tabelaLinhaCorpo1.style.backgroundColor = "gray";
}else{
    tabelaLinhaCorpo1.style.backgroundColor = "silver";
}
if(tabelaLinhaCorpo2 % 2 != 0){
    tabelaLinhaCorpo2.style.backgroundColor = "gray";
}else{
    tabelaLinhaCorpo2.style.backgroundColor = "silver";
}
if(tabelaLinhaCorpo3 % 2 == 0){
    tabelaLinhaCorpo3.style.backgroundColor = "gray";
}else{
    tabelaLinhaCorpo3.style.backgroundColor = "silver";
}
if(tabelaLinhaCorpo4 % 2 != 0){
    tabelaLinhaCorpo4.style.backgroundColor = "gray";
}else{
    tabelaLinhaCorpo4.style.backgroundColor = "silver";
}