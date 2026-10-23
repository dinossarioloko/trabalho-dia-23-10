
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está utilizando uma inteligência artificial e percebe que ela está pedindo informações pessoais suas. O que você faz?",
        alternativas: [
            {
                texto: "Evito compartilhar informações pessoais para proteger minha privacidade.",
                afirmacao: "Você aprendeu que proteger seus dados é essencial no mundo digital."
            },
            {
                texto: "Compartilho minhas informações sem preocupação, pois confio na tecnologia.",
                afirmacao: "Você percebeu que confiar totalmente na tecnologia pode trazer riscos à sua privacidade."
            }
        ]
    },
    {
        enunciado: "Você precisa estudar para uma prova difícil e decide utilizar uma IA para ajudar. Como você utiliza essa ferramenta?",
        alternativas: [
            {
                texto: "Peço explicações sobre o conteúdo e faço exercícios para aprender melhor.",
                afirmacao: "Você descobriu que a IA pode ser uma aliada nos estudos quando utilizada para aprender."
            },
            {
                texto: "Peço todas as respostas prontas e estudo apenas por elas.",
                afirmacao: "Você percebeu que depender das respostas prontas pode prejudicar seu aprendizado."
            }
        ]
    },
    {
        enunciado: "Um colega utiliza uma IA para criar uma imagem de uma pessoa famosa fazendo algo que nunca aconteceu. O que você pensa sobre isso?",
        alternativas: [
            {
                texto: "Acho importante avisar que a imagem foi criada artificialmente para não enganar as pessoas.",
                afirmacao: "Você entendeu a importância de combater a desinformação e utilizar a IA com responsabilidade."
            },
            {
                texto: "Acho divertido compartilhar a imagem sem explicar que ela é falsa.",
                afirmacao: "Você percebeu que conteúdos falsos podem enganar outras pessoas e espalhar desinformação."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma apresentação para a escola e decide usar uma inteligência artificial. Qual é a melhor atitude?",
        alternativas: [
            {
                texto: "Utilizar a IA para ter ideias, pesquisar o assunto e criar algo com minhas próprias opiniões.",
                afirmacao: "Você percebeu que a IA pode estimular a criatividade sem substituir suas próprias ideias."
            },
            {
                texto: "Deixar que a IA faça toda a apresentação sem verificar o conteúdo.",
                afirmacao: "Você aprendeu que revisar as informações é importante, pois a IA também pode cometer erros."
            }
        ]
    },
    {
        enunciado: "No futuro, você começa a trabalhar em uma empresa que utiliza IA para realizar algumas tarefas. Como você reage?",
        alternativas: [
            {
                texto: "Procuro aprender a utilizar as novas ferramentas e desenvolver minhas habilidades.",
                afirmacao: "Você reconheceu que aprender sobre novas tecnologias pode ajudar no desenvolvimento profissional."
            },
            {
                texto: "Ignoro as novas ferramentas e continuo trabalhando da mesma maneira.",
                afirmacao: "Você percebeu que acompanhar as mudanças tecnológicas pode ser importante para o futuro profissional."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O futuro da IA está em nossas mãos!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
