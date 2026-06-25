//----------------------------------------------------------------------
//Tareas realizadas
//----------------------------------------------------------------------
(A ver, lo que tengo que arreglar todavia es que la formula de daño puede dar 0) - Hecho

el limite de 6 niveles para lo de los movimientos de efecto - Ayer lo hice que pendejo y no puse

Al momento de volver a usar un ataque que baja las stats no se actualiza, ojo ahi. - Hecho

Si un atacante utiliza un movimiento de debuff a un pokemon que ya se ha subido las stats entonces se acumulan y causa mas bajon de stats del necesario - Hecho(Carajo mentira no esta hecho) (Con la diferencia que ahora, aunque parezca raro que si un pokemon se elevo su atk y despues se lo baje y si agarro el atk que tenia en ese momento no daria el calculo pero hay que recordar que el calculo utiliza stats base + IV, no toma en cuenta el ataque actual. Y explicando eso me di cuenta que si danza espada sube dos niveles y gruñido baja 1 en teoria deberia solo dejarlo con un valor por asi decirlo de danza espada que sube solo un nivel. Pero no, ignora totalmente el danza espada y le baja de golpe los dos niveles y encima uno mas, por ende, aunque el statstage de atk este en 1 (el valor correcto) el ataque esta como si le hubieran dado un bajon de 3 niveles, por ende, Creo que, en los casos que el battlestat sea mayor a el statbase voy a utilizar para la formula el battlestat, pero en los debuff voy a usar el statbase clasico. Chingadamadre) - Parcialmente arreglado creo. Mentira es peor - Hecho ya we

NOTA!!!- NO USAR BATTLESTATS PARA CALCULOS DE ESTADISTICAS

//----------------------------------------------------------------------
//Tareas pendientes
//----------------------------------------------------------------------
