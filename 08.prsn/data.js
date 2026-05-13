let data=[
    {
        place:`Rosemary`,title:`Maria R. Ramirez`,grd:`MSc. Patrimonio `,
        desc:`Destacada profesional en el extremo occidental de la isla de Cuba y del archipiélago cubano. Trabaja en la provincia de Pinar del Río.`
    },
    {
        place:`Aly`,title:`Alaina Sanchez Ozuna`,grd:`MSc. Filosofia y Sociedad`,
        desc:`La mas profesional filosofa en el extremo occidental de la isla de Cuba y del archipiélago cubano. Trabaja en la provincia de Pinar del Río.`
    },{
        place:`Data`,title:`Elio`,grd:`Uno ahi`,
        desc:`Un Seboruco que quiere estar a 671 m en la altitud máxima de la provincia.`
    },
]

function create_Card(itm_data){
    let objCard=`
    <div class="col-md-4 ">
        <svg aria-label="Placeholder" class="bd-placeholder-img rounded-circle" height="140" preserveAspectRatio="xMidYMid slice" role="img" width="140" xmlns="http://www.w3.org/2000/svg">
              <title >${itm_data.place}</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">${itm_data.place}</text>
            </svg>
            <h2 class="fw-bold text-body-emphasis">${itm_data.title}</h2>
            <p>
               ${itm_data.desc}
            </p>          
          
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