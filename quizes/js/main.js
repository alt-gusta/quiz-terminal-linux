const questions = [
  {
      question: "Qual a forma mais simples do Linux mencionada no texto, que não possui interface gráfica?",
      options: [
          "Ubuntu Minimal.",
          "Kernel Linux.",
          "Ambiente X.",
          "Sistema operacional utilizado através de linhas de comando em terminais."
      ],
      answer: "Sistema operacional utilizado através de linhas de comando em terminais."
  },
  {
      question: "Como os diretórios do Linux são organizados?",
      options: [
          "Em forma de lista linear.",
          "Em forma de árvore hierarquicamente a partir do diretório raiz.",
          "Em forma de rede interconectada.",
          "Sem organização padrão."
      ],
      answer: "Em forma de árvore hierarquicamente a partir do diretório raiz."
  },
  {
      question: "Qual caractere representa o diretório raiz no Linux?",
      options: [
          ".",
          "~",
          "*",
          "/"
      ],
      answer: "/"
  },
  {
      question: "Qual diretório contém tudo o que é necessário para o processo de boot, incluindo o kernel?",
      options: [
          "/",
          "/root",
          "/boot",
          "/usr"
      ],
      answer: "/boot"
  },
  {
      question: "Onde ficam localizados os diretórios de trabalho dos usuários comuns do sistema?",
      options: [
          "/root",
          "/etc",
          "/tmp",
          "/home"
      ],
      answer: "/home"
  },
  {
      question: "Qual diretório é o diretório de trabalho do super-usuário (root)?",
      options: [
          "/home",
          "/",
          "/sbin",
          "/root"
      ],
      answer: "/root"
  },
  {
      question: "Onde ficam os aplicativos e utilitários do sistema que são utilizados durante o boot e por usuários comuns?",
      options: [
          "/usr/bin",
          "/sbin",
          "/opt",
          "/bin"
      ],
      answer: "/bin"
  },
  {
      question: "Qual diretório contém as ferramentas para administração e configuração do sistema, acessíveis geralmente apenas pelo super-usuário?",
      options: [
          "/bin",
          "/usr/sbin",
          "/etc",
          "/sbin"
      ],
      answer: "/sbin"
  },
  {
      question: "Em qual diretório ficam os arquivos de configuração do sistema, configuração de serviços e outras aplicações?",
      options: [
          "/lib",
          "/dev",
          "/usr/local",
          "/etc"
      ],
      answer: "/etc"
  },
  {
      question: "Onde estão localizados os arquivos que representam os dispositivos suportados pela versão do GNU/Linux?",
      options: [
          "/lib/modules",
          "/proc",
          "/mnt",
          "/dev"
      ],
      answer: "/dev"
  },
  {
      question: "Qual diretório contém as bibliotecas utilizadas para inicialização do sistema e outras aplicações, além de módulos do kernel?",
      options: [
          "/usr/lib",
          "/var/lib",
          "/etc/skel",
          "/lib"
      ],
      answer: "/lib"
  },
  {
      question: "Qual diretório é o padrão para a montagem de discos e volumes temporários como disquetes ou CD-ROMs?",
      options: [
          "/boot",
          "/proc",
          "/var",
          "/mnt"
      ],
      answer: "/mnt"
  },
  {
      question: "Qual diretório armazena arquivos temporários de programas que são utilizados durante o uso do sistema?",
      options: [
          "/var/tmp",
          "/etc/sysconfig",
          "c) /tmp",
          "/tmp"
      ],
      answer: "/tmp"
  },
  {
      question: "Em qual diretório virtual na memória ficam dados do Kernel e informações sobre processos rodando?",
      options: [
          "/dev",
          "/boot",
          "/sys",
          "/proc"
      ],
      answer: "/proc"
  },
  {
      question: "Qual diretório contém a maior parte da distribuição GNU/Linux, incluindo programas, o sistema X, etc.?",
      options: [
          "/",
          "/usr/local",
          "/opt",
          "/usr"
      ],
      answer: "/usr"
  },
  {
      question: "Qual diretório armazena arquivos que são modificados com o decorrer do uso do sistema, como logs e filas de impressão?",
      options: [
          "/tmp",
          "/etc",
          "/proc",
          "/var"
      ],
      answer: "/var"
  },
  {
      question: "Onde ficam os arquivos de log do sistema (erros, logins, etc.)?",
      options: [
          "/var/lock",
          "/var/run",
          "/var/spool",
          "/var/log"
      ],
      answer: "/var/log"
  },
  {
      question: "O que é o Terminal ou Shell?",
      options: [
          "Um gerenciador de arquivos.",
          "A interface gráfica X.",
          "Um interpretador de comandos que faz a interação do usuário com o so.",
          "Um editor de texto em modo console."
      ],
      answer: "Um interpretador de comandos que faz a interação do usuário com o so."
  },
  {
      question: "Como o Shell atua?",
      options: [
          "Lendo apenas arquivos de configuração.",
          "Exibindo mensagens de erro do sistema.",
          "Rodando programas sem interação do usuário.",
          "Lendo comandos digitados pelo usuário e executando-os."
      ],
      answer: "Lendo comandos digitados pelo usuário e executando-os."
  },
  {
      question: "Qual comando é utilizado para verificar qual Shell o usuário está utilizando?",
      options: [
          "echo $PATH",
          "printenv SHELL",
          "whoami",
          "Echo $shell"
      ],
      answer: "Echo $shell"
  },
  {
      question: "Na sintaxe genérica de comandos comando [ -opções . . . ] [ argumentos ], o que as 'opções' descrevem?",
      options: [
          "A função principal do comando.",
          "Particularidades na execução do comando.",
          "Os dados de entrada ou saída.",
          "O caminho para o arquivo a ser processado."
      ],
      answer: "Particularidades na execução do comando."
  },
  {
      question: "O que significa o fato de o Linux ser 'case sensitive'?",
      options: [
          "Ele diferencia maiúsculas e minúsculas em senhas apenas.",
          "Ele diferencia maiúsculas e minúsculas em nomes de usuário apenas.",
          "Ele diferencia letras minúsculas de maiúsculas (ex: 'arquivo' é diferente de 'Arquivo').",
          "Ele ignora a diferença entre maiúsculas e minúsculas na maioria dos casos."
      ],
      answer: "Ele diferencia letras minúsculas de maiúsculas (ex: 'arquivo' é diferente de 'Arquivo')."
  },
  {
      question: "Qual o comando utilizado para listar o conteúdo de um diretório?",
      options: [
          "dir",
          "list",
          "print",
          "Ls"
      ],
      answer: "Ls"
  },
  {
      question: "Sem o uso de opções, a listagem do comando ls é feita de forma simplificada, mostrando apenas:",
      options: [
          "O tamanho e a data de modificação.",
          "As permissões e o dono.",
          "Se está ou não oculto.",
          "Apenas o nome dos arquivos e diretórios."
      ],
      answer: "Apenas o nome dos arquivos e diretórios."
  },
  {
      question: "Qual opção do comando ls lista todos os arquivos de um diretório, incluindo os ocultos?",
      options: [
          "-h",
          "-l",
          "-t",
          "-a"
      ],
      answer: "-a"
  },
  {
      question: "Qual opção do comando ls insere um caractere identificador após cada tipo listado (ex: '/' para diretórios)?",
      options: [
          "-l",
          "-d",
          "-a",
          "-f"
      ],
      answer: "-f"
  },
  {
      question: "Para ver todas as opções de um comando como ls, qual sintaxe pode ser utilizada?",
      options: [
          "man ls",
          "info ls",
          "ls -help",
          "Ls --help"
      ],
      answer: "Ls --help"
  },
  {
      question: "O que o comando ls -d */ faz?",
      options: [
          "Lista todos os arquivos ocultos no diretório atual.",
          "Lista recursivamente todos os arquivos em subdiretórios.",
          "Faz uma listagem, filtra para o diretório atual e lista os que terminam com o caractere '/'.",
          "Lista apenas os diretórios ocultos."
      ],
      answer: "Faz uma listagem, filtra para o diretório atual e lista os que terminam com o caractere '/'."
  },
  {
      question: "No comando ls a*, o caractere * é um exemplo de quê?",
      options: [
          "Opção.",
          "Argumento.",
          "Redirecionador.",
          "Curinga."
      ],
      answer: "Curinga."
  },
  {
      question: "Qual comando pode ser usado para desabilitar o alias para o comando ls?",
      options: [
          "alias ls off",
          "disable alias ls",
          "ls unalias",
          "Unalias ls"
      ],
      answer: "Unalias ls"
  },
  {
      question: "A opção -l do comando ls faz a listagem em qual formato?",
      options: [
          "Formato simples (apenas nome).",
          "Formato de árvore.",
          "Formato recursivo.",
          "Formato longo."
      ],
      answer: "Formato longo."
  },
  {
      question: "Na listagem em formato longo (ls -l), o que a primeira letra da primeira coluna indica se for um 'd'?",
      options: [
          "É um arquivo oculto.",
          "É um link simbólico.",
          "É um arquivo normal.",
          "É um diretório."
      ],
      answer: "É um diretório."
  },
  {
      question: "Na listagem em formato longo (ls -l), o que a primeira letra da primeira coluna indica se for um '-'?",
      options: [
          "É um diretório.",
          "É um link simbólico.",
          "É um arquivo executável.",
          "É um arquivo normal."
      ],
      answer: "É um arquivo normal."
  },
  {
      question: "Na listagem em formato longo (ls -l), os próximos 9 caracteres da primeira coluna são divididos em 3 grupos de 3 letras. O que eles representam consecutivamente?",
      options: [
          "Permissões para Leitura, Escrita, Execução.",
          "Permissões para Criação, Modificação, Exclusão.",
          "Permissões para o dono, grupo e outros usuários.",
          "Permissões para Superusuário, Administrador, Usuário Comum."
      ],
      answer: "Permissões para o dono, grupo e outros usuários."
  },
  {
      question: "Na representação numérica (octal) das permissões, qual valor corresponde à permissão de Leitura (r)?",
      options: [
          "1",
          "2",
          "4",
          "7"
      ],
      answer: "4"
  },
  {
      question: "Na representação numérica (octal) das permissões, qual valor corresponde à permissão total de acesso (rwx)?",
      options: [
          "1",
          "3",
          "6",
          "7"
      ],
      answer: "7"
  },
  {
      question: "Na listagem em formato longo (ls -l), o que a segunda coluna indica caso seja um arquivo?",
      options: [
          "O número de subdiretórios.",
          "O nome do dono.",
          "O tamanho do arquivo.",
          "O número de hardlinks para o arquivo (ou 1 se não especificado outro número)."
      ],
      answer: "O número de hardlinks para o arquivo (ou 1 se não especificado outro número)."
  },
  {
      question: "Na listagem em formato longo (ls -l), o que a terceira coluna mostra?",
      options: [
          "O nome do grupo.",
          "O tamanho do arquivo.",
          "A data de modificação.",
          "O nome do dono do arquivo."
      ],
      answer: "O nome do dono do arquivo."
  },
  {
      question: "Na listagem em formato longo (ls -l), o que a quinta coluna mostra?",
      options: [
          "O nome do grupo.",
          "O nome do dono.",
          "O tamanho do arquivo (em bytes).",
          "O número de hardlinks."
      ],
      answer: "O tamanho do arquivo (em bytes)."
  },
  {
      question: "Qual comando é utilizado para trocar de diretórios no terminal?",
      options: [
          "goto",
          "move",
          "change",
          "Cd"
      ],
      answer: "Cd"
  },
  {
      question: "Qual permissão é necessária para entrar em um diretório utilizando o comando cd?",
      options: [
          "Permissão de Leitura (r).",
          "Permissão de Escrita (w).",
          "Permissão de execução (x).",
          "Permissão total (rwx)."
      ],
      answer: "Permissão de execução (x)."
  },
  {
      question: "O que o comando cd - faz?",
      options: [
          "Retorna para o diretório raiz.",
          "Sobe um diretório.",
          "Retornará ao diretório anteriormente acessado.",
          "Vai para o diretório home do usuário atual."
      ],
      answer: "Retornará ao diretório anteriormente acessado."
  },
  {
      question: "O que o comando cd .. faz?",
      options: [
          "Retorna para o diretório raiz.",
          "Retorna ao diretório anteriormente acessado.",
          "Sobe um diretório.",
          "Vai para o diretório home do usuário atual."
      ],
      answer: "Sobe um diretório."
  },
  {
      question: "Qual comando mostra o nome e caminho completo do diretório atual?",
      options: [
          "whereami",
          "location",
          "path",
          "Pwd"
      ],
      answer: "Pwd"
  },
  {
      question: "Qual comando é utilizado para criar diretórios?",
      options: [
          "create",
          "newdir",
          "makedir",
          "Mkdir"
      ],
      answer: "Mkdir"
  },
  {
      question: "Qual opção do comando mkdir permite a criação de diretórios recursivamente, criando diretórios pais que não existem no caminho especificado?",
      options: [
          "-v",
          "-r",
          "-R",
          "-p"
      ],
      answer: "-p"
  },
  {
      question: "Qual comando é utilizado para copiar arquivos?",
      options: [
          "copy",
          "duplicate",
          "move",
          "Cp"
      ],
      answer: "Cp"
  },
  {
      question: "Qual opção do comando cp executa no modo interativo, pedindo confirmação caso o arquivo destino já exista?",
      options: [
          "-f",
          "-p",
          "-r",
          "-i"
      ],
      answer: "-i"
  },
  {
      question: "O que o comando cp teste.txt teste1.txt faz?",
      options: [
          "Move o arquivo teste.txt para teste1.txt.",
          "Apaga o arquivo teste.txt.",
          "Renomeia o arquivo teste.txt para teste1.txt.",
          "Copia o arquivo teste.txt para teste1.txt."
      ],
      answer: "Copia o arquivo teste.txt para teste1.txt."
  },
  {
      question: "Qual comando é utilizado para apagar arquivos e diretórios?",
      options: [
          "delete",
          "remove",
          "erase",
          "Rm"
      ],
      answer: "Rm"
  },
  {
      question: "Qual opção do comando rm é usada para apagar um diretório e remover todos os arquivos e subdiretórios contidos nele?",
      options: [
          "-i",
          "-f",
          "-v",
          "-r"
      ],
      answer: "-r"
  },
  {
      question: "Qual comando é utilizado apenas para remover um diretório vazio?",
      options: [
          "rm -r",
          "delete empty",
          "rmdir --empty",
          "Rmdir"
      ],
      answer: "Rmdir"
  },
  {
      question: "O que acontece se você tentar usar o comando rmdir em um diretório que não está vazio?",
      options: [
          "O diretório e todo o seu conteúdo são apagados sem confirmação.",
          "O comando remove os arquivos e subdiretórios antes de apagar o diretório.",
          "Uma mensagem de erro é exibida e o diretório não é removido.",
          "O comando não remove diretórios que não estejam vazios."
      ],
      answer: "O comando não remove diretórios que não estejam vazios."
  },
  {
      question: "Qual comando é utilizado para mover ou renomear arquivos e diretórios?",
      options: [
          "copy",
          "rename",
          "link",
          "Mv"
      ],
      answer: "Mv"
  },
  {
      question: "O que o comando mv teste.txt teste1.txt faz?",
      options: [
          "Copia o arquivo teste.txt para teste1.txt.",
          "Move o arquivo teste.txt para um diretório padrão.",
          "Apaga o arquivo teste.txt e cria um novo com o nome teste1.txt.",
          "Renomeia o arquivo teste.txt para teste1.txt."
      ],
      answer: "Renomeia o arquivo teste.txt para teste1.txt."
  },
  {
      question: "Ao mover um arquivo usando o comando mv, o que acontece com o arquivo de origem?",
      options: [
          "Ele é compactado.",
          "Ele permanece no local original.",
          "Ele é apagado após ser movido.",
          "Ele se torna um link simbólico para o destino."
      ],
      answer: "Ele é apagado após ser movido."
  },
  {
      question: "Qual comando é útil na construção de scripts para mostrar mensagens na tela para o usuário?",
      options: [
          "print",
          "log",
          "display",
          "Echo"
      ],
      answer: "Echo"
  },
  {
      question: "Qual comando permite ler dados e escrever dados, sendo flexível para criar, listar e estender o conteúdo de arquivos?",
      options: [
          "echo",
          "read",
          "write",
          "Cat"
      ],
      answer: "Cat"
  },
  {
      question: "Qual opção do comando cat numera as linhas de saída?",
      options: [
          "-v",
          "-l",
          "-c",
          "-n"
      ],
      answer: "-n"
  },
  {
      question: "O que o re-direcionador > é utilizado para fazer?",
      options: [
          "Redirecionar a entrada padrão.",
          "Redirecionar a saída de erro.",
          "Dar a saída de um comando para um arquivo.",
          "Concatenar múltiplos arquivos."
      ],
      answer: "Dar a saída de um comando para um arquivo."
  },
  {
      question: "O que o comando echo teste > arquivo faz?",
      options: [
          "Mostra a palavra 'teste' na tela.",
          "Cria um diretório chamado 'arquivo'.",
          "Adiciona a palavra 'teste' ao final de um arquivo chamado 'arquivo'.",
          "Irá criar um arquivo de nome 'arquivo' com o conteúdo 'teste'."
      ],
      answer: "Irá criar um arquivo de nome 'arquivo' com o conteúdo 'teste'."
  },
  {
      question: "Qual comando procura por arquivos/diretórios no disco?",
      options: [
          "locate",
          "search",
          "whereis",
          "Find"
      ],
      answer: "Find"
  },
  {
      question: "O que o comando find / -name nomearq faz?",
      options: [
          "Procura por um diretório chamado nomearq a partir do diretório atual.",
          "Procura apenas por arquivos ocultos chamados nomearq.",
          "Procura no diretório raiz e sub-diretórios um arquivo/diretório chamado nomearq.",
          "Lista todos os arquivos no diretório raiz."
      ],
      answer: "Procura no diretório raiz e sub-diretórios um arquivo/diretório chamado nomearq."
  },
  {
      question: "Qual comando limpa a tela do terminal e posiciona o cursor no canto superior esquerdo?",
      options: [
          "reset",
          "cls",
          "screen",
          "Clear"
      ],
      answer: "Clear"
  },
  {
      question: "Qual comando permite ver ou modificar a Data e Hora do Sistema?",
      options: [
          "time",
          "clock",
          "datetime",
          "Date"
      ],
      answer: "Date"
  },
  {
      question: "Qual comando apresenta o calendário do ano e mês especificados (ou corrente, na falta de argumentos)?",
      options: [
          "calendar",
          "month",
          "year",
          "Cal"
      ],
      answer: "Cal"
  },
  {
      question: "Qual comando organiza as linhas de um arquivo texto ou da entrada padrão?",
      options: [
          "order",
          "arrange",
          "group",
          "Sort"
      ],
      answer: "Sort"
  },
  {
      question: "O que o comando sort -r texto.txt faz?",
      options: [
          "Organiza o conteúdo do arquivo texto.txt em ordem crescente.",
          "Organiza o conteúdo do arquivo texto.txt ignorando maiúsculas/minúsculas.",
          "Organiza o conteúdo do arquivo texto.txt numericamente.",
          "Organiza o conteúdo do arquivo texto.txt em ordem decrescente."
      ],
      answer: "Organiza o conteúdo do arquivo texto.txt em ordem decrescente."
  },
  {
      question: "O que o comando cat texto.txt | sort faz?",
      options: [
          "Concatena o arquivo texto.txt com a saída do sort.",
          "Salva a saída do cat no arquivo sort.",
          "A saída do comando cat é redirecionada para a entrada padrão do comando sort.",
          "Executa o cat e o sort separadamente."
      ],
      answer: "A saída do comando cat é redirecionada para a entrada padrão do comando sort."
  },
  {
      question: "Qual comando procura por um texto (expressão) dentro de um arquivo(s) ou na entrada padrão?",
      options: [
          "find",
          "search",
          "lookup",
          "Grep"
      ],
      answer: "Grep"
  },
  {
      question: "O que o comando grep -n \"ss\" arquivo faz no arquivo de exemplo fornecido?",
      options: [
          "Procura por linhas que não contêm 'ss'.",
          "Procura por linhas que contêm 'ss' e as apaga.",
          "Conta quantas vezes 'ss' aparece no arquivo.",
          "Procura por linhas que contêm 'ss' e mostra as linhas encontradas com seu número."
      ],
      answer: "Procura por linhas que contêm 'ss' e mostra as linhas encontradas com seu número."
  }
];

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  resultContainer.classList.add('hide');
  document.getElementById('quiz').classList.remove('hide');
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('option-btn');
      button.addEventListener('click', () => selectAnswer(button, option, currentQuestion.answer));
      optionsContainer.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add('hide');
  while (optionsContainer.firstChild) {
      optionsContainer.removeChild(optionsContainer.firstChild);
  }
}

