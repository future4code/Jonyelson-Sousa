console.log("===Bem Vindos ao Blackjack")

if (confirm("Quer iniciar uma nova rodada?")) {

   const jogador1 = "Computador";
   const jogador2 = "usuario";

   //Jogador1 Computador

   let primeiraCartaJogador1, sengundaCartaJogador1;
   carta = comprarCarta();
   primeiraCartaJogador1 = carta;
   carta = comprarCarta();
   segundaCartaJogador1 = carta;
   let pontuacao = primeiraCartaJogador1.valor + segundaCartaJogador1.valor;

   console.log(`Computador - cartas: ${primeiraCartaJogador1.texto} ${segundaCartaJogador1.texto} - pontuação ${pontuacao} `);

   //Jogador2 Usuario

   let primeiraCartaJogador2, sengundaCartaJogador2;
   carta = comprarCarta();
   primeiraCartaJogador2 = carta;
   carta = comprarCarta();
   segundaCartaJogador2 = carta;
   let pontuacaoUsuario = primeiraCartaJogador2.valor + segundaCartaJogador2.valor;

   console.log(`Usuario - cartas: ${primeiraCartaJogador2.texto} ${segundaCartaJogador2.texto} - pontuação ${pontuacaoUsuario} `);
   if (pontuacao > pontuacaoUsuario) {
      console.log("O computador Ganhou")
   } else if (pontuacao == pontuacaoUsuario) {
      console.log("Empatou")

   } else {
      console.log("O Usuario Ganhou")
   }

} else {
   console.log("O jogo acabou :)");
}