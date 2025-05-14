const dias = document.querySelectorAll('.calendario td');
let aulas = {
    port: 32,
    mat: 30
}
let freq = {
    fpt: (aulas.port * 100) / 32,
}
console.log(freq.fpt)
dias.forEach(dia => {
  dia.addEventListener('click', () => {
    dia.style.backgroundColor = 'red';
    let valorDia = dia.dataset.dia;
    if(valorDia === 'seg'){
        aulas.port = aulas.port -2;
        console.log(aulas.port);
        console.log(freq.fpt);
    }else if(valorDia === 'ter'){
        
    }else if(valorDia === 'qua'){
        
    }else if(valorDia === 'qui'){
        
    }else if(valorDia === 'sex'){
        
    }
        
    
  
  });

//   const diaSemana = td.dataset.dia;
//   if(diaSemana === 'seg'){
//     alert()
//   }

});