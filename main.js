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

document.getElementById('login_button').onclick = login;
