const dias = document.querySelectorAll('.calendario td');
let aulas = {
  port: 91,
  mat: 89,
  soc: 13,
  qui: 39,
  fis: 37,
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
  soc: 100,
  qui: 100,
  fis: 100,
  geo: 100,
  his: 100,
  fil: 100,
  tea: 100,
  mus: 100,
  ef: 100,
  ing: 100,
  bio: 100
}
console.log(freq.mat)
console.log(aulas.mat)
dias.forEach(dia => {
  dia.addEventListener('click', () => {
    dia.style.backgroundColor = 'red';
    let valorDia = dia.dataset.dia;
    if (valorDia === 'seg') {
      aulas.port -= 2;
      aulas.mat -= 2;
      aulas.soc -= 1;
      aulas.qui -= 2;
      aulas.fis -= 1;
      aulas.his -= 2;
      freq.port = (aulas.port * 100 / 91);
      freq.mat = (aulas.mat * 100 / 89);
      freq.soc = (aulas.soc * 100 / 13);
      freq.qui = (aulas.qui * 100 / 39);
      freq.fis = (aulas.fis * 100 / 37);
      freq.his = (aulas.his * 100 / 26);
      console.log(`freq: ${freq.mat}`)
      console.log(`aulas: ${aulas.mat}`)
    } else if (valorDia === 'ter') {
      aulas.ef -= 1;
      aulas.mus -= 1;
      aulas.port -= 3;
      aulas.geo -= 2;
      aulas.tea -= 1;
      aulas.mat -= 2;
      freq.ef = (aulas.ef * 100 /13);
      freq.mus = (aulas.mus * 100 /13);
      freq.port = (aulas.port * 100/91);
      freq.geo = (aulas.geo * 100/26);
      freq.tea = (aulas.tea *100/13);
      freq.mat = (aulas.mat *100/89);
      console.log(`freq: ${freq.mat}`)
      console.log(`aulas: ${aulas.mat}`)
    } else if (valorDia === 'qua') {
      aulas.ing -= 2;
      aulas.port -= 1;
      aulas.qui -= 1;
      freq.ing = (aulas.ing *100/26);
      freq.port = (aulas.port *100/91);
      freq.qui = (aulas.qui *100/39);
    } else if (valorDia === 'qui') {
      aulas.mat -= 2;
      aulas.fis -= 2;
      freq.mat = (aulas.mat *100/89);
      freq.fis = (aulas.fis *100/37);
      console.log(`freq: ${freq.mat}`)
      console.log(`aulas: ${aulas.mat}`)
    } else if (valorDia === 'sex') {
      aulas.mat -= 1;
      aulas.bio -= 2;
      aulas.port -= 1;
      aulas.fil -= 1;
      freq.mat = (aulas.mat *100/89);
      freq.bio = (aulas.bio *100/26);
      freq.port = (aulas.port *100/91);
      freq.fil = (aulas.fil *100/13);
      console.log(`freq: ${freq.mat}`)
      console.log(`aulas: ${aulas.mat}`)
    }else if(valorDia === 'sab' || valorDia === 'dom'){
      if(valorDia === 'sab'){
        alert('nao tem aula sabado mongol :)')
      }else{
        alert('nao tem aula domingo mongol :)')
      }
    }else if(valorDia === 'fer'){
      alert('feriado');
    }

  });

  //   const diaSemana = td.dataset.dia;
  //   if(diaSemana === 'seg'){
  //     alert()
  //   }

});