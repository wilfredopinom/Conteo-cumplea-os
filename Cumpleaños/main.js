

import dayjs from 'dayjs';

  let Hoy=new Date();
  let fin = new Date(final.año, final.mes, final.dia);
  let mseg_dia=1000*60*60*24;
  let dias ;
  if (Hoy.getMonth()==final.mes && Hoy.getDate()>final.dia) {
      fin.setFullYear(fin.getFullYear()+1) ;
  }
  dias = Math.ceil((fin.getTime()-Hoy.getTime())/(mseg_dia));
  let cuadro=document.getElementById('cuenta');
  cuadro.innerText="Faltan "+dias+" dias hasta "+fin.toLocaleDateString()


</script>



