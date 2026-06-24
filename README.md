(A ver, lo que tengo que arreglar todavia es que la formula de daño puede dar 0) - Hecho
el limite de 6 niveles para lo de los movimientos de efecto - Pendiente
Al momento de volver a usar un ataque que baja las stats no se actualiza, ojo ahi. - Hecho
Si un atacante utiliza un movimiento de debuff a un pokemon que ya se ha subido las stats entonces se acumulan y causa mas bajon de stats del necesario - Hecho(Carajo mentira no esta hecho) (Con la diferencia que ahora, aunque parezca raro que si un pokemon se elevo su atk y despues se lo baje y si agarro el atk que tenia en ese momento no daria el calculo pero hay que recordar que el calculo utiliza stats base + IV, no toma en cuenta el ataque actual. Y explicando eso me di cuenta que si danza espada sube dos niveles y gruñido baja 1 en teoria deberia solo dejarlo con un valor por asi decirlo de danza espada que sube solo un nivel. Pero no, ignora totalmente el danza espada y le baja de golpe los dos niveles y encima uno mas, por ende, aunque el statstage de atk este en 1 (el valor correcto) el ataque esta como si le hubieran dado un bajon de 3 niveles, por ende, Creo que, en los casos que el battlestat sea mayor a el statbase voy a utilizar para la formula el battlestat, pero en los debuff voy a usar el statbase clasico. Chingadamadre)

Dejo el log pa que veas que no miento:

