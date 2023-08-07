function gerarLink() {
    var telefone = document.getElementById("telefone").value;
    var assunto = document.getElementById("texto").value;


    console.log( telefone + assunto);

    //assunto = assunto.replace(" ", "%20");

    //location.href = 'https://wa.me/' + telefone;
    //window.location.href = "https://wa.me/55" + telefone + "?text=" + assunto;
    link = "https://wa.me/55" + telefone + "?text=" + assunto;
    let encodeLink = encodeURI(link);
    linkgerado = document.getElementById("linkwhatsapp").innerHTML = encodeLink;
}

//  https://wa.me/552196312XXXX ?text=Eu%20tenho%20interesse%20no%20seu%20carro%20à%20venda
function copiar(){
    navigator.clipboard.writeText(linkgerado);
    console.log("dados copiados")
    }