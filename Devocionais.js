const devocionais = [
  {
    dia: 1,
    semana: 1,
    diaSemana: "Segunda-feira",
    temaSemana: "Cura e Recomeço",
    titulo: "Recomeços Também São de Deus",
    versiculo: "Isaías 43:19 — Eis que faço coisa nova, e agora sairá à luz; porventura não a percebeis?",
    reflexao: "Deus tem a capacidade de transformar finais dolorosos em novos começos cheios de propósito. Nem todo encerramento é perda; alguns são libertação. O que hoje parece confuso pode ser exatamente o terreno onde Deus começará algo novo em sua vida.",
    oracao: "Senhor, cura meu coração para que eu tenha coragem de viver os novos começos que o Senhor preparou para mim.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 2,
    semana: 1,
    diaSemana: "Terça-feira",
    temaSemana: "Cura e Recomeço",
    titulo: "Deus Ainda Está Cuidando",
    versiculo: "1 Pedro 5:7 — Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
    reflexao: "Mesmo quando você não sente, Deus continua cuidando. Nos bastidores da sua dor, Ele permanece presente. O silêncio não significa ausência. Deus está trabalhando em áreas que você ainda não consegue enxergar.",
    oracao: "Pai, me ajuda a confiar no Teu cuidado mesmo quando minhas emoções me fazem duvidar.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 3,
    semana: 1,
    diaSemana: "Quarta-feira",
    temaSemana: "Cura e Recomeço",
    titulo: "Cura Para o Invisível",
    versiculo: "Salmos 147:3 — Sara os quebrantados de coração, e liga-lhes as feridas.",
    reflexao: "Há dores escondidas que ninguém vê, mas Deus conhece profundamente. Feridas emocionais também precisam de cuidado, e Deus não ignora nenhuma delas. Sua cura alcança até aquilo que você tenta esconder.",
    oracao: "Senhor, visita minhas dores silenciosas e restaura tudo aquilo que foi quebrado dentro de mim.",
    louvor: "Eu Cuido de Ti - Damares"
  },

  {
    dia: 4,
    semana: 1,
    diaSemana: "Quinta-feira",
    temaSemana: "Cura e Recomeço",
    titulo: "O Processo Também É Santo",
    versiculo: "Romanos 8:28 — Todas as coisas cooperam para o bem daqueles que amam a Deus.",
    reflexao: "Nem todo processo será confortável, mas isso não significa falta de propósito. Deus usa fases difíceis para fortalecer, ensinar e reposicionar. O processo pode estar moldando a mulher que você está se tornando.",
    oracao: "Deus, me dá força para confiar que até esse processo está cooperando para algo maior.",
    louvor: "Tá Chorando Por Quê? - Preto no Branco"
  },

  {
    dia: 5,
    semana: 1,
    diaSemana: "Sexta-feira",
    temaSemana: "Cura e Recomeço",
    titulo: "Você Não Precisa Ser Forte o Tempo Todo",
    versiculo: "Mateus 11:28 — Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
    reflexao: "Deus não exige que você suporte tudo sozinha. Existe descanso para quem decide entregar. Sua exaustão não é fracasso; pode ser um convite divino para depender mais de Deus.",
    oracao: "Jesus, eu entrego meu peso, meu cansaço e minhas dores. Seja meu descanso.",
    louvor: "Acalma o Meu Coração - Anderson Freire"
  },

  {
    dia: 6,
    semana: 1,
    diaSemana: "Sábado",
    temaSemana: "Cura e Recomeço",
    titulo: "Silêncio Também É Resposta",
    versiculo: "Salmos 46:10 — Aquietai-vos, e sabei que eu sou Deus.",
    reflexao: "Nem toda resposta virá imediatamente. Às vezes, Deus trabalha no silêncio para fortalecer sua fé. O silêncio de Deus nunca é vazio; ele pode estar cheio de preparação.",
    oracao: "Senhor, me ensina a confiar em Ti também nas fases silenciosas.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 7,
    semana: 1,
    diaSemana: "Domingo",
    temaSemana: "Cura e Recomeço",
    titulo: "Domingo de Renovação",
    versiculo: "Lamentações 3:22-23 — As misericórdias do Senhor são a causa de não sermos consumidos... renovam-se cada manhã.",
    reflexao: "Hoje é dia de lembrar: você sobreviveu a mais uma semana. Deus sustentou você até aqui. Reflita sobre o que foi curado, o que foi revelado e o que precisa ser entregue. Uma nova semana também pode ser uma nova chance.",
    oracao: "Pai, obrigada por me sustentar. Renova minhas forças, minha fé e minha esperança para o novo ciclo.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  }, 
    {
    dia: 8,
    semana: 2,
    diaSemana: "Segunda-feira",
    temaSemana: "Ansiedade e Paz",
    titulo: "Entregue Antes Que Te Consuma",
    versiculo: "Filipenses 4:6 — Não andeis ansiosos por coisa alguma...",
    reflexao: "A ansiedade tenta fazer você carregar hoje dores que talvez nem aconteçam amanhã. Deus não te chamou para viver dominada pelo medo, mas guiada pela confiança. Entregar não significa desistir; significa confiar que Deus pode sustentar o que você não controla.",
    oracao: "Senhor, eu entrego minhas preocupações. Acalma minha mente e fortalece minha confiança.",
    louvor: "Acalma o Meu Coração - Anderson Freire"
  },

  {
    dia: 9,
    semana: 2,
    diaSemana: "Terça-feira",
    temaSemana: "Ansiedade e Paz",
    titulo: "Sua Mente Também Precisa de Descanso",
    versiculo: "Mateus 6:34 — Não vos inquieteis, pois, pelo dia de amanhã...",
    reflexao: "Pensar demais pode ser tão exaustivo quanto carregar peso físico. Deus te lembra que viver presa ao amanhã rouba a força necessária para o hoje. Existe paz quando você aprende a viver um dia de cada vez.",
    oracao: "Pai, silencia minha mente e me ensina a descansar no presente que o Senhor me deu.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 10,
    semana: 2,
    diaSemana: "Quarta-feira",
    temaSemana: "Ansiedade e Paz",
    titulo: "Deus Está No Controle do Invisível",
    versiculo: "Provérbios 3:5 — Confia no Senhor de todo o teu coração...",
    reflexao: "A ansiedade cresce quando tentamos controlar tudo. Mas há paz quando entendemos que Deus já está à frente. Mesmo quando você não vê soluções, Deus continua vendo o quadro completo.",
    oracao: "Senhor, me ajuda a confiar mais no Teu controle do que nos meus medos.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 11,
    semana: 2,
    diaSemana: "Quinta-feira",
    temaSemana: "Ansiedade e Paz",
    titulo: "Respire: Nem Tudo Depende de Você",
    versiculo: "Salmos 55:22 — Lança o teu cuidado sobre o Senhor...",
    reflexao: "Você não precisa resolver tudo hoje. Nem toda batalha será vencida pela força; algumas serão vencidas pela entrega. Respirar também é um ato de fé.",
    oracao: "Deus, eu libero o peso do controle. Sustenta aquilo que eu não consigo carregar.",
    louvor: "O Escudo - Voz da Verdade"
  },

  {
    dia: 12,
    semana: 2,
    diaSemana: "Sexta-feira",
    temaSemana: "Ansiedade e Paz",
    titulo: "Paz Não É Ausência de Problemas",
    versiculo: "João 14:27 — Deixo-vos a paz, a minha paz vos dou.",
    reflexao: "A paz de Deus não depende de circunstâncias perfeitas. Ela existe mesmo em meio à confusão. É uma segurança interior que nasce da presença divina.",
    oracao: "Jesus, me ensina a viver com a Tua paz mesmo quando tudo parecer incerto.",
    louvor: "Eu Navegarei - Harpa Cristã"
  },

  {
    dia: 13,
    semana: 2,
    diaSemana: "Sábado",
    temaSemana: "Ansiedade e Paz",
    titulo: "Aquieta o Coração",
    versiculo: "Salmos 46:10 — Aquietai-vos, e sabei que eu sou Deus.",
    reflexao: "Nem sempre a solução começa com ação; às vezes começa com silêncio. Quando o coração aquieta, a alma consegue ouvir direção.",
    oracao: "Pai, aquieta meu interior e me ajuda a reconhecer Tua voz acima dos meus medos.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 14,
    semana: 2,
    diaSemana: "Domingo",
    temaSemana: "Ansiedade e Paz",
    titulo: "Domingo de Entrega",
    versiculo: "Isaías 26:3 — Tu conservarás em paz aquele cuja mente está firme em ti.",
    reflexao: "Hoje é dia de revisar tudo aquilo que roubou sua paz durante a semana. Entregue novamente. Deus não se cansa de receber aquilo que pesa em você.",
    oracao: "Senhor, eu Te entrego minha mente, minhas emoções e meu futuro. Guarda minha paz.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },
    {
    dia: 15,
    semana: 3,
    diaSemana: "Segunda-feira",
    temaSemana: "Identidade e Valor",
    titulo: "Você É Quem Deus Diz",
    versiculo: "Salmos 139:14 — Eu te louvo porque me fizeste de modo especial e admirável.",
    reflexao: "Sua identidade não precisa ser construída pela rejeição, comparação ou opinião alheia. Deus já estabeleceu seu valor antes mesmo de qualquer insegurança surgir. Você não é definida por quem ficou, por quem saiu ou por quem não soube te reconhecer. Seu valor nasce em Deus.",
    oracao: "Senhor, me ajuda a enxergar a mim mesma com os Teus olhos e não pelas minhas feridas.",
    louvor: "Quem Dizes Que Eu Sou - Hillsong em Português"
  },

  {
    dia: 16,
    semana: 3,
    diaSemana: "Terça-feira",
    temaSemana: "Identidade e Valor",
    titulo: "Comparação Rouba Identidade",
    versiculo: "Gálatas 6:4 — Examine cada um os próprios atos...",
    reflexao: "Quando você vive se medindo pela vida de outras pessoas, pode perder a beleza única da sua própria jornada. Deus não te criou para copiar; Ele te criou com propósito exclusivo.",
    oracao: "Pai, me livra da comparação e me ensina a valorizar o processo único que o Senhor tem comigo.",
    louvor: "Você Tem Valor - Aline Barros"
  },

  {
    dia: 17,
    semana: 3,
    diaSemana: "Quarta-feira",
    temaSemana: "Identidade e Valor",
    titulo: "Sua História Não Define Seu Destino",
    versiculo: "2 Coríntios 5:17 — Se alguém está em Cristo, nova criatura é.",
    reflexao: "Seu passado pode explicar algumas dores, mas não precisa determinar seu futuro. Em Deus, existe redenção, reconstrução e nova identidade.",
    oracao: "Jesus, cura minha visão sobre mim mesma e me ajuda a viver como nova criatura.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 18,
    semana: 3,
    diaSemana: "Quinta-feira",
    temaSemana: "Identidade e Valor",
    titulo: "Você Não Precisa Mendigar Amor",
    versiculo: "Romanos 5:8 — Deus prova o seu amor para conosco...",
    reflexao: "Quem entende o amor de Deus começa a perceber que não precisa se diminuir para ser escolhida. O amor divino restaura dignidade.",
    oracao: "Senhor, cura em mim toda carência que me faz aceitar menos do que mereço.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 19,
    semana: 3,
    diaSemana: "Sexta-feira",
    temaSemana: "Identidade e Valor",
    titulo: "Você É Preciosa",
    versiculo: "Isaías 43:4 — Visto que foste preciosa aos meus olhos...",
    reflexao: "Mesmo quando você não consegue perceber seu próprio brilho, Deus continua vendo valor. Sua existência tem significado.",
    oracao: "Pai, fortalece minha autoestima espiritual e me lembra diariamente do meu valor em Ti.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 20,
    semana: 3,
    diaSemana: "Sábado",
    temaSemana: "Identidade e Valor",
    titulo: "A Voz de Deus Precisa Ser Maior",
    versiculo: "João 10:27 — As minhas ovelhas ouvem a minha voz...",
    reflexao: "Muitas inseguranças nascem porque escutamos vozes erradas por tempo demais. Quando a voz de Deus se torna prioridade, mentiras perdem força.",
    oracao: "Senhor, silencia toda voz que tenta me diminuir e fortalece em mim apenas a Tua verdade.",
    louvor: "Me Ama - Diante do Trono"
  },

  {
    dia: 21,
    semana: 3,
    diaSemana: "Domingo",
    temaSemana: "Identidade e Valor",
    titulo: "Domingo de Reconstrução",
    versiculo: "Efésios 2:10 — Porque somos feitura sua...",
    reflexao: "Hoje é dia de lembrar que você está em construção divina. Deus não terminou sua história. Sua identidade está sendo restaurada pelas mãos do Criador.",
    oracao: "Deus, reconstrói em mim uma identidade firme, saudável e alinhada com o Teu propósito.",
    louvor: "Quem Dizes Que Eu Sou - Hillsong em Português"
  }, 
   {
    dia: 22,
    semana: 4,
    diaSemana: "Segunda-feira",
    temaSemana: "Fé e Confiança",
    titulo: "Fé Mesmo Sem Ver",
    versiculo: "Hebreus 11:1 — Ora, a fé é o firme fundamento das coisas que se esperam...",
    reflexao: "Fé não é ausência de dúvida; é escolher confiar mesmo quando nem tudo faz sentido. Deus continua sendo Deus, mesmo quando você ainda não vê respostas. A fé sustenta você no invisível até que a promessa se torne visível.",
    oracao: "Senhor, fortalece minha fé para confiar em Ti mesmo quando eu não conseguir enxergar o caminho completo.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 23,
    semana: 4,
    diaSemana: "Terça-feira",
    temaSemana: "Fé e Confiança",
    titulo: "Deus Não Se Atrasou",
    versiculo: "Eclesiastes 3:11 — Tudo fez formoso em seu tempo.",
    reflexao: "O céu não trabalha no relógio da ansiedade, mas no tempo perfeito de Deus. O que parece demora pode estar sendo alinhamento. Nem sempre é negação; às vezes é preparação.",
    oracao: "Pai, me ensina a confiar no Teu tempo sem permitir que a ansiedade roube minha esperança.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 24,
    semana: 4,
    diaSemana: "Quarta-feira",
    temaSemana: "Fé e Confiança",
    titulo: "Confiança Também É Entrega",
    versiculo: "Provérbios 3:5 — Confia no Senhor de todo o teu coração...",
    reflexao: "Confiar em Deus exige soltar o controle que você tanto tenta manter. A verdadeira confiança nasce quando você entende que Deus enxerga o que você não vê.",
    oracao: "Senhor, eu entrego minhas tentativas de controle e escolho descansar na Tua direção.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 25,
    semana: 4,
    diaSemana: "Quinta-feira",
    temaSemana: "Fé e Confiança",
    titulo: "Não Desista no Meio",
    versiculo: "Gálatas 6:9 — E não nos cansemos de fazer o bem...",
    reflexao: "Há processos que parecem longos justamente porque estão produzindo raízes profundas. Não abandone sua fé no meio do caminho. Algumas colheitas exigem perseverança silenciosa.",
    oracao: "Deus, me sustenta para continuar mesmo quando eu me sentir cansada.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 26,
    semana: 4,
    diaSemana: "Sexta-feira",
    temaSemana: "Fé e Confiança",
    titulo: "Milagres Também Crescem em Silêncio",
    versiculo: "Marcos 4:27 — E a semente brota e cresce, não sabendo ele como.",
    reflexao: "Nem todo milagre chega de forma instantânea; alguns crescem em silêncio, nos bastidores, enquanto você aprende a confiar. Deus trabalha até onde seus olhos não alcançam.",
    oracao: "Pai, aumenta minha confiança nos processos invisíveis que o Senhor já começou.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 27,
    semana: 4,
    diaSemana: "Sábado",
    temaSemana: "Fé e Confiança",
    titulo: "Quando o Medo Vier, Escolha Fé",
    versiculo: "Isaías 41:10 — Não temas, porque eu sou contigo.",
    reflexao: "O medo pode até bater, mas ele não precisa governar. Fé é lembrar que a presença de Deus é maior que qualquer cenário.",
    oracao: "Senhor, quando o medo aparecer, me lembra que Tua presença continua comigo.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 28,
    semana: 4,
    diaSemana: "Domingo",
    temaSemana: "Fé e Confiança",
    titulo: "Domingo de Renovação da Fé",
    versiculo: "Romanos 15:13 — Ora, o Deus da esperança vos encha de todo gozo e paz...",
    reflexao: "Hoje é dia de renovar sua esperança. Relembre tudo o que Deus já fez, reconheça o que Ele sustentou e fortaleça sua confiança para a próxima semana.",
    oracao: "Deus, renova minha fé, minha esperança e minha coragem para continuar.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  }, 
    {
    dia: 29,
    semana: 5,
    diaSemana: "Segunda-feira",
    temaSemana: "Relacionamentos e Sabedoria Emocional",
    titulo: "Nem Toda Conexão É Destino",
    versiculo: "Provérbios 4:23 — Sobre tudo o que se deve guardar, guarda o teu coração...",
    reflexao: "Nem toda pessoa que toca sua vida foi enviada para permanecer. Algumas conexões ensinam, outras distraem, outras ferem. Sabedoria emocional é entender que proteger o coração também é um ato espiritual.",
    oracao: "Senhor, me dá discernimento para reconhecer o que vem de Ti e coragem para soltar o que não vem.",
    louvor: "Cuida de Mim - Diante do Trono"
  },

  {
    dia: 30,
    semana: 5,
    diaSemana: "Terça-feira",
    temaSemana: "Relacionamentos e Sabedoria Emocional",
    titulo: "Carência Não Pode Escolher Por Você",
    versiculo: "Salmos 34:5 — Os que olham para ele estão radiantes de alegria.",
    reflexao: "Quando a carência conduz decisões, muitas vezes aceitamos menos do que merecemos. Deus não quer que sua necessidade emocional te leve para lugares que ferem sua paz.",
    oracao: "Pai, cura minhas carências e me ensina a fazer escolhas a partir de valor, não de vazio.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 31,
    semana: 5,
    diaSemana: "Quarta-feira",
    temaSemana: "Relacionamentos e Sabedoria Emocional",
    titulo: "Amor Não Deve Custar Sua Paz",
    versiculo: "1 Coríntios 13:4 — O amor é paciente, o amor é bondoso...",
    reflexao: "Relacionamentos saudáveis não são perfeitos, mas não deveriam destruir sua dignidade, paz ou identidade. O amor verdadeiro não exige que você se perca para ser aceita.",
    oracao: "Deus, me ensina a reconhecer relações que refletem paz, respeito e verdade.",
    louvor: "Me Ama - Diante do Trono"
  },

  {
    dia: 32,
    semana: 5,
    diaSemana: "Quinta-feira",
    temaSemana: "Relacionamentos e Sabedoria Emocional",
    titulo: "Aprenda a Soltar",
    versiculo: "Eclesiastes 3:6 — Tempo de guardar, e tempo de lançar fora.",
    reflexao: "Algumas dores permanecem porque insistimos em segurar o que Deus já mostrou que precisa ir. Soltar também pode ser cura. Nem toda despedida é perda; às vezes é proteção.",
    oracao: "Senhor, me fortalece para abrir mão daquilo que já não me faz bem.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 33,
    semana: 5,
    diaSemana: "Sexta-feira",
    temaSemana: "Relacionamentos e Sabedoria Emocional",
    titulo: "Discernimento Também É Proteção",
    versiculo: "Tiago 1:5 — Se algum de vós tem falta de sabedoria, peça-a a Deus.",
    reflexao: "Nem sempre o problema é sentir; às vezes é interpretar errado. Discernimento emocional evita que você confunda atenção com amor, intensidade com verdade ou apego com propósito.",
    oracao: "Pai, me dá sabedoria para enxergar além da emoção e escolher com clareza.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 34,
    semana: 5,
    diaSemana: "Sábado",
    temaSemana: "Relacionamentos e Sabedoria Emocional",
    titulo: "Quem É Para Sua Paz Não Compete Com Sua Cura",
    versiculo: "Colossenses 3:15 — Seja a paz de Cristo o árbitro em vosso coração.",
    reflexao: "Pessoas certas não sabotam sua cura, não brincam com sua confusão e não intensificam feridas desnecessárias. Paz também é critério.",
     {
    dia: 36,
    semana: 6,
    diaSemana: "Segunda-feira",
    temaSemana: "Disciplina e Constância",
    titulo: "Constância Também É Fé",
    versiculo: "Gálatas 6:9 — E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos.",
    reflexao: "Nem toda transformação acontece em momentos intensos; muitas nascem na constância silenciosa. Permanecer também é espiritual. Deus trabalha em quem continua, mesmo quando ainda não vê grandes resultados.",
    oracao: "Senhor, me dá disciplina para continuar fazendo o que preciso, mesmo nos dias em que eu não sentir vontade.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 37,
    semana: 6,
    diaSemana: "Terça-feira",
    temaSemana: "Disciplina e Constância",
    titulo: "Pequenos Passos Também Constroem",
    versiculo: "Zacarias 4:10 — Pois quem despreza o dia dos humildes começos?",
    reflexao: "Você não precisa fazer tudo de uma vez para crescer. Pequenas decisões consistentes podem gerar grandes transformações. Deus valoriza processos.",
    oracao: "Pai, me ensina a honrar pequenos começos e permanecer firme no processo.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 38,
    semana: 6,
    diaSemana: "Quarta-feira",
    temaSemana: "Disciplina e Constância",
    titulo: "Motivação Passa, Propósito Sustenta",
    versiculo: "1 Coríntios 15:58 — Sede firmes e constantes...",
    reflexao: "Nem todos os dias você estará motivada, mas propósito pode sustentar sua permanência. Disciplina é decidir continuar mesmo quando a emoção oscila.",
    oracao: "Deus, fortalece meu propósito para que eu não dependa apenas de motivação.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 39,
    semana: 6,
    diaSemana: "Quinta-feira",
    temaSemana: "Disciplina e Constância",
    titulo: "Vença a Si Mesma Primeiro",
    versiculo: "Provérbios 16:32 — Melhor é o que domina o seu espírito...",
    reflexao: "Muitas das maiores batalhas não estão fora, mas dentro: procrastinação, medo, distração e autossabotagem. Crescimento exige governo interno.",
    oracao: "Senhor, me ajuda a vencer hábitos que atrasam meu crescimento.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 40,
    semana: 6,
    diaSemana: "Sexta-feira",
    temaSemana: "Disciplina e Constância",
    titulo: "Obediência Diária Gera Transformação",
    versiculo: "Lucas 16:10 — Quem é fiel no pouco também é fiel no muito.",
    reflexao: "Grandes destinos costumam ser construídos por pequenas fidelidades repetidas. O que você faz diariamente importa.",
    oracao: "Pai, me ensina a ser fiel nas pequenas responsabilidades e constante no que o Senhor confiou a mim.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 41,
    semana: 6,
    diaSemana: "Sábado",
    temaSemana: "Disciplina e Constância",
    titulo: "Recomece Quantas Vezes Precisar",
    versiculo: "Lamentações 3:23 — Renovam-se cada manhã.",
    reflexao: "Disciplina não significa perfeição; significa não desistir. Você pode recomeçar hoje, amanhã e quantas vezes forem necessárias.",
    oracao: "Deus, me dá humildade para recomeçar sem culpa e coragem para continuar.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 42,
    semana: 6,
    diaSemana: "Domingo",
    temaSemana: "Disciplina e Constância",
    titulo: "Domingo de Realinhamento",
    versiculo: "Hebreus 12:11 — No momento, nenhuma disciplina parece motivo de alegria...",
    reflexao: "Hoje é dia de revisar sua semana, reconhecer onde avançou e onde precisa ajustar. Disciplina também é recalcular rota sem abandonar destino.",
    oracao: "Senhor, realinha minha rotina, minhas escolhas e meu foco com o propósito que o Senhor tem para mim.",
    louvor: "Não Pare - Midian Lima"
  }, oracao: "Senhor, alinha minha vida a relações que cooperem com minha paz e crescimento.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 35,
    semana: 5,
    diaSemana: "Domingo",
    temaSemana: "Relacionamentos e Sabedoria Emocional",
    titulo: "Domingo de Limpeza Emocional",
    versiculo: "2 Timóteo 1:7 — Porque Deus não nos deu espírito de temor...",
    reflexao: "Hoje é dia de revisar vínculos, emoções e pesos. Pergunte a si mesma: isso me aproxima da paz ou me afasta? Deus também cura escolhas emocionais.",
    oracao: "Pai, limpa meu coração de confusões, dependências e vínculos que não cooperam com meu propósito.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },
  {
    dia: 43,
    semana: 7,
    diaSemana: "Segunda-feira",
    temaSemana: "Propósito e Direção",
    titulo: "Você Não Está Aqui Por Acaso",
    versiculo: "Jeremias 29:11 — Porque eu bem sei os pensamentos que penso de vós...",
    reflexao: "Mesmo quando você se sente perdida, isso não significa ausência de propósito. Deus não cria vidas aleatórias. Existe direção, significado e intenção sobre sua existência, inclusive nas fases em que tudo parece confuso.",
    oracao: "Senhor, me ajuda a confiar que minha vida tem propósito, mesmo quando eu ainda estiver descobrindo.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 44,
    semana: 7,
    diaSemana: "Terça-feira",
    temaSemana: "Propósito e Direção",
    titulo: "Nem Toda Porta É Seu Caminho",
    versiculo: "Provérbios 3:6 — Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
    reflexao: "Nem toda oportunidade representa direção divina. Às vezes, discernimento é tão importante quanto coragem. Deus não quer apenas abrir portas; Ele quer alinhar caminhos.",
    oracao: "Pai, me dá sensibilidade para reconhecer o que vem de Ti e coragem para recusar o que me desvia.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 45,
    semana: 7,
    diaSemana: "Quarta-feira",
    temaSemana: "Propósito e Direção",
    titulo: "Confusão Não Precisa Ser Morada",
    versiculo: "1 Coríntios 14:33 — Porque Deus não é Deus de confusão...",
    reflexao: "Há fases em que tudo parece nebuloso, mas Deus não trabalha para te manter perdida. Mesmo em processos de dúvida, Ele pode trazer clareza no tempo certo.",
    oracao: "Senhor, organiza meus pensamentos e direciona meus passos com clareza.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 46,
    semana: 7,
    diaSemana: "Quinta-feira",
    temaSemana: "Propósito e Direção",
    titulo: "Seu Processo Também Prepara Seu Chamado",
    versiculo: "Romanos 8:28 — Todas as coisas cooperam para o bem...",
    reflexao: "Nem toda fase é destino final; algumas são preparação. Até dores e atrasos podem desenvolver habilidades, maturidade e discernimento para aquilo que Deus está formando.",
    oracao: "Deus, me ajuda a enxergar propósito até nas fases que eu ainda não compreendo.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 47,
    semana: 7,
    diaSemana: "Sexta-feira",
    temaSemana: "Propósito e Direção",
    titulo: "Pare de Se Diminuir",
    versiculo: "Efésios 2:10 — Porque somos feitura sua...",
    reflexao: "Quando você se enxerga menor do que Deus te criou para ser, pode acabar vivendo abaixo do seu chamado. Humildade não é se diminuir; é reconhecer que Deus pode usar sua vida.",
    oracao: "Pai, remove de mim toda visão distorcida que me impede de viver plenamente meu propósito.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 48,
    semana: 7,
    diaSemana: "Sábado",
    temaSemana: "Propósito e Direção",
    titulo: "Direção Exige Movimento",
    versiculo: "Salmos 119:105 — Lâmpada para os meus pés é tua palavra.",
    reflexao: "Muitas vezes Deus ilumina o próximo passo, não o caminho inteiro. Direção costuma ser revelada em movimento, não em paralisia.",
    oracao: "Senhor, me dá coragem para dar os passos que já posso dar enquanto confio nos próximos.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 49,
    semana: 7,
    diaSemana: "Domingo",
    temaSemana: "Propósito e Direção",
    titulo: "Domingo de Alinhamento",
    versiculo: "Salmos 37:23 — Os passos de um homem bom são confirmados pelo Senhor.",
    reflexao: "Hoje é dia de revisar sua rota. O que tem te aproximado do propósito? O que tem te distraído? Deus também realinha caminhos.",
    oracao: "Senhor, confirma meus passos, corrige minhas rotas e fortalece meu coração para Te seguir.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },
   {
    dia: 50,
    semana: 8,
    diaSemana: "Segunda-feira",
    temaSemana: "Perseverança e Força",
    titulo: "Continue, Mesmo Cansada",
    versiculo: "Isaías 40:31 — Mas os que esperam no Senhor renovarão as suas forças...",
    reflexao: "Cansaço não significa incapacidade; significa que você tem carregado peso. Deus não ignora seu desgaste. Ele renova forças para quem escolhe permanecer, mesmo quando o corpo e a alma pedem pausa.",
    oracao: "Senhor, renova minhas forças hoje. Me sustenta onde estou cansada demais para continuar sozinha.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 51,
    semana: 8,
    diaSemana: "Terça-feira",
    temaSemana: "Perseverança e Força",
    titulo: "Dias Difíceis Também Passam",
    versiculo: "Salmos 30:5 — O choro pode durar uma noite, mas a alegria vem pela manhã.",
    reflexao: "Algumas fases parecem longas quando estamos dentro delas, mas nenhuma noite dura para sempre. Deus continua presente até nas temporadas mais difíceis.",
    oracao: "Pai, me ajuda a lembrar que essa fase não define para sempre minha história.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 52,
    semana: 8,
    diaSemana: "Quarta-feira",
    temaSemana: "Perseverança e Força",
    titulo: "Não Confunda Pausa Com Desistência",
    versiculo: "Eclesiastes 3:1 — Tudo tem o seu tempo determinado.",
    reflexao: "Às vezes você precisa respirar, reorganizar e descansar — isso não é fracasso. Pausar pode ser estratégia; desistir é diferente.",
    oracao: "Deus, me dá sabedoria para descansar sem abandonar o propósito.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 53,
    semana: 8,
    diaSemana: "Quinta-feira",
    temaSemana: "Perseverança e Força",
    titulo: "Sua Resistência Está Te Moldando",
    versiculo: "Tiago 1:3 — A prova da vossa fé produz a perseverança.",
    reflexao: "Cada batalha enfrentada com fé desenvolve resistência interior. Você pode estar mais forte do que imagina, justamente porque sobreviveu ao que achou que te destruiria.",
    oracao: "Senhor, transforma minhas lutas em força e minha resistência em maturidade.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 54,
    semana: 8,
    diaSemana: "Sexta-feira",
    temaSemana: "Perseverança e Força",
    titulo: "Não Pare no Meio do Processo",
    versiculo: "Filipenses 1:6 — Aquele que começou boa obra em vós há de completá-la.",
    reflexao: "Deus não inicia processos sem intenção de continuidade. O meio pode ser confuso, mas não é o fim. Continue.",
    oracao: "Pai, me fortalece para não abandonar no meio aquilo que o Senhor começou.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 55,
    semana: 8,
    diaSemana: "Sábado",
    temaSemana: "Perseverança e Força",
    titulo: "Força Também Nasce da Entrega",
    versiculo: "2 Coríntios 12:9 — A minha graça te basta...",
    reflexao: "Você não precisa ser invencível para ser forte. Há força em reconhecer limites e depender de Deus.",
    oracao: "Senhor, me ensina a encontrar força na Tua graça, não apenas na minha resistência.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 56,
    semana: 8,
    diaSemana: "Domingo",
    temaSemana: "Perseverança e Força",
    titulo: "Domingo de Renovação da Força",
    versiculo: "Josué 1:9 — Sê forte e corajoso...",
    reflexao: "Hoje é dia de reconhecer o quanto Deus já te sustentou. Você chegou até aqui. A próxima semana também pode ser enfrentada com coragem renovada.",
    oracao: "Deus, fortalece meu coração, minha mente e minha fé para continuar.",
    louvor: "Não Pare - Midian Lima"
  },
  {
    dia: 57,
    semana: 9,
    diaSemana: "Segunda-feira",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Gratidão Também É Cura",
    versiculo: "1 Tessalonicenses 5:18 — Em tudo dai graças...",
    reflexao: "Gratidão não significa ignorar dores, mas reconhecer que, mesmo em meio a elas, ainda existem razões para perceber a presença de Deus. Um coração grato encontra força onde antes só via falta.",
    oracao: "Senhor, abre meus olhos para reconhecer Tua bondade até nos detalhes que costumo ignorar.",
    louvor: "Obrigado - Diante do Trono"
  },

  {
    dia: 58,
    semana: 9,
    diaSemana: "Terça-feira",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Nem Tudo Que Falta Define Sua Vida",
    versiculo: "Salmos 103:2 — Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.",
    reflexao: "Focar apenas no que falta pode te impedir de valorizar o que já existe. Deus já sustentou você em dias que pareciam impossíveis.",
    oracao: "Pai, me ensina a não viver apenas pela escassez, mas também pela memória da Tua fidelidade.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 59,
    semana: 9,
    diaSemana: "Quarta-feira",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Contentamento É Força Interior",
    versiculo: "Filipenses 4:11 — Aprendi a contentar-me com o que tenho.",
    reflexao: "Contentamento não é acomodação; é paz interior que não depende de comparação constante. Há força em aprender a viver sem que a falta de algo destrua tudo.",
    oracao: "Senhor, gera em mim contentamento saudável enquanto continuo crescendo.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 60,
    semana: 9,
    diaSemana: "Quinta-feira",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Celebre Pequenas Vitórias",
    versiculo: "Zacarias 4:10 — Não desprezeis os pequenos começos.",
    reflexao: "Você não precisa esperar grandes marcos para reconhecer progresso. Pequenas vitórias também são respostas.",
    oracao: "Deus, me ajuda a valorizar cada avanço e reconhecer Teu agir em cada etapa.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 61,
    semana: 9,
    diaSemana: "Sexta-feira",
    temaSemana: "Gratidão e Contentamento",
    titulo: "A Pressa Pode Roubar a Presença",
    versiculo: "Salmos 46:10 — Aquietai-vos...",
    reflexao: "Quando você vive correndo para o próximo, pode deixar de perceber o que Deus está fazendo agora. Gratidão exige presença.",
    oracao: "Pai, desacelera meu coração para que eu perceba Teu cuidado no hoje.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 62,
    semana: 9,
    diaSemana: "Sábado",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Sua História Tem Motivos Para Gratidão",
    versiculo: "Salmos 136:1 — Rendei graças ao Senhor, porque ele é bom.",
    reflexao: "Mesmo com dores, sua trajetória também carrega livramentos, aprendizados e sustento. Deus esteve presente.",
    oracao: "Senhor, me lembra de tudo aquilo que o Senhor já fez por mim.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 63,
    semana: 9,
    diaSemana: "Domingo",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Domingo de Memória e Gratidão",
    versiculo: "Salmos 77:11 — Recordarei os feitos do Senhor.",
    reflexao: "Hoje é dia de lembrar: Deus já foi fiel. Revisite a semana, reconheça sustento, aprendizados e pequenos milagres.",
    oracao: "Pai, obrigada por cada cuidado visível e invisível. Que a gratidão fortaleça minha fé.",
    louvor: "Obrigado - Diante do Trono"
  },

  {
    dia: 64,
    semana: 10,
    diaSemana: "Segunda-feira",
    temaSemana: "Libertação e Desapego",
    titulo: "Soltar Também É Crescer",
    versiculo: "Isaías 43:18 — Não vos lembreis das coisas passadas...",
    reflexao: "Há fases em que crescer exige desapegar. Nem tudo que fez parte da sua história precisa continuar definindo seu futuro.",
    oracao: "Senhor, me fortalece para soltar o que já não coopera com minha cura.",
    louvor: "Queima Outra Vez - Thalles Roberto"
  },

  {
    dia: 65,
    semana: 10,
    diaSemana: "Terça-feira",
    temaSemana: "Libertação e Desapego",
    titulo: "Nem Toda Saudade É Direção",
    versiculo: "Eclesiastes 3:6 — Tempo de guardar, e tempo de lançar fora.",
    reflexao: "Sentir falta não significa que precisa voltar. Às vezes, saudade é apenas memória, não propósito.",
    oracao: "Pai, me dá discernimento para não confundir emoção com direção.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 66,
    semana: 10,
    diaSemana: "Quarta-feira",
    temaSemana: "Libertação e Desapego",
    titulo: "Quebre Correntes Invisíveis",
    versiculo: "João 8:36 — Se o Filho vos libertar, verdadeiramente sereis livres.",
    reflexao: "Existem prisões emocionais que não aparecem por fora: culpa, medo, dependência, padrões. Deus também liberta dessas correntes.",
    oracao: "Jesus, quebra em mim tudo aquilo que ainda me mantém presa.",
    louvor: "Liberta-me de Mim - Ministério Zoe"
  },

  {
    dia: 67,
    semana: 10,
    diaSemana: "Quinta-feira",
    temaSemana: "Libertação e Desapego",
    titulo: "Culpa Não Pode Governar Seu Futuro",
    versiculo: "Romanos 8:1 — Nenhuma condenação há para os que estão em Cristo.",
    reflexao: "Aprender com erros é crescimento; viver aprisionada a eles é peso desnecessário. Deus oferece redenção.",
    oracao: "Senhor, cura minha culpa e me ajuda a caminhar em liberdade.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 68,
    semana: 10,
    diaSemana: "Sexta-feira",
    temaSemana: "Libertação e Desapego",
    titulo: "Você Não Precisa Repetir Ciclos",
    versiculo: "2 Coríntios 5:17 — Nova criatura é.",
    reflexao: "Mudança real também significa interromper padrões que machucam. Em Deus, ciclos podem ser quebrados.",
    oracao: "Pai, me ajuda a reconhecer e romper padrões que já não pertencem à minha nova fase.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 69,
    semana: 10,
    diaSemana: "Sábado",
    temaSemana: "Libertação e Desapego",
    titulo: "Liberdade Também É Escolha",
    versiculo: "Gálatas 5:1 — Permanecei firmes e não vos submetais de novo...",
    reflexao: "Depois da libertação, existe manutenção. Você também participa escolhendo não voltar para aquilo que Deus já te tirou.",
    oracao: "Senhor, fortalece minha decisão de permanecer livre.",
    louvor: "Queima Outra Vez - Thalles Roberto"
  },

  {
    dia: 70,
    semana: 10,
    diaSemana: "Domingo",
    temaSemana: "Libertação e Desapego",
    titulo: "Domingo de Libertação",
    versiculo: "Salmos 51:10 — Cria em mim, ó Deus, um coração puro.",
    reflexao: "Hoje é dia de limpeza espiritual e emocional. Entregue pesos, vínculos, culpas e medos. Deus continua restaurando.",
    oracao: "Pai, purifica meu coração e fortalece minha liberdade.",
    louvor: "Liberta-me de Mim - Ministério Zoe"
  },
  {
    dia: 71,
    semana: 11,
    diaSemana: "Segunda-feira",
    temaSemana: "Intimidade com Deus",
    titulo: "Presença Antes de Respostas",
    versiculo: "Jeremias 29:13 — Buscar-me-eis e me achareis quando me buscardes de todo o vosso coração.",
    reflexao: "Nem toda busca espiritual começa por respostas; muitas começam por presença. Antes de entender tudo, você pode aprender a permanecer com Deus. Intimidade não nasce da pressa, mas da constância.",
    oracao: "Senhor, me ensina a Te buscar não apenas pelo que preciso, mas por quem Tu és.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 72,
    semana: 11,
    diaSemana: "Terça-feira",
    temaSemana: "Intimidade com Deus",
    titulo: "Silêncio Também Pode Ser Encontro",
    versiculo: "Salmos 46:10 — Aquietai-vos, e sabei que eu sou Deus.",
    reflexao: "Em um mundo barulhento, muitas vezes Deus fala no silêncio. Aquietar-se não é ausência de espiritualidade; pode ser profundidade.",
    oracao: "Pai, silencia minhas distrações para que eu reconheça Tua voz.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 73,
    semana: 11,
    diaSemana: "Quarta-feira",
    temaSemana: "Intimidade com Deus",
    titulo: "Relacionamento, Não Performance",
    versiculo: "Mateus 6:6 — Entra no teu quarto e ora a teu Pai em secreto.",
    reflexao: "Deus não procura performance religiosa perfeita; Ele deseja relacionamento sincero. Intimidade cresce quando a fé deixa de ser aparência e se torna conexão real.",
    oracao: "Senhor, remove de mim toda superficialidade espiritual e aprofunda meu relacionamento Contigo.",
    louvor: "Me Ama - Diante do Trono"
  },

  {
    dia: 74,
    semana: 11,
    diaSemana: "Quinta-feira",
    temaSemana: "Intimidade com Deus",
    titulo: "Permaneça",
    versiculo: "João 15:4 — Permanecei em mim, e eu permanecerei em vós.",
    reflexao: "Nem sempre o segredo é fazer mais; às vezes é permanecer melhor. Constância na presença transforma mais do que impulsos momentâneos.",
    oracao: "Jesus, me ajuda a permanecer em Ti nos dias bons e nos difíceis.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 75,
    semana: 11,
    diaSemana: "Sexta-feira",
    temaSemana: "Intimidade com Deus",
    titulo: "Ore Com Verdade",
    versiculo: "Romanos 8:26 — O Espírito ajuda em nossa fraqueza.",
    reflexao: "Você não precisa usar palavras perfeitas para se conectar com Deus. Honestidade também é oração.",
    oracao: "Pai, me ensina a orar com sinceridade, até quando eu não souber como começar.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 76,
    semana: 11,
    diaSemana: "Sábado",
    temaSemana: "Intimidade com Deus",
    titulo: "Deus Também Está Nos Detalhes",
    versiculo: "Lucas 12:7 — Até os cabelos da vossa cabeça estão todos contados.",
    reflexao: "A intimidade cresce quando você percebe que Deus não está apenas nos grandes milagres, mas também nos detalhes diários.",
    oracao: "Senhor, abre meus olhos para perceber Tua presença nas pequenas coisas.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 77,
    semana: 11,
    diaSemana: "Domingo",
    temaSemana: "Intimidade com Deus",
    titulo: "Domingo de Presença",
    versiculo: "Tiago 4:8 — Chegai-vos a Deus, e ele se chegará a vós.",
    reflexao: "Hoje é dia de desacelerar e realinhar sua alma. Mais do que pedir, permaneça. Mais do que correr, escute.",
    oracao: "Pai, fortalece minha intimidade Contigo e faz da Tua presença meu lugar seguro.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 78,
    semana: 12,
    diaSemana: "Segunda-feira",
    temaSemana: "Transformação e Novo Ciclo",
    titulo: "Você Pode Começar de Novo",
    versiculo: "2 Coríntios 5:17 — Se alguém está em Cristo, nova criatura é.",
    reflexao: "Recomeçar não apaga sua história, mas redefine sua direção. Em Deus, transformação não é teoria; é possibilidade real.",
    oracao: "Senhor, me ajuda a viver o novo sem permanecer presa ao velho.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 79,
    semana: 12,
    diaSemana: "Terça-feira",
    temaSemana: "Transformação e Novo Ciclo",
    titulo: "Crescer Também Exige Deixar",
    versiculo: "Isaías 43:19 — Eis que faço coisa nova.",
    reflexao: "Novos ciclos muitas vezes exigem desapego de versões antigas, hábitos antigos e medos antigos.",
    oracao: "Pai, me fortalece para deixar para trás tudo que impede meu crescimento.",
    louvor: "Queima Outra Vez - Thalles Roberto"
  },

  {
    dia: 80,
    semana: 12,
    diaSemana: "Quarta-feira",
    temaSemana: "Transformação e Novo Ciclo",
    titulo: "Mudança Verdadeira Começa Dentro",
    versiculo: "Romanos 12:2 — Transformai-vos pela renovação da vossa mente.",
    reflexao: "Transformação duradoura não começa apenas em circunstâncias; começa na mente, visão e escolhas.",
    oracao: "Deus, renova minha mente para que minha vida reflita essa transformação.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 81,
    semana: 12,
    diaSemana: "Quinta-feira",
    temaSemana: "Transformação e Novo Ciclo",
    titulo: "Seu Novo Ainda Está Sendo Construído",
    versiculo: "Filipenses 1:6 — Aquele que começou boa obra...",
    reflexao: "Transformação é processo. Não se cobre perfeição imediata. Deus ainda está construindo.",
    oracao: "Senhor, me dá paciência com meu processo e fé no que o Senhor está formando.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 82,
    semana: 12,
    diaSemana: "Sexta-feira",
    temaSemana: "Transformação e Novo Ciclo",
    titulo: "Não Volte Para Versões Que Deus Já Curou",
    versiculo: "Gálatas 5:1 — Para a liberdade foi que Cristo nos libertou.",
    reflexao: "Crescimento também é decidir não retornar emocionalmente para lugares dos quais Deus já te tirou.",
    oracao: "Pai, fortalece minha identidade nova e minha permanência na cura.",
    louvor: "Liberta-me de Mim - Ministério Zoe"
  },

  {
    dia: 83,
    semana: 12,
    diaSemana: "Sábado",
    temaSemana: "Transformação e Novo Ciclo",
    titulo: "Você Está Florescendo",
    versiculo: "Eclesiastes 3:11 — Tudo fez formoso em seu tempo.",
    reflexao: "Mesmo que ainda não pareça completo, crescimento está acontecendo. Florescimento também tem etapas invisíveis.",
    oracao: "Senhor, me ajuda a confiar no florescimento que o Senhor está desenvolvendo em mim.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 84,
    semana: 12,
    diaSemana: "Domingo",
    temaSemana: "Transformação e Novo Ciclo",
    titulo: "Domingo de Novo Começo",
    versiculo: "Lamentações 3:23 — Renovam-se cada manhã.",
    reflexao: "Hoje não é apenas fim de semana; pode ser início de uma nova fase. Deus continua renovando.",
    oracao: "Pai, obrigada por cada transformação. Renova minha fé para os próximos ciclos.",
    louvor: "Renova-me - Aline Barros"
  },
  {
    dia: 85,
    semana: 13,
    diaSemana: "Segunda-feira",
    temaSemana: "Sabedoria e Decisões",
    titulo: "Nem Toda Oportunidade É Direção",
    versiculo: "Tiago 1:5 — Se algum de vós tem falta de sabedoria, peça-a a Deus.",
    reflexao: "Nem tudo que aparece diante de você foi feito para ser agarrado. Algumas portas testam discernimento, não destino. Sabedoria é saber escolher com clareza, não apenas reagir por impulso.",
    oracao: "Senhor, me dá sabedoria para reconhecer o que me aproxima do Teu propósito e o que me distrai.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 86,
    semana: 13,
    diaSemana: "Terça-feira",
    temaSemana: "Sabedoria e Decisões",
    titulo: "Decisões Emocionais Também Têm Consequências",
    versiculo: "Provérbios 4:7 — A sabedoria é a coisa principal.",
    reflexao: "Sentir é humano, mas decidir apenas pela emoção pode custar paz. Deus pode te ensinar a equilibrar coração e discernimento.",
    oracao: "Pai, me ajuda a não decidir apenas pelo que sinto, mas também pelo que é sábio.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 87,
    semana: 13,
    diaSemana: "Quarta-feira",
    temaSemana: "Sabedoria e Decisões",
    titulo: "Paz Também É Resposta",
    versiculo: "Colossenses 3:15 — Seja a paz de Cristo o árbitro em vosso coração.",
    reflexao: "Nem toda resposta vem em palavras; às vezes, Deus confirma caminhos por paz ou alerta por inquietação.",
    oracao: "Senhor, me ensina a reconhecer Tua direção também através da paz.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 88,
    semana: 13,
    diaSemana: "Quinta-feira",
    temaSemana: "Sabedoria e Decisões",
    titulo: "Espere Com Clareza",
    versiculo: "Eclesiastes 3:1 — Tudo tem o seu tempo determinado.",
    reflexao: "Pressa pode empurrar decisões prematuras. Nem toda demora é perda; algumas são proteção.",
    oracao: "Deus, me dá maturidade para esperar quando ainda não há clareza.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 89,
    semana: 13,
    diaSemana: "Sexta-feira",
    temaSemana: "Sabedoria e Decisões",
    titulo: "Ouça Além do Barulho",
    versiculo: "João 10:27 — As minhas ovelhas ouvem a minha voz.",
    reflexao: "Muitas vozes podem confundir, mas direção real exige aprender a distinguir a voz de Deus acima de opiniões externas.",
    oracao: "Pai, afina minha percepção espiritual para ouvir Tua voz acima das distrações.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 90,
    semana: 13,
    diaSemana: "Sábado",
    temaSemana: "Sabedoria e Decisões",
    titulo: "Discernimento Também É Proteção",
    versiculo: "Provérbios 3:21 — Guarda a verdadeira sabedoria.",
    reflexao: "Algumas dores seriam evitadas se houvesse mais discernimento no início. Deus não apenas consola; Ele também direciona.",
    oracao: "Senhor, protege minha vida através da sabedoria.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 91,
    semana: 13,
    diaSemana: "Domingo",
    temaSemana: "Sabedoria e Decisões",
    titulo: "Domingo de Clareza",
    versiculo: "Salmos 32:8 — Instruir-te-ei e ensinar-te-ei o caminho.",
    reflexao: "Hoje é dia de revisar decisões, motivações e rotas. Deus também realinha escolhas.",
    oracao: "Pai, ilumina minhas decisões e fortalece meu discernimento para a próxima semana.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 92,
    semana: 14,
    diaSemana: "Segunda-feira",
    temaSemana: "Coragem e Superação",
    titulo: "Coragem Não É Ausência de Medo",
    versiculo: "Josué 1:9 — Sê forte e corajoso...",
    reflexao: "Coragem não significa nunca sentir medo; significa não permitir que ele governe seus passos. Deus pode fortalecer você mesmo em cenários desafiadores.",
    oracao: "Senhor, me dá coragem para seguir mesmo quando eu sentir medo.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 93,
    semana: 14,
    diaSemana: "Terça-feira",
    temaSemana: "Coragem e Superação",
    titulo: "Você Já Sobreviveu Antes",
    versiculo: "Salmos 27:1 — O Senhor é a minha luz e a minha salvação; a quem temerei?",
    reflexao: "Há batalhas que você já venceu e esqueceu de reconhecer. Sua história também carrega provas de resistência.",
    oracao: "Pai, me lembra da força que o Senhor já desenvolveu em mim.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 94,
    semana: 14,
    diaSemana: "Quarta-feira",
    temaSemana: "Coragem e Superação",
    titulo: "Não Se Subestime",
    versiculo: "Filipenses 4:13 — Posso todas as coisas naquele que me fortalece.",
    reflexao: "Muitas vezes você é mais capaz do que sua insegurança permite acreditar. Deus também fortalece capacidades.",
    oracao: "Senhor, cura minha autolimitação e fortalece minha confiança.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 95,
    semana: 14,
    diaSemana: "Quinta-feira",
    temaSemana: "Coragem e Superação",
    titulo: "Atravesse",
    versiculo: "Isaías 43:2 — Quando passares pelas águas, eu serei contigo.",
    reflexao: "Algumas fases não podem ser evitadas, apenas atravessadas. A boa notícia é que Deus não te abandona no meio.",
    oracao: "Pai, me sustenta enquanto eu atravesso processos difíceis.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 96,
    semana: 14,
    diaSemana: "Sexta-feira",
    temaSemana: "Coragem e Superação",
    titulo: "Sua Dor Não Será Seu Fim",
    versiculo: "Romanos 8:18 — As aflições do tempo presente não podem ser comparadas...",
    reflexao: "Dor pode ser capítulo, mas não precisa ser conclusão. Deus ainda escreve além da dor.",
    oracao: "Senhor, me ajuda a não definir meu futuro pela dor do presente.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 97,
    semana: 14,
    diaSemana: "Sábado",
    temaSemana: "Coragem e Superação",
    titulo: "Levante Outra Vez",
    versiculo: "Provérbios 24:16 — O justo cai sete vezes e se levanta.",
    reflexao: "Cair não encerra sua jornada. Reerguer-se também faz parte da força.",
    oracao: "Deus, me fortalece para levantar quantas vezes forem necessárias.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 98,
    semana: 14,
    diaSemana: "Domingo",
    temaSemana: "Coragem e Superação",
    titulo: "Domingo de Coragem Renovada",
    versiculo: "2 Timóteo 1:7 — Deus não nos deu espírito de temor.",
    reflexao: "Hoje é dia de renovar sua coragem. A próxima semana não precisa ser enfrentada com o peso do medo antigo.",
    oracao: "Pai, renova minha força e minha coragem para viver o novo.",
    louvor: "Não Pare - Midian Lima"
  },
  {
    dia: 99,
    semana: 15,
    diaSemana: "Segunda-feira",
    temaSemana: "Espera e Paciência",
    titulo: "Esperar Também É Movimento",
    versiculo: "Salmos 27:14 — Espera no Senhor, anima-te...",
    reflexao: "Esperar em Deus não significa paralisar a vida, mas desenvolver confiança enquanto o tempo amadurece processos. Algumas respostas exigem preparação antes da chegada.",
    oracao: "Senhor, me ensina a esperar sem desespero e a confiar sem ansiedade.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 100,
    semana: 15,
    diaSemana: "Terça-feira",
    temaSemana: "Espera e Paciência",
    titulo: "Nem Toda Demora É Negação",
    versiculo: "Habacuque 2:3 — Ainda que demore, espera-o...",
    reflexao: "Há tempos em que Deus não está dizendo não, apenas ainda não. A demora pode proteger, alinhar e amadurecer.",
    oracao: "Pai, me ajuda a não interpretar espera como abandono.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 101,
    semana: 15,
    diaSemana: "Quarta-feira",
    temaSemana: "Espera e Paciência",
    titulo: "Paciência Também É Força",
    versiculo: "Romanos 12:12 — Alegrai-vos na esperança, sede pacientes...",
    reflexao: "Ser paciente não é ser fraca; é sustentar fé sem precisar controlar tudo imediatamente.",
    oracao: "Deus, fortalece meu coração durante processos demorados.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 102,
    semana: 15,
    diaSemana: "Quinta-feira",
    temaSemana: "Espera e Paciência",
    titulo: "O Tempo Também Cura",
    versiculo: "Eclesiastes 3:11 — Tudo fez formoso em seu tempo.",
    reflexao: "Nem toda cura acontece instantaneamente. Há reconstruções que florescem aos poucos.",
    oracao: "Senhor, me dá paciência com o meu processo.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 103,
    semana: 15,
    diaSemana: "Sexta-feira",
    temaSemana: "Espera e Paciência",
    titulo: "Não Force Portas",
    versiculo: "Apocalipse 3:8 — Eis que diante de ti pus uma porta aberta...",
    reflexao: "O que exige desespero constante para permanecer talvez não seja direção divina. Deus também abre caminhos sem necessidade de autodestruição.",
    oracao: "Pai, me livra de insistir onde o Senhor não está me conduzindo.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 104,
    semana: 15,
    diaSemana: "Sábado",
    temaSemana: "Espera e Paciência",
    titulo: "Enquanto Espera, Cresça",
    versiculo: "Isaías 40:31 — Os que esperam no Senhor renovarão suas forças.",
    reflexao: "A espera pode ser solo de amadurecimento, não apenas intervalo vazio.",
    oracao: "Senhor, transforma minha espera em crescimento.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 105,
    semana: 15,
    diaSemana: "Domingo",
    temaSemana: "Espera e Paciência",
    titulo: "Domingo de Confiança no Tempo",
    versiculo: "Salmos 31:15 — Os meus tempos estão nas tuas mãos.",
    reflexao: "Hoje é dia de entregar seus relógios emocionais. Deus continua sendo Senhor do tempo.",
    oracao: "Pai, eu entrego meu tempo, minhas pressas e minhas expectativas.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 106,
    semana: 16,
    diaSemana: "Segunda-feira",
    temaSemana: "Cura Interior Profunda",
    titulo: "Deus Cura Camadas",
    versiculo: "Salmos 147:3 — Sara os quebrantados de coração.",
    reflexao: "Algumas dores não são superficiais; por isso, certas curas também acontecem em profundidade. Deus não trata apenas sintomas.",
    oracao: "Senhor, alcança hoje áreas profundas que ainda precisam de restauração.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 107,
    semana: 16,
    diaSemana: "Terça-feira",
    temaSemana: "Cura Interior Profunda",
    titulo: "Nomeie Sua Dor",
    versiculo: "Salmos 139:23 — Sonda-me, ó Deus...",
    reflexao: "Curas profundas muitas vezes começam quando você para de fugir e reconhece o que realmente dói.",
    oracao: "Pai, me dá coragem para encarar com verdade aquilo que precisa ser curado.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 108,
    semana: 16,
    diaSemana: "Quarta-feira",
    temaSemana: "Cura Interior Profunda",
    titulo: "Traumas Não Precisam Ser Trono",
    versiculo: "Isaías 61:3 — Dar-lhes coroa em vez de cinzas.",
    reflexao: "Sua dor pode ter marcado sua história, mas não precisa governar sua identidade para sempre.",
    oracao: "Deus, tira do centro aquilo que me feriu e ocupa esse lugar com restauração.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 109,
    semana: 16,
    diaSemana: "Quinta-feira",
    temaSemana: "Cura Interior Profunda",
    titulo: "Permita-se Sentir Para Curar",
    versiculo: "João 11:35 — Jesus chorou.",
    reflexao: "Sentir não é fraqueza. Reprimir eternamente pode prolongar dores que precisam ser processadas.",
    oracao: "Senhor, me ensina a processar minhas emoções com saúde e verdade.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 110,
    semana: 16,
    diaSemana: "Sexta-feira",
    temaSemana: "Cura Interior Profunda",
    titulo: "Cicatrizes Também Contam Sobre Sobrevivência",
    versiculo: "Romanos 8:28 — Todas as coisas cooperam para o bem.",
    reflexao: "Nem toda marca desaparece, mas muitas deixam de doer. Deus também ressignifica cicatrizes.",
    oracao: "Pai, transforma minhas marcas em memória de superação, não de prisão.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 111,
    semana: 16,
    diaSemana: "Sábado",
    temaSemana: "Cura Interior Profunda",
    titulo: "Você Não Precisa Se Curar Sozinha",
    versiculo: "Mateus 11:28 — Vinde a mim...",
    reflexao: "Cura não exige isolamento absoluto. Deus oferece descanso, suporte e presença.",
    oracao: "Jesus, me ajuda a receber Tua cura e não carregar sozinha o que pesa.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 112,
    semana: 16,
    diaSemana: "Domingo",
    temaSemana: "Cura Interior Profunda",
    titulo: "Domingo de Restauração",
    versiculo: "Joel 2:25 — Restituir-vos-ei os anos...",
    reflexao: "Hoje é dia de lembrar: Deus também restaura tempos, partes e áreas que pareciam perdidas.",
    oracao: "Senhor, restaura profundamente aquilo que foi ferido em mim.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },
  {
    dia: 113,
    semana: 17,
    diaSemana: "Segunda-feira",
    temaSemana: "Autoestima e Identidade Restaurada",
    titulo: "Veja-se Com Verdade",
    versiculo: "Gênesis 1:27 — Criou Deus o homem à sua imagem.",
    reflexao: "Sua identidade não nasce da rejeição, comparação ou falhas. Existe dignidade na forma como Deus te criou. Quando sua visão sobre si mesma se cura, muitas prisões começam a cair.",
    oracao: "Senhor, cura minha visão sobre mim e me ensina a enxergar meu valor com verdade.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 114,
    semana: 17,
    diaSemana: "Terça-feira",
    temaSemana: "Autoestima e Identidade Restaurada",
    titulo: "Pare de Diminuir Sua Luz",
    versiculo: "Mateus 5:14 — Vós sois a luz do mundo.",
    reflexao: "Humildade não é se apagar. Deus não te chamou para viver se escondendo por medo de não corresponder às expectativas alheias.",
    oracao: "Pai, remove de mim toda autossabotagem e fortalece minha identidade.",
    louvor: "Quem Dizes Que Eu Sou - Hillsong em Português"
  },

  {
    dia: 115,
    semana: 17,
    diaSemana: "Quarta-feira",
    temaSemana: "Autoestima e Identidade Restaurada",
    titulo: "Sua Aparência Não Resume Seu Valor",
    versiculo: "1 Samuel 16:7 — O homem vê a aparência, porém o Senhor vê o coração.",
    reflexao: "A insegurança muitas vezes distorce sua percepção. Seu valor vai além do espelho, além de validação externa e além de padrões.",
    oracao: "Deus, cura minhas inseguranças e fortalece em mim beleza, verdade e identidade.",
    louvor: "Você Tem Valor - Aline Barros"
  },

  {
    dia: 116,
    semana: 17,
    diaSemana: "Quinta-feira",
    temaSemana: "Autoestima e Identidade Restaurada",
    titulo: "Não Baseie Seu Valor em Quem Não Soube Te Ver",
    versiculo: "Isaías 43:4 — Tu és precioso aos meus olhos.",
    reflexao: "A incapacidade de alguém reconhecer seu valor não redefine quem você é. Valor continua existindo mesmo quando não é percebido por pessoas erradas.",
    oracao: "Senhor, me liberta da necessidade de provar meu valor para quem não sabe reconhecê-lo.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 117,
    semana: 17,
    diaSemana: "Sexta-feira",
    temaSemana: "Autoestima e Identidade Restaurada",
    titulo: "Reconstrua Sua Narrativa",
    versiculo: "Romanos 12:2 — Transformai-vos pela renovação da mente.",
    reflexao: "Muitas feridas começam em narrativas internas distorcidas. Sua mente também precisa ser renovada para sustentar sua cura.",
    oracao: "Pai, transforma meus pensamentos e me ajuda a abandonar narrativas que me diminuem.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 118,
    semana: 17,
    diaSemana: "Sábado",
    temaSemana: "Autoestima e Identidade Restaurada",
    titulo: "Você Não Precisa Ser Menos Para Ser Amada",
    versiculo: "Efésios 2:10 — Somos feitura sua.",
    reflexao: "Relacionamentos saudáveis não exigem que você desapareça para caber. Deus não te criou para viver diminuída.",
    oracao: "Senhor, fortalece minha identidade para que eu nunca negocie minha essência.",
    louvor: "Me Ama - Diante do Trono"
  },

  {
    dia: 119,
    semana: 17,
    diaSemana: "Domingo",
    temaSemana: "Autoestima e Identidade Restaurada",
    titulo: "Domingo de Identidade",
    versiculo: "Salmos 139:14 — De modo especial e admirável fui formado.",
    reflexao: "Hoje é dia de lembrar: sua identidade não está em ruínas. Deus continua restaurando sua percepção, dignidade e força.",
    oracao: "Pai, firma em mim uma identidade saudável, segura e alinhada contigo.",
    louvor: "Quem Dizes Que Eu Sou - Hillsong em Português"
  },

  {
    dia: 120,
    semana: 18,
    diaSemana: "Segunda-feira",
    temaSemana: "Propósito Financeiro e Mordomia",
    titulo: "Deus Também Se Importa Com Sua Administração",
    versiculo: "Provérbios 21:5 — Os planos bem elaborados levam à fartura.",
    reflexao: "Espiritualidade não exclui responsabilidade prática. Administração, disciplina e visão também fazem parte de construir uma vida saudável.",
    oracao: "Senhor, me dá sabedoria para administrar bem recursos, oportunidades e crescimento.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },

  {
    dia: 121,
    semana: 18,
    diaSemana: "Terça-feira",
    temaSemana: "Propósito Financeiro e Mordomia",
    titulo: "Prosperidade Também Exige Sabedoria",
    versiculo: "Lucas 16:10 — Quem é fiel no pouco...",
    reflexao: "Antes de grandes expansões, muitas vezes Deus trabalha fidelidade, responsabilidade e visão no pouco.",
    oracao: "Pai, me ensina a ser fiel, estratégica e responsável com o que tenho hoje.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },

  {
    dia: 122,
    semana: 18,
    diaSemana: "Quarta-feira",
    temaSemana: "Propósito Financeiro e Mordomia",
    titulo: "Escassez Mental Também Precisa Ser Curada",
    versiculo: "Filipenses 4:19 — O meu Deus suprirá cada uma de vossas necessidades.",
    reflexao: "Medos financeiros podem gerar ansiedade profunda, mas viver apenas em mentalidade de escassez pode aprisionar decisões.",
    oracao: "Senhor, cura em mim pensamentos de miséria, medo e desespero.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 123,
    semana: 18,
    diaSemana: "Quinta-feira",
    temaSemana: "Propósito Financeiro e Mordomia",
    titulo: "Trabalhe Com Propósito",
    versiculo: "Colossenses 3:23 — Tudo quanto fizerdes, fazei-o de todo o coração.",
    reflexao: "Seu trabalho pode ser mais do que sobrevivência; também pode ser construção, propósito e expressão.",
    oracao: "Pai, alinha meu esforço com propósito, sabedoria e direção.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 124,
    semana: 18,
    diaSemana: "Sexta-feira",
    temaSemana: "Propósito Financeiro e Mordomia",
    titulo: "Planejamento Também É Fé",
    versiculo: "Provérbios 16:3 — Confia ao Senhor as tuas obras.",
    reflexao: "Fé não elimina planejamento; ela pode direcioná-lo. Sonhos também precisam de estratégia.",
    oracao: "Senhor, me dá clareza para planejar e coragem para executar.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 125,
    semana: 18,
    diaSemana: "Sábado",
    temaSemana: "Propósito Financeiro e Mordomia",
    titulo: "Construa Sem Ansiedade",
    versiculo: "Mateus 6:33 — Buscai primeiro o Reino de Deus.",
    reflexao: "Buscar crescimento não precisa significar viver em desespero. Prioridade e paz também são fundamentos.",
    oracao: "Pai, organiza meus sonhos, finanças e ambições sob Tua direção.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 126,
    semana: 18,
    diaSemana: "Domingo",
    temaSemana: "Propósito Financeiro e Mordomia",
    titulo: "Domingo de Visão e Estratégia",
    versiculo: "Habacuque 2:2 — Escreve a visão.",
    reflexao: "Hoje é dia de revisar metas, visão e direção. Deus também pode estar presente em estratégias bem alinhadas.",
    oracao: "Senhor, me dá visão clara, disciplina e sabedoria para construir.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },
  {
    dia: 127,
    semana: 19,
    diaSemana: "Segunda-feira",
    temaSemana: "Ansiedade e Descanso",
    titulo: "Nem Tudo Precisa Ser Resolvido Hoje",
    versiculo: "Mateus 6:34 — Não vos inquieteis pelo dia de amanhã...",
    reflexao: "Ansiedade costuma tentar fazer você carregar de uma vez o peso de dias que ainda nem chegaram. Deus oferece graça para o hoje. Respirar no presente também é fé.",
    oracao: "Senhor, me ajuda a lidar com o hoje sem ser esmagada pelo amanhã.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 128,
    semana: 19,
    diaSemana: "Terça-feira",
    temaSemana: "Ansiedade e Descanso",
    titulo: "Pensamentos Também Precisam de Limites",
    versiculo: "2 Coríntios 10:5 — Levando cativo todo pensamento...",
    reflexao: "Nem todo pensamento merece permanência. Algumas preocupações precisam ser confrontadas antes que virem prisão.",
    oracao: "Pai, me ensina a identificar pensamentos que roubam minha paz e substituí-los pela Tua verdade.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 129,
    semana: 19,
    diaSemana: "Quarta-feira",
    temaSemana: "Ansiedade e Descanso",
    titulo: "Seu Corpo Também Pede Pausa",
    versiculo: "Salmos 23:2 — Faz-me repousar em pastos verdejantes.",
    reflexao: "Descanso não é preguiça; muitas vezes é necessidade. Deus também conduz ao repouso.",
    oracao: "Senhor, me ajuda a reconhecer quando preciso parar, respirar e descansar.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 130,
    semana: 19,
    diaSemana: "Quinta-feira",
    temaSemana: "Ansiedade e Descanso",
    titulo: "Controle Excessivo Também Cansa",
    versiculo: "Provérbios 3:5 — Confia no Senhor de todo o teu coração.",
    reflexao: "A tentativa de controlar tudo pode se tornar um peso insustentável. Há descanso em confiar no que não está totalmente nas suas mãos.",
    oracao: "Pai, me ajuda a soltar controles que estão me adoecendo.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 131,
    semana: 19,
    diaSemana: "Sexta-feira",
    temaSemana: "Ansiedade e Descanso",
    titulo: "Paz Também Pode Ser Treinada",
    versiculo: "Filipenses 4:8 — Tudo o que é verdadeiro... nisso pensai.",
    reflexao: "Sua mente pode aprender novos caminhos. Paz também se constrói através do que você alimenta.",
    oracao: "Deus, treina minha mente para permanecer mais na paz do que no caos.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 132,
    semana: 19,
    diaSemana: "Sábado",
    temaSemana: "Ansiedade e Descanso",
    titulo: "Você Não Precisa Carregar Tudo Sozinha",
    versiculo: "1 Pedro 5:7 — Lançando sobre ele toda a vossa ansiedade.",
    reflexao: "Ansiedade muitas vezes cresce em silêncio. Entregar também é um ato de coragem.",
    oracao: "Senhor, eu entrego hoje minhas preocupações, excessos e medos.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 133,
    semana: 19,
    diaSemana: "Domingo",
    temaSemana: "Ansiedade e Descanso",
    titulo: "Domingo de Respiração",
    versiculo: "João 14:27 — Deixo-vos a paz.",
    reflexao: "Hoje é dia de desacelerar, reorganizar e proteger sua paz para a próxima semana.",
    oracao: "Pai, guarda minha mente e meu coração em paz.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 134,
    semana: 20,
    diaSemana: "Segunda-feira",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Paz É Critério",
    versiculo: "1 Coríntios 14:33 — Deus não é Deus de confusão.",
    reflexao: "Nem toda intensidade representa profundidade. Relações saudáveis não são perfeitas, mas não deveriam destruir sua paz constantemente.",
    oracao: "Senhor, me dá discernimento para reconhecer relações que cooperam com minha saúde emocional.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 135,
    semana: 20,
    diaSemana: "Terça-feira",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Limites Também São Amor",
    versiculo: "Provérbios 4:23 — Guarda o teu coração.",
    reflexao: "Amar não exige ausência de limites. Proteger sua saúde emocional também faz parte da maturidade.",
    oracao: "Pai, me ensina a estabelecer limites sem culpa.",
    louvor: "Cuida de Mim - Diante do Trono"
  },

  {
    dia: 136,
    semana: 20,
    diaSemana: "Quarta-feira",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Não Confunda Carência Com Amor",
    versiculo: "Romanos 12:2 — Não vos conformeis...",
    reflexao: "Carência pode distorcer escolhas. Nem toda necessidade emocional representa conexão verdadeira.",
    oracao: "Deus, cura minhas carências para que eu escolha com clareza.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 137,
    semana: 20,
    diaSemana: "Quinta-feira",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Quem É Saudável Não Te Diminui",
    versiculo: "Efésios 4:29 — Não saia da vossa boca nenhuma palavra torpe...",
    reflexao: "Relações maduras não se sustentam na humilhação, manipulação ou constante insegurança.",
    oracao: "Senhor, me afasta de vínculos destrutivos e fortalece minha dignidade.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 138,
    semana: 20,
    diaSemana: "Sexta-feira",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Discernimento Emocional",
    versiculo: "Tiago 1:5 — Peça sabedoria.",
    reflexao: "Nem sempre o problema é sentir; às vezes é interpretar errado. Sabedoria emocional protege.",
    oracao: "Pai, me dá clareza para enxergar além da emoção.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 139,
    semana: 20,
    diaSemana: "Sábado",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Sua Paz Vale Mais",
    versiculo: "Colossenses 3:15 — Seja a paz o árbitro.",
    reflexao: "Nem toda permanência vale sua saúde. Às vezes, preservar a paz é a escolha mais madura.",
    oracao: "Senhor, fortalece minha coragem para escolher paz.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 140,
    semana: 20,
    diaSemana: "Domingo",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Domingo de Revisão Emocional",
    versiculo: "Salmos 139:23 — Sonda-me, ó Deus.",
    reflexao: "Hoje é dia de revisar vínculos, padrões e escolhas. Deus também cura formas de se relacionar.",
    oracao: "Pai, realinha meus relacionamentos com paz, sabedoria e verdade.",
    louvor: "Cuida de Mim - Diante do Trono"
  },
  {
    dia: 141,
    semana: 21,
    diaSemana: "Segunda-feira",
    temaSemana: "Disciplina e Foco",
    titulo: "Seu Futuro Também Depende do Seu Hoje",
    versiculo: "Provérbios 13:4 — O preguiçoso deseja e nada tem...",
    reflexao: "Sonhos sem constância podem permanecer apenas como desejo. Há fases em que Deus fortalece não só visão, mas disciplina. O que você constrói hoje influencia quem você se tornará.",
    oracao: "Senhor, fortalece minha disciplina e meu foco para construir com sabedoria.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 142,
    semana: 21,
    diaSemana: "Terça-feira",
    temaSemana: "Disciplina e Foco",
    titulo: "Constância Vence Oscilação",
    versiculo: "1 Coríntios 15:58 — Sede firmes e constantes.",
    reflexao: "Nem todos os dias serão intensos, mas crescimento profundo costuma nascer da repetição fiel.",
    oracao: "Pai, me ajuda a permanecer mesmo quando a motivação oscilar.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 143,
    semana: 21,
    diaSemana: "Quarta-feira",
    temaSemana: "Disciplina e Foco",
    titulo: "Proteja Seu Foco",
    versiculo: "Mateus 6:22 — Se os teus olhos forem bons...",
    reflexao: "Distrações constantes podem atrasar propósitos profundos. Nem tudo merece sua energia.",
    oracao: "Senhor, me dá discernimento para proteger meu foco.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 144,
    semana: 21,
    diaSemana: "Quinta-feira",
    temaSemana: "Disciplina e Foco",
    titulo: "Faça Mesmo Sem Vontade",
    versiculo: "Gálatas 6:9 — Não nos cansemos de fazer o bem.",
    reflexao: "Maturidade também é agir corretamente mesmo quando a emoção não colabora.",
    oracao: "Pai, me ensina a não depender apenas da vontade para continuar.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 145,
    semana: 21,
    diaSemana: "Sexta-feira",
    temaSemana: "Disciplina e Foco",
    titulo: "Pequenos Hábitos, Grandes Construções",
    versiculo: "Lucas 16:10 — Quem é fiel no pouco...",
    reflexao: "Rotinas aparentemente pequenas podem moldar destinos inteiros.",
    oracao: "Deus, fortalece meus hábitos e minha constância.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 146,
    semana: 21,
    diaSemana: "Sábado",
    temaSemana: "Disciplina e Foco",
    titulo: "Recomeçar Faz Parte",
    versiculo: "Lamentações 3:23 — Renovam-se cada manhã.",
    reflexao: "Disciplina não exige perfeição absoluta; exige retorno consciente.",
    oracao: "Senhor, me ajuda a recomeçar sem desistir.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 147,
    semana: 21,
    diaSemana: "Domingo",
    temaSemana: "Disciplina e Foco",
    titulo: "Domingo de Estratégia",
    versiculo: "Habacuque 2:2 — Escreve a visão.",
    reflexao: "Hoje é dia de revisar prioridades, hábitos e direção. Foco também precisa de manutenção.",
    oracao: "Pai, organiza minha rotina, meu foco e minha disciplina.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 148,
    semana: 22,
    diaSemana: "Segunda-feira",
    temaSemana: "Propósito e Chamado",
    titulo: "Você Carrega Algo Que Precisa Florescer",
    versiculo: "Efésios 2:10 — Somos feitura sua.",
    reflexao: "Seu propósito pode não estar totalmente claro ainda, mas isso não significa ausência de chamado. Deus desenvolve processos antes de revelar certas dimensões.",
    oracao: "Senhor, me ajuda a reconhecer e desenvolver aquilo que o Senhor plantou em mim.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 149,
    semana: 22,
    diaSemana: "Terça-feira",
    temaSemana: "Propósito e Chamado",
    titulo: "Nem Toda Porta É Chamado",
    versiculo: "Provérbios 3:6 — Ele endireitará as tuas veredas.",
    reflexao: "Discernimento protege propósito. Nem toda oportunidade é missão.",
    oracao: "Pai, me ajuda a diferenciar distração de direção.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 150,
    semana: 22,
    diaSemana: "Quarta-feira",
    temaSemana: "Propósito e Chamado",
    titulo: "Seu Processo Também Importa",
    versiculo: "Romanos 8:28 — Todas as coisas cooperam...",
    reflexao: "Até fases difíceis podem estar formando capacidades necessárias para o futuro.",
    oracao: "Deus, me ensina a enxergar propósito também nos processos.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 151,
    semana: 22,
    diaSemana: "Quinta-feira",
    temaSemana: "Propósito e Chamado",
    titulo: "Pare de Se Diminuir",
    versiculo: "2 Timóteo 1:7 — Deus não nos deu espírito de temor.",
    reflexao: "Medo e autossabotagem podem atrasar sua expansão. Deus também fortalece coragem para viver chamado.",
    oracao: "Senhor, remove em mim o medo que me impede de crescer.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 152,
    semana: 22,
    diaSemana: "Sexta-feira",
    temaSemana: "Propósito e Chamado",
    titulo: "Chamado Também Exige Preparação",
    versiculo: "Lucas 16:10 — Fiel no pouco.",
    reflexao: "Antes de grandes responsabilidades, muitas vezes Deus desenvolve fidelidade e maturidade.",
    oracao: "Pai, prepara meu caráter para sustentar meu propósito.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },

  {
    dia: 153,
    semana: 22,
    diaSemana: "Sábado",
    temaSemana: "Propósito e Chamado",
    titulo: "Continue Mesmo Sem Entender Tudo",
    versiculo: "Salmos 119:105 — Lâmpada para os meus pés.",
    reflexao: "Direção muitas vezes vem por próximos passos, não por mapas completos.",
    oracao: "Senhor, me dá coragem para caminhar mesmo sem todas as respostas.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 154,
    semana: 22,
    diaSemana: "Domingo",
    temaSemana: "Propósito e Chamado",
    titulo: "Domingo de Alinhamento com o Chamado",
    versiculo: "Jeremias 29:11 — Eu bem sei os planos...",
    reflexao: "Hoje é dia de revisar visão, direção e disposição. Deus continua alinhando destinos.",
    oracao: "Pai, realinha minha vida com Teu propósito.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },
  {
    dia: 155,
    semana: 23,
    diaSemana: "Segunda-feira",
    temaSemana: "Cura da Mente",
    titulo: "Sua Mente Também Precisa de Restauração",
    versiculo: "Romanos 12:2 — Transformai-vos pela renovação da vossa mente.",
    reflexao: "Nem toda batalha acontece do lado de fora. Muitas guerras começam em pensamentos repetidos, crenças distorcidas e narrativas internas feridas. Deus também trabalha reconstruindo sua mente.",
    oracao: "Senhor, renova meus pensamentos e cura padrões mentais que me afastam da paz.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 156,
    semana: 23,
    diaSemana: "Terça-feira",
    temaSemana: "Cura da Mente",
    titulo: "Nem Todo Pensamento É Verdade",
    versiculo: "2 Coríntios 10:5 — Levando cativo todo pensamento...",
    reflexao: "Pensar algo repetidamente não significa que isso seja verdade. Algumas ideias precisam ser confrontadas antes de criarem raízes profundas.",
    oracao: "Pai, me ensina a identificar pensamentos destrutivos e substituí-los pela Tua verdade.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 157,
    semana: 23,
    diaSemana: "Quarta-feira",
    temaSemana: "Cura da Mente",
    titulo: "Cansaço Mental Também Merece Cuidado",
    versiculo: "Mateus 11:28 — Vinde a mim todos os que estais cansados.",
    reflexao: "Você pode estar espiritualmente forte e mentalmente cansada. Reconhecer exaustão não é fraqueza; pode ser consciência.",
    oracao: "Senhor, alcança minha mente cansada e me ensina a descansar.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 158,
    semana: 23,
    diaSemana: "Quinta-feira",
    temaSemana: "Cura da Mente",
    titulo: "Silencie o Excesso",
    versiculo: "Salmos 46:10 — Aquietai-vos...",
    reflexao: "Nem toda confusão precisa ser alimentada. Às vezes, parte da cura começa no que você decide não continuar nutrindo.",
    oracao: "Pai, me ajuda a reduzir excessos mentais e proteger minha paz.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 159,
    semana: 23,
    diaSemana: "Sexta-feira",
    temaSemana: "Cura da Mente",
    titulo: "Ansiedade Não Precisa Governar",
    versiculo: "Filipenses 4:6 — Não andeis ansiosos...",
    reflexao: "Ansiedade pode gritar, mas não precisa liderar. Deus também oferece caminhos de paz em meio ao caos.",
    oracao: "Senhor, me ajuda a entregar preocupações antes que elas dominem minha mente.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 160,
    semana: 23,
    diaSemana: "Sábado",
    temaSemana: "Cura da Mente",
    titulo: "Proteja o Que Você Alimenta",
    versiculo: "Filipenses 4:8 — Tudo o que é verdadeiro... nisso pensai.",
    reflexao: "Sua mente absorve aquilo que você alimenta com frequência. Cura também envolve escolhas conscientes.",
    oracao: "Pai, me dá sabedoria para selecionar melhor o que ocupa meus pensamentos.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 161,
    semana: 23,
    diaSemana: "Domingo",
    temaSemana: "Cura da Mente",
    titulo: "Domingo de Paz Mental",
    versiculo: "João 14:27 — Deixo-vos a paz.",
    reflexao: "Hoje é dia de reorganizar sua mente, desacelerar excessos e permitir paz.",
    oracao: "Senhor, guarda meus pensamentos e fortalece minha mente.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 162,
    semana: 24,
    diaSemana: "Segunda-feira",
    temaSemana: "Sabedoria Emocional",
    titulo: "Sentir Não É o Mesmo Que Entender",
    versiculo: "Provérbios 4:7 — A sabedoria é a coisa principal.",
    reflexao: "Emoções são reais, mas nem sempre interpretam corretamente. Sabedoria emocional ajuda você a sentir sem ser totalmente governada por impulsos.",
    oracao: "Senhor, me ensina a compreender minhas emoções com maturidade.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 163,
    semana: 24,
    diaSemana: "Terça-feira",
    temaSemana: "Sabedoria Emocional",
    titulo: "Carência Pode Distorcer Escolhas",
    versiculo: "Salmos 34:5 — Os que olham para ele serão iluminados.",
    reflexao: "Quando vazios internos dirigem decisões, muitas vezes confundimos necessidade com destino.",
    oracao: "Pai, cura minhas carências para que eu escolha com clareza.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 164,
    semana: 24,
    diaSemana: "Quarta-feira",
    temaSemana: "Sabedoria Emocional",
    titulo: "Proteja Seu Coração Com Clareza",
    versiculo: "Provérbios 4:23 — Guarda o teu coração.",
    reflexao: "Proteção emocional não é frieza; é maturidade.",
    oracao: "Deus, me dá discernimento para proteger meu coração sem endurecê-lo.",
    louvor: "Cuida de Mim - Diante do Trono"
  },

  {
    dia: 165,
    semana: 24,
    diaSemana: "Quinta-feira",
    temaSemana: "Sabedoria Emocional",
    titulo: "Nem Toda Intensidade É Profundidade",
    versiculo: "1 Coríntios 14:33 — Deus não é Deus de confusão.",
    reflexao: "Algumas relações são intensas, mas não saudáveis. Paz continua sendo critério importante.",
    oracao: "Senhor, me ajuda a diferenciar intensidade de verdade.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 166,
    semana: 24,
    diaSemana: "Sexta-feira",
    temaSemana: "Sabedoria Emocional",
    titulo: "Maturidade Também É Soltar",
    versiculo: "Eclesiastes 3:6 — Tempo de guardar e tempo de lançar fora.",
    reflexao: "Nem tudo que você sente precisa permanecer. Algumas fases exigem desapego.",
    oracao: "Pai, fortalece meu coração para soltar o que não me faz bem.",
    louvor: "Queima Outra Vez - Thalles Roberto"
  },

  {
    dia: 167,
    semana: 24,
    diaSemana: "Sábado",
    temaSemana: "Sabedoria Emocional",
    titulo: "Paz Vale Mais Que Confusão",
    versiculo: "Colossenses 3:15 — Seja a paz o árbitro.",
    reflexao: "Sua paz não é detalhe. Muitas decisões maduras nascem quando você escolhe paz em vez de caos.",
    oracao: "Senhor, fortalece em mim a coragem de escolher paz.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 168,
    semana: 24,
    diaSemana: "Domingo",
    temaSemana: "Sabedoria Emocional",
    titulo: "Domingo de Clareza Emocional",
    versiculo: "Salmos 139:23 — Sonda-me, ó Deus.",
    reflexao: "Hoje é dia de revisar emoções, vínculos e padrões. Deus também cura interpretações.",
    oracao: "Pai, me dá clareza emocional, maturidade e paz.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },
  {
    dia: 169,
    semana: 25,
    diaSemana: "Segunda-feira",
    temaSemana: "Resiliência e Recomeço",
    titulo: "Recomeçar Não Anula Sua História",
    versiculo: "Isaías 43:19 — Eis que faço coisa nova.",
    reflexao: "Recomeçar não significa fingir que nada aconteceu; significa permitir que sua história continue sem permanecer presa ao mesmo lugar. Deus também trabalha em novos começos.",
    oracao: "Senhor, me dá coragem para viver o novo sem medo do passado.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 170,
    semana: 25,
    diaSemana: "Terça-feira",
    temaSemana: "Resiliência e Recomeço",
    titulo: "Sua Dor Não Precisa Definir Seu Futuro",
    versiculo: "Romanos 8:28 — Todas as coisas cooperam para o bem.",
    reflexao: "A dor pode marcar capítulos, mas não precisa escrever toda a narrativa. Deus também transforma.",
    oracao: "Pai, transforma minhas dores em aprendizado, cura e força.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 171,
    semana: 25,
    diaSemana: "Quarta-feira",
    temaSemana: "Resiliência e Recomeço",
    titulo: "Levante Mesmo Sem Entender Tudo",
    versiculo: "Provérbios 24:16 — O justo cai e se levanta.",
    reflexao: "Nem toda resposta vem antes do movimento. Às vezes, a força aparece enquanto você se ergue.",
    oracao: "Senhor, fortalece meus passos enquanto reconstruo.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 172,
    semana: 25,
    diaSemana: "Quinta-feira",
    temaSemana: "Resiliência e Recomeço",
    titulo: "Processos Também Fortalecem",
    versiculo: "Tiago 1:3 — A prova da fé produz perseverança.",
    reflexao: "Há fases que não apenas desafiam; elas treinam resistência.",
    oracao: "Pai, me ajuda a crescer também através dos processos difíceis.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 173,
    semana: 25,
    diaSemana: "Sexta-feira",
    temaSemana: "Resiliência e Recomeço",
    titulo: "Você Ainda Pode Florescer",
    versiculo: "Eclesiastes 3:11 — Tudo fez formoso em seu tempo.",
    reflexao: "Mesmo após perdas ou pausas, florescimento ainda pode acontecer.",
    oracao: "Senhor, renova em mim esperança para florescer novamente.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 174,
    semana: 25,
    diaSemana: "Sábado",
    temaSemana: "Resiliência e Recomeço",
    titulo: "Reerguer Também É Vitória",
    versiculo: "Josué 1:9 — Sê forte e corajoso.",
    reflexao: "Às vezes, a maior vitória não é nunca cair, mas escolher se levantar.",
    oracao: "Pai, fortalece minha coragem para continuar.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 175,
    semana: 25,
    diaSemana: "Domingo",
    temaSemana: "Resiliência e Recomeço",
    titulo: "Domingo de Novo Fôlego",
    versiculo: "Lamentações 3:23 — Renovam-se cada manhã.",
    reflexao: "Hoje é dia de respirar fundo, revisar sua jornada e lembrar: novos começos continuam possíveis.",
    oracao: "Senhor, renova meu coração para uma nova semana.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 176,
    semana: 26,
    diaSemana: "Segunda-feira",
    temaSemana: "Fé Prática no Dia a Dia",
    titulo: "Fé Também Vive na Rotina",
    versiculo: "Colossenses 3:23 — Tudo o que fizerdes, fazei de coração.",
    reflexao: "Fé não existe apenas em grandes momentos espirituais; ela também se manifesta na forma como você vive o ordinário.",
    oracao: "Senhor, me ensina a viver minha fé também nas pequenas escolhas diárias.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 177,
    semana: 26,
    diaSemana: "Terça-feira",
    temaSemana: "Fé Prática no Dia a Dia",
    titulo: "Consistência Também É Espiritual",
    versiculo: "Lucas 16:10 — Fiel no pouco.",
    reflexao: "Grandes construções espirituais muitas vezes nascem de fidelidade comum e repetida.",
    oracao: "Pai, fortalece minha constância e fidelidade.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 178,
    semana: 26,
    diaSemana: "Quarta-feira",
    temaSemana: "Fé Prática no Dia a Dia",
    titulo: "Sua Rotina Pode Ser Altar",
    versiculo: "Romanos 12:1 — Apresenteis os vossos corpos...",
    reflexao: "Quando suas escolhas se alinham, até sua rotina se torna expressão de propósito.",
    oracao: "Senhor, transforma meu cotidiano em espaço de propósito.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 179,
    semana: 26,
    diaSemana: "Quinta-feira",
    temaSemana: "Fé Prática no Dia a Dia",
    titulo: "Escolhas Pequenas Também Constroem",
    versiculo: "Provérbios 13:4 — A alma dos diligentes se farta.",
    reflexao: "Nem todo avanço vem por grandes atos; muitos nascem de pequenas escolhas consistentes.",
    oracao: "Pai, me dá sabedoria para valorizar pequenas decisões.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 180,
    semana: 26,
    diaSemana: "Sexta-feira",
    temaSemana: "Fé Prática no Dia a Dia",
    titulo: "Espiritualidade Não É Só Emoção",
    versiculo: "Tiago 2:17 — A fé, se não tiver obras, é morta.",
    reflexao: "Fé madura não depende apenas de sentir; também se expressa em prática.",
    oracao: "Senhor, fortalece minha fé em atitudes concretas.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 181,
    semana: 26,
    diaSemana: "Sábado",
    temaSemana: "Fé Prática no Dia a Dia",
    titulo: "Permaneça",
    versiculo: "João 15:4 — Permanecei em mim.",
    reflexao: "Nem sempre o mais poderoso é fazer mais; às vezes é permanecer melhor.",
    oracao: "Pai, me ajuda a permanecer em Ti diariamente.",
    louvor: "Me Ama - Diante do Trono"
  },

  {
    dia: 182,
    semana: 26,
    diaSemana: "Domingo",
    temaSemana: "Fé Prática no Dia a Dia",
    titulo: "Domingo de Realinhamento Diário",
    versiculo: "Salmos 119:105 — Lâmpada para os meus pés.",
    reflexao: "Hoje é dia de revisar hábitos, escolhas e direção. Fé também se fortalece no cotidiano.",
    oracao: "Senhor, realinha minha rotina contigo.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },
  {
    dia: 183,
    semana: 27,
    diaSemana: "Segunda-feira",
    temaSemana: "Libertação de Padrões",
    titulo: "Reconheça o Que Se Repete",
    versiculo: "João 8:36 — Se o Filho vos libertar, verdadeiramente sereis livres.",
    reflexao: "Alguns ciclos se repetem não porque você nasceu para eles, mas porque padrões não identificados continuam operando. Libertação muitas vezes começa na consciência.",
    oracao: "Senhor, me mostra padrões que precisam ser quebrados e me fortalece para viver liberdade.",
    louvor: "Liberta-me de Mim - Ministério Zoe"
  },

  {
    dia: 184,
    semana: 27,
    diaSemana: "Terça-feira",
    temaSemana: "Libertação de Padrões",
    titulo: "Nem Toda Reação É Sua Essência",
    versiculo: "Romanos 12:2 — Transformai-vos pela renovação da mente.",
    reflexao: "Às vezes, você reage por feridas antigas, não por quem realmente está se tornando. Cura também envolve reprogramar respostas.",
    oracao: "Pai, cura reações que nasceram de dores antigas.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 185,
    semana: 27,
    diaSemana: "Quarta-feira",
    temaSemana: "Libertação de Padrões",
    titulo: "Pare de Voltar Para o Que Te Quebra",
    versiculo: "Gálatas 5:1 — Permanecei firmes na liberdade.",
    reflexao: "Liberdade não é apenas sair; muitas vezes é escolher não retornar.",
    oracao: "Senhor, fortalece minha permanência naquilo que me cura.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 186,
    semana: 27,
    diaSemana: "Quinta-feira",
    temaSemana: "Libertação de Padrões",
    titulo: "Raízes Precisam Ser Tratadas",
    versiculo: "Salmos 139:23 — Sonda-me, ó Deus.",
    reflexao: "Mudar apenas comportamentos pode não ser suficiente se raízes profundas continuam intactas.",
    oracao: "Pai, alcança hoje as raízes do que precisa mudar.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 187,
    semana: 27,
    diaSemana: "Sexta-feira",
    temaSemana: "Libertação de Padrões",
    titulo: "Você Pode Escolher Diferente",
    versiculo: "Deuteronômio 30:19 — Escolhe, pois, a vida.",
    reflexao: "Mesmo quando certos ciclos parecem familiares, novas escolhas continuam possíveis.",
    oracao: "Deus, fortalece minha coragem para escolher diferente.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 188,
    semana: 27,
    diaSemana: "Sábado",
    temaSemana: "Libertação de Padrões",
    titulo: "Sua História Pode Mudar de Direção",
    versiculo: "2 Coríntios 5:17 — Nova criatura é.",
    reflexao: "Padrões herdados, repetidos ou aprendidos não precisam definir seu futuro.",
    oracao: "Senhor, escreve novos caminhos sobre áreas repetitivas da minha vida.",
    louvor: "Queima Outra Vez - Thalles Roberto"
  },

  {
    dia: 189,
    semana: 27,
    diaSemana: "Domingo",
    temaSemana: "Libertação de Padrões",
    titulo: "Domingo de Quebra de Ciclos",
    versiculo: "Isaías 61:1 — Enviou-me para proclamar liberdade.",
    reflexao: "Hoje é dia de identificar, confrontar e entregar padrões antigos. Deus continua libertando.",
    oracao: "Pai, quebra em mim ciclos que não pertencem ao meu futuro.",
    louvor: "Liberta-me de Mim - Ministério Zoe"
  },

  {
    dia: 190,
    semana: 28,
    diaSemana: "Segunda-feira",
    temaSemana: "Esperança e Visão",
    titulo: "Nem Tudo Que Está Incompleto Está Perdido",
    versiculo: "Jeremias 29:11 — Eu bem sei os planos...",
    reflexao: "Há fases em que sua vida parece inacabada, mas inacabado não significa abandonado. Deus ainda trabalha em processos.",
    oracao: "Senhor, renova minha esperança para confiar no que ainda está sendo construído.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 191,
    semana: 28,
    diaSemana: "Terça-feira",
    temaSemana: "Esperança e Visão",
    titulo: "Olhe Além do Agora",
    versiculo: "2 Coríntios 4:18 — Não atentando nós nas coisas que se veem...",
    reflexao: "Seu presente pode ser desafiador sem ser definitivo. Visão também exige perspectiva.",
    oracao: "Pai, amplia minha visão além das limitações atuais.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 192,
    semana: 28,
    diaSemana: "Quarta-feira",
    temaSemana: "Esperança e Visão",
    titulo: "Sonhar Ainda É Permitido",
    versiculo: "Habacuque 2:2 — Escreve a visão.",
    reflexao: "Depois de frustrações, muitas pessoas param de sonhar por proteção. Mas esperança também reconstrói visão.",
    oracao: "Senhor, restaura minha capacidade de sonhar com sabedoria.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },

  {
    dia: 193,
    semana: 28,
    diaSemana: "Quinta-feira",
    temaSemana: "Esperança e Visão",
    titulo: "Deus Também Trabalha no Invisível",
    versiculo: "Isaías 64:4 — Deus trabalha para aquele que nele espera.",
    reflexao: "Nem todo progresso é imediatamente visível. Há construções silenciosas acontecendo.",
    oracao: "Pai, fortalece minha fé mesmo quando ainda não vejo tudo claramente.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 194,
    semana: 28,
    diaSemana: "Sexta-feira",
    temaSemana: "Esperança e Visão",
    titulo: "Proteja Sua Esperança",
    versiculo: "Provérbios 4:23 — Guarda o teu coração.",
    reflexao: "Nem toda voz merece acesso à sua esperança. Proteja o que Deus ainda está formando.",
    oracao: "Senhor, guarda minha esperança de contaminações e medo.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 195,
    semana: 28,
    diaSemana: "Sábado",
    temaSemana: "Esperança e Visão",
    titulo: "Seu Futuro Ainda Tem Espaço",
    versiculo: "Isaías 43:19 — Eis que faço coisa nova.",
    reflexao: "O futuro não precisa repetir automaticamente o passado. Novidade continua possível.",
    oracao: "Pai, me dá coragem para viver o novo que o Senhor prepara.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 196,
    semana: 28,
    diaSemana: "Domingo",
    temaSemana: "Esperança e Visão",
    titulo: "Domingo de Visão Renovada",
    versiculo: "Salmos 121:1 — Elevo os olhos...",
    reflexao: "Hoje é dia de levantar os olhos, renovar perspectiva e lembrar que esperança continua viva.",
    oracao: "Senhor, renova minha visão, minha esperança e minha coragem.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },
  {
    dia: 197,
    semana: 29,
    diaSemana: "Segunda-feira",
    temaSemana: "Obediência e Direção",
    titulo: "Nem Sempre Entender Vem Antes de Obedecer",
    versiculo: "Provérbios 3:5-6 — Confia no Senhor de todo o teu coração...",
    reflexao: "Há fases em que Deus não entrega todas as explicações, apenas direção suficiente para o próximo passo. Obediência muitas vezes precede compreensão.",
    oracao: "Senhor, fortalece minha confiança para obedecer mesmo quando eu ainda não entender tudo.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 198,
    semana: 29,
    diaSemana: "Terça-feira",
    temaSemana: "Obediência e Direção",
    titulo: "Direção Também Exige Sensibilidade",
    versiculo: "João 10:27 — As minhas ovelhas ouvem a minha voz.",
    reflexao: "Nem toda direção vem em grandes sinais. Muitas vezes, Deus conduz por paz, convicção e pequenos ajustes.",
    oracao: "Pai, afina minha percepção para reconhecer Tua direção.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 199,
    semana: 29,
    diaSemana: "Quarta-feira",
    temaSemana: "Obediência e Direção",
    titulo: "Desobediência Também Tem Custos",
    versiculo: "Deuteronômio 5:33 — Andai em todo o caminho...",
    reflexao: "Alguns desvios não acontecem por falta de capacidade, mas por resistência em seguir direções necessárias.",
    oracao: "Senhor, me dá humildade para alinhar meus caminhos contigo.",
    louvor: "Queima Outra Vez - Thalles Roberto"
  },

  {
    dia: 200,
    semana: 29,
    diaSemana: "Quinta-feira",
    temaSemana: "Obediência e Direção",
    titulo: "Pequenos Passos Também São Obediência",
    versiculo: "Salmos 119:105 — Lâmpada para os meus pés.",
    reflexao: "Nem sempre você verá o caminho inteiro. Às vezes, fidelidade no próximo passo já é direção suficiente.",
    oracao: "Pai, me ajuda a valorizar e obedecer pequenos direcionamentos.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 201,
    semana: 29,
    diaSemana: "Sexta-feira",
    temaSemana: "Obediência e Direção",
    titulo: "Nem Toda Renúncia É Perda",
    versiculo: "Isaías 55:8 — Os meus pensamentos não são os vossos pensamentos.",
    reflexao: "Algumas direções exigem deixar para trás o que parecia ideal, mas obediência também protege futuros.",
    oracao: "Senhor, me fortalece para renunciar o que não está alinhado contigo.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 202,
    semana: 29,
    diaSemana: "Sábado",
    temaSemana: "Obediência e Direção",
    titulo: "Ajustes Também São Amor",
    versiculo: "Hebreus 12:11 — Toda disciplina... produz fruto pacífico.",
    reflexao: "Correções divinas nem sempre são punição; muitas vezes são alinhamento.",
    oracao: "Pai, me dá maturidade para receber ajustes com sabedoria.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 203,
    semana: 29,
    diaSemana: "Domingo",
    temaSemana: "Obediência e Direção",
    titulo: "Domingo de Alinhamento",
    versiculo: "Jeremias 29:13 — Buscar-me-eis...",
    reflexao: "Hoje é dia de revisar direção, postura e disposição. Deus continua conduzindo.",
    oracao: "Senhor, alinha minha vida, minhas decisões e meus caminhos.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 204,
    semana: 30,
    diaSemana: "Segunda-feira",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Gratidão Não Ignora Processos",
    versiculo: "1 Tessalonicenses 5:18 — Em tudo dai graças.",
    reflexao: "Gratidão não significa fingir que tudo está perfeito; significa reconhecer a presença de Deus mesmo em construção.",
    oracao: "Senhor, me ensina a cultivar gratidão também durante processos incompletos.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 205,
    semana: 30,
    diaSemana: "Terça-feira",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Compare Menos, Reconheça Mais",
    versiculo: "Gálatas 6:4 — Examine cada um as suas próprias obras.",
    reflexao: "Comparação constante pode roubar alegria de processos reais. Gratidão cresce quando você reconhece sua própria jornada.",
    oracao: "Pai, me livra da comparação e fortalece contentamento saudável.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 206,
    semana: 30,
    diaSemana: "Quarta-feira",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Contentamento Também É Força",
    versiculo: "Filipenses 4:11 — Aprendi a contentar-me.",
    reflexao: "Contentamento não é ausência de ambição; é paz enquanto você constrói.",
    oracao: "Senhor, me dá paz para valorizar o presente sem abandonar visão.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 207,
    semana: 30,
    diaSemana: "Quinta-feira",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Perceba o Que Já Existe",
    versiculo: "Salmos 103:2 — Não te esqueças de nenhum de seus benefícios.",
    reflexao: "Às vezes, a mente se fixa tanto no que falta que esquece o que já foi sustentado.",
    oracao: "Pai, abre meus olhos para reconhecer provisões já presentes.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },

  {
    dia: 208,
    semana: 30,
    diaSemana: "Sexta-feira",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Celebre Pequenos Avanços",
    versiculo: "Zacarias 4:10 — Não desprezeis o dia das coisas pequenas.",
    reflexao: "Grandes jornadas também são feitas de pequenos progressos.",
    oracao: "Senhor, me ajuda a valorizar cada avanço.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 209,
    semana: 30,
    diaSemana: "Sábado",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Paz Não Está Só na Chegada",
    versiculo: "Salmos 23:1 — Nada me faltará.",
    reflexao: "Às vezes, a paz que você procura para o futuro também pode começar a ser cultivada agora.",
    oracao: "Pai, me ensina a viver contentamento e paz hoje.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 210,
    semana: 30,
    diaSemana: "Domingo",
    temaSemana: "Gratidão e Contentamento",
    titulo: "Domingo de Gratidão",
    versiculo: "Salmos 118:24 — Este é o dia que o Senhor fez.",
    reflexao: "Hoje é dia de desacelerar, reconhecer e agradecer. Gratidão também fortalece visão.",
    oracao: "Senhor, obrigada por Tua presença, cuidado e sustento.",
    louvor: "Bondade de Deus - Isaias Saad"
  },
  {
    dia: 211,
    semana: 31,
    diaSemana: "Segunda-feira",
    temaSemana: "Pureza, Limites e Autorespeito",
    titulo: "Proteja o Que Tem Valor",
    versiculo: "Provérbios 4:23 — Sobre tudo o que se deve guardar, guarda o teu coração.",
    reflexao: "Autorespeito também é espiritual. Nem todo acesso precisa ser liberado, nem toda conexão merece profundidade. Limites saudáveis protegem identidade, paz e propósito.",
    oracao: "Senhor, me dá sabedoria para proteger meu coração sem endurecê-lo.",
    louvor: "Cuida de Mim - Diante do Trono"
  },

  {
    dia: 212,
    semana: 31,
    diaSemana: "Terça-feira",
    temaSemana: "Pureza, Limites e Autorespeito",
    titulo: "Nem Toda Aproximação Merece Permanência",
    versiculo: "1 Coríntios 15:33 — As más companhias corrompem.",
    reflexao: "Discernimento também é saber que algumas conexões podem comprometer sua paz, seus princípios ou sua cura.",
    oracao: "Pai, me dá clareza para reconhecer quem coopera ou compromete meu crescimento.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 213,
    semana: 31,
    diaSemana: "Quarta-feira",
    temaSemana: "Pureza, Limites e Autorespeito",
    titulo: "Seu Corpo e Sua Alma Merecem Respeito",
    versiculo: "1 Coríntios 6:19 — Vosso corpo é templo.",
    reflexao: "Valor não está em provar disponibilidade, mas em reconhecer dignidade. Autorespeito não é rigidez; é consciência.",
    oracao: "Senhor, fortalece em mim dignidade, clareza e respeito por quem sou.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 214,
    semana: 31,
    diaSemana: "Quinta-feira",
    temaSemana: "Pureza, Limites e Autorespeito",
    titulo: "Dizer Não Também É Proteção",
    versiculo: "Mateus 5:37 — Seja o vosso falar: sim, sim; não, não.",
    reflexao: "Limites claros podem evitar dores profundas. Nem toda recusa é perda; muitas são preservação.",
    oracao: "Pai, me dá coragem para dizer não ao que compromete minha paz.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 215,
    semana: 31,
    diaSemana: "Sexta-feira",
    temaSemana: "Pureza, Limites e Autorespeito",
    titulo: "Não Negocie Sua Essência",
    versiculo: "Romanos 12:2 — Não vos conformeis...",
    reflexao: "Aceitação sem autenticidade pode custar caro. Sua essência não precisa ser sacrificada para caber.",
    oracao: "Senhor, fortalece minha identidade para que eu não negocie quem sou.",
    louvor: "Quem Dizes Que Eu Sou - Hillsong em Português"
  },

  {
    dia: 216,
    semana: 31,
    diaSemana: "Sábado",
    temaSemana: "Pureza, Limites e Autorespeito",
    titulo: "Discernimento É Defesa",
    versiculo: "Tiago 1:5 — Se alguém necessita de sabedoria...",
    reflexao: "Nem toda tentação se apresenta como destruição; algumas chegam como distração.",
    oracao: "Pai, me dá discernimento para proteger meu propósito.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 217,
    semana: 31,
    diaSemana: "Domingo",
    temaSemana: "Pureza, Limites e Autorespeito",
    titulo: "Domingo de Alinhamento e Dignidade",
    versiculo: "Salmos 139:14 — Formado de modo especial.",
    reflexao: "Hoje é dia de lembrar quem você é, o que merece preservar e o que não precisa aceitar.",
    oracao: "Senhor, fortalece minha dignidade, meus limites e minha paz.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 218,
    semana: 32,
    diaSemana: "Segunda-feira",
    temaSemana: "Maturidade Espiritual",
    titulo: "Crescer Também É Profundidade",
    versiculo: "Hebreus 5:14 — O alimento sólido é para os maduros.",
    reflexao: "Maturidade espiritual não é apenas emoção intensa; é profundidade, constância e discernimento.",
    oracao: "Senhor, me conduz a uma fé mais profunda e madura.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 219,
    semana: 32,
    diaSemana: "Terça-feira",
    temaSemana: "Maturidade Espiritual",
    titulo: "Nem Toda Fase Será Emocionante",
    versiculo: "2 Coríntios 5:7 — Andamos por fé, não por vista.",
    reflexao: "Fé madura permanece mesmo quando emoções variam.",
    oracao: "Pai, fortalece minha constância além dos sentimentos.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 220,
    semana: 32,
    diaSemana: "Quarta-feira",
    temaSemana: "Maturidade Espiritual",
    titulo: "Discernimento Também Cresce",
    versiculo: "Filipenses 1:9 — Que o vosso amor aumente em conhecimento.",
    reflexao: "Amadurecer espiritualmente também significa desenvolver percepção mais refinada.",
    oracao: "Senhor, aumenta meu discernimento e minha sabedoria.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 221,
    semana: 32,
    diaSemana: "Quinta-feira",
    temaSemana: "Maturidade Espiritual",
    titulo: "Raízes Profundas Sustentam",
    versiculo: "Colossenses 2:7 — Arraigados e edificados nele.",
    reflexao: "Profundidade espiritual sustenta você em estações difíceis.",
    oracao: "Pai, aprofunda minhas raízes em Ti.",
    louvor: "Me Ama - Diante do Trono"
  },

  {
    dia: 222,
    semana: 32,
    diaSemana: "Sexta-feira",
    temaSemana: "Maturidade Espiritual",
    titulo: "Obediência Também É Crescimento",
    versiculo: "Tiago 1:22 — Sede praticantes da palavra.",
    reflexao: "Conhecimento sem prática pode gerar ilusão de profundidade.",
    oracao: "Senhor, transforma meu conhecimento em prática real.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 223,
    semana: 32,
    diaSemana: "Sábado",
    temaSemana: "Maturidade Espiritual",
    titulo: "Processo Também É Formação",
    versiculo: "Romanos 5:4 — A perseverança produz experiência.",
    reflexao: "Maturidade não nasce pronta; ela é formada.",
    oracao: "Pai, usa meus processos para formar profundidade.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 224,
    semana: 32,
    diaSemana: "Domingo",
    temaSemana: "Maturidade Espiritual",
    titulo: "Domingo de Profundidade",
    versiculo: "Jeremias 29:13 — Buscar-me-eis...",
    reflexao: "Hoje é dia de avaliar não apenas intensidade, mas profundidade.",
    oracao: "Senhor, me conduz a uma fé firme, madura e profunda.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },
  {
    dia: 225,
    semana: 33,
    diaSemana: "Segunda-feira",
    temaSemana: "Vida Social, Influências e Sabedoria",
    titulo: "Quem Te Cerca Também Te Forma",
    versiculo: "Provérbios 13:20 — Quem anda com os sábios será sábio.",
    reflexao: "Ambientes, amizades e influências moldam pensamentos mais do que às vezes percebemos. Nem toda companhia é neutra. Algumas fortalecem, outras drenam.",
    oracao: "Senhor, me dá discernimento para cultivar conexões que cooperem com minha paz e crescimento.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 226,
    semana: 33,
    diaSemana: "Terça-feira",
    temaSemana: "Vida Social, Influências e Sabedoria",
    titulo: "Pertencer Não Deve Custar Sua Essência",
    versiculo: "Romanos 12:2 — Não vos conformeis com este século.",
    reflexao: "Aceitação sem autenticidade pode virar prisão. Sua identidade não precisa ser negociada para caber em grupos.",
    oracao: "Pai, fortalece minha identidade para que eu permaneça íntegra em qualquer ambiente.",
    louvor: "Quem Dizes Que Eu Sou - Hillsong em Português"
  },

  {
    dia: 227,
    semana: 33,
    diaSemana: "Quarta-feira",
    temaSemana: "Vida Social, Influências e Sabedoria",
    titulo: "Nem Toda Influência É Visível",
    versiculo: "1 Coríntios 15:33 — As más companhias corrompem.",
    reflexao: "Influências podem chegar por conversas, hábitos, conteúdos ou padrões sutis. Sabedoria também é vigilância.",
    oracao: "Senhor, me ajuda a reconhecer influências que comprometem meu propósito.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 228,
    semana: 33,
    diaSemana: "Quinta-feira",
    temaSemana: "Vida Social, Influências e Sabedoria",
    titulo: "Seja Luz, Não Reflexo Perdido",
    versiculo: "Mateus 5:14 — Vós sois a luz do mundo.",
    reflexao: "Há diferença entre influenciar e apenas absorver. Sua presença também pode carregar direção.",
    oracao: "Pai, me ajuda a permanecer luz sem perder minha essência.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 229,
    semana: 33,
    diaSemana: "Sexta-feira",
    temaSemana: "Vida Social, Influências e Sabedoria",
    titulo: "Limites Sociais Também São Maturidade",
    versiculo: "Provérbios 4:23 — Guarda o teu coração.",
    reflexao: "Nem toda proximidade é saudável. Saber dosar acesso também protege paz.",
    oracao: "Senhor, me dá coragem para estabelecer limites sociais saudáveis.",
    louvor: "Cuida de Mim - Diante do Trono"
  },

  {
    dia: 230,
    semana: 33,
    diaSemana: "Sábado",
    temaSemana: "Vida Social, Influências e Sabedoria",
    titulo: "Discernimento Antes de Pertencimento",
    versiculo: "Tiago 1:5 — Peça sabedoria.",
    reflexao: "Nem todo lugar onde você é aceita é necessariamente onde você floresce.",
    oracao: "Pai, me dá discernimento para escolher ambientes que cooperem com meu crescimento.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 231,
    semana: 33,
    diaSemana: "Domingo",
    temaSemana: "Vida Social, Influências e Sabedoria",
    titulo: "Domingo de Revisão de Influências",
    versiculo: "Salmos 139:23 — Sonda-me, ó Deus.",
    reflexao: "Hoje é dia de revisar ambientes, vínculos e influências. Deus também direciona conexões.",
    oracao: "Senhor, realinha minhas conexões com sabedoria e paz.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 232,
    semana: 34,
    diaSemana: "Segunda-feira",
    temaSemana: "Perdão e Libertação",
    titulo: "Perdoar Também É Se Libertar",
    versiculo: "Efésios 4:32 — Perdoando-vos uns aos outros.",
    reflexao: "Perdão não necessariamente inocenta dores, mas pode impedir que elas continuem governando sua vida.",
    oracao: "Senhor, me ajuda a caminhar em libertação, mesmo em áreas difíceis.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 233,
    semana: 34,
    diaSemana: "Terça-feira",
    temaSemana: "Perdão e Libertação",
    titulo: "Perdoar Não É Permitir Repetição",
    versiculo: "Provérbios 4:23 — Guarda o teu coração.",
    reflexao: "Perdão e reconciliação não são automaticamente a mesma coisa. Limites continuam importantes.",
    oracao: "Pai, me dá equilíbrio entre perdão e sabedoria.",
    louvor: "Cuida de Mim - Diante do Trono"
  },

  {
    dia: 234,
    semana: 34,
    diaSemana: "Quarta-feira",
    temaSemana: "Perdão e Libertação",
    titulo: "Ressentimento Também Prende",
    versiculo: "Hebreus 12:15 — Que nenhuma raiz de amargura...",
    reflexao: "Algumas dores permanecem não pela lembrança, mas pela prisão emocional que o ressentimento mantém.",
    oracao: "Senhor, arranca raízes de amargura que ainda pesam em mim.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 235,
    semana: 34,
    diaSemana: "Quinta-feira",
    temaSemana: "Perdão e Libertação",
    titulo: "Cure Sem Negar Sua Dor",
    versiculo: "Salmos 147:3 — Sara os quebrantados.",
    reflexao: "Perdão saudável não exige fingir que nada aconteceu; exige cura verdadeira.",
    oracao: "Pai, cura minha dor sem endurecer meu coração.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 236,
    semana: 34,
    diaSemana: "Sexta-feira",
    temaSemana: "Perdão e Libertação",
    titulo: "Soltar Também É Coragem",
    versiculo: "Eclesiastes 3:6 — Tempo de lançar fora.",
    reflexao: "Às vezes, libertação começa quando você decide parar de carregar o que já feriu demais.",
    oracao: "Senhor, me fortalece para soltar pesos antigos.",
    louvor: "Queima Outra Vez - Thalles Roberto"
  },

  {
    dia: 237,
    semana: 34,
    diaSemana: "Sábado",
    temaSemana: "Perdão e Libertação",
    titulo: "Sua Paz Vale Mais",
    versiculo: "João 14:27 — Deixo-vos a paz.",
    reflexao: "Há momentos em que escolher paz se torna mais importante do que insistir em dores.",
    {
    dia: 239,
    semana: 35,
    diaSemana: "Segunda-feira",
    temaSemana: "Força em Tempos Difíceis",
    titulo: "Você Não Precisa Ser Forte Sozinha",
    versiculo: "Isaías 41:10 — Não temas, porque eu sou contigo.",
    reflexao: "Há dias em que a força parece pequena, e tudo bem reconhecer isso. Deus não exige que você sustente tudo sozinha; Ele também se apresenta como sustento.",
    oracao: "Senhor, fortalece-me onde estou cansada e sustenta-me onde me sinto frágil.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 240,
    semana: 35,
    diaSemana: "Terça-feira",
    temaSemana: "Força em Tempos Difíceis",
    titulo: "Resistir Também É Vitória",
    versiculo: "Gálatas 6:9 — Não nos cansemos de fazer o bem.",
    reflexao: "Nem toda vitória parece grandiosa. Às vezes, vencer significa simplesmente continuar sem desistir.",
    oracao: "Pai, renova minha força para permanecer.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 241,
    semana: 35,
    diaSemana: "Quarta-feira",
    temaSemana: "Força em Tempos Difíceis",
    titulo: "Sua Fraqueza Não Cancela Seu Valor",
    versiculo: "2 Coríntios 12:9 — O meu poder se aperfeiçoa na fraqueza.",
    reflexao: "Momentos difíceis não anulam sua identidade. Vulnerabilidade não significa ausência de valor.",
    oracao: "Senhor, me ajuda a lembrar quem sou mesmo em dias difíceis.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 242,
    semana: 35,
    diaSemana: "Quinta-feira",
    temaSemana: "Força em Tempos Difíceis",
    titulo: "Passará",
    versiculo: "Salmos 30:5 — O choro pode durar uma noite...",
    reflexao: "Algumas noites parecem longas, mas estações difíceis não costumam ser permanentes.",
    oracao: "Pai, sustenta meu coração enquanto atravesso este processo.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 243,
    semana: 35,
    diaSemana: "Sexta-feira",
    temaSemana: "Força em Tempos Difíceis",
    titulo: "Deus Também Está No Meio",
    versiculo: "Isaías 43:2 — Quando passares pelas águas...",
    reflexao: "Nem sempre Deus remove imediatamente processos, mas Sua presença também sustenta durante eles.",
    oracao: "Senhor, me ajuda a perceber Tua presença no meio desta fase.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 244,
    semana: 35,
    diaSemana: "Sábado",
    temaSemana: "Força em Tempos Difíceis",
    titulo: "Um Dia de Cada Vez",
    versiculo: "Mateus 6:34 — Basta a cada dia o seu mal.",
    reflexao: "Sobrecarregar-se com o futuro pode intensificar o peso. Às vezes, a força necessária está em enfrentar um dia por vez.",
    oracao: "Pai, me ajuda a viver o hoje com coragem.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 245,
    semana: 35,
    diaSemana: "Domingo",
    temaSemana: "Força em Tempos Difíceis",
    titulo: "Domingo de Renovação",
    versiculo: "Lamentações 3:23 — Renovam-se cada manhã.",
    reflexao: "Hoje é dia de respirar, reorganizar forças e lembrar: ainda há renovação disponível.",
    oracao: "Senhor, renova minhas forças para uma nova semana.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 246,
    semana: 36,
    diaSemana: "Segunda-feira",
    temaSemana: "Chamado, Coragem e Expansão",
    titulo: "Você Não Foi Feita Para Se Encolher",
    versiculo: "2 Timóteo 1:7 — Deus não nos deu espírito de temor.",
    reflexao: "Medo pode até tentar limitar, mas não precisa governar. Há potenciais em você que exigem coragem para florescer.",
    oracao: "Senhor, quebra em mim medos que me impedem de crescer.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 247,
    semana: 36,
    diaSemana: "Terça-feira",
    temaSemana: "Chamado, Coragem e Expansão",
    titulo: "Crescer Também Exige Coragem",
    versiculo: "Josué 1:9 — Sê forte e corajoso.",
    reflexao: "Expansão nem sempre é confortável. Muitas vezes, crescimento pede coragem para sair do conhecido.",
    oracao: "Pai, fortalece minha coragem para viver além das minhas limitações.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 248,
    semana: 36,
    diaSemana: "Quarta-feira",
    temaSemana: "Chamado, Coragem e Expansão",
    titulo: "Não Subestime o Que Deus Plantou",
    versiculo: "Efésios 2:10 — Somos feitura sua.",
    reflexao: "Há dons, capacidades e visões em você que talvez ainda estejam em desenvolvimento, não ausentes.",
    oracao: "Senhor, me ajuda a reconhecer e desenvolver o que o Senhor plantou em mim.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 249,
    semana: 36,
    diaSemana: "Quinta-feira",
    temaSemana: "Chamado, Coragem e Expansão",
    titulo: "Expansão Também Precisa de Estrutura",
    versiculo: "Lucas 14:28 — Qual de vós, querendo construir...",
    reflexao: "Crescer não é apenas desejar mais; também exige preparo, estratégia e maturidade.",
    oracao: "Pai, prepara minha estrutura para sustentar expansão.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },

  {
    dia: 250,
    semana: 36,
    diaSemana: "Sexta-feira",
    temaSemana: "Chamado, Coragem e Expansão",
    titulo: "Seu Chamado Merece Sua Versão Corajosa",
    versiculo: "Filipenses 4:13 — Posso todas as coisas...",
    reflexao: "Há fases em que sua maior batalha não é falta de capacidade, mas excesso de dúvida.",
    oracao: "Senhor, fortalece minha confiança e coragem.",
    louvor: "Ousado Amor - Isaias Saad"
  },

  {
    dia: 251,
    semana: 36,
    diaSemana: "Sábado",
    temaSemana: "Chamado, Coragem e Expansão",
    titulo: "Continue Mesmo Sem Ver Tudo",
    versiculo: "Salmos 119:105 — Lâmpada para os meus pés.",
    reflexao: "Nem todo crescimento exige mapa completo; às vezes, exige apenas próximo passo.",
    oracao: "Pai, me ajuda a avançar com fé e coragem.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 252,
    semana: 36,
    diaSemana: "Domingo",
    temaSemana: "Chamado, Coragem e Expansão",
    titulo: "Domingo de Expansão",
    versiculo: "Isaías 54:2 — Alarga o espaço da tua tenda.",
    reflexao: "Hoje é dia de revisar medos, visão e coragem. Deus também amplia territórios.",
    oracao: "Senhor, expande minha visão, minha coragem e minha capacidade.",
    louvor: "Não Pare - Midian Lima"
  },  oracao: "Pai, conduz meu coração à paz.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 238,
    semana: 34,
    diaSemana: "Domingo",
    temaSemana: "Perdão e Libertação",
    titulo: "Domingo de Liberdade",
    versiculo: "Isaías 61:1 — Proclamar liberdade.",
    reflexao: "Hoje é dia de entregar pesos, revisar dores e permitir libertação.",
    oracao: "Senhor, conduz meu coração à liberdade e restauração.",
    louvor: "Liberta-me de Mim - Ministério Zoe"
  },
  {
    dia: 253,
    semana: 37,
    diaSemana: "Segunda-feira",
    temaSemana: "Identidade e Segurança",
    titulo: "Saiba Quem Você É Antes Que Definam Por Você",
    versiculo: "Salmos 139:14 — Eu te louvo porque me fizeste de modo especial.",
    reflexao: "Quando sua identidade depende apenas da opinião externa, sua paz pode oscilar demais. Segurança começa quando você fortalece quem é em essência.",
    oracao: "Senhor, fortalece minha identidade para que eu não me perca em definições externas.",
    louvor: "Quem Dizes Que Eu Sou - Hillsong em Português"
  },

  {
    dia: 254,
    semana: 37,
    diaSemana: "Terça-feira",
    temaSemana: "Identidade e Segurança",
    titulo: "Sua Essência Vale Mais Que Aprovação",
    versiculo: "Gálatas 1:10 — Procuro eu agradar homens?",
    reflexao: "Buscar aceitação constantemente pode custar autenticidade. Sua essência não precisa ser sacrificada para pertencimento.",
    oracao: "Pai, me ajuda a permanecer fiel à minha essência.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 255,
    semana: 37,
    diaSemana: "Quarta-feira",
    temaSemana: "Identidade e Segurança",
    titulo: "Insegurança Não Precisa Liderar",
    versiculo: "2 Timóteo 1:7 — Espírito de poder, amor e equilíbrio.",
    reflexao: "Inseguranças podem existir sem precisarem governar decisões.",
    oracao: "Senhor, fortalece minha segurança emocional e espiritual.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 256,
    semana: 37,
    diaSemana: "Quinta-feira",
    temaSemana: "Identidade e Segurança",
    titulo: "Você Não Precisa Se Diminuir",
    versiculo: "Efésios 2:10 — Somos feitura sua.",
    reflexao: "Há ambientes onde você pode ter aprendido a se encolher, mas isso não significa que nasceu para menos.",
    oracao: "Pai, cura em mim toda tendência de me diminuir.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 257,
    semana: 37,
    diaSemana: "Sexta-feira",
    temaSemana: "Identidade e Segurança",
    titulo: "Segurança Também É Construção",
    versiculo: "Provérbios 4:23 — Guarda o teu coração.",
    reflexao: "Segurança não é ausência total de dúvida; muitas vezes é construção diária.",
    oracao: "Senhor, me ensina a construir segurança com profundidade.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 258,
    semana: 37,
    diaSemana: "Sábado",
    temaSemana: "Identidade e Segurança",
    titulo: "Sua História Não É Seu Limite",
    versiculo: "2 Coríntios 5:17 — Nova criatura.",
    reflexao: "Seu passado pode explicar partes de você, mas não precisa limitar tudo que ainda pode florescer.",
    oracao: "Pai, fortalece minha visão além do passado.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 259,
    semana: 37,
    diaSemana: "Domingo",
    temaSemana: "Identidade e Segurança",
    titulo: "Domingo de Reafirmação",
    versiculo: "Romanos 8:16 — Somos filhos de Deus.",
    reflexao: "Hoje é dia de reafirmar identidade, dignidade e essência.",
    oracao: "Senhor, reafirma em mim quem eu sou.",
    louvor: "Quem Dizes Que Eu Sou - Hillsong em Português"
  },

  {
    dia: 260,
    semana: 38,
    diaSemana: "Segunda-feira",
    temaSemana: "Disciplina Financeira e Mordomia",
    titulo: "Sabedoria Também Administra",
    versiculo: "Provérbios 21:5 — Os planos bem elaborados levam à fartura.",
    reflexao: "Prosperidade não depende apenas de ganhar mais, mas também de administrar melhor. Sabedoria financeira também é espiritual.",
    oracao: "Senhor, me dá sabedoria para administrar recursos com responsabilidade.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },

  {
    dia: 261,
    semana: 38,
    diaSemana: "Terça-feira",
    temaSemana: "Disciplina Financeira e Mordomia",
    titulo: "Pequenas Decisões Também Constroem",
    versiculo: "Lucas 16:10 — Fiel no pouco.",
    reflexao: "Grandes construções financeiras muitas vezes nascem de pequenas decisões consistentes.",
    oracao: "Pai, fortalece minha responsabilidade nas pequenas escolhas.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 262,
    semana: 38,
    diaSemana: "Quarta-feira",
    temaSemana: "Disciplina Financeira e Mordomia",
    titulo: "Consumo Sem Consciência Pode Custar Caro",
    versiculo: "Provérbios 22:7 — O que toma emprestado é servo.",
    reflexao: "Nem toda compra é necessidade. Discernimento também protege futuro.",
    oracao: "Senhor, me dá domínio e sabedoria nas minhas decisões financeiras.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 263,
    semana: 38,
    diaSemana: "Quinta-feira",
    temaSemana: "Disciplina Financeira e Mordomia",
    titulo: "Planejamento Também É Fé",
    versiculo: "Lucas 14:28 — Assentar-se primeiro para calcular.",
    reflexao: "Planejar não é falta de fé; muitas vezes é responsabilidade.",
    oracao: "Pai, me ensina a unir visão e planejamento.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 264,
    semana: 38,
    diaSemana: "Sexta-feira",
    temaSemana: "Disciplina Financeira e Mordomia",
    titulo: "Generosidade e Sabedoria Podem Andar Juntas",
    versiculo: "2 Coríntios 9:7 — Deus ama quem dá com alegria.",
    reflexao: "Boa administração também envolve coração sábio, não apenas retenção.",
    oracao: "Senhor, me dá equilíbrio entre prudência e generosidade.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 265,
    semana: 38,
    diaSemana: "Sábado",
    temaSemana: "Disciplina Financeira e Mordomia",
    titulo: "Construa Com Consistência",
    versiculo: "Provérbios 13:11 — O que ajunta pouco a pouco terá aumento.",
    reflexao: "Crescimento sólido muitas vezes é gradual.",
    oracao: "Pai, fortalece minha constância e disciplina.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 266,
    semana: 38,
    diaSemana: "Domingo",
    temaSemana: "Disciplina Financeira e Mordomia",
    titulo: "Domingo de Organização",
    versiculo: "1 Coríntios 14:40 — Faça-se tudo com ordem.",
    reflexao: "Hoje é dia de revisar prioridades, organização e visão financeira.",
    oracao: "Senhor, organiza minha mente, meus recursos e minhas prioridades.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },
  {
    dia: 267,
    semana: 39,
    diaSemana: "Segunda-feira",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Paz Também É Critério",
    versiculo: "Colossenses 3:15 — Seja a paz o árbitro em vosso coração.",
    reflexao: "Nem toda conexão intensa é saudável. Relações maduras não dependem apenas de química, mas também de paz, clareza e respeito.",
    oracao: "Senhor, me dá discernimento para reconhecer relações que cooperam com minha paz.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 268,
    semana: 39,
    diaSemana: "Terça-feira",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Amor Não Deve Custar Sua Essência",
    versiculo: "Provérbios 4:23 — Guarda o teu coração.",
    reflexao: "Relacionamentos saudáveis não exigem abandono da sua identidade para manutenção.",
    oracao: "Pai, me ajuda a amar sem me perder.",
    louvor: "Cuida de Mim - Diante do Trono"
  },

  {
    dia: 269,
    semana: 39,
    diaSemana: "Quarta-feira",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Discernimento Antes de Entrega",
    versiculo: "Tiago 1:5 — Peça sabedoria.",
    reflexao: "Nem toda aproximação merece profundidade imediata. Sabedoria também protege coração.",
    oracao: "Senhor, me dá clareza antes de entregar partes profundas de mim.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 270,
    semana: 39,
    diaSemana: "Quinta-feira",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Reciprocidade Importa",
    versiculo: "Lucas 6:31 — Como quereis que os homens vos façam...",
    reflexao: "Relações sustentáveis não sobrevivem apenas de esforço unilateral.",
    oracao: "Pai, me ensina a reconhecer reciprocidade saudável.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 271,
    semana: 39,
    diaSemana: "Sexta-feira",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Limites Também São Amor",
    versiculo: "Mateus 5:37 — Seja o vosso falar: sim, sim; não, não.",
    reflexao: "Dizer não, estabelecer limites e proteger sua paz também fazem parte de relações maduras.",
    oracao: "Senhor, fortalece minha coragem para manter limites saudáveis.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 272,
    semana: 39,
    diaSemana: "Sábado",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Nem Toda Presença É Permanência",
    versiculo: "Eclesiastes 3:1 — Tudo tem seu tempo.",
    reflexao: "Algumas pessoas participam de capítulos, não necessariamente da história inteira.",
    oracao: "Pai, me dá maturidade para aceitar ciclos e tempos.",
    louvor: "Queima Outra Vez - Thalles Roberto"
  },

  {
    dia: 273,
    semana: 39,
    diaSemana: "Domingo",
    temaSemana: "Relacionamentos Saudáveis",
    titulo: "Domingo de Revisão Emocional",
    versiculo: "Salmos 139:23 — Sonda-me, ó Deus.",
    reflexao: "Hoje é dia de revisar vínculos, emoções e limites. Deus também direciona relações.",
    oracao: "Senhor, alinha meus relacionamentos com paz, clareza e propósito.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 274,
    semana: 40,
    diaSemana: "Segunda-feira",
    temaSemana: "Excelência e Propósito",
    titulo: "Faça Bem o Que Está em Suas Mãos Hoje",
    versiculo: "Colossenses 3:23 — Tudo quanto fizerdes, fazei de todo o coração.",
    reflexao: "Excelência não depende apenas de grandes oportunidades; ela começa na forma como você trata o que já está diante de você.",
    oracao: "Senhor, me ensina a viver excelência nas pequenas e grandes responsabilidades.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 275,
    semana: 40,
    diaSemana: "Terça-feira",
    temaSemana: "Excelência e Propósito",
    titulo: "Chamado Também Exige Desenvolvimento",
    versiculo: "Provérbios 22:29 — Viste um homem diligente?",
    reflexao: "Talento sem desenvolvimento pode limitar expansão. Propósito também exige preparo.",
    oracao: "Pai, fortalece minha disciplina para desenvolver o que o Senhor me confiou.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 276,
    semana: 40,
    diaSemana: "Quarta-feira",
    temaSemana: "Excelência e Propósito",
    titulo: "Consistência Vale Mais Que Impulso",
    versiculo: "Gálatas 6:9 — Não nos cansemos.",
    reflexao: "Grandes construções raramente dependem apenas de intensidade; constância sustenta.",
    oracao: "Senhor, fortalece minha constância.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 277,
    semana: 40,
    diaSemana: "Quinta-feira",
    temaSemana: "Excelência e Propósito",
    titulo: "Sua Rotina Também Constrói Destino",
    versiculo: "Lucas 16:10 — Fiel no pouco.",
    reflexao: "Pequenas decisões repetidas constroem grandes futuros.",
    oracao: "Pai, me ajuda a honrar minha rotina com sabedoria.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 278,
    semana: 40,
    diaSemana: "Sexta-feira",
    temaSemana: "Excelência e Propósito",
    titulo: "Não Confunda Pressa Com Propósito",
    versiculo: "Eclesiastes 3:11 — Tudo fez formoso em seu tempo.",
    reflexao: "Crescimento sólido não precisa ser apressado para ser real.",
    oracao: "Senhor, me dá sabedoria para crescer com estrutura.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 279,
    semana: 40,
    diaSemana: "Sábado",
    temaSemana: "Excelência e Propósito",
    titulo: "Seu Melhor Também É Adoração",
    versiculo: "Romanos 12:1 — Apresenteis...",
    reflexao: "Excelência com propósito pode ser expressão de honra.",
    oracao: "Pai, recebe meu esforço como parte da minha entrega.",
    louvor: "Me Ama - Diante do Trono"
  },

  {
    dia: 280,
    semana: 40,
    diaSemana: "Domingo",
    temaSemana: "Excelência e Propósito",
    titulo: "Domingo de Estratégia e Propósito",
    versiculo: "Habacuque 2:2 — Escreve a visão.",
    reflexao: "Hoje é dia de revisar metas, visão e excelência. Deus também direciona construções.",
    oracao: "Senhor, alinha meu propósito, minha excelência e minha visão.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },
  {
    dia: 281,
    semana: 41,
    diaSemana: "Segunda-feira",
    temaSemana: "Autoconhecimento e Verdade",
    titulo: "Encare o Que Precisa Ser Curado",
    versiculo: "Salmos 139:23-24 — Sonda-me, ó Deus, e conhece o meu coração.",
    reflexao: "Crescimento profundo exige coragem para olhar além da superfície. Nem toda dor some quando ignorada; algumas só mudam quando reconhecidas.",
    oracao: "Senhor, me dá coragem para enxergar o que precisa ser tratado em mim.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 282,
    semana: 41,
    diaSemana: "Terça-feira",
    temaSemana: "Autoconhecimento e Verdade",
    titulo: "Nem Toda Reação É Sobre o Presente",
    versiculo: "Romanos 12:2 — Transformai-vos pela renovação da mente.",
    reflexao: "Algumas reações nascem mais de feridas antigas do que do momento atual. Entender padrões também cura.",
    oracao: "Pai, me ajuda a compreender raízes emocionais profundas.",
    louvor: "Renova-me - Aline Barros"
  },

  {
    dia: 283,
    semana: 41,
    diaSemana: "Quarta-feira",
    temaSemana: "Autoconhecimento e Verdade",
    titulo: "Verdade Liberta",
    versiculo: "João 8:32 — Conhecereis a verdade, e a verdade vos libertará.",
    reflexao: "Às vezes, a libertação começa quando você para de romantizar o que te fere ou negar o que precisa mudar.",
    oracao: "Senhor, me fortalece para viver verdades que curam.",
    louvor: "Liberta-me de Mim - Ministério Zoe"
  },

  {
    dia: 284,
    semana: 41,
    diaSemana: "Quinta-feira",
    temaSemana: "Autoconhecimento e Verdade",
    titulo: "Aceitar Também É Clareza",
    versiculo: "Eclesiastes 3:1 — Tudo tem seu tempo.",
    reflexao: "Aceitar uma verdade não significa desistir; muitas vezes significa parar de lutar contra o que precisa ser compreendido.",
    oracao: "Pai, me dá clareza para aceitar o que preciso reconhecer.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 285,
    semana: 41,
    diaSemana: "Sexta-feira",
    temaSemana: "Autoconhecimento e Verdade",
    titulo: "Conhecer Seus Limites Também É Sabedoria",
    versiculo: "Provérbios 4:23 — Guarda o teu coração.",
    reflexao: "Autoconhecimento também envolve reconhecer fragilidades, gatilhos e limites sem condenação.",
    oracao: "Senhor, me ensina a me compreender com verdade e maturidade.",
    louvor: "Cuida de Mim - Diante do Trono"
  },

  {
    dia: 286,
    semana: 41,
    diaSemana: "Sábado",
    temaSemana: "Autoconhecimento e Verdade",
    titulo: "Sua Cura Merece Honestidade",
    versiculo: "Tiago 5:16 — Confessai...",
    reflexao: "Transformação profunda costuma exigir honestidade consigo mesma.",
    oracao: "Pai, remove máscaras que me afastam da cura.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 287,
    semana: 41,
    diaSemana: "Domingo",
    temaSemana: "Autoconhecimento e Verdade",
    titulo: "Domingo de Verdade",
    versiculo: "João 8:36 — Se o Filho vos libertar...",
    reflexao: "Hoje é dia de revisar emoções, padrões e verdades. Deus também cura com clareza.",
    oracao: "Senhor, conduz-me a uma verdade que transforma.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 288,
    semana: 42,
    diaSemana: "Segunda-feira",
    temaSemana: "Legado e Impacto",
    titulo: "Sua Vida Pode Produzir Mais Que Sobrevivência",
    versiculo: "Mateus 5:16 — Assim brilhe a vossa luz.",
    reflexao: "Você não foi chamada apenas para existir; há impacto, influência e construção possíveis através da sua vida.",
    oracao: "Senhor, me ajuda a viver de forma que minha vida também produza impacto.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 289,
    semana: 42,
    diaSemana: "Terça-feira",
    temaSemana: "Legado e Impacto",
    titulo: "O Que Você Constrói Também Permanece",
    versiculo: "1 Coríntios 3:14 — Se permanecer a obra.",
    reflexao: "Nem toda construção é visível imediatamente, mas aquilo que você desenvolve pode ultrapassar fases.",
    oracao: "Pai, me ajuda a construir com propósito e profundidade.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 290,
    semana: 42,
    diaSemana: "Quarta-feira",
    temaSemana: "Legado e Impacto",
    titulo: "Influência Também É Responsabilidade",
    versiculo: "Lucas 12:48 — A quem muito foi dado...",
    reflexao: "Toda influência carrega responsabilidade. O que você transmite também forma ambientes.",
    oracao: "Senhor, me dá sabedoria para influenciar com verdade.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 291,
    semana: 42,
    diaSemana: "Quinta-feira",
    temaSemana: "Legado e Impacto",
    titulo: "Pequenos Atos Também Geram Marca",
    versiculo: "Gálatas 6:9 — Não nos cansemos.",
    reflexao: "Impacto não nasce apenas de grandes plataformas; muitas vezes, de constância comum.",
    oracao: "Pai, fortalece minha fidelidade diária.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 292,
    semana: 42,
    diaSemana: "Sexta-feira",
    temaSemana: "Legado e Impacto",
    titulo: "Construa Além de Si",
    versiculo: "Filipenses 2:4 — Não atente cada um somente para o que é seu.",
    reflexao: "Legado também envolve impacto que beneficia além da própria vida.",
    oracao: "Senhor, amplia minha visão para construir além de mim.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 293,
    semana: 42,
    diaSemana: "Sábado",
    temaSemana: "Legado e Impacto",
    titulo: "Sua Jornada Pode Inspirar",
    versiculo: "2 Coríntios 1:4 — Consola-nos para que possamos consolar.",
    reflexao: "Até suas dores curadas podem se tornar caminhos de força para outras pessoas.",
    oracao: "Pai, usa minha jornada para gerar vida.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 294,
    semana: 42,
    diaSemana: "Domingo",
    temaSemana: "Legado e Impacto",
    titulo: "Domingo de Visão de Legado",
    versiculo: "Habacuque 2:2 — Escreve a visão.",
    reflexao: "Hoje é dia de revisar não apenas o que você vive, mas o que constrói.",
    oracao: "Senhor, alinha minha vida a um legado com propósito.",
    louvor: "Raridade - Anderson Freire"
  },
  {
    dia: 295,
    semana: 43,
    diaSemana: "Segunda-feira",
    temaSemana: "Paciência e Processo",
    titulo: "Nem Tudo Floresce Imediatamente",
    versiculo: "Eclesiastes 3:11 — Tudo fez formoso em seu tempo.",
    reflexao: "Há fases em que crescimento parece lento, mas lentidão não significa ausência de progresso. Processos profundos muitas vezes amadurecem em silêncio.",
    oracao: "Senhor, me ensina a confiar no tempo certo sem desistir no meio do processo.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 296,
    semana: 43,
    diaSemana: "Terça-feira",
    temaSemana: "Paciência e Processo",
    titulo: "Pressa Pode Comprometer Estruturas",
    versiculo: "Provérbios 19:2 — A pressa nos pés erra o caminho.",
    reflexao: "Nem toda aceleração é avanço. Algumas construções precisam de profundidade antes de expansão.",
    oracao: "Pai, me livra da ansiedade que tenta atropelar processos importantes.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 297,
    semana: 43,
    diaSemana: "Quarta-feira",
    temaSemana: "Paciência e Processo",
    titulo: "Continue Regando",
    versiculo: "Gálatas 6:9 — Não nos cansemos...",
    reflexao: "Há sementes que exigem continuidade antes de colheita. Nem todo resultado é imediato.",
    oracao: "Senhor, fortalece minha constância enquanto ainda estou cultivando.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 298,
    semana: 43,
    diaSemana: "Quinta-feira",
    temaSemana: "Paciência e Processo",
    titulo: "Seu Tempo de Formação Importa",
    versiculo: "Tiago 1:4 — A perseverança deve ter ação completa.",
    reflexao: "Algumas estações não são atrasos; são formação.",
    oracao: "Pai, me ajuda a reconhecer valor também no desenvolvimento.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 299,
    semana: 43,
    diaSemana: "Sexta-feira",
    temaSemana: "Paciência e Processo",
    titulo: "Confie Mesmo Sem Ver Tudo",
    versiculo: "Hebreus 11:1 — A fé é a certeza...",
    reflexao: "Nem sempre progresso é imediatamente visível, mas invisível não significa inexistente.",
    oracao: "Senhor, fortalece minha fé durante fases silenciosas.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 300,
    semana: 43,
    diaSemana: "Sábado",
    temaSemana: "Paciência e Processo",
    titulo: "Permanecer Também É Crescimento",
    versiculo: "João 15:4 — Permanecei em mim.",
    reflexao: "Às vezes, o maior avanço de uma fase é simplesmente não desistir.",
    oracao: "Pai, me ajuda a permanecer com constância.",
    louvor: "Me Ama - Diante do Trono"
  },

  {
    dia: 301,
    semana: 43,
    diaSemana: "Domingo",
    temaSemana: "Paciência e Processo",
    titulo: "Domingo de Confiança",
    versiculo: "Salmos 37:5 — Entrega o teu caminho.",
    reflexao: "Hoje é dia de revisar ansiedades e renovar confiança no processo.",
    oracao: "Senhor, fortalece minha paz enquanto caminho.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 302,
    semana: 44,
    diaSemana: "Segunda-feira",
    temaSemana: "Coragem Para Decisões",
    titulo: "Decidir Também É Maturidade",
    versiculo: "Deuteronômio 30:19 — Escolhe, pois, a vida.",
    reflexao: "Indecisão prolongada também pode custar destinos. Há momentos em que maturidade exige coragem para escolher.",
    oracao: "Senhor, me dá sabedoria e coragem para tomar decisões alinhadas.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 303,
    semana: 44,
    diaSemana: "Terça-feira",
    temaSemana: "Coragem Para Decisões",
    titulo: "Nem Toda Escolha Será Confortável",
    versiculo: "Josué 24:15 — Escolhei hoje a quem sirvais.",
    reflexao: "Algumas decisões corretas podem ser desconfortáveis no início, mas libertadoras no futuro.",
    oracao: "Pai, fortalece meu coração para escolher o que é certo.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 304,
    semana: 44,
    diaSemana: "Quarta-feira",
    temaSemana: "Coragem Para Decisões",
    titulo: "Medo Não Deve Liderar",
    versiculo: "2 Timóteo 1:7 — Espírito de poder.",
    reflexao: "Decisões guiadas apenas por medo podem limitar futuros importantes.",
    oracao: "Senhor, me ajuda a decidir com fé e clareza.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 305,
    semana: 44,
    diaSemana: "Quinta-feira",
    temaSemana: "Coragem Para Decisões",
    titulo: "Clareza Também Se Constrói",
    versiculo: "Tiago 1:5 — Peça sabedoria.",
    reflexao: "Nem toda clareza chega pronta; muitas vezes ela cresce à medida que você busca direção.",
    oracao: "Pai, me dá discernimento para decisões importantes.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 306,
    semana: 44,
    diaSemana: "Sexta-feira",
    temaSemana: "Coragem Para Decisões",
    titulo: "Renúncia Também Pode Ser Proteção",
    versiculo: "Provérbios 4:23 — Guarda o teu coração.",
    reflexao: "Escolher não seguir certos caminhos também pode preservar propósito.",
    oracao: "Senhor, fortalece minha coragem para renunciar o que não coopera.",
    louvor: "Cuida de Mim - Diante do Trono"
  },

  {
    dia: 307,
    semana: 44,
    diaSemana: "Sábado",
    temaSemana: "Coragem Para Decisões",
    titulo: "Depois da Decisão, Permaneça",
    versiculo: "Gálatas 5:1 — Permanecei firmes.",
    reflexao: "Decidir é importante; sustentar escolhas saudáveis também.",
    oracao: "Pai, me ajuda a permanecer firme nas decisões corretas.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 308,
    semana: 44,
    diaSemana: "Domingo",
    temaSemana: "Coragem Para Decisões",
    titulo: "Domingo de Clareza",
    versiculo: "Provérbios 3:6 — Ele endireitará as tuas veredas.",
    reflexao: "Hoje é dia de revisar caminhos, escolhas e direção.",
    oracao: "Senhor, alinha minhas decisões à Tua sabedoria.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },
  {
    dia: 309,
    semana: 45,
    diaSemana: "Segunda-feira",
    temaSemana: "Intimidade com Deus",
    titulo: "Profundidade Não É Pressa",
    versiculo: "Jeremias 29:13 — Buscar-me-eis e me achareis quando me buscardes de todo o coração.",
    reflexao: "Intimidade não costuma nascer apenas de momentos intensos, mas de presença constante. Relações profundas são construídas em continuidade.",
    oracao: "Senhor, me ensina a Te buscar com profundidade verdadeira.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 310,
    semana: 45,
    diaSemana: "Terça-feira",
    temaSemana: "Intimidade com Deus",
    titulo: "Presença Também Se Cultiva",
    versiculo: "Tiago 4:8 — Chegai-vos a Deus.",
    reflexao: "Quanto mais você se aproxima, mais sensível pode se tornar à direção, paz e verdade.",
    oracao: "Pai, aumenta em mim constância na Tua presença.",
    louvor: "Me Ama - Diante do Trono"
  },

  {
    dia: 311,
    semana: 45,
    diaSemana: "Quarta-feira",
    temaSemana: "Intimidade com Deus",
    titulo: "Silêncio Também Aproxima",
    versiculo: "Salmos 46:10 — Aquietai-vos e sabei.",
    reflexao: "Nem toda profundidade nasce de palavras. Às vezes, quietude também revela presença.",
    oracao: "Senhor, me ensina a reconhecer-Te também no silêncio.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 312,
    semana: 45,
    diaSemana: "Quinta-feira",
    temaSemana: "Intimidade com Deus",
    titulo: "Constância Vale Mais Que Oscilação",
    versiculo: "João 15:4 — Permanecei em mim.",
    reflexao: "Relacionamentos profundos crescem em permanência, não apenas em impulsos.",
    oracao: "Pai, fortalece minha permanência.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 313,
    semana: 45,
    diaSemana: "Sexta-feira",
    temaSemana: "Intimidade com Deus",
    titulo: "Conhecer Também Transforma",
    versiculo: "2 Coríntios 3:18 — Somos transformados.",
    reflexao: "Quanto mais profunda a intimidade, mais profundas também podem ser as transformações.",
    oracao: "Senhor, transforma-me através da Tua presença.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 314,
    semana: 45,
    diaSemana: "Sábado",
    temaSemana: "Intimidade com Deus",
    titulo: "Presença Sustenta",
    versiculo: "Êxodo 33:14 — A minha presença irá contigo.",
    reflexao: "Nem toda paz vem da ausência de desafios; muitas nascem da consciência de companhia.",
    oracao: "Pai, fortalece em mim consciência da Tua presença.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 315,
    semana: 45,
    diaSemana: "Domingo",
    temaSemana: "Intimidade com Deus",
    titulo: "Domingo de Presença",
    versiculo: "Salmos 63:1 — A minha alma tem sede de Ti.",
    reflexao: "Hoje é dia de revisar prioridades espirituais e profundidade.",
    oracao: "Senhor, aumenta minha sede por Ti.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 316,
    semana: 46,
    diaSemana: "Segunda-feira",
    temaSemana: "Sabedoria Para o Futuro",
    titulo: "Construa Pensando Além do Agora",
    versiculo: "Provérbios 24:27 — Prepara o teu trabalho.",
    reflexao: "Sabedoria também é construir presente considerando consequências futuras. Nem toda escolha afeta apenas hoje.",
    oracao: "Senhor, me dá visão para construir com responsabilidade.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },

  {
    dia: 317,
    semana: 46,
    diaSemana: "Terça-feira",
    temaSemana: "Sabedoria Para o Futuro",
    titulo: "Planejamento Também É Prudência",
    versiculo: "Lucas 14:28 — Calcule a despesa.",
    reflexao: "Futuro sólido muitas vezes nasce de planejamento consciente.",
    oracao: "Pai, me ensina a planejar com sabedoria.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 318,
    semana: 46,
    diaSemana: "Quarta-feira",
    temaSemana: "Sabedoria Para o Futuro",
    titulo: "Nem Toda Oportunidade É Direção",
    versiculo: "Provérbios 3:6 — Reconhece-o.",
    reflexao: "Discernimento evita confundir pressa, carência ou distração com propósito.",
    oracao: "Senhor, me dá clareza para reconhecer caminhos certos.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 319,
    semana: 46,
    diaSemana: "Quinta-feira",
    temaSemana: "Sabedoria Para o Futuro",
    titulo: "O Futuro Também Se Planta",
    versiculo: "Gálatas 6:7 — Tudo o que o homem semear...",
    reflexao: "Muitos resultados futuros começam em sementes atuais.",
    oracao: "Pai, me ajuda a plantar hoje o que desejo colher com propósito.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 320,
    semana: 46,
    diaSemana: "Sexta-feira",
    temaSemana: "Sabedoria Para o Futuro",
    titulo: "Proteja Sua Construção",
    versiculo: "Provérbios 4:23 — Guarda o teu coração.",
    reflexao: "Construções importantes também precisam de proteção emocional, espiritual e prática.",
    oracao: "Senhor, guarda minha visão e minhas construções.",
    louvor: "Cuida de Mim - Diante do Trono"
  },

  {
    dia: 321,
    semana: 46,
    diaSemana: "Sábado",
    temaSemana: "Sabedoria Para o Futuro",
    titulo: "Visão Sem Constância Se Enfraquece",
    versiculo: "Habacuque 2:2 — Escreve a visão.",
    reflexao: "Ter visão importa; sustentá-la também.",
    oracao: "Pai, fortalece minha constância para sustentar visão.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 322,
    semana: 46,
    diaSemana: "Domingo",
    temaSemana: "Sabedoria Para o Futuro",
    titulo: "Domingo de Estratégia",
    versiculo: "Jeremias 29:11 — Planos de paz.",
    reflexao: "Hoje é dia de revisar visão, planejamento e direção.",
    oracao: "Senhor, alinha meu futuro à Tua sabedoria.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },
  {
    dia: 323,
    semana: 47,
    diaSemana: "Segunda-feira",
    temaSemana: "Emoções e Cura Interior",
    titulo: "O Que Você Sente Também Importa",
    versiculo: "Salmos 34:18 — Perto está o Senhor dos que têm o coração quebrantado.",
    reflexao: "Ignorar emoções não é o mesmo que superá-las. Cura começa quando você reconhece o que sente sem se condenar por isso.",
    oracao: "Senhor, me ajuda a acolher minhas emoções com maturidade e cura.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 324,
    semana: 47,
    diaSemana: "Terça-feira",
    temaSemana: "Emoções e Cura Interior",
    titulo: "Nem Toda Dor É Visível",
    versiculo: "Provérbios 14:13 — Até no riso o coração pode ter dor.",
    reflexao: "Algumas dores são silenciosas. Aprender a reconhecer o que está por trás do comportamento também faz parte da cura.",
    oracao: "Pai, ilumina áreas internas que ainda precisam de cuidado.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 325,
    semana: 47,
    diaSemana: "Quarta-feira",
    temaSemana: "Emoções e Cura Interior",
    titulo: "Sentir Não Te Enfraquece",
    versiculo: "2 Coríntios 12:9 — O meu poder se aperfeiçoa na fraqueza.",
    reflexao: "Emoções não resolvidas podem pesar mais do que emoções reconhecidas. Vulnerabilidade também abre caminho para cura.",
    oracao: "Senhor, me ajuda a não rejeitar o que estou sentindo.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 326,
    semana: 47,
    diaSemana: "Quinta-feira",
    temaSemana: "Emoções e Cura Interior",
    titulo: "Processo Emocional Leva Tempo",
    versiculo: "Eclesiastes 3:1 — Tudo tem o seu tempo.",
    reflexao: "Cura emocional não é instantânea. Respeitar seu tempo também faz parte da restauração.",
    oracao: "Pai, me ensina a respeitar meu processo interno.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 327,
    semana: 47,
    diaSemana: "Sexta-feira",
    temaSemana: "Emoções e Cura Interior",
    titulo: "Não Precisa Carregar Tudo Sozinha",
    versiculo: "Mateus 11:28 — Vinde a mim todos os que estais cansados.",
    reflexao: "Existem pesos emocionais que não foram feitos para serem carregados sozinhos. Entregar também é cura.",
    oracao: "Senhor, me ajuda a entregar o que não consigo resolver sozinha.",
    louvor: "Descansa - Midian Lima"
  },

  {
    dia: 328,
    semana: 47,
    diaSemana: "Sábado",
    temaSemana: "Emoções e Cura Interior",
    titulo: "Cura Também É Processo Diário",
    versiculo: "Salmos 147:3 — Sara os quebrantados de coração.",
    reflexao: "Algumas feridas não desaparecem de uma vez, mas vão sendo tratadas em etapas.",
    oracao: "Pai, continua minha cura mesmo quando eu não percebo.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 329,
    semana: 47,
    diaSemana: "Domingo",
    temaSemana: "Emoções e Cura Interior",
    titulo: "Domingo de Cura",
    versiculo: "Isaías 61:1 — Enviou-me a restaurar os quebrantados.",
    reflexao: "Hoje é dia de descanso emocional e entrega de dores.",
    oracao: "Senhor, cura minhas emoções e restaura meu interior.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 330,
    semana: 48,
    diaSemana: "Segunda-feira",
    temaSemana: "Direção e Propósito",
    titulo: "Nem Todo Caminho É Seu",
    versiculo: "Provérbios 3:6 — Ele endireitará as tuas veredas.",
    reflexao: "Discernir caminhos também evita desgaste emocional e perda de tempo. Nem tudo que existe foi feito para você seguir.",
    oracao: "Senhor, me guia para caminhos alinhados ao meu propósito.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 331,
    semana: 48,
    diaSemana: "Terça-feira",
    temaSemana: "Direção e Propósito",
    titulo: "Clareza Também É Resposta",
    versiculo: "Tiago 1:5 — Peça sabedoria.",
    reflexao: "Nem sempre a resposta vem em forma de sinais externos; às vezes ela se forma dentro de você com clareza crescente.",
    oracao: "Pai, me dá clareza para decisões importantes.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 332,
    semana: 48,
    diaSemana: "Quarta-feira",
    temaSemana: "Direção e Propósito",
    titulo: "Propósito Não Se Força",
    versiculo: "Eclesiastes 3:11 — Tudo fez formoso em seu tempo.",
    reflexao: "Quando algo é forçado, pode perder leveza. Propósito floresce com alinhamento, não pressão.",
    oracao: "Senhor, alinha meu caminho ao Teu tempo perfeito.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 333,
    semana: 48,
    diaSemana: "Quinta-feira",
    temaSemana: "Direção e Propósito",
    titulo: "Direção Também É Processo",
    versiculo: "Salmos 119:105 — Lâmpada para os meus pés.",
    reflexao: "Nem sempre o caminho inteiro é revelado de uma vez. Direção costuma vir em etapas.",
    oracao: "Pai, me ensina a confiar no próximo passo.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 334,
    semana: 48,
    diaSemana: "Sexta-feira",
    temaSemana: "Direção e Propósito",
    titulo: "Nem Toda Pressa É Chamado",
    versiculo: "Isaías 28:16 — Quem crer não se apressará.",
    reflexao: "Urgência emocional pode ser confundida com direção. Discernimento é essencial.",
    oracao: "Senhor, me livra de decisões movidas por ansiedade.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 335,
    semana: 48,
    diaSemana: "Sábado",
    temaSemana: "Direção e Propósito",
    titulo: "Sua Vida Tem Direção",
    versiculo: "Jeremias 29:11 — Planos de paz.",
    reflexao: "Mesmo quando parece confuso, há um fio de direção sendo construído.",
    oracao: "Pai, fortalece minha confiança no Teu propósito.",
    louvor: "Deus Proverá - Gabriela Gomes"
  },

  {
    dia: 336,
    semana: 48,
    diaSemana: "Domingo",
    temaSemana: "Direção e Propósito",
    titulo: "Domingo de Direção",
    versiculo: "Provérbios 16:9 — O coração do homem planeja...",
    reflexao: "Hoje é dia de alinhar planos e direção com sabedoria.",
    oracao: "Senhor, guia meus passos com clareza e paz.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },
  {
    dia: 337,
    semana: 49,
    diaSemana: "Segunda-feira",
    temaSemana: "Renovo e Recomeços",
    titulo: "Recomeçar Também É Coragem",
    versiculo: "Isaías 43:19 — Eis que faço coisa nova.",
    reflexao: "Recomeços nem sempre são sobre começar do zero, mas sobre começar com mais consciência, maturidade e aprendizado.",
    oracao: "Senhor, me dá coragem para recomeçar onde for necessário.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 338,
    semana: 49,
    diaSemana: "Terça-feira",
    temaSemana: "Renovo e Recomeços",
    titulo: "O Novo Nem Sempre Parece Familiar",
    versiculo: "Eclesiastes 3:1 — Tudo tem seu tempo.",
    reflexao: "O novo pode gerar desconforto no início, mas isso não significa que não seja bom. Mudanças exigem adaptação.",
    oracao: "Pai, me ajuda a confiar no novo que o Senhor está fazendo.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 339,
    semana: 49,
    diaSemana: "Quarta-feira",
    temaSemana: "Renovo e Recomeços",
    titulo: "Nem Tudo Que Acabou Foi Perda",
    versiculo: "2 Coríntios 5:17 — Nova criatura.",
    reflexao: "Encerramentos também podem ser libertação. Algumas coisas terminam para que algo melhor possa começar.",
    oracao: "Senhor, me ajuda a aceitar encerramentos com maturidade.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 340,
    semana: 49,
    diaSemana: "Quinta-feira",
    temaSemana: "Renovo e Recomeços",
    titulo: "Deus Também Trabalha no Invisível",
    versiculo: "Isaías 64:4 — Nem olhos viram...",
    reflexao: "Nem todo renovo é imediato aos olhos, mas pode estar acontecendo internamente antes de se tornar visível.",
    oracao: "Pai, me ajuda a confiar no Teu trabalho invisível em mim.",
    louvor: "Sonda-me, Usa-me - Aline Barros"
  },

  {
    dia: 341,
    semana: 49,
    diaSemana: "Sexta-feira",
    temaSemana: "Renovo e Recomeços",
    titulo: "Deixe o Passado Onde Ele Fica",
    versiculo: "Filipenses 3:13 — Esquecendo das coisas que para trás ficam.",
    reflexao: "Recomeçar também exige desapego emocional do que já cumpriu seu ciclo.",
    oracao: "Senhor, me ajuda a não viver presa ao passado.",
    louvor: "Liberta-me de Mim - Ministério Zoe"
  },

  {
    dia: 342,
    semana: 49,
    diaSemana: "Sábado",
    temaSemana: "Renovo e Recomeços",
    titulo: "Nova Estação, Nova Mentalidade",
    versiculo: "Romanos 12:2 — Transformai-vos pela renovação da mente.",
    reflexao: "Mudanças externas exigem ajustes internos para que o novo seja sustentado.",
    oracao: "Pai, renova minha mente para esta nova estação.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 343,
    semana: 49,
    diaSemana: "Domingo",
    temaSemana: "Renovo e Recomeços",
    titulo: "Domingo de Renovo",
    versiculo: "Salmos 51:10 — Cria em mim um coração puro.",
    reflexao: "Hoje é dia de abrir espaço para o novo e descansar no processo de Deus.",
    oracao: "Senhor, renova meu interior e minhas forças.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 344,
    semana: 50,
    diaSemana: "Segunda-feira",
    temaSemana: "Resiliência e Permanência",
    titulo: "Permaneça Mesmo Quando For Difícil",
    versiculo: "Gálatas 6:9 — Não nos cansemos de fazer o bem.",
    reflexao: "Resiliência não é ausência de dor, mas continuidade apesar dela.",
    oracao: "Senhor, fortalece minha constância nos dias difíceis.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 345,
    semana: 50,
    diaSemana: "Terça-feira",
    temaSemana: "Resiliência e Permanência",
    titulo: "Força Também Se Reconstrói",
    versiculo: "Isaías 40:31 — Renovarão as forças.",
    reflexao: "Força não é fixa; ela pode ser renovada quando parece esgotada.",
    oracao: "Pai, renova minhas forças quando eu estiver cansada.",
    louvor: "Todavia Me Alegrarei - Samuel Messias"
  },

  {
    dia: 346,
    semana: 50,
    diaSemana: "Quarta-feira",
    temaSemana: "Resiliência e Permanência",
    titulo: "Não Desista no Meio do Processo",
    versiculo: "Hebreus 12:1 — Corramos com perseverança.",
    reflexao: "Muitos desistem não por falta de capacidade, mas por cansaço temporário.",
    oracao: "Senhor, me ajuda a permanecer firme até o fim.",
    louvor: "Tua Graça Me Basta - Toque no Altar"
  },

  {
    dia: 347,
    semana: 50,
    diaSemana: "Quinta-feira",
    temaSemana: "Resiliência e Permanência",
    titulo: "A Dor Não Define o Final",
    versiculo: "Salmos 30:5 — O choro pode durar uma noite.",
    reflexao: "Momentos difíceis não são finais permanentes.",
    oracao: "Pai, me ajuda a lembrar que este momento vai passar.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 348,
    semana: 50,
    diaSemana: "Sexta-feira",
    temaSemana: "Resiliência e Permanência",
    titulo: "Pequenos Passos Também São Avanço",
    versiculo: "Provérbios 16:9 — O coração do homem planeja...",
    reflexao: "Avanço não precisa ser grande para ser real.",
    oracao: "Senhor, me ajuda a valorizar cada progresso.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 349,
    semana: 50,
    diaSemana: "Sábado",
    temaSemana: "Resiliência e Permanência",
    titulo: "Continue Mesmo Sem Emoção",
    versiculo: "2 Coríntios 5:7 — Andamos por fé.",
    reflexao: "Nem sempre a motivação estará presente, mas a constância sustenta o caminho.",
    oracao: "Pai, fortalece minha disciplina e constância.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 350,
    semana: 50,
    diaSemana: "Domingo",
    temaSemana: "Resiliência e Permanência",
    titulo: "Domingo de Força",
    versiculo: "Salmos 46:1 — Deus é nosso refúgio.",
    reflexao: "Hoje é dia de descanso e renovação de forças.",
    oracao: "Senhor, me sustenta e renova minhas forças.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  }
  {
    dia: 351,
    semana: 51,
    diaSemana: "Segunda-feira",
    temaSemana: "Gratidão e Consciência",
    titulo: "Gratidão Também É Escolha",
    versiculo: "1 Tessalonicenses 5:18 — Em tudo dai graças.",
    reflexao: "Gratidão não depende apenas das circunstâncias, mas da forma como você escolhe enxergar o que vive.",
    oracao: "Senhor, me ensina a cultivar gratidão em todas as estações.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 352,
    semana: 51,
    diaSemana: "Terça-feira",
    temaSemana: "Gratidão e Consciência",
    titulo: "Nem Tudo É Sobre Falta",
    versiculo: "Filipenses 4:11 — Aprendi a viver contente.",
    reflexao: "Às vezes, o problema não é o que falta, mas o que deixamos de reconhecer.",
    oracao: "Pai, abre meus olhos para reconhecer o que já tenho.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 353,
    semana: 51,
    diaSemana: "Quarta-feira",
    temaSemana: "Gratidão e Consciência",
    titulo: "Consciência Traz Paz",
    versiculo: "Colossenses 3:15 — Seja a paz o árbitro.",
    reflexao: "Quanto mais consciência você desenvolve, mais aprende a valorizar o simples.",
    oracao: "Senhor, me dá um coração consciente e grato.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 354,
    semana: 51,
    diaSemana: "Quinta-feira",
    temaSemana: "Gratidão e Consciência",
    titulo: "Pequenos Detalhes Também São Dádivas",
    versiculo: "Salmos 103:2 — Não te esqueças de nenhum de seus benefícios.",
    reflexao: "O extraordinário também está escondido no cotidiano.",
    oracao: "Pai, me ajuda a perceber Teus detalhes na minha vida.",
    louvor: "Lugar Secreto - Gabriela Rocha"
  },

  {
    dia: 355,
    semana: 51,
    diaSemana: "Sexta-feira",
    temaSemana: "Gratidão e Consciência",
    titulo: "Comparação Rouba Gratidão",
    versiculo: "Gálatas 6:4 — Cada um examine a sua própria obra.",
    reflexao: "Comparar sua vida constantemente pode impedir você de reconhecer o que já construiu.",
    oracao: "Senhor, me livra da comparação e me ensina a valorizar minha jornada.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 356,
    semana: 51,
    diaSemana: "Sábado",
    temaSemana: "Gratidão e Consciência",
    titulo: "Gratidão Também Cura",
    versiculo: "Salmos 30:12 — Para que a minha alma te cante louvores.",
    reflexao: "Reconhecer bênçãos também reorganiza emoções internas.",
    oracao: "Pai, cura meu interior através da gratidão.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 357,
    semana: 51,
    diaSemana: "Domingo",
    temaSemana: "Gratidão e Consciência",
    titulo: "Domingo de Gratidão",
    versiculo: "Salmos 136:1 — Porque a sua misericórdia dura para sempre.",
    reflexao: "Hoje é dia de olhar para trás e reconhecer cuidado em cada etapa.",
    oracao: "Senhor, obrigado por tudo o que vivi até aqui.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 358,
    semana: 52,
    diaSemana: "Segunda-feira",
    temaSemana: "Encerramento e Renovação",
    titulo: "Final de Ciclo Também É Início",
    versiculo: "Isaías 43:19 — Eis que faço coisa nova.",
    reflexao: "Encerrar um ciclo não é fim absoluto, mas transição para algo novo.",
    oracao: "Senhor, me prepara para novos começos com maturidade.",
    louvor: "Não Pare - Midian Lima"
  },

  {
    dia: 359,
    semana: 52,
    diaSemana: "Terça-feira",
    temaSemana: "Encerramento e Renovação",
    titulo: "O Que Fica Também Ensina",
    versiculo: "Romanos 8:28 — Todas as coisas cooperam para o bem.",
    reflexao: "Tudo o que você viveu deixa aprendizado, mesmo o que não foi fácil.",
    oracao: "Pai, me ajuda a reconhecer os aprendizados da minha jornada.",
    louvor: "Raridade - Anderson Freire"
  },

  {
    dia: 360,
    semana: 52,
    diaSemana: "Quarta-feira",
    temaSemana: "Encerramento e Renovação",
    titulo: "Você Não É o Seu Passado",
    versiculo: "2 Coríntios 5:17 — Nova criatura.",
    reflexao: "Encerrar ciclos também é deixar versões antigas para trás.",
    oracao: "Senhor, me ajuda a caminhar em identidade renovada.",
    louvor: "Liberta-me de Mim - Ministério Zoe"
  },

  {
    dia: 361,
    semana: 52,
    diaSemana: "Quinta-feira",
    temaSemana: "Encerramento e Renovação",
    titulo: "Honre o Processo",
    versiculo: "Eclesiastes 3:1 — Tudo tem o seu tempo.",
    reflexao: "Cada fase teve seu valor, mesmo as difíceis.",
    oracao: "Pai, me ajuda a honrar cada etapa da minha jornada.",
    louvor: "Bondade de Deus - Isaias Saad"
  },

  {
    dia: 362,
    semana: 52,
    diaSemana: "Sexta-feira",
    temaSemana: "Encerramento e Renovação",
    titulo: "Leve Apenas o Essencial",
    versiculo: "Hebreus 12:1 — Deixemos todo peso.",
    reflexao: "Nem tudo precisa ser carregado para o próximo ciclo.",
    oracao: "Senhor, me ajuda a soltar o que não precisa ir comigo.",
    louvor: "Aquieta Minh'alma - Ministério Zoe"
  },

  {
    dia: 363,
    semana: 52,
    diaSemana: "Sábado",
    temaSemana: "Encerramento e Renovação",
    titulo: "Prepare o Novo Interiormente",
    versiculo: "Provérbios 16:3 — Confia ao Senhor as tuas obras.",
    reflexao: "Novos começos exigem preparo interno antes do externo.",
    oracao: "Pai, prepara meu coração para o novo que vem.",
    louvor: "Pra Onde Eu Irei? - Morada"
  },

  {
    dia: 364,
    semana: 52,
    diaSemana: "Domingo",
    temaSemana: "Encerramento e Renovação",
    titulo: "Domingo de Encerramento",
    versiculo: "Lamentações 3:23 — Renovam-se cada manhã.",
    reflexao: "Hoje é dia de fechar ciclos com paz e gratidão.",
    oracao: "Senhor, obrigado por cada etapa desse caminho.",
    louvor: "Creio Que Tu És a Cura - Gabriela Rocha"
  },

  {
    dia: 365,
    semana: 52,
    diaSemana: "Final",
    temaSemana: "Novo Ciclo",
    titulo: "Você Chegou Até Aqui",
    versiculo: "Filipenses 1:6 — Aquele que começou boa obra a completará.",
    reflexao: "Finalizar este ciclo não é ponto final, é confirmação de que você continuou, cresceu e foi transformada ao longo do caminho.",
    oracao: "Senhor, obrigado por este ano de caminhada. Me prepara para o próximo nível.",
    louvor: "Não Pare - Midian Lima"
  }
