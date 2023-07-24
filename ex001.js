let guardar_usuario = []

function analisar() {
    var nome_input = window.document.getElementById('number_nome');
    var idade_input = window.document.getElementById('number_idade');
    var peso_input = window.document.getElementById('Number_peso');

    var passar_resultado = window.document.getElementsByClassName('resultado')[0];

    nome_input = nome_input.value;
    idade_input = idade_input.value;
    peso_input = peso_input.value;

    

    let pessoaObject = {
        'nome' : nome_input,
        'idade': idade_input,
        'peso' : peso_input,
        'media': '',

        PesoMedia(){
            if (pessoaObject.peso < 70) {
                return 'Peso media';
            }else{
                return 'Acima do Peso';
            }
        }
    }

    guardar_usuario.push(pessoaObject)

    pessoaObject.media = pessoaObject.PesoMedia();

    passar_resultado.innerHTML = 'Resultado :' + 'Você esta no(a) ' + pessoaObject.media;
    console.log(pessoaObject)
    console.log(guardar_usuario)
}