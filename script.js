    const caixaPrincipal = document.querySelector('.caixa-principal');
    const caixaPerguntas = document.querySelector('.caixa-perguntas');
    const caixaAlternativas = document.querySelector('.caixa-alternativas');
    const caixaResultado = document.querySelector('.caixa-resultado');
    const textoResultado = document.querySelector('.texto-resultado');

    const perguntas = [
        {
        enunciado: "qual pais tem o maior indice de pobreza?" ,
        alternativas : [
        { 
            texto:"Africa",
            afirmação:""
           },
           {
            texto:"Somália",
            afirmação: ""
            },
            {
             texto:"Suiça",
             afirmação: ""
             },
            { texto:"Cuba",
             afirmação:""
              },


            ]
        },

        {
             enunciado: "qual o estado brasileiro mais racista?",
             alternativas: [,
             {
                 texto:"São Paulo",
                 afirmação:""
                },
                {
                texto:"Paraná",
                  afirmação: ""
                },
                {
                texto:"Rio Grande do Sul",
                afirmação: ""
                 },
                 {
                  texto:"Santa Catarina",
                  afirmação:""
                 },


              ]
            },

          {
            enunciado: "qual dos seguintes fatores e mais frequentemente citado como uma causa primaria da desigualdade social em sociedade modernas?"
            alternativas: [,
            { 
                texto:"Distribuição desigualdade de requeza e renda",
                afirmação:""
               },
               {
                texto:"Localizão geográfica",
                afirmação: ""
                 },
                 {
                 texto:"preferencias culturais",
                 afirmação: ""
                 },
                 {
                 texto:"Condições climaticas",
                 afirmação:""
                  },
                  ]
            },
             ];   

        let atual = 0;
        let perguntaAtual;  
        let historiaFinal = "",

        function mostraPergunta() {
             if (atual >= pergunta.length){
             mostrarResultado();
             return;
            }

            perguntaAtual = perguntas[atual];
            caixaPerguntas.textContent = perguntaAtual.enunciado;
            caixaAlternativas.textContent = "";
              mostraPergunta();
            }
            mostraPerguntas();
            function mostraAlternativas() {
                for (const alternativa of perguntaAtual.alternativas){
                const botaoAlternativas = document. createElement("button");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas. addEventListener("click", () =>
                resposraSelecionada (alternativa))
                botaoAlternativas.appendChild(botaoAlternativas);
                }
            }

          function respostaSelecionada(opcaoSelecionada) {
          conts afirmacoes = opcaoSelecionada.afirmação;
          historiaFinal += afirmacoes + " ";
          atual++
          mostraPergunta();
          }

  function mostrarResultado() {
  caixaPerguntas.textContent = ""
  textoResultado.textContent =historiaFinal;
  caixaAlternativas.textContent ="";
  }














