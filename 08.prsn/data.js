let data=[
    {
        place:`Pinos`,title:`Pedro mPerras Pue`,grd:`MSc. Patrimonio y Salud`,
        desc:`Destacado profesional en el extremo occidental de la isla de Cuba y del archipiélago cubano. Trabaja en la provincia de Pinar del Río.`
    },
    {
        place:`Lugar`,title:`Geografía`,grd:``,
        desc:`El centro está accidentado por la Sierra de los Órganos y el extremo este constituye la Sierra del Rosario con alturas superiores a los 600 m, ambas conforman la Cordillera de Guaniguanico, con una alineación suroeste-noroeste. Allí se localiza la Loma de Seboruco que con 671 m es la altitud máxima de la provincia.`
    },
]

function create_Card(itm_data){
    let objCard=`
    <div class="col-md-4">

        <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img rounded-circle" height="150" preserveAspectRatio="xMidYMid slice" role="img" width="200" xmlns="http://www.w3.org/2000/svg">
            <title>${itm_data.place}</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">${itm_data.place}</text>
        </svg>
        <div class="row g-0 borderP rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0 fw-bold fs-4 text-body-emphasis"  >${itm_data.title}</h3>
                <hr>
                <p class="card-text mb-auto">
                    ${itm_data.desc}
                </p>            
            </div>
            <div class="col-auto p-1 d-none d-lg-block">
            
                
            </div>
        </div>
    </div>`;
    return objCard;
}
function create_CenterInfo(params) {
   let perr= document.getElementById(params);
   perr.innerHTML='';
    data.map((itm)=>{
        perr.innerHTML+= create_Card(itm)
    });
}