const inicioLink = document.getElementById("inicio");
const alquilerLink = document.getElementById("alquiler");
const ventaLink = document.getElementById("venta");

const btnInicio = document.getElementById("btnInicio")

inicioLink.addEventListener("click", function () {
  window.location.href = "index.html";
});
alquilerLink.addEventListener("click", function () {
  window.location.href = "propiedades_alquiler.html";
});
ventaLink.addEventListener("click", function () {
  window.location.href = "propiedades_venta.html";
});
btnInicio.addEventListener('click', function(){
    window.location.href = 'index.html'
})

const propiedades_venta = [
  {
    nombre: " Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa espaciosa en centro de ciudad",
    src: "https://img.freepik.com/fotos-premium/escalera-principal-puerta-entrada-edificios-harlem-nueva-york-casas-marrones-nueva-york-estados-unidos_207709-293.jpg?w=740",
    descripcion:
      "Esta casa ofrece gran cantidad de habitaciones con ubicación centrica en la ciudad",
    ubicacion: "965 White St, Brooklyn, NY 11212",
    habitaciones: 4,
    baños: 2,
    costo: 2500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Chalet con vista al mar",
    src: "https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_stay/dhonveli-beach-bungalow-530x420-221022.jpeg",
    descripcion:
      "Este chalet ofrece una espectacular vista al mar, con espacios iluminados naturalmente",
    ubicacion: "1601 Strand St, Apt 9A, Galveston, TX 77550",
    habitaciones: 2,
    baños: 1,
    costo: 1850,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Castillo de lujo inmerso en bosque",
    src: "https://media.timeout.com/images/105801329/750/422/image.webp",
    descripcion:
      "Este casa/castillo ofrece una increible cantidad de habitaciones, con posibilidad de tocar la naturaleza a la salida de tu puerta",
    ubicacion: "182 Canis Heights Drive, Los Angeles, CA 90071",
    habitaciones: 20,
    baños: 10,
    costo: 7500,
    smoke: false,
    pets: false,
  },
];
const saleSection = document.getElementById('salesSection')
for (let propiedad of propiedades_venta){
 const template = `<div class="col-md-4 mb-4">
    <div class="card">
    <img
      src="${propiedad.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${propiedad.nombre}
      </h5>
      <p class="card-text">
        ${propiedad.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
      
      ${
        propiedad.smoke
          ? '<p class="smoking text-success"><i class="fas fa-smoking"></i> Permitido Fumar</p>'
          : '<p class="noSmoking text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
      }
      ${
        propiedad.pets
          ? '<p class="pets text-success"><i class="fas fa-paw"></i> Mascotas Permitidas</p>'
          : '<p class="noPets text-danger"><i class="fas fa-ban"></i> No se permiten Mascotas</p>'
      }
    </div>
   </div>
  </div>
    `;
    salesSection.innerHTML += template;
  }
