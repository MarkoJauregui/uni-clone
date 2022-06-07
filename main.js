Moralis.initialize('ZTRfoT2RUmXJkuQs7sN1TFZn5ASwyCVhUQHh5dhD');
Moralis.serverURL = 'https://lsybg9ylddo6.usemoralis.com:2053/server';

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

document.getElementById('from_token_select').onclick = openModal;
document.getElementById('modal_close').onclick = closeModal;
document.getElementById('login_button').onclick = login;
