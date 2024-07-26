    const caixaPrincipal = document.querySelector('.caixa-principal');
    const caixaPerguntas = document.querySelector('.caixa-perguntas');
    const caixaAlternativas = document.querySelector('.caixa-alternativas');
    const caixaResultado = document.querySelector('.caixa-resultado');
    const textoResultado = document.querySelector('.texto-resultado');

    const perguntas = [
        {
        enunciado: "qual pais tem o maior indice de pobreza?"
        alternativas: [
        { 
            texto:"Africa"
            afirmação:"Afirmação da alternativa 1"
           },

           { texto:"Somália"
            afirmação: "afirmação da alternativa 2"
        },
            
           { texto:"Suiça"
           afirmação: "afirmação da alternativa 3"
        },

            { texto:"Cuba"
             afirmação:"afirmação da altenativa 4"
         },
            
        ]
        },
        {
        enunciado: "qual o estado brasileiro mais racista?",
        alternativas: ["São Paulo", "Paraná" , "Rio Grande do Sul" , "Santa Catarina"],
        },
        {
         enunciado: "Quais dos seguintes fatores e mais frequentemente citado como uma causa primária da desigualdade social em sociedades modernas?",
         alternativas: ["Distribuição disigual de riqueza e renda", "Localizaçaõ Geografica" , "Preferencias culturais" , "Condicões climaticas"],
            },
        ];
        let atual = 0;
        let perguntaAtual;  

        function mostraPergunta() {
            perguntaAtual = perguntas[atual];
            caixaPerguntas.textContent = perguntaAtual.enunciado
            mostraPergunta();
            }
            function mostraAlternativas() {
                for (const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativas =
                document. createElement("button");
                botaoAlternativas.textContent = alternativa;
                caixaAlternativas.appendChild(botaoAlternativas);
                }
            }
  mostraPergunta();


  function mostraAlternativas() {}
  for (const alternativa of perguntaAtual.alternativas) {
  const botaoAlternativas= document. createElement("button");
  botaoAlternativas.textContent = alternativa;
  caixaAlternativas.appendChild(botaoAlternativas); 

  }














