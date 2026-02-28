<script>
// Sauvegarde d'un compte
function saveAccount(email, pseudo, password) {
    const accounts = JSON.parse(localStorage.getItem("likmaAccounts") || "{}");

    if (accounts[email]) {
        return false; // compte existe déjà
    }

    accounts[email] = {
        pseudo: pseudo,
        password: password
    };

    localStorage.setItem("likmaAccounts", JSON.stringify(accounts));
    return true;
}

// Connexion
function login(email, password) {
    const accounts = JSON.parse(localStorage.getItem("likmaAccounts") || "{}");

    if (!accounts[email]) return false;
    if (accounts[email].password !== password) return false;

    localStorage.setItem("likmaLoggedUser", email);
    return true;
}

// Récupérer l'utilisateur connecté
function getLoggedUser() {
    const email = localStorage.getItem("likmaLoggedUser");
    if (!email) return null;

    const accounts = JSON.parse(localStorage.getItem("likmaAccounts") || "{}");
    return accounts[email] || null;
}

// Déconnexion
function logout() {
    localStorage.removeItem("likmaLoggedUser");
}
</script>