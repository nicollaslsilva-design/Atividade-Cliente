import { Cliente } from "../models/Cliente.js";

const clientes: Cliente[] = [
    new Cliente(
        1,
        "André Solicito",
        "068.753.540-98",
        "41.068.896-4",
        new Date(1980, 4, 23)
    ),
    new Cliente(
        2,
        "Janete de Oliveira",
        "501.764.310-98",
        "20.360.374-6",
        new Date(1970, 0, 12)
    ),
    new Cliente(
        3,
        "José de Almeida",
        "862.373.890-08",
        "42.172.423-7",
        new Date(1965, 6, 13)
    )
];

for (const cliente of clientes) {
    console.log("----------------------------------------");
    console.log("ID:", cliente.getId());
    console.log("Nome:", cliente.getNome());
    console.log("CPF:", cliente.getCPF());
    console.log("RG:", cliente.getRG());
    console.log(
        "Data de nascimento:",
        cliente.getDtNascimento().toLocaleDateString("pt-BR")
    );
    console.log("Idade:", cliente.getIdade(), "anos");
}

console.log("----------------------------------------");
