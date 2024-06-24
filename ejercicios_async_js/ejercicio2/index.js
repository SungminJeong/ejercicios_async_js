const selectNumOfPokemon = () => {
	fetch("https://pokeapi.co/api/v2/pokemon/")
		.then(data => data.json())
		.then(data => data.results.length)
		.then(number => pickPokemon(number))
	};

const pickPokemon = (number) => {
	const num = Math.floor(Math.random() * number + 1);
	fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
	.then(data => data.json())
	.then(data => paintPokemon(data))
};


const paintPokemon = (data) => {
	const image = document.querySelector('.random-image');
	const nombre = data.species.name;
	const url = data.sprites.front_default;

	image.setAttribute("src", url);
	image.style.width = "350px";
	image.style.height = "300px";
	const h1 = document.createElement('h1');
	h1.textContent = nombre;
	document.body.appendChild(h1);
	const btn = document.querySelector('button');
	btn.addEventListener('click', () => {
		location.reload();
	});
};



selectNumOfPokemon();