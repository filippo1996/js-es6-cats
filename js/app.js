/**
 * Milestone 1 
 * Definire un array di oggetti; 
 * ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
 * Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
 */


const gatti = [
    {
        nome: 'Lillo',
        eta: 4,
        colore: '#ff22dd',
        sesso: 'm'
    },
    {
        nome: 'Silvestro',
        eta: 5,
        colore: '#aa22dd',
        sesso: 'm'
    },
    {
        nome: 'Stellina',
        eta: 2,
        colore: '#bb66dd',
        sesso: 'f'
    },
    {
        nome: 'Molli',
        eta: 3,
        colore: '#ba6622',
        sesso: 'f'
    }
];

const eleCats = document.getElementById('cats');

gatti.forEach(ele => {
    const {nome, colore} = ele;
    eleCats.innerHTML += 
    `<li>
        Si chiama ${nome} di colore <span style="background: ${colore}">${colore}</span>
    </li>`;
});