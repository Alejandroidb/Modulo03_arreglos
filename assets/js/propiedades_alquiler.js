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

  const propiedades_alquiler = [
    {
      nombre: "Departamento en zona urbana",
      src: "https://static.anuevayork.com/wp-content/uploads/2015/02/14112113/Alquilar-un-apartamento-en-Nueva-York-con-Airbnb-Mejores-zonas-y-consejos-1500.jpg",
      descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      baños: 2,
      costo: 4500,
      smoke: true,
      pets: false,
    },
    {
      nombre: "Casa Rodante al pie de lago",
      src: "https://finde.latercera.com/wp-content/uploads/2022/04/4349bbf4-8551-4058-ac8c-f1ab0d6cb5cf-900x600.jpg",
      descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
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
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
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
      descripcion: "Esta casa ofrece gran cantidad de habitaciones con ubicación centrica en la ciudad",
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
      descripcion: "Este chalet ofrece una espectacular vista al mar, con espacios iluminados naturalmente",
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
      descripcion: "Este castillo posee todas las comodidades de la vida moderna en un ambiente medieval",
      ubicacion: "182 Canis Heights Drive, Los Angeles, CA 90071",
      habitaciones: 20,
      baños: 10,
      costo: 7500,
      smoke: false,
      pets: false,
    },
  ];

  const rentSection = document.getElementById('rentSection')
for (let propiedad of propiedades_alquiler){
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
    rentSection.innerHTML += template;
  }