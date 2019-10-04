var campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor'),
  /*Cada campo será o resultado de um document.querySelector(),
  uma API do DOM que nos permite buscar um elemento usando um seletor CSS ou id do elemento.*/
  ];

  console.log(campos);

  var tbody = document.querySelector('table tbody');

  document.querySelector('.form').addEventListener('submit',function(event){
    /*submetendo input do array e criando uma tr com os valores*/
    event.preventDefault();/*não submeter o formulário e evitar que a página seja recarregada*/

    var tr = document.createElement('tr');

    campos.forEach(function(campo)  /*iterar array sem usar o loop for*/{
      var td = document.createElement('td');
      td.textContent = campo.value;
      tr.appendChild(td);
    });

      var tdVolume = document.createElement('td');
      tdVolume.textContent = campos[1].value * campos[2].value;

      tr.appendChild(tdVolume);
    /* incluindo a tr no arquivo index.html como filha da tag <tbody> */
      tbody.appendChild(tr);

      campos[0].value = '';
      campos[1].value = 1;
      campos[2].value = 0;

      campos[0].focus();/*melhorar a experiência do usuário, campo "Data" ganhe foco*/

  });
