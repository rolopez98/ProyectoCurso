function creaLista(){
    let lista = '<ul>'

    for(let i = 0; i<5; i++){
        lista +='<li>' + 'Elemento ' + i +'</li>';
    }

    lista +='</ul>';
    document.write(lista);
}

function creaListaDom(){
    let ul_lista = document.getElementById('lista');

    let elemento = document.createElement('li');
    elemento.textContent = "Hola Mundo";
    ul_lista.appendChild(elemento);
}

function creaListaCompleta(){
    let ul_lista = document.createElement('ul');
    ul_lista.className = 'no bullets';
    ul_lista.id = 'mi_lista';

    for(let i = 0; i<5; i++){
        let elem_li = document.createElement('li');
        elem_li.textContent = `Elemento ${i}`;
        elem_li.className = 'elem';
        ul_lista.appendChild(elem_li);
    }
    //console.log(ul_lista);
    document.body.appendChild(ul_lista);
}

function borraLi(){
    let lista = document.getElementById('mi_lista');
    if(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    else{
        console.log('Sin elementos');
    }
}