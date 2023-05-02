function Validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('Senha').value;

    if(!email || !senha){
        alert("campos de preechimento obrigatorio. favor preencher");
    }else{
        alert("campos preenchidos com sucesso!");
    }
}