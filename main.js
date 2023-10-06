class Contatos {
    constructor(nome, email, telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

class GerenciadorContatos {
    constructor(){
        this.contatos = [];
    }

    adicionarContatos(contato){
        this.contatos.push(contato);
    }

    exibirContatos(){
        const listaContatos = document.getElementById('contato-lista');

        listaContatos.innerHTML = '';

        for(const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`;

            listaContatos.appendChild(li);
        }
    }
}

const gerenciadorContatos = new GerenciadorContatos();

const contatoForm = document.getElementById ('contato-form');
const nomeForm = document.getElementById ('nome');
const emailForm = document.getElementById ('email');
const telefoneForm = document.getElementById ('telefone');
const mostrarContatos = document.getElementById ('mostrar-contatos');
const ocultarContatos = document.getElementById ('ocultar-contatos');
const listaContatos = document.getElementById ('contato-lista');

contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = nomeForm.value;
    const email = emailForm.value;
    const telefone = telefoneForm.value;

    const contato = new Contatos (nome, email, telefone);

    gerenciadorContatos.adicionarContatos(contato);

    nomeForm.value = '';
    emailForm.value = '';
    telefoneForm.value = '';

});

mostrarContatos.addEventListener('click', function(){
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
});
    
ocultarContatos.addEventListener('click', function(){
    listaContatos.style.display = 'none';
}); 