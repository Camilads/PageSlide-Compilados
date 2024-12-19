const codigos = [
    `#include <stdio.h>

    int main() {
        printf("Olá, meu nome é Camila\\n");
        printf("Estou cursando Análise e Desenvolvimento de 
            Sistemas\\n");
        return 0;
    }`,

    `
    #include <iostream>
    #include <string>

    int main() {
        std::string nome = "Seu Nome";
        std::string linguagem = "C++";

        
        

        return 0;
    }`,

    `
    package com.sobre.app;
    
    public class Apresentacao {
        public static void main(String[] args) {
            System.out.println("");
        }
    }`,

    `function apresentar() {
        console.log("");
    }

    apresentar();`
    
];

let painelAtual = 0; 

function proximoPainel() {
    const paineis = document.querySelectorAll('.container');

    paineis[painelAtual].classList.remove('active');

    painelAtual = (painelAtual + 1) % paineis.length;

    paineis[painelAtual].classList.add('active');

    const apresentaElement = document.querySelector(`#apresenta-${painelAtual + 1}`);
    apresentaElement.innerHTML = '';
}

function apresentar(indice) {
    const apresentaElement = document.getElementById(`apresenta-${indice + 1}`);
    apresentaElement.innerHTML = ''; 

    const codigo = codigos[indice];
    let i = 0;

    function digitar() {
        if (i < codigo.length) {
            apresentaElement.innerHTML += codigo.charAt(i);
            i++;
            setTimeout(digitar, 50); // Velocidade do efeito
        }
    }
    digitar();
}

