function enviar() {
    var telefone = document.getElementById("telefone").value;
    var assunto = document.getElementById("texto").value;
    console.log("Seu E-mail: " + telefone + "Assunto: " + assunto);

    assunto = assunto.replace(" ", "%20");

    //location.href = 'https://wa.me/' + telefone;
    window.location.href = "https://wa.me/55" + telefone + "?text=" + assunto;
}

//  https://wa.me/552196312XXXX ?text=Eu%20tenho%20interesse%20no%20seu%20carro%20à%20venda