//variables controladoras 
var panorama, viewer, container;

//obtener una referencia al contenedor donde se mostrará la escena 360
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/oficina.jpg');


// Infospot 1: Texto de bienvenida
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(-371, -187, -500);
infospot1.addHoverText('Bienvenido al tour virtual del <br>Lake District National Park<', -60);
infospot1.element.innerHTML = `
    <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 10px; border-radius: 5px; text-align: center">Bienvenido al tour virtual del Lake District National Park.<br><br><img src="imagenes/ldnp.png" alt="Logo del Parque"
    </div>
    `;
panorama.add(infospot1);

// Infospot 2: Audio ambiental
var infospot2 = new PANOLENS.Infospot(30, 'imagenes/video.png');
infospot2.position.set(-233, -500, 500);
infospot8.addHoverText('Lorem ipsum dolor sit amet', 0);
infospot8.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 90px; font-size: 14px; width: 200px;"><audio controls><source src="media/bosque.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot2);

// Infospot 3: Video sobre Senderismo
var infospot3 = new PANOLENS.Infospot(50, 'imagenes/video.png');
infospot3.position.set(500, 75, -250);
infospot3.addHoverText('Lorem ipsum dolor sit amet');
infospot3.element.innerHTML = `
    <div>
        <iframe width="500" height="400" src="https://www.youtube.com/embed/Mnhf6DnECWc?si=kXKvtpxTkaQGUqb-"></iframe>
    </div>`;
panorama.add(infospot3);

// Infospot 4: Imagen de fauna
var infospot4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot4.position.set(-500, -138, -25);
infospot4.addHoverText('Fauna común en el recorrido', 0);
infospot4.element.innerHTML = `
    <div style="text-align: center;">
        <img src="imagenes/alce.jpg" alt="Imagen de Alce" style="max-width: 50%; border-radius: 40px;">
        <p style="margin-top: 10px; color: white; background-color: rgba(0,0,0,0.6); padding: 8px; border-radius: 8px; font-size: 14px;">
            Es muy normal, dentro del recorrido, poder ver algún alce en su hábitat natural.
        </p>
    </div>
`;
panorama.add(infospot4);

// Infospot 5: Información geológica
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(372, -57, -500);
infospot5.addHoverText('Lorem ipsum dolor sit amet', 0);
infospot5.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 10px; border-radius: 5px;">Información sobre la formación geológica del lugar.</div>';
panorama.add(infospot5);

// Infospot 6: Video sobre actividades
var infospot6 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot6.position.set(-500, -20, -400);
infospot6.addHoverText('Lorem ipsum dolor sit amet');
infospot6.element.innerHTML = `
    <div>
        <iframe width="500" height="400" src="https://www.youtube.com/embed/6e6WvWYzyUc?si=A_HwueNSb9GweuEp"></iframe>
    </div>`;
panorama.add(infospot6);

// Infospot 7: Rutas en PDF
var infospot7 = new PANOLENS.Infospot(30, 'imagenes/info2.png');
infospot7.position.set(-235, -122, 500);
infospot7.addHoverText('Ver Mapa', 0);
infospot7.element.innerHTML = `    
    <div style="background-color: rgba(0,0,0,0.6); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        <a href="pdf/mapa.pdf" target="_blank" style="color: #fff; text-decoration: underline;">Entrar al PDF</a>
    </div>`;
panorama.add(infospot7);

// Infospot 8: Audio sobre fauna acuática
var infospot8 = new PANOLENS.Infospot(30, "imagenes/audio.png");
infospot8.position.set(-24, -411, 500);
infospot8.addHoverText('Lorem ipsum dolor sit amet', 0);
infospot8.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 90px; font-size: 14px; width: 200px;"><audio controls><source src="media/bosque.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot8);

// Infospot 9: Imagen panorámica
var infospot9 = new PANOLENS.Infospot(50, "imagenes/binoculares.png");
infospot9.position.set(-501, -316, 303);
infospot9.addHoverText('Haz clic para ver la imagen');

// Contenedor personalizado
infospot9.element.innerHTML = `
  <div style="text-align: center;">
    <img src="imagenes/panorama.jpg" alt="Panorama alterno" style="max-width: 60%; border-radius: 40px;">
    <p style="margin-top: 10px; color: white; background-color: rgba(0,0,0,0.6); padding: 5px; border-radius: 5px; font-size: 14px;">
      Vista panorámica desde el lago hacia la montaña.
    </p>
  </div>
`;
panorama.add(infospot9);

// Infospot 10: Información climática
var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot10.position.set(-160, 152, -500);
infospot10.addHoverText('Lorem ipsum dolor sit amet');
infospot10.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 10px; border-radius: 5px;">El clima de esta zona es templado con precipitaciones frecuentes.</div>';
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
