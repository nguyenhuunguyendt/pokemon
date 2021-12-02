const pokeContainer = document.querySelector('.poke-container')
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
const colorKey = Object.keys(colors)
const fetchApiPokemon = async () => {
    for (let i = 1; i <= 150; i++) {
        await getPokemon(i)
    }
}
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    creatPokemon(data)
}
function creatPokemon(data) {
    const name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    const typesPoke = data.types.map(type => type.type.name)
    const type = colorKey.find(type => typesPoke.indexOf(type) > -1)
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const color = colors[type]
    pokemonEl.style.backgroundColor = color
    const pokeInner = `
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png" alt="pokemon">
    </div>
    
    <div class="info">
        <span class="number">#${data.id.toString().padStart(3, '0')}</span>
        <h3 class="name"> ${name}</h3>
        <small><span>type : ${type}</span></small>
    </div>
    `
    pokemonEl.innerHTML = pokeInner
    pokeContainer.appendChild(pokemonEl)
}



fetchApiPokemon()