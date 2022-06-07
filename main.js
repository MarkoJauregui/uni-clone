Moralis.initialize('ZTRfoT2RUmXJkuQs7sN1TFZn5ASwyCVhUQHh5dhD');
Moralis.serverURL = 'https://lsybg9ylddo6.usemoralis.com:2053/server';

const init = async () => {
	await Moralis.initPlugins();
	// await Moralis.enable();
	await listAvailableTokens();
};

const listAvailableTokens = async () => {
	const result = await Moralis.Plugins.oneInch.getSupportedTokens({
		chain: 'eth',
		// The blockchain you want to use (eth/bsc/polygon)
	});
	const tokens = result.tokens;
	let parent = document.getElementById('token_list');
	for (const address in tokens) {
		let token = tokens[address];
		let div = document.createElement('div');
		div.className = 'token_row';
		let html = `
			<img class="token_list_img" src="${token.logoURI}">
			<span class="token_list_text">${token.symbol}</span>
		`;
		div.innerHTML = html;
		parent.appendChild(div);
	}
};

const login = async () => {
	try {
		currentUser = Moralis.User.current();
		if (!currentUser) {
			currentUser = await Moralis.web3.authenticate();
		}
	} catch (error) {
		console.log(error);
	}
};

const openModal = () => {
	document.getElementById('token_modal').style.display = 'block';
};

const closeModal = () => {
	document.getElementById('token_modal').style.display = 'none';
};

init();

document.getElementById('from_token_select').onclick = openModal;
document.getElementById('modal_close').onclick = closeModal;
document.getElementById('login_button').onclick = login;
