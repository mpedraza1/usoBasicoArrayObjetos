document.write('<p>Estadisticas centro medico ñuñoa</p>');

//Array con sus objetos
let radiologia = [
            {hora:"11:00",especialista:"IGNACIO SCHULZ",paciente:"FRANCISCA ROJAS", rut:"9878782-1",prevision:"FONASA"},
            {hora:"11:30",especialista:"FEDERICO SUBERCASEAUX",paciente:"PAMELA ESTRADA", rut:"15345241-3",prevision:"ISAPRE"},
            {hora:"15:00",especialista:"FERNANDO WURTHZ",paciente:"ARMAND LUNAO", rut:"16445345-9",prevision:"ISAPRE"},
            {hora:"15:30",especialista:"ANA MARIA GODOY",paciente:"MANUEL GODOY", rut:"17666419-0",prevision:"FONASA"},
            {hora:"16:00",especialista:"PATRICIA SUAZO",paciente:"RAMON ULLOA", rut:"14989389-K",prevision:"FONASA"}
]


let traumatologia = [
            {hora:"8:00",especialista:"MARIA PAZ ALTUZARRA",paciente:"PAULA SANCHEZ", rut:"15554774-5",prevision:"FONASA"},
            {hora:"10:00",especialista:"RAUL ARAYA",paciente:"ANGÉLICA NAVAS", rut:"15444147-9",prevision:"ISAPRE"},
            {hora:"10:30",especialista:"MARIA ARRIAGADA",paciente:"ANA KLAPP", rut:"17879423-9",prevision:"ISAPRE"},
            {hora:"11:00",especialista:"ALEJANDRO BADILLA",paciente:"FELIPE MARDONES", rut:"1547423-6",prevision:"ISAPRE"},
            {hora:"11:30",especialista:"CECILIA BUDNIK",paciente:"DIEGO MARRE", rut:"16554741-K",prevision:"FONASA"},
            {hora:"12:00",especialista:"ARTURO CAVAGNARO",paciente:"CECILIA MENDEZ", rut:"9747535-8",prevision:"ISAPRE"},
            {hora:"12:30",especialista:"ANDRES KANACRI",paciente:"MARCIAL SUAZO", rut:"11254785-5",prevision:"ISAPRE"}
]


let dental = [
            {hora:"8.30",especialista:"ANDREA ZUÑIGA",paciente:"MARCELA RETAMAL", rut:"11222444-5",prevision:"ISAPRE"},
            {hora:"11.00",especialista:"MARIA PIA ZAÑARTU",paciente:"ANGEL MUÑOZ", rut:"9878777-2",prevision:"ISAPRE"},
            {hora:"11.30",especialista:"SCARLETT WITTING",paciente:"MARIO KAST", rut:"7999888-5",prevision:"FONASA"},
            {hora:"13.00",especialista:"FRANCISCO VON TEUBER",paciente:"KARIN FERNANDEZ", rut:"1888766-5",prevision:"FONASA"},
            {hora:"13.30",especialista:"EDUARDO VIÑUELA",paciente:"HUGO SANCHEZ", rut:"17665444-5",prevision:"FONASA"},
            {hora:"14.00",especialista:"RAQUEL VILLASECA",paciente:"ANA SEPULVEDA", rut:"144441222-5",prevision:"ISAPRE"}
]


//TABLA Radiologia

document.write(`
<h2>Radiología</h2>
<h3>Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision}    |    Última atención: ${radiologia[radiologia.length-1].paciente} - ${radiologia[radiologia.length-1].prevision} </h3>

<table class='table'>
<thead class='table-dark'>
<tr>
<th scope='col'>Hora</th>
<th scope='col'>Especialista</th>
<th scope='col'>Paciente</th>
<th scope='col'>Rut</th>
<th scope='col'>Prevision</th>
</tr>
</thead>
<tbody>
`);


radiologia.forEach((v) => {
    document.write(`
            <tr>
                <th scope='row'>${v.hora}</th>
                <td>${v.especialista}</td>
                <td>${v.paciente}</td>
                <td>${v.rut}</td>
                <td>${v.prevision}</td>
            </tr>
        `);
});

document.write(`
    </tbody>
    </table>
    </div>
`);



//TABLA Traumatología

document.write(`
<h2>Traumatología</h2>
<h3>Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision}  |   Última atención: ${traumatologia[traumatologia.length-1].paciente} - ${traumatologia[traumatologia.length-1].prevision} </h3>

<table class='table'>
<thead class='table-dark'>
<tr>
<th scope='col'>Hora</th>
<th scope='col'>Especialista</th>
<th scope='col'>Paciente</th>
<th scope='col'>Rut</th>
<th scope='col'>Prevision</th>
</tr>
</thead>
<tbody>
`);

traumatologia.forEach((v) => {
    document.write(`
            <tr>
                <th scope='row'>${v.hora}</th>
                <td>${v.especialista}</td>
                <td>${v.paciente}</td>
                <td>${v.rut}</td>
                <td>${v.prevision}</td>
            </tr>
        `);
});

document.write(`
    </tbody>
    </table>
    </div>
`);



//TABLA Dental
document.write(`
<h2>Dental</h2>
<h3>Primera atención: ${dental[0].paciente} - ${dental[0].prevision}    |   Última atención: ${dental[dental.length-1].paciente} - ${dental[dental.length-1].prevision} </h3>

<table class='table'>
<thead class='table-dark'>
<tr>
<th scope='col'>Hora</th>
<th scope='col'>Especialista</th>
<th scope='col'>Paciente</th>
<th scope='col'>Rut</th>
<th scope='col'>Prevision</th>
</tr>
</thead>
<tbody>
`);


dental.forEach((v) => {
    document.write(`
            <tr>
                <th scope='row'>${v.hora}</th>
                <td>${v.especialista}</td>
                <td>${v.paciente}</td>
                <td>${v.rut}</td>
                <td>${v.prevision}</td>
            </tr>
        `);
});

document.write(`
    </tbody>
    </table>
    </div>
`);