PS C:\Users\freka\OneDrive - Universidad de Oriente\pokemonasjs> node pokemonas.js
Elige un Pókemon:
1. Emboar
2. Samurott
3. Servine
(User selecciona)
===========================================
Haz seleccionado a Samurott
===========================================
El Pókemon rival es Emboar
===========================================
¡QUE INICIE EL COMABTE!
---------------------------------------
Ronda 1
---------------------------------------
HP de Samurott: 1007
HP de Emboar: 1006
---------------------------------------
ATK de Samurott: 109
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Danza Espada
El ataque de Samurott ha aumentado!
===========================================
Emboar ha usado Envite Igneo
Envite Igneo ha causado 80 de daño a Samurott
Es poco eficaz...
HP de Samurott: 927
---------------------------------------
Ronda 2
---------------------------------------
HP de Samurott: 927
HP de Emboar: 1006
---------------------------------------
ATK de Samurott: 218
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 2
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Rayo Hielo
Rayo Hielo ha causado 65 de daño a Emboar
Es poco eficaz...
HP de Emboar: 941
===========================================
Emboar ha usado Gruñido
El ataque de Samurott ha disminuido!
---------------------------------------
ATK de Samurott: 72.66666666666667
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 1
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
---------------------------------------
Ronda 3
---------------------------------------
HP de Samurott: 927
HP de Emboar: 941
---------------------------------------
ATK de Samurott: 72.66666666666667
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 1
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Rayo Hielo
Rayo Hielo ha causado 65 de daño a Emboar
Es poco eficaz...
HP de Emboar: 876
===========================================
Emboar ha usado A Bocajarro
A Bocajarro ha causado 80 de daño a Samurott
Es poco eficaz...
HP de Samurott: 847
---------------------------------------
Ronda 4
---------------------------------------
HP de Samurott: 847
HP de Emboar: 876
---------------------------------------
ATK de Samurott: 72.66666666666667
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 1
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Pulso Umbrío
Pulso Umbrío ha causado 120 de daño a Emboar
Es neutral
HP de Emboar: 756
===========================================
Emboar ha usado Terremoto
Terremoto ha causado 141 de daño a Samurott
Es neutral
HP de Samurott: 706
---------------------------------------
Ronda 5
---------------------------------------
HP de Samurott: 706
HP de Emboar: 756
---------------------------------------
ATK de Samurott: 72.66666666666667
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 1
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Danza Espada
El ataque de Samurott ha aumentado!
===========================================
Emboar ha usado Envite Igneo
Envite Igneo ha causado 80 de daño a Samurott
Es poco eficaz...
HP de Samurott: 626
---------------------------------------
Ronda 6
---------------------------------------
HP de Samurott: 626
HP de Emboar: 756
---------------------------------------
ATK de Samurott: 272.5
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 3
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Danza Espada
El ataque de Samurott ha aumentado!
===========================================
Emboar ha usado Envite Igneo
Envite Igneo ha causado 80 de daño a Samurott
Es poco eficaz...
HP de Samurott: 546
---------------------------------------
Ronda 7
---------------------------------------
HP de Samurott: 546
HP de Emboar: 756
---------------------------------------
ATK de Samurott: 381.5
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 5
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Pulso Umbrío
Pulso Umbrío ha causado 120 de daño a Emboar
Es neutral
HP de Emboar: 636
===========================================
Emboar ha usado Terremoto
Terremoto ha causado 141 de daño a Samurott
Es neutral
HP de Samurott: 405
---------------------------------------
Ronda 8
---------------------------------------
HP de Samurott: 405
HP de Emboar: 636
---------------------------------------
ATK de Samurott: 381.5
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 5
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Danza Espada
El ataque de Samurott ha aumentado!
===========================================
Emboar ha usado Envite Igneo
Envite Igneo ha causado 80 de daño a Samurott
Es poco eficaz...
HP de Samurott: 325
---------------------------------------
Ronda 9
---------------------------------------
HP de Samurott: 325
HP de Emboar: 636
---------------------------------------
ATK de Samurott: 381.5
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 5
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Rayo Hielo
Rayo Hielo ha causado 65 de daño a Emboar
Es poco eficaz...
HP de Emboar: 571
===========================================
Emboar ha usado A Bocajarro
A Bocajarro ha causado 80 de daño a Samurott
Es poco eficaz...
HP de Samurott: 245
---------------------------------------
Ronda 10
---------------------------------------
HP de Samurott: 245
HP de Emboar: 571
---------------------------------------
ATK de Samurott: 381.5
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 5
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Rayo Hielo
Rayo Hielo ha causado 65 de daño a Emboar
Es poco eficaz...
HP de Emboar: 506
===========================================
Emboar ha usado A Bocajarro
A Bocajarro ha causado 80 de daño a Samurott
Es poco eficaz...
HP de Samurott: 165
---------------------------------------
Ronda 11
---------------------------------------
HP de Samurott: 165
HP de Emboar: 506
---------------------------------------
ATK de Samurott: 381.5
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 5
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Pulso Umbrío
Pulso Umbrío ha causado 120 de daño a Emboar
Es neutral
HP de Emboar: 386
===========================================
Emboar ha usado Envite Igneo
Envite Igneo ha causado 80 de daño a Samurott
Es poco eficaz...
HP de Samurott: 85
---------------------------------------
Ronda 12
---------------------------------------
HP de Samurott: 85
HP de Emboar: 386
---------------------------------------
ATK de Samurott: 381.5
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 5
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Pulso Umbrío
Pulso Umbrío ha causado 120 de daño a Emboar
Es neutral
HP de Emboar: 266
===========================================
Emboar ha usado A Bocajarro
A Bocajarro ha causado 80 de daño a Samurott
Es poco eficaz...
HP de Samurott: 5
---------------------------------------
Ronda 13
---------------------------------------
HP de Samurott: 5
HP de Emboar: 266
---------------------------------------
ATK de Samurott: 381.5
ATK de Emboar: 153
---------------------------------------
---------------------------------------
SPEED de Samurott: 96
SPEED de Emboar: 87
---------------------------------------
Etapas de Samurott
Stage atk: 5
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Etapas de Emboar
Stage atk: 0
Stage def: 0
Stage spatk: 0
Stage spdef: 0
Stage speed: 0
---------------------------------------
Movimientos de Samurott
1. Surf
2. Rayo Hielo
3. Pulso Umbrío
4. Danza Espada
(User selecciona)
Samurott ha usado Danza Espada
El ataque de Samurott ha aumentado!
===========================================
Emboar ha usado Terremoto
Terremoto ha causado 141 de daño a Samurott
Es neutral
HP de Samurott: 0
===========================================
Samurott se ha debilitado. El ganador es Emboar
===========================================
PS C:\Users\freka\OneDrive - Universidad de Oriente\pokemonasjs> 