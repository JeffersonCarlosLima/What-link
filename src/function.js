
function gerarLink() {
    var telefone = document.getElementById("telefone").value;
    var assunto = document.getElementById("texto").value;


    //console.log( telefone + assunto);
    
    //assunto = assunto.replace(" ", "%20");
    telefone = telefone.replace(/[{()}]/g,'')
    telefone = telefone.replace(/[^a-zA-Z0-9]/g,'')

    //location.href = 'https://wa.me/' + telefone;
    //window.location.href = "https://wa.me/55" + telefone + "?text=" + assunto;

    //Validação de itens digitados
    if(telefone.length<=0){
        alert('Digite um número de celular válido');
        $("#telefone").focus()
    }else{
        link = "https://wa.me/55" + telefone + "?text=" + assunto;
        let encodeLink = encodeURI(link);
        linkgerado = document.getElementById("linkwhatsapp").innerHTML = encodeLink;
        $("#copiarLink").removeClass("btn-desable");
    }

}

//  https://wa.me/552196312XXXX ?text=Eu%20tenho%20interesse%20no%20seu%20carro%20à%20venda
function copiar(){
    if(telefone<=0){
        
    }
        else{

            navigator.clipboard.writeText(linkgerado);
            //console.log("dados copiados")
            
            //altera o nome do botão e modificar a cor
            document.getElementById("copiarLink").innerHTML = "Copiado";
            $("#copiarLink").addClass("btn-copiado");

            //define um timer de 3s para voltar o botão para o status de origem
            setTimeout(()=>{
                $("#copiarLink").removeClass("btn-copiado")
                document.getElementById("copiarLink").innerHTML = "Copiar";
            },3000);
        }
    }
    