function selectAnswer(button, selectedOption, correctAnswer) {
  const allOptions = Array.from(optionsContainer.children);

  if (selectedOption === correctAnswer) {
      score++;
      button.classList.add('correct');
  } else {
      button.classList.add('incorrect');
      // Mostra a resposta correta se o usuário errar
      allOptions.forEach(opt => {
          if (opt.innerText === correctAnswer) {
              opt.classList.add('correct');
          }
      });
  }

  // Desabilita todos os botões após a seleção
  allOptions.forEach(opt => opt.disabled = true);
  nextButton.classList.remove('hide');
}

function showResults() {
  document.getElementById('quiz').classList.add('hide');
  resultContainer.classList.remove('hide');
  scoreElement.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;

  let feedbackText = '';
  const percentage = (score / questions.length) * 100;
  if (percentage === 100) {
      feedbackText = "Excelente! Você é um mestre do Linux! 🐧🏆";
  } else if (percentage >= 70) {
      feedbackText = "Muito bem! Você conhece bem o terminal. 👍";
  } else if (percentage >= 50) {
      feedbackText = "Bom trabalho! Continue estudando para aprimorar. 😊";
  } else {
      feedbackText = "Não desanime! A prática leva à perfeição. 😉";
  }
  feedbackElement.innerText = feedbackText;
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showResults();
  }
}

nextButton.addEventListener('click', handleNextButton);
restartButton.addEventListener('click', startQuiz);

startQuiz();