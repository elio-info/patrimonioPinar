const list_items=[
    {ttl:'Geo_Pinar',name:`Caracteristicas de Pinar del Rio.`, desc:`Animate a un enfoque distinto de lo conocido...`, icon:'geo-fill', lnk:'01.geo/geo'},
    {ttl:'Litera_Tur',name:`Literatura certificada.`, desc:'Toda una referencia de documentos que justifican este legado.', icon:'home', lnk:''},
    {ttl:'Tradi_Cult',name:`Tradiciones locales.`, desc:`Historias que debes de conocer. No todo es tan tan...`, icon:'toggles2', lnk:''},
    {ttl:'Docu_Mental',name:`Documentales.`, desc:`Recorre filmicamente la localidad monumental.`, icon:'collection', lnk:''},
    {ttl:'Patrimonios',name:`Lugares patrimoniales.`, desc:`Lo que perdura en el tiempo...`, icon:'calendar3', lnk:''},
    {ttl:'Proyectos',name:`Proyectos socioculturales.`, desc:`El movimiento cultural  juega su papel`, icon:'tools', lnk:''}
];
/**
     * <div class="col d-flex align-items-start">
            <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
     */

function setMenu_Up(params, posc) {
    
   let menu_Up=`<ul class="nav nav-masthead"> ` ;
   list_items.map((itm,indx)=>{
      menu_Up +=`
        <li class="nav-item">
          <a href="${indx==posc?'#':itm.lnk}" class="nav-link ${indx==posc?'active':''}" ${indx==posc?'aria-current="page"':''}>${itm.ttl}</a>
        </li>
      `
   });
  menu_Up +=`</ul>`;
  document.getElementById(params).innerHTML=menu_Up;
   
}

function setList_CenterArticles_Links(params) {
    /**
     * <div class="col d-flex align-items-start">
            <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
              <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi" aria-hidden="true">
                  <use xlink:href="#chevron-right"></use>
                </svg>
              </a>
            </div>
        </div>
     */
    let center_link=``;
    list_items.map((item)=>{
        center_link +=`
        <div class="col d-flex align-items-start py-3">
            <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
              <use xlink:href="#${item.icon}"></use>
            </svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                ${item.name}
              </h3>
              <p>
                ${item.desc}
              </p>
              <a href="${item.lnk}.patripi.html" class="icon-link gap-1 icon-link-hover stretched-link">
                Continue leyendo >>>
                
              </a>
            </div>
        </div>
        `;
    })
    document.getElementById(params).innerHTML=center_link;
}

function set_Footer(params) {
    let foot=` 
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">            
            <spam class="h4 px-1 text-body-secondary">Conservar es respetar</spam>
          </li>
        </ul>  
        <p class="text-center text-body-secondary">&copy; 2025 Datamining, Inc</p>
    `;
    document.getElementById(params).innerHTML=foot;
}