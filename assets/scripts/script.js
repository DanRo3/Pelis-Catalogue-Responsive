/* componentes */
const $filters = document.getElementById("filters");
/* Botones del menu */
const $home = document.getElementById("home");
const $buscar = document.getElementById("buscar");
const $categorias = document.getElementById("categorias");

/* variables */


/**Funciones */
$categorias.addEventListener('click',() =>{
    window.scrollTo (0, 0);
    $categorias.classList.add("activado-m");
    $home.classList.remove("activado-m");
    $buscar.classList.remove("activado-m");
    Actualizar();
});

$home.addEventListener('click',() =>{
    $home.classList.add("activado-m");
    $categorias.classList.remove("activado-m");
    $buscar.classList.remove("activado-m");
    Actualizar();
});

$buscar.addEventListener('click',() =>{
    $buscar.classList.add("activado-m"); 
    $home.classList.remove("activado-m");
    $categorias.classList.remove("activado-m");
    Actualizar();
});

function Actualizar(){
    if($categorias.classList.contains("activado-m")){
        $filters.classList.remove("DeslizarMenu");
    }else{
        $filters.classList.add("DeslizarMenu");
    }
}
