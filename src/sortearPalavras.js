export default function sortearPalavras(palavras) {
    const indexOriginal = [...palavras.keys()];
    const indexSorteado = shuffle(indexOriginal);
    const primeiraPalavra = palavras[indexSorteado[0]];
  
    return [{
      naoEscondida: primeiraPalavra,
      escondida: primeiraPalavra.replace(/./g, '_')
    }];
  }
  
  function shuffle(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }