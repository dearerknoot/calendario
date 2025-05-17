const dias = document.querySelectorAll('.calendario td');

const portFreq = document.getElementById('portFreq');
const portFaltas = document.getElementById('portFaltas');
const portRest = document.getElementById('portRest');

const matFreq = document.getElementById('matFreq');
const matFaltas = document.getElementById('matFaltas');
const matRest = document.getElementById('matRest');

const socFreq = document.getElementById('socFreq');
const socFaltas = document.getElementById('socFaltas');
const socRest = document.getElementById('socRest');

const quiFreq = document.getElementById('quiFreq');
const quiFaltas = document.getElementById('quiFaltas');
const quiRest = document.getElementById('quiRest');

const fisFreq = document.getElementById('fisFreq');
const fisFaltas = document.getElementById('fisFaltas');
const fisRest = document.getElementById('fisRest');

const geoFreq = document.getElementById('geoFreq');
const geoFaltas = document.getElementById('geoFaltas');
const geoRest = document.getElementById('geoRest');

const hisFreq = document.getElementById('hisFreq');
const hisFaltas = document.getElementById('hisFaltas');
const hisRest = document.getElementById('hisRest');

const filFreq = document.getElementById('filFreq');
const filFaltas = document.getElementById('filFaltas');
const filRest = document.getElementById('filRest');

const teaFreq = document.getElementById('teaFreq');
const teaFaltas = document.getElementById('teaFaltas');
const teaRest = document.getElementById('teaRest');

const musFreq = document.getElementById('musFreq');
const musFaltas = document.getElementById('musFaltas');
const musRest = document.getElementById('musRest');

const efFreq = document.getElementById('efFreq');
const efFaltas = document.getElementById('efFaltas');
const efRest = document.getElementById('efRest');

const ingFreq = document.getElementById('ingFreq');
const ingFaltas = document.getElementById('ingFaltas');
const ingRest = document.getElementById('ingRest');

const bioFreq = document.getElementById('bioFreq');
const bioFaltas = document.getElementById('bioFaltas');
const bioRest = document.getElementById('bioRest');
const ft = document.getElementById('ft');

let faltasTotal = 0
let nfaltasPort = 0
let nfaltasMat = 0;
let nfaltasSoc = 0;
let nfaltasQui = 0;
let nfaltasFis = 0;
let nfaltasGeo = 0;
let nfaltasHis = 0;
let nfaltasFil = 0;
let nfaltasTea = 0;
let nfaltasMus = 0;
let nfaltasEf = 0;
let nfaltasIng = 0;
let nfaltasBio = 0;

let rfaltasPort = 22;
let rfaltasMat = 22;
let rfaltasSoc = 3;
let rfaltasQui = 9;
let rfaltasFis = 9;
let rfaltasGeo = 6;
let rfaltasHis = 6;
let rfaltasFil = 3;
let rfaltasTea = 3;
let rfaltasMus = 3;
let rfaltasEf = 3;
let rfaltasIng = 6;
let rfaltasBio = 6;

