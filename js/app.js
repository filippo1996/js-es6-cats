/**
 * Milestone 1 
 * Definire un array di oggetti; 
 * ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
 * Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
 */


const cats = [
    {
        name: 'Lillo',
        age: 4,
        color: '#ff22dd',
        sex: 'male'
    },
    {
        name: 'Silvestro',
        age: 5,
        color: '#aa22dd',
        sex: 'male'
    },
    {
        name: 'Stellina',
        age: 2,
        color: '#bb66dd',
        sex: 'famale'
    },
    {
        name: 'Molli',
        age: 3,
        color: '#ba6622',
        sex: 'famale'
    }
];

const eleMilestone1 = document.getElementById('milestone1');
const eleCatMale = document.querySelector('#cat-male');
const eleCatFamale = document.querySelector('#cat-famale');
const eleMilestone3 = document.getElementById('milestone3');

cats.forEach(ele => {
    const {name, color} = ele;
    eleMilestone1.innerHTML += 
    `<li>
        Si chiama ${name} di colore <span style="color: ${color}"><i class="fas fa-cat"></i></span>
    </li>`;
});


/**
 * Milestone 2 
 * Dividere i gatti in due contenitori distinti in base al sesso
 * e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. 
 * Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
 */

const newCats = cats.map(ele => {
    const {name, age, color, sex} = ele;
    const obj = {
        name,
        age,
        color,
        sex,
        ribbon: {
            color: sex === 'male' ? 'blue' : 'pink',
            opacity: 1 * age / 5, //Applichiamo la proporzione 1(opacità massiama) : sta a age(Eta più grande del gatto) = come age (gatto che analizzo) : sta a x
        }
    };
    return obj;
});

const catsMale = newCats.filter(ele => ele.sex === 'male');

const catsFamale = newCats.filter(ele => ele.sex === 'famale');

messageCat(catsMale, eleCatMale);
messageCat(catsFamale, eleCatFamale);


/**
 * Milestone 3 
 * Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, 
 * inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
 */


const catsReverse = [...catsFamale, ...catsMale];

const catsReverseZip = catsReverse.map(ele => {
    const {name, color, ribbon} = ele;
    const obj = {
        name,
        color,
        ribbon
    };
    return obj;
});

console.log(catsReverseZip);

messageCat(catsReverseZip, eleMilestone3);



/**
 * Funzione che cicla e stampa i gatti
 */
function messageCat(array, doc){
    array.forEach(ele => {
        const {name, color} = ele;
        doc.innerHTML += 
        `<li>
            Si chiama ${name} di colore <span style="color: ${color}"><i class="fas fa-cat"></i></span><span style="color: ${ele.ribbon.color}; opacity: ${ele.ribbon.opacity}"><i class="fas fa-ribbon"></i></span>
        </li>`;
    });
}