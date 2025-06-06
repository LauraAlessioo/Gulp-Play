function abrirPerfis(){
    const back = document.getElementById("back2")

    back.style.display = "flex";
}
function fecharPerfis(){
    const back = document.getElementById("back2")

    back.style.display = "none";
}
function toggleCuteMode() {
  const elements = document.querySelectorAll('[data-cute-toggle]');
  elements.forEach(el => el.classList.toggle('cute-mode'));
}

  const perfis = [
  { nome: "Salsicha", foto: "src/xaxixa.png" },
  { nome: "Scooby", foto: "src/scooby.png" },
  { nome: "Coragem", foto: "src/coragem.png" },
  { nome: "Homem-Formiga", foto: "src/fumiga.png" },
  { nome: "Johnny", foto: "src/jouny.png" },
  { nome: "C-3PO", foto: "src/c3Po.png" },
  { nome: "Neville", foto: "src/botas.png" },
  { nome: "Ron", foto: "src/ronaldo.png" },
  { nome: "Howard", foto: "src/howei.png" },
  { nome: "Cameron", foto: "src/amigoDoFerris.png" },
  { nome: "Stanley", foto: "src/itMenino1.png" },
  { nome: "Richie", foto: "src/itMenino2.png" },
  { nome: "Usopp", foto: "src/anime1.png" },
  { nome: "Zenitsu", foto: "src/anime2.png" },
  { nome: "Yamcha", foto: "src/anime3.png" },
  { nome: "Kon", foto: "src/anime4.png" },
  { nome: "Okarun", foto: "src/anime5.png" },
  { nome: "Shinji", foto: "src/anime6.png" }
];

function selecionar(elemento) {
  const todos = document.querySelectorAll('.circuloPerfil[onclick*="selecionar"]');
  todos.forEach(el => el.classList.remove('selected'));
  elemento.classList.add('selected');

    const index = Array.from(todos).indexOf(elemento);
  if (index !== -1) {
    sessionStorage.setItem('perfilSelecionado', JSON.stringify(perfis[index]));
  }
}

window.addEventListener('DOMContentLoaded', function() {
    const perfil = JSON.parse(sessionStorage.getItem('perfilSelecionado'));
    if (perfil) {
        const box = document.getElementById('perfilEscolhido');
        box.innerHTML = `<img src="${perfil.foto}" alt="" data-cute-toggle><p>${perfil.nome}</p> <a href='index.html'><i class='bx bx-log-out'></i></a>`;
    }
});

function abrirModalBoo(){
  const modalBoo = document.getElementById('boo');
      modalBoo.style.transform = 'scale(1)';


}
function fecharModalBoo(){
  const modalBoo = document.getElementById('boo');

      modalBoo.style.transform = 'scale(0)';

}

  function abrirModalBoo() {
  const modalBoo = document.getElementById('boo');
  modalBoo.style.transform = 'scale(1)';
}

document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.rEye, .LEye');

    eyes.forEach(eye => {
        const pupil = eye.querySelector('img');
        const rect = eye.getBoundingClientRect();

        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        const angle = Math.atan2(dy, dx);
        const radius = 7; 

        const offsetX = Math.cos(angle) * radius;
        const offsetY = Math.sin(angle) * radius;

        pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

function abrirInfoBoo() {
  const infoBoo = document.getElementById('infoBoo');
  infoBoo.classList.toggle('ativo');
}

function entrarEmFullscreen() {
  const contFilme = document.getElementById("containerFilme");
  const video = document.getElementById("meuVideo");
  const modal = document.getElementById("meuModal");

  contFilme.style.display = "flex";
  modal.style.transform = "scale(0)";

  if (contFilme.requestFullscreen) {
    contFilme.requestFullscreen();
  } else if (contFilme.webkitRequestFullscreen) {
    contFilme.webkitRequestFullscreen();
  } else if (contFilme.msRequestFullscreen) {
    contFilme.msRequestFullscreen();
  }

  if (video) {
    setTimeout(() => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Erro ao iniciar o vídeo:", error);
        });
      }
    }, 3000);

    const aoChegarEm11s = () => {
      if (video.currentTime >= 11.5) {
        video.pause();
        mostrarModal();
        video.removeEventListener('timeupdate', aoChegarEm11s);
      }
    };

    video.addEventListener('timeupdate', aoChegarEm11s);
  }
}

function mostrarModal() {
  document.getElementById("meuModal").style.transform = "scale(1)";
}

function fecharModal() {
  document.getElementById("meuModal").style.transform = "scale(0)";
}

function avancarPara1min05() {
  const video = document.getElementById("meuVideo");
  document.getElementById("meuModal").style.display = "none";
  if (video) {
    video.currentTime = 65; 
    video.play();
  }
}


function salvarPerfil() {
  const back = document.getElementById("loadingBack");
  back.style.transform = "scale(1)";

  const oldImgs = back.querySelectorAll('img');
  oldImgs.forEach(img => img.remove());

  const img = document.createElement('img');
  img.src = "src/loading.gif";
  img.alt = "Carregando...";
  img.style.maxWidth = "500px";
  img.style.maxHeight = "500px";
  img.style.width = "100%";
  img.style.height = "auto";
  img.style.display = "block";
  img.style.margin = "auto";
  back.appendChild(img);

  setTimeout(function() {
    window.location.href = "gulpIni.html";
  }, 4400);
}

function abrirDesc(){
  const back = document.getElementById("backDesc");
  back.style.display = "flex";
  back.style.transition = "none";
  back.style.transform = "translateY(100vh)";
  back.style.opacity = "0";
  void back.offsetWidth;
  back.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s";
  back.style.transform = "translateY(0)";
  back.style.opacity = "1";
}
function fecharDesc(){
  const back = document.getElementById("backDesc");
  back.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s";
  back.style.transform = "translateY(100vh)";
  back.style.opacity = "0";
  setTimeout(() => {
    back.style.display = "none";
  }, 500);
}

function voltarCat() {
  const back = document.getElementById("containerFilme");
  const video = document.getElementById("meuVideo");

  back.style.display = "none";

  if (video) {
    video.pause();
  }

  if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

// Função para rolar os cards de filme para a esquerda ou direita
function scrollRestFilmes(direction) {
  const container = document.querySelector('.restFilmes');
  if (!container) return;
  // Calcula a largura de dois cards (incluindo gap)
  const card = container.querySelector('.cardFilme');
  if (!card) return;
  const gap = 16; // igual ao CSS
  const scrollAmount = card.offsetWidth * 2 + gap;
  if (direction === 'next') {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
}



