function logar() {
    const user = document.getElementById('loginid').value;
    const password = document.getElementById('senhaid').value;
    if (user == "rapunzel" && password == "10092024") {
        alert('Login');
        location.href = "inicio.html"
    } else if (user == "eduardo" && password == "10092024") {
        alert('Login');
        location.href = "inicio.html"

    } else {
        alert('Acesso negado')
    }
}