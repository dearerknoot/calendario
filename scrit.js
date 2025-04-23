const dias = document.querySelectorAll('.calendario td');

dias.forEach(dia => {
  dia.addEventListener('click', () => {
    dia.style.backgroundColor = 'red';
    let valorDia = dia.dataset.dia;
    if(valorDia === 'seg'){
        alert('segunda')
    }else if(valorDia === 'ter'){
        alert('terça')
    }else if(valorDia === 'qua'){
        alert('quarta')
    }else if(valorDia === 'qui'){
        alert('quinta')
    }else if(valorDia === 'sex'){
        alert('sexta')
    }
        
    
  
  });

//   const diaSemana = td.dataset.dia;
//   if(diaSemana === 'seg'){
//     alert()
//   }

});