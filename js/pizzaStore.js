let pizzas = [
    {
      id: 1,
      name: 'Moderna',
      ingredients: ['salsa', 'muzza', 'rúcula', 'jamón crudo', 'tomates deshidratados', 'parmesano'],
      prices: { piece: 120, medium: 840, big: 1180},
      isVegetarian: false
    },
    {
      id: 2,
      name: 'Vegeta',
      ingredients: ['salsa', 'muzza', 'zucchini', 'asado', 'berenjena', 'tomates cherrys', 'aceitunas negras', 'albahaca'],
      prices: { piece: 110, medium: 800, big: 1150},
      isVegetarian: true
    },
    {
      id: 3,
      name: 'Alemana',
      ingredients: ['salsa', 'muzza', 'cebolla', 'salchicha', 'mostaza'],
      prices: { piece: 135, medium: 900, big: 1300},
      isVegetarian: false
    },
    {
      id: 4,
      name: 'Fugazzetta de jamón',
      ingredients: ['salsa', 'muzzarella', 'cebolla', 'aceitunas negras', 'jamón'],
      prices: { piece: 120, medium: 850, big: 1200},
      isVegetarian: false
    },
    {
      id: 5,
      name: 'Especial de jamón',
      ingredients: ['salsa', 'muzza', 'aceitunas verdes', 'jamón'],
      prices: { piece: 125, medium: 870, big: 1270},
      isVegetarian: false
    }
  ]
/* 
Debemos realizar una app para una pizzería. Para ello vamos a obtener los datos desde su API de backend.
Los datos obtenidos son los que se muestran arriba.

No piden: 
0- Obtener una copia del menu original y trabajar con él
1- Obtener las pizzas tamaño mediano cuyo precio sea mayor o igual a $850
2- Obtener las pizzas según un nombre dado. Este puede estar incompleto.
3- Ordene las pizzas por su tamaño grande. 
4- A partir de un conjunto de IDs devuelva una lista de pizzas con dichos IDs 
5- Crear un nuevo menú de pizzas agrupandolas por si son o no vegetarianas.
ejemplo: {
        meat : [{id: 1, name:...}, {id: 2, name:...}],
        noMeat:[{id: 1, name:...}, {id: 2, name:...}]
         }
6- Obtenga una lista de ingredientes totales de todas las pizzas.
Muestre la lista sin ingredientes repetidos y ordenada alfabeticamente.
*/

//0- Obtener una copia del menu original y trabajar con él

let pizzasMenuCopy = [...pizzas]
pizzasMenuCopy;

//console.log(pizzas.map((pizza)=> pizza))

//1- Obtener las pizzas tamaño mediano cuyo precio sea mayor o igual a $850

const pizzasMedium = ()=>{
    return pizzasMenuCopy.filter(pizza => pizza.prices.medium >= 850 )
}

console.log(pizzasMedium());

//2- Obtener las pizzas según un nombre dado. Este puede estar incompleto.

/* const searchByName = (name) => {
    return pizzasMenuCopy.filter(pizza => pizza.name.includes(name))
} */
const searchByName = (name) => {
    return pizzasMenuCopy.filter(pizza => pizza.name.indexOf(name) !== -1)
}

console.log(searchByName('jamón'))

//3- Ordene las pizzas por su tamaño grande. 

const orderPizzasByPrice = ()=>{
    pizzasMenuCopy.sort((pa,pb)=>{
        if(pa.prices.big < pb.prices.big) return -1
        if(pa.prices.big > pb.prices.big) return 1
        return 0
    })
}

orderPizzasByPrice();
console.log(pizzasMenuCopy)

//4- A partir de un conjunto de IDs devuelva una lista de pizzas con dichos IDs 

const getPizzasByID = (arraysIDs)=>{
    return pizzasMenuCopy.filter(pizzas =>{
        if(arraysIDs.indexOf(pizzas.id) !== -1) return true;
        return false;
    })
}

console.log(getPizzasByID([1,5]))

 /* 
 5- Crear un nuevo menú de pizzas agrupandolas por si son o no vegetarianas.
ejemplo: {
        meat : [{id: 1, name:...}, {id: 2, name:...}],
        noMeat:[{id: 1, name:...}, {id: 2, name:...}]
         }
 */

const newPizzasMenu = ()=>{
    return pizzasMenuCopy.reduce((newObject, pizza)=>{
        if (!pizza.isVegetarian) {
            newObject.meat.push(pizza)
        } else {
            newObject.noMeat.push(pizza) 
        }
        return newObject;
    }, { meat: [], noMeat: [] })
}

console.log(newPizzasMenu());

const newMenu = [newPizzasMenu()] 
console.log(newMenu);

/* 
6- Obtenga una lista de ingredientes totales de todas las pizzas.
Muestre la lista sin ingredientes repetidos y ordenada alfabeticamente.
*/

let ingredients = pizzas.map((pizza) => pizza.ingredients)

ingredients;

let totalingredients = ingredients.reduce((acc, curr )=> {
  return acc.concat(curr)
} );

ingredients;

totalingredients;

let uniqueIngredients = totalingredients.filter((item, index)=> totalingredients.indexOf(item) === index);

uniqueIngredients;

let ingredientsOrder = uniqueIngredients.sort((pa, pb)=>{
  if(pa < pb) return -1;
  if(pa > pb) return 1;
  return 0;
})

ingredientsOrder;

const totalIngredientsOrder = ()=>{
  let ingredients = pizzas.map((pizza) => pizza.ingredients);
  let totalingredients = ingredients.reduce((acc, curr )=> {
    return acc.concat(curr)
  } );
  let uniqueIngredients = totalingredients.filter((item, index)=> totalingredients.indexOf(item) === index);
  let ingredientsOrder = uniqueIngredients.sort((pa, pb)=>{
    if(pa < pb) return -1;
    if(pa > pb) return 1;
    return 0;
  })
  return ingredientsOrder;
}

console.log(totalIngredientsOrder())