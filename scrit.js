const dias = document.querySelectorAll('.calendario td');
let aulas = {
  port: 91,
  mat: 93,
  soc: 13,
  qui: 39,
  fis: 41,
  geo: 26,
  his: 26,
  fil: 13,
  tea: 13,
  mus: 13,
  ef: 13,
  ing: 26,
  bio: 26
}
let freq = {
  port: 100,
  mat: 100,
}
console.log(freq.port)
dias.forEach(dia => {
  dia.addEventListener('click', () => {
    dia.style.backgroundColor = 'red';
    let valorDia = dia.dataset.dia;
    if(valorDia === 'seg'){
        aulas.port = aulas.port -2;
        console.log(aulas.port);
        freq.port = (aulas.port * 100 / 32)
        console.log(freq.port);
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