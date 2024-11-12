function initMap() {
    //Localização ded exemplo (latitude e longitude)
    const exemploLocalizacao = {lat: -23.55052, lng: -46.6333} //São Paulo, SP

    //Criação do mapa centralizado na localização de exemplo
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 15,
        center: exemploLocalizacao,
    });


    //Marcador na localização de exemplo
    new google.maps.Marker({
        position: exemploLocalizacao,
        map: map,
        title: "Barbearia",
    })
}


 // Função para lidar com o envio do formulário
 document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    // Envia os dados para a API via fetch
    fetch('http://localhost:3000/api/agendamento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, telefone, servico, data, hora })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Exibe a mensagem de sucesso
    })
    .catch(error => {
        alert('Erro ao agendar: ' + error);
    });
});