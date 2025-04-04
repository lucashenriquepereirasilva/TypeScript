import { Cliente } from "./Cliente";
const cli = new Cliente();
cli.id = 30;
cli.nome ="lucas";
cli.cpf ="123546"
cli.rg= "874523";
cli.endereco = "Rua Nova Esperança";
cli.telefone = "11954934";
cli.limite_credito = 8000;
cli.email = "LucasHenrique@gmail.com";
console.log(cli.cadastrar());
console.log(cli);