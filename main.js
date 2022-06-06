Moralis.initialize("INSERT_APP_ID");
Moralis.serverURL = "INSERT_SERVER_URL";

const login = async () => {
    try {
        currentUser = Moralis.User.current();
        if (!currentUser) {
            currentUser = await Moralis.web3.authenticate();
        }
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("login_button").onclick = login;