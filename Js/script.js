const form = document.getElementById('form')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead',convertData);

    let content = document.getElementById('content')

    let carregando = '<p>carregando ...</p>;'
    let Pronto = '<p>Pronto</p>;'

    content.innerHTML = carregando

    setTimeout(()=>{
        content.innerHTML = Pronto;
    },1000)


})