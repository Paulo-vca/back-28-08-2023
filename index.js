const axios = require('axios')



//Implementar requicisao com axios - requisicao no JasonPlaceHolder 


axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Dados da resposta:', response.data);
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });


