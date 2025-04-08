//variables controladoras 
var panorama, viewer, container;

//obtener una referencia al contenedor donde se mostrará la escena 360
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/oficina.jpg');

// Infospot 1: Texto de bienvenida
var infospot1 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
infospot1.position.set(-371, -187, -500);
infospot1.addHoverText('Bienvenido al tour virtual del <br>Lake District National Park<', -60);
infospot1.element.innerHTML = `
    <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 10px; border-radius: 5px; text-align: center">Bienvenido al tour virtual del Lake District National Park.<br><br><img src="imagenes/ldnp.png" alt="Logo del Parque"
    </div>
    `;
panorama.add(infospot1);

// Infospot 2: Audio Sonidos del bosque (Centro del Lago)
var infospot2 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
infospot2.position.set(-233, -500, 500);
infospot2.addHoverText('', 0);
infospot2.element.innerHTML = `
  <div style="color:#000; border-radius: 5px; padding: 90px; font-size: 14px; width: 200px;">
    <audio controls><source src="media/bosque.mp3" type="audio/mpeg"></audio>
  </div>
  `;
panorama.add(infospot2);

// Infospot 3: Video sobre Senderismo
var infospot3 = new PANOLENS.Infospot(40, 'imagenes/video.png');
infospot3.position.set(500, 75, -250);
infospot3.addHoverText('Beneficios del senderismo', 0);
infospot3.element.innerHTML = `
    <div>
        <iframe width="500" height="400" src="https://www.youtube.com/embed/Mnhf6DnECWc?si=kXKvtpxTkaQGUqb-"></iframe>
    </div>`;
panorama.add(infospot3);

// Infospot 4: Imagen Sobre los Alces 
var infospot4 = new PANOLENS.Infospot(40, 'imagenes/animales.png');
infospot4.position.set(-500, -138, -25);
infospot4.addHoverText('Fauna común en el recorrido', 0);
infospot4.element.innerHTML = `
  <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 15px; border-radius: 8px; max-width: 300px; font-size: 14px; line-height: 1.6;">
    <img src="imagenes/alce.jpg" alt="Alce" style="max-width: 100%; border-radius: 10px;">
    <strong>Animales que podras encontrar:</strong><br>
    Los Alces son una de las especies más emblemáticas del parque, conocidos por su gran tamaño y cuernos impresionantes. 
  </div>
`;
panorama.add(infospot4);

// Infospot 5: Información geológica (terminar de agregar)
var infospot5 = new PANOLENS.Infospot(40, 'imagenes/favicon.png');
infospot5.position.set(372, -57, -500);
infospot5.addHoverText('Lorem ipsum dolor sit amet', 0);
infospot5.element.innerHTML = `
  <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 15px; border-radius: 8px; max-width: 300px; font-size: 14px; line-height: 1.6;">
    <strong>Formación Geológica:</strong><br>
    El Parque Nacional Lake District se formó hace más de 500 millones de años a través de procesos volcánicos, movimientos tectónicos y glaciaciones. 
    <br><br>
    Las montañas y valles fueron esculpidos por antiguos glaciares, dejando paisajes únicos con lagos profundos y cumbres escarpadas.
  </div>
  `;
panorama.add(infospot5);

// Infospot 6: Video sobre actividades
var infospot6 = new PANOLENS.Infospot(40, 'imagenes/senderismo.png');
infospot6.position.set(-500, -20, -400);
infospot6.addHoverText('Lorem ipsum dolor sit amet', 0);
infospot6.element.innerHTML = `
    <div>
        <iframe width="500" height="400" src="https://www.youtube.com/embed/6e6WvWYzyUc?si=A_HwueNSb9GweuEp"></iframe>
    </div>`;
panorama.add(infospot6);

// Infospot 7: Rutas en PDF
var infospot7 = new PANOLENS.Infospot(40, 'imagenes/info2.png');
infospot7.position.set(-235, -122, 500);
infospot7.addHoverText('Ver Mapa', 0);
infospot7.element.innerHTML = `    
    <div style="background-color: rgba(0,0,0,0.6); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        <a href="pdf/mapa.pdf" target="_blank" style="color: #fff; text-decoration: underline;">Ver Mapa del Recorrido.</a>
    </div>`;
panorama.add(infospot7);

// Infospot 8: Audio sobre sonidos
var infospot8 = new PANOLENS.Infospot(40, "imagenes/audio.png");
infospot8.position.set(-24, -411, 500);
infospot8.addHoverText('Lorem ipsum dolor sit amet', 0);
infospot8.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 90px; font-size: 14px; width: 200px;"><audio controls><source src="media/bosque.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot8);

// Infospot 9: Vista desde el Lago a la Montaña
var infospot9 = new PANOLENS.Infospot(40, "imagenes/binoculares.png");
infospot9.position.set(-501, -316, 303);
infospot9.addHoverText('Haz clic para ver la imagen', 0);
infospot9.element.innerHTML = `
    <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 15px; border-radius: 8px; max-width: 300px; font-size: 14px; line-height: 1.6;">
    <img src="imagenes/panorama.jpg" alt="Alce" style="max-width: 100%; border-radius: 10px;">
    <strong>Tendras unas vistas impresionantes:</strong><br>
    Vista panorámica desde el lago hacia la montaña, lo que verás antes de escalar.
  </div>
`;
panorama.add(infospot9);

// Infospot 10: Información climática
var infospot10 = new PANOLENS.Infospot(40, 'imagenes/clima.png');
infospot10.position.set(-160, 152, -500);
infospot10.addHoverText('Lorem ipsum dolor sit amet', 0);
infospot10.element.innerHTML = `
  <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 15px; border-radius: 8px; max-width: 300px; font-size: 14px; line-height: 1.6;">
    <strong>Clima:</strong><br>
    Esta zona tiene un clima templado oceánico, caracterizado por temperaturas suaves durante todo el año y lluvias frecuentes. 
    <br><br>
    Las precipitaciones son esenciales para mantener los lagos y la vegetación exuberante del parque.
  </div>
`;
panorama.add(infospot10);

// Lista de infospots actualizada
var infospotsall = [infospot1, infospot2, infospot3, infospot4, infospot5, infospot6, infospot7, infospot8, infospot9, infospot10];

//===========================
// Configuración del Viewer
//===========================
viewer = new PANOLENS.Viewer({
    container: container,
    output: 'fullscreen',
    autoHideInfospot: false
});
viewer.add(panorama);

//===========================
// Funciones de Desarrollo
//===========================
//function getPosition() { 
  //  const a = viewer.raycaster.intersectObject(viewer.panorama, true)[0].point;
   // return a;
// /};

// Comprobar si se está sobre un infospot
function isHovering() { 
    for (let i = 0; i < infospotsall.length; i++) { 
        if (infospotsall[i].isHovering) {
            return true;
        } else {
            continue;
        }
    }
};

panorama.addEventListener('click', function(event){
    let clickedPos = getPosition();
    let value = Object.values(clickedPos);
    let x = value[0];
    let y = value[1];
    let z = value[2];

    x = parseInt(Math.floor(x / 10));
    y = parseInt(Math.floor(y / 10));
    z = parseInt(Math.floor(z / 10));

    alert("("+x+" ,"+y+" , "+z +")");
});