const inicioLink = document.getElementById("inicio");
const alquilerLink = document.getElementById("alquiler");
const ventaLink = document.getElementById("venta");
const btnVenta = document.getElementById("btnVenta");
const btnAlquiler = document.getElementById("btnAlquiler");

inicioLink.addEventListener("click", function () {
  window.location.href = "index.html";
});
alquilerLink.addEventListener("click", function () {
  window.location.href = "propiedades_alquiler.html";
});
ventaLink.addEventListener("click", function () {
  window.location.href = "propiedades_venta.html";
});
btnVenta.addEventListener("click", function () {
  window.location.href = "propiedades_venta.html";
});
btnAlquiler.addEventListener("click", function () {
  window.location.href = "propiedades_alquiler.html";
});

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
      "Este apartamento acogedor está en lo alto de una montaña e impresionantes vistas",
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
const propiedades_alquiler = [
  {
    nombre: " Departamento en zona urbana",
    src: "https://static.anuevayork.com/wp-content/uploads/2015/02/14112113/Alquilar-un-apartamento-en-Nueva-York-con-Airbnb-Mejores-zonas-y-consejos-1500.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 4500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa Rodante al pie de lago",
    src: "https://finde.latercera.com/wp-content/uploads/2022/04/4349bbf4-8551-4058-ac8c-f1ab0d6cb5cf-900x600.jpg",
    descripcion:
      "Este apartamento acogedor está en lo alto de una montaña e impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con vista al parque",
    src: "https://static1.mansionglobal.com/production/media/article-images/9e9a623a6d3c7b7f19b267097bd16105/large_Hero_438-East-12th-Street_Penthouse-G.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa en las afueras de la ciudad",
    src: "https://www.houseanddecors.com/wp-content/uploads/2018/11/30-16-678x381.jpg",
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
    nombre: "Chalet con acceso a playa privada",
    src: "https://i.pinimg.com/736x/f8/7a/8c/f87a8cd1cf1796b16b974fcddf6c0f37.jpg",
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
    nombre: "Castillo medieval remodelado",
    src: "https://cdn10.phillymag.com/wp-content/uploads/sites/3/2021/05/house-for-sale-rydal-norman-castle-exterior-front-brightmls.jpg",
    descripcion:
    "Este castillo posee todas las comodidades de la vida moderna en un ambiente medieval",
    ubicacion: "182 Canis Heights Drive, Los Angeles, CA 90071",
    habitaciones: 20,
    baños: 10,
    costo: 7500,
    smoke: false,
    pets: false,
  },
];
const salesSection = document.getElementById("salesSection");
const rentSection = document.getElementById("rentSection");

htmlSales = "";
htmlRent = "";

console.log(propiedades_venta.length);

for (let i = 0; i < 3 && i < propiedades_venta.length; i++) {
  const propiedad = propiedades_venta[i];
  htmlSales += `<div class="col-md-4 mb-4">
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
}
salesSection.innerHTML = htmlSales;

for (let i = 0; i < 3 && i < propiedades_alquiler.length; i++) {
  const propiedad = propiedades_alquiler[i];
  htmlRent += `<div class="col-md-4 mb-4">
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
}
rentSection.innerHTML = htmlRent;
