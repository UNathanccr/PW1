var panorama, viewer, container;

container = document.querySelector('#container_principal');

panorama = new PANOLENS.ImagePanorama('imagenes/oficina.jpg');

// Infospot 1: Bienvenida
var infospot1 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
infospot1.position.set(-371, -187, -500);
infospot1.addHoverText('Bienvenido al tour virtual', -60);
infospot1.element.innerHTML = `
  <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 10px; border-radius: 5px; text-align: center">
    Bienvenido al tour virtual del Lake District National Park.<br><br>
    <img src="imagenes/ldnp.png" alt="Logo del Parque" style="max-width: 100px;">
  </div>`;
panorama.add(infospot1);

// Infospot 2: Audio bosque
var infospot2 = new PANOLENS.Infospot(40, 'imagenes/sonido.png');
infospot2.position.set(-233, -500, 500);
infospot2.addHoverText('Audio: Sonidos del bosque', 0);
infospot2.element.innerHTML = `
  <div>
    <p style="margin-bottom: 10px; font-weight: bold;">Sonidos del bosque</p>
    <audio controls style="width: 100%;">
      <source src="media/bosque.mp3" type="audio/mpeg">
      Tu navegador no soporta audio.
    </audio>
  </div>`;
panorama.add(infospot2);

// Infospot 3: Video senderismo
var infospot3 = new PANOLENS.Infospot(40, 'imagenes/video.png');
infospot3.position.set(500, 75, -250);
infospot3.addHoverText('Beneficios del senderismo', 0);
infospot3.element.innerHTML = `
  <div>
    <iframe width="500" height="400" src="https://www.youtube.com/embed/jNEjw1fMk-8?si=TJbjmxO2F-nZJNTN" frameborder="0" allowfullscreen></iframe>
  </div>`;
panorama.add(infospot3);

// Infospot 4: Alces
var infospot4 = new PANOLENS.Infospot(40, 'imagenes/animales.png');
infospot4.position.set(-500, -138, -25);
infospot4.addHoverText('Fauna del recorrido', 0);
infospot4.element.innerHTML = `
  <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 15px; border-radius: 8px; max-width: 300px; font-size: 14px; line-height: 1.6;">
    <img src="imagenes/alce.jpg" alt="Alce" style="max-width: 100%; border-radius: 10px;">
    <strong>Animales que podrás encontrar:</strong><br>
    Los alces son una de las especies más emblemáticas del parque, conocidos por su gran tamaño y cuernos impresionantes.
  </div>`;
panorama.add(infospot4);

// Infospot 5: Geología
var infospot5 = new PANOLENS.Infospot(40, 'imagenes/favicon.png');
infospot5.position.set(372, -57, -500);
infospot5.addHoverText('Formación geológica del terreno', 0);
infospot5.element.innerHTML = `
  <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 15px; border-radius: 8px; max-width: 300px; font-size: 14px; line-height: 1.6;">
    <strong>Formación Geológica:</strong><br>
    El parque se formó hace más de 500 millones de años a través de procesos volcánicos, tectónicos y glaciaciones.
    <br><br>
    Las montañas y valles fueron esculpidos por glaciares, dejando lagos profundos y cumbres escarpadas.
  </div>`;
panorama.add(infospot5);

// Infospot 6: Video de actividades
var infospot6 = new PANOLENS.Infospot(40, 'imagenes/senderismo.png');
infospot6.position.set(-500, -20, -400);
infospot6.addHoverText('Explora las actividades', 0);
infospot6.element.innerHTML = `
  <div>
    <iframe width="500" height="400" src="https://www.youtube.com/embed/6e6WvWYzyUc?si=A_HwueNSb9GweuEp" frameborder="0" allowfullscreen></iframe>
  </div>`;
panorama.add(infospot6);

// Infospot 7: Mapa PDF
var infospot7 = new PANOLENS.Infospot(40, 'imagenes/info2.png');
infospot7.position.set(-235, -122, 500);
infospot7.addHoverText('Ver Mapa', 0);
infospot7.element.innerHTML = `
  <div style="background-color: rgba(0,0,0,0.6); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px; text-align: center;">
    <a href="pdf/mapa.pdf" target="_blank" style="color: #fff; text-decoration: underline;">Ver Mapa del Recorrido</a>
  </div>`;
panorama.add(infospot7);

// Infospot 8: Audio adicional
var infospot8 = new PANOLENS.Infospot(40, 'imagenes/audio.png');
infospot8.position.set(-24, -411, 500);
infospot8.addHoverText('Audio ambiental', 0);
infospot8.element.innerHTML = `
  <div>
    <p style="margin-bottom: 10px; font-weight: bold;">Sonidos del entorno</p>
    <audio controls style="width: 100%;">
      <source src="media/bosque.mp3" type="audio/mpeg">
      Tu navegador no soporta audio.
    </audio>
  </div>`;
panorama.add(infospot8);

// Infospot 9: Vista desde el lago
var infospot9 = new PANOLENS.Infospot(40, 'imagenes/binoculares.png');
infospot9.position.set(-501, -316, 303);
infospot9.addHoverText('Vista hacia la montaña', 0);
infospot9.element.innerHTML = `
  <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 15px; border-radius: 8px; max-width: 300px; font-size: 14px; line-height: 1.6;">
    <img src="imagenes/panorama.jpg" alt="Vista panorámica" style="max-width: 100%; border-radius: 10px;">
    <strong>Vistas impresionantes:</strong><br>
    Vista desde el lago hacia la montaña, lo que verás antes de escalar.
  </div>`;
panorama.add(infospot9);

// Infospot 10: Clima
var infospot10 = new PANOLENS.Infospot(40, 'imagenes/clima.png');
infospot10.position.set(-160, 152, -500);
infospot10.addHoverText('Clima del parque', 0);
infospot10.element.innerHTML = `
  <div style="background-color: rgba(0,0,0,0.7); color:#fff; padding: 15px; border-radius: 8px; max-width: 500px; font-size: 14px; line-height: 1.6;">
    <iframe src="https://api.wo-cloud.com/content/widget/?geoObjectKey=3429595&language=es&region=ES&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius" frameborder="0" style="border: 1px solid #FFFFFF; border-radius: 10px; width: 100%; max-width: 100%;"> </iframe>
    <strong>Clima:</strong><br>
    Esta zona tiene un clima templado oceánico, con temperaturas suaves todo el año y lluvias frecuentes.
    <br><br>
    Estas condiciones mantienen los lagos y la vegetación del parque.
  </div>`;
panorama.add(infospot10);

var infospotsall = [infospot1, infospot2, infospot3, infospot4, infospot5, infospot6, infospot7, infospot8, infospot9, infospot10];

viewer = new PANOLENS.Viewer({
  container: container,
  output: 'fullscreen',
  autoHideInfospot: false
});
viewer.add(panorama);

function isHovering() {
  return infospotsall.some(infospot => infospot.isHovering);
}