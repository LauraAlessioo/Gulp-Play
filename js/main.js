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
function selecionar(elemento) {

  const todos = document.querySelectorAll('.circuloPerfil');
  todos.forEach(el => el.classList.remove('selected'));
  elemento.classList.add('selected');
  
}

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
  img.src = "imagens/loading.gif";
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
  back.style.transform = "scale(1)";
}
function fecharDesc(){
  const back = document.getElementById("backDesc");
  back.style.transform = "scale(0)";
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

 

