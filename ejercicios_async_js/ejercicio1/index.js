const getCharacterInfo = () => {
	fetch('https://thronesapi.com/api/v2/Characters')
	.then(res => res.json())
	.then(data => paintData(data))
	.catch(err => console.log('Error!', err))
};

const paintData = (data) => {
	console.log(data)
	const selection = document.querySelector('#character-list');

	for(const name of data){
		const option = document.createElement('option')
		option.setAttribute("value", name.id)
		option.innerHTML = `${name.firstName}`;
		selection.appendChild(option);
	};

	selection.addEventListener('change', (e) => {
		const character = data.find(item => item.id == e.target.value);
		const imgBox = document.querySelector('.character-image');
		const infoBox = document.querySelector('.infoBox');
		const img = document.querySelector('img');

		console.log(infoBox);
		imgBox.setAttribute('src', character.imageUrl);
		img.style.width = "350px";
		img.style.height = "300px";
		infoBox.innerHTML = `
		<h1>${character.fullName}</h1>
		<div>
			<em><q><h3>${character.title}</h3></q></em>
			<p><em>- ${character.firstName} -</em></p>
		</div>
		`
		if(selection.value === ''){
			imgBox.setAttribute('src', "https://pyxis.nymag.com/v1/imgs/028/c95/9998bd19a44092f589f7cf53281bc738bf-28-got-questions.2x.rhorizontal.w700.jpg");
		};
	});
};

getCharacterInfo();