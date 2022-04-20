//HTTP
// Hypertext Transfer Protocol é o protocolo utilizando para enviarmos/recebermos arquivos e dados na Web.

fetch("https://pokeapi.co/api/v2/pokemon/11/")
  .then((r) => r.json())
  .then((pokemon) => {
    console.log(pokemon);
  });

// URL E METHOD
// Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.

const url = "https://jsonplaceholder.typicode.com/get/";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '"aula": "JavaScript"',
};

fetch(url, options)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

//GET
//GET irá puxar as informações da URL. Não é necessário informar que o método é GET, pois este é o padrão.

const url2 = "https://jsonplaceholder.typicode.com/posts/";
fetch(url2, {
  method: "GET",
})
  .then((r) => r.json())
  .then((r) => console.log(r));

//POST
//POST irá criar uma nova postagem, utilizando o tipo de conteúdo especificado no headers e utilizando o conteúdo do body.

const url3 = "https://jsonplaceholder.typicode.com/posts/";

fetch(url3, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}',
})
  .then((r) => r.json())
  .then((r) => console.log(r));

// PUT
// PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body.

const url4 = "https://jsonplaceholder.typicode.com/posts/1/";

fetch(url4, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}',
})
  .then((r) => r.json())
  .then((r) => console.log(r));

// HEAD
// HEAD puxa apenas os headers. É uma requisição mais leve pois não puxa o body.

const url5 = "https://jsonplaceholder.typicode.com/posts/1/";

fetch(url5, {
  method: "HEAD",
}).then((response) => {
  response.headers.forEach(console.log);
  console.log(response.headers.get("Content-Type"));
});

// CORS
// Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferente origens.
// É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin.
// Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy.
// CORS é um acordo entre browser / servidor ou servidor / servidor. Ele serve para dar certa proteção ao browser, mas não é inviolável.

const url7 = "https://cors-anywhere.herokuapp.com/https://www.google.com/";
const div = document.createElement("div");

fetch(url7)
  .then((r) => r.text())
  .then((r) => {
    div.innerHTML = r;
    console.log(div);
  });