portRest.textContent = rfaltasPort;
matRest.textContent = rfaltasMat;
socRest.textContent = rfaltasSoc;
quiRest.textContent = rfaltasQui;
fisRest.textContent = rfaltasFis;
geoRest.textContent = rfaltasGeo;
hisRest.textContent = rfaltasHis;
filRest.textContent = rfaltasFil;
teaRest.textContent = rfaltasTea;
musRest.textContent = rfaltasMus;
efRest.textContent = rfaltasEf;
ingRest.textContent = rfaltasIng;
bioRest.textContent = rfaltasBio;
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
    dia.style.pointerEvents = 'none';
    let valorDia = dia.dataset.dia;
    if (valorDia === 'seg') {

      faltasTotal += 10;
      ft.textContent = faltasTotal;
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
      
      nfaltasQui += 2;
      nfaltasPort += 2;
      nfaltasMat += 2;
      nfaltasSoc += 1;
      nfaltasFis += 1;
      nfaltasHis += 2;
      rfaltasQui -= 2;
      rfaltasPort -= 2;
      rfaltasMat -= 2;
      rfaltasSoc -= 1;
      nfaltasFis -= 1;
      nfaltasHis -= 1;
      quiFreq.textContent = freq.qui.toFixed(2) + "%";
      portFreq.textContent = freq.port.toFixed(2) + '%';
      matFreq.textContent = freq.mat.toFixed(2) + '%';
      socFreq.textContent = freq.soc.toFixed(2) + '%';
      fisFreq.textContent = freq.fis.toFixed(2) + '%';
      hisFreq.textContent = freq.his.toFixed(2) + '%';

      quiFaltas.textContent = nfaltasQui;
      portFaltas.textContent = nfaltasPort;
      matFaltas.textContent = nfaltasMat;
      socFaltas.textContent = nfaltasSoc;
      fisFaltas.textContent = nfaltasFis;
      hisFaltas.textContent = nfaltasHis;

      quiRest.textContent = rfaltasQui;
      portRest.textContent = rfaltasPort;
      matRest.textContent = rfaltasMat;
      socRest.textContent = rfaltasSoc;
      fisRest.textContent = rfaltasFis;
      hisRest.textContent = rfaltasHis;
    } else if (valorDia === 'ter') {
      faltasTotal += 10;
      ft.textContent = faltasTotal;
      aulas.ef -= 1;
      aulas.mus -= 1;
      aulas.port -= 3;
      aulas.geo -= 2;
      aulas.tea -= 1;
      aulas.mat -= 2;

      nfaltasEf += 1;
      nfaltasMus += 1;
      nfaltasPort += 3;
      nfaltasGeo += 2;
      nfaltasMat += 2;
      nfaltasTea += 1;
      rfaltasEf -= 1;
      rfaltasMus -= 1;
      rfaltasPort -= 3;
      rfaltasGeo -= 2;
      rfaltasTea -=1;
      rfaltasMat -=2;

      freq.ef = (aulas.ef * 100 /13);
      freq.mus = (aulas.mus * 100 /13);
      freq.port = (aulas.port * 100/91);
      freq.geo = (aulas.geo * 100/26);
      freq.tea = (aulas.tea *100/13);
      freq.mat = (aulas.mat *100/89);

      efFreq.textContent = freq.ef.toFixed(2) + '%';
      musFreq.textContent = freq.mus.toFixed(2) + '%';
      portFreq.textContent = freq.port.toFixed(2) + '%';
      geoFreq.textContent = freq.geo.toFixed(2) + '%';
      matFreq.textContent = freq.mat.toFixed(2) + '%';
      teaFreq.textContent = freq.tea.toFixed(2) + '%';

      efFaltas.textContent = nfaltasEf;
      musFaltas.textContent = nfaltasMus;
      portFaltas.textContent = nfaltasPort;
      geoFaltas.textContent = nfaltasGeo;
      teaFaltas.textContent = nfaltasTea;
      matFaltas.textContent = nfaltasMat;

      efRest.textContent = rfaltasEf;
      musRest.textContent = rfaltasMus;
      portRest.textContent = rfaltasPort;
      geoRest.textContent = rfaltasGeo;
      teaRest.textContent =  rfaltasTea;
      matRest.textContent = rfaltasMat;
    } else if (valorDia === 'qua') {
      faltasTotal += 4;
      ft.textContent = faltasTotal;
      aulas.ing -= 2;
      aulas.port -= 1;
      aulas.qui -= 1;
      freq.ing = (aulas.ing *100/26);
      freq.port = (aulas.port *100/91);
      freq.qui = (aulas.qui *100/39);

      nfaltasIng += 2;
      nfaltasPort += 1;
      nfaltasQui += 1;

      rfaltasIng -= 2;
      rfaltasPort -=1;
      rfaltasQui -=1;

      ingFreq.textContent = freq.ing.toFixed(2) + '%';
      portFreq.textContent = freq.port.toFixed(2) + '%';
      quiFreq.textContent = freq.qui.toFixed(2) + '%';

      ingFaltas.textContent = nfaltasIng;
      portFaltas.textContent = nfaltasPort;
      quiFaltas.textContent = nfaltasQui;

      ingRest.textContent = rfaltasIng;
      portRest.textContent = rfaltasPort;
      quiRest.textContent = rfaltasQui;
    } else if (valorDia === 'qui') {
      faltasTotal += 4;
      ft.textContent = faltasTotal;
      aulas.mat -= 2;
      aulas.fis -= 2;

      nfaltasMat += 2;
      nfaltasFis += 2;
      rfaltasMat -=2;
      rfaltasFis -=2;
      freq.mat = (aulas.mat *100/89);
      freq.fis = (aulas.fis *100/37);
      
      matFreq.textContent = freq.mat.toFixed(2) + '%';
      fisFreq.textContent = freq.fis.toFixed(2) + '%';

      matFaltas.textContent = nfaltasMat;
      fisFaltas.textContent = nfaltasFis;

      matRest.textContent = rfaltasMat;
      fisRest.textContent = rfaltasFis;

    } else if (valorDia === 'sex') {
      faltasTotal += 5;
      ft.textContent = faltasTotal;
      aulas.mat -= 1;
      aulas.bio -= 2;
      aulas.port -= 1;
      aulas.fil -= 1;

      nfaltasMat += 1;
      nfaltasBio += 2;
      nfaltasPort += 1;
      nfaltasFil += 1;
      rfaltasMat -=1;
      rfaltasBio -=2;
      rfaltasPort -=1;
      rfaltasFil -=1;
      freq.mat = (aulas.mat *100/89);
      freq.bio = (aulas.bio *100/26);
      freq.port = (aulas.port *100/91);
      freq.fil = (aulas.fil *100/13);
      
      matFreq.textContent = freq.mat.toFixed(2) + '%';
      bioFreq.textContent = freq.bio.toFixed(2) + '%';
      portFreq.textContent = freq.port.toFixed(2) + '%';
      filFreq.textContent = freq.fil.toFixed(2) + '%';

      matFaltas.textContent = nfaltasMat;
      bioFaltas.textContent = nfaltasBio;
      portFaltas.textContent = nfaltasPort;
      filFaltas.textContent = nfaltasFil;
      matRest.textContent = rfaltasMat;
      bioRest.textContent = rfaltasBio;
      portRest.textContent = rfaltasPort;
      filRest.textContent = rfaltasFil;

    }else if(valorDia === 'sab' || valorDia === 'dom'){
      if(valorDia === 'sab'){
        alert('nao tem aula sabado :)')
      }else{
        alert('nao tem aula domingo :)')
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