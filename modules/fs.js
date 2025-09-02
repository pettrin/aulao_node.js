const fs = require("fs");
const path = require("path");

// // Criar uma pasta
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Pasta criada com sucesso!");
// });

// // Criar um arquivo
fs.writeFile(path.join(__dirname, "test", "hello.txt"), "Hello asd!", (err) => {
        if (err) throw err;
        console.log("Arquivo criado com sucesso!");

    // Adicionar a um arquivo    
    fs.appendFile(path.join(__dirname, "test", "hello.txt"), "\nHello World!", (err) => {
        if (err) throw err;
        console.log("Arquivo atualizado com sucesso!");
    });

    // Ler um arquivo 
    fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
    }); 
});

