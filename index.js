var iterable = 0;
var usuarioActual = "aldo0035";
var stateArrowDownHiden = false;

window.onload = function(){
    //------------------- agregando eventos -------------------------
    addEventDeleteElement('deleteElement_0');
    addEventOnChangeFilesForText("cargarImg_0", "fselectTImg_0");//texto input
    addEventOnChangeFilesForText("cargarAudio_0", "fselectTAud_0");//texto input
    
    //------------------- Ocultar elementos------------------------------------
    // document.getElementById('downArrowHidenImg').src = "./icons/DownArrowHover.png";
    // document.getElementById('elementsUploadCtd_0').style = "display: none";
    // document.getElementById('ETUB-barDown').style = "display: none";
    //------------------- Ocultar elementos------------------------------------
}

//hover
addEventHoverImage("ETUBT_BTN", "ETUBT_BTN-icon", "./icons/upload-hover.png", "./icons/upload.png");
addEventHoverImage("addELements", "addELements-icon", "./icons/addElement.png", "./icons/addElementHover.png");
addEventHoverImage("removeElements", "removeElements-icon", "./icons/DeleteElement.png", "./icons/DeleteElementHover.png");

document.getElementById('downArrowHidenImg').addEventListener('click', function(){
    let imgHiden = document.getElementById('downArrowHidenImg');
    let mainButtons = document.getElementById('ETUB-barDown');
    let elementsToUploadCtd = document.getElementsByClassName('elementsToUploadCtd');

    for(let element of elementsToUploadCtd){
        let elementsToUploadCtdId = document.getElementById(element.id);
        elementsToUploadCtdId.style = stateArrowDownHiden? "display: flex" : "display: none";
    }

    imgHiden.src = stateArrowDownHiden? "./icons/DownArrow.png" : "./icons/DownArrowHover.png";
    mainButtons.style = stateArrowDownHiden? "display: flex" : "display: none";
    stateArrowDownHiden = !stateArrowDownHiden;
});

document.getElementById('selTodosElementos').addEventListener('click', function seleccionarTodo(){
    var controlCheck = document.getElementById('selTodosElementos');
    var elemSel = document.getElementsByClassName("elementsToUploadCtd");
    if (controlCheck.checked) {
        for(let i=0; i<elemSel.length; i++){
            if( elemSel[i].children[0].children[0] ){
                elemSel[i].children[0].children[0].checked = true;
            }
        }
    }else{
        for(let i=0; i<elemSel.length; i++){
            if( elemSel[i].children[0].children[0] ){
                elemSel[i].children[0].children[0].checked = false;
            }
        }
    }
});

function addElementoDiv(){
    iterable++;
    let eTUCtd = document.createElement("div");
    eTUCtd.className = "elementsToUploadCtd";
    eTUCtd.id = "elementsUploadCtd_".concat(iterable);

    let ETUC_Chk = document.createElement("div");
    ETUC_Chk.className = "ETUC_Chk";

    let ETUC_Chk_inp = document.createElement("input");
    ETUC_Chk_inp.type = "checkbox";
    ETUC_Chk_inp.id = "selElement_".concat(iterable);

    let ETUC_Chk_lab = document.createElement("label");
    ETUC_Chk_lab.setAttribute("for", "selElement_".concat(iterable));

    let ETUC_Input = document.createElement("div");
    ETUC_Input.className = "ETUC_Input";

    let ETUC_Input_text = document.createElement("div");
    ETUC_Input_text.className = "ETUC_Input_its";

    let ETUC_Input_text_eng = document.createElement("input");
    ETUC_Input_text_eng.type = "text";
    ETUC_Input_text_eng.placeholder = "Palabra en ingles";
    ETUC_Input_text_eng.id = "fEng_".concat(iterable);

    let ETUC_Input_text_esp = document.createElement("input");
    ETUC_Input_text_esp.type = "text";
    ETUC_Input_text_esp.placeholder = "Palabra en español";
    ETUC_Input_text_esp.id = "fSpa_".concat(iterable);

    let ETUC_Input_file = document.createElement("div");
    ETUC_Input_file.className = "ETUC_Input_its";
    
    let ETUC_Input_file_i = document.createElement("div");
    ETUC_Input_file_i.className = "ETUC_Input_itsFile";

    let ETUC_Input_file_i_lab = document.createElement("label");
    ETUC_Input_file_i_lab.setAttribute("for", "cargarImg_".concat(iterable));
    ETUC_Input_file_i_lab.innerHTML = "seleccionar imagen";

    let ETUC_Input_file_i_div = document.createElement("div");
    ETUC_Input_file_i_div.innerHTML = "archivo seleccionado";
    ETUC_Input_file_i_div.id = "fselectTImg_".concat(iterable);

    let ETUC_Input_file_i_inp = document.createElement("input");
    ETUC_Input_file_i_inp.type = "file";
    ETUC_Input_file_i_inp.accept = "image/*";
    ETUC_Input_file_i_inp.id = "cargarImg_".concat(iterable);

    let ETUC_Input_file_a = document.createElement("div");
    ETUC_Input_file_a.className = "ETUC_Input_itsFile";

    let ETUC_Input_file_a_lab = document.createElement("label");
    ETUC_Input_file_a_lab.setAttribute("for", "cargarAudio_".concat(iterable));
    ETUC_Input_file_a_lab.innerHTML = "seleccionar audio";

    let ETUC_Input_file_a_div = document.createElement("div");
    ETUC_Input_file_a_div.innerHTML = "archivo seleccionado";
    ETUC_Input_file_a_div.id = "fselectTAud_".concat(iterable);

    let ETUC_Input_file_a_inp = document.createElement("input");
    ETUC_Input_file_a_inp.type = "file";
    ETUC_Input_file_a_inp.accept = "audio/*";
    ETUC_Input_file_a_inp.id = "cargarAudio_".concat(iterable);
    
    let ETUC_Btn = document.createElement("div");
    ETUC_Btn.className = "ETUC_Btn";

    let ETUC_Btn_img = document.createElement("img");
    ETUC_Btn_img.src = "./icons/EXIT.svg";
    ETUC_Btn_img.alt = "exit";
    ETUC_Btn_img.id = "deleteElement_".concat(iterable);

    ETUC_Chk.appendChild(ETUC_Chk_inp);
    ETUC_Chk.appendChild(ETUC_Chk_lab);
    ETUC_Input.appendChild(ETUC_Input_text);
    ETUC_Input_text.appendChild(ETUC_Input_text_eng);
    ETUC_Input_text.appendChild(ETUC_Input_text_esp);
    ETUC_Input.appendChild(ETUC_Input_file);
    ETUC_Input_file.appendChild(ETUC_Input_file_i);
    ETUC_Input_file_i.appendChild(ETUC_Input_file_i_lab);
    ETUC_Input_file_i.appendChild(ETUC_Input_file_i_div);
    ETUC_Input_file_i.appendChild(ETUC_Input_file_i_inp);
    ETUC_Input_file.appendChild(ETUC_Input_file_a);
    ETUC_Input_file_a.appendChild(ETUC_Input_file_a_lab);
    ETUC_Input_file_a.appendChild(ETUC_Input_file_a_div);
    ETUC_Input_file_a.appendChild(ETUC_Input_file_a_inp);
    ETUC_Btn.appendChild(ETUC_Btn_img);
    eTUCtd.appendChild(ETUC_Chk);
    eTUCtd.appendChild(ETUC_Input);
    eTUCtd.appendChild(ETUC_Btn);

    var current = document.getElementById('ETUB-barDown');
    document.getElementById('ETU-container').insertBefore(eTUCtd, current);

    addEventDeleteElement("deleteElement_".concat(iterable));
    addEventOnChangeFilesForText("cargarImg_".concat(iterable), "fselectTImg_".concat(iterable));//texto input
    addEventOnChangeFilesForText("cargarAudio_".concat(iterable), "fselectTAud_".concat(iterable));//texto input 
    console.log('Agregando nuevo elemento..!!');
}

function subirElementosBD(){
    //se obtiene el numero de id de elemento y guarda todos los states de checkbox
    var elemSel = document.getElementsByClassName("elementsToUploadCtd");
    var elementChecks = [];
    for (let i = 0; i < elemSel.length; i++) {
        elementChecks.push({
            "index" : getIndexIdElement(elemSel[i].id),
            "check" : elemSel[i].children[0].children[0].checked,
        });
    }
    
    //filtra los checkbox que son true y los agrega a un nuevo arreglo
    var elementosSel = elementChecks.filter((x) => {
        return x.check == true
    });

    //sin no hay elementos agregados en este arreglo , entonces no ha seleccionado al menos un elemento
    if(elementosSel.length <= 0){
        console.warn('no se ha seleccionado ningun elemento..!!'); 
        alert("Aun no ha seleccionado un elemento..!!");
    }else{ //si hay al menos un elemento, verifica si ha llenado todos los campos requeridos
        var elementSelField = 0;
        for(let x of elementosSel){
            var audio = document.getElementById("cargarAudio_".concat(x.index)).files[0];
            var imagen = document.getElementById("cargarImg_".concat(x.index)).files[0];
            if(audio && imagen){
                elementSelField++;
            }
        }
        //si no son iguales los tam de los campos seleccionados con los elementos seleccionados, faltan campos
        if(elementSelField != elementosSel.length){
            console.warn('acomplete los campos de audio y imagen');
            alert('Verifique que lleno todos los campos');
        }else{
            for(let y of elementosSel){ //subir archivo
                let fileImg = document.getElementById("cargarImg_".concat(y.index)).files[0];
                let fileAud = document.getElementById("cargarAudio_".concat(y.index)).files[0];
                let wordEng = document.getElementById("fEng_".concat(y.index)).value;
                let wordSpa = document.getElementById("fSpa_".concat(y.index)).value;

                // firebaseRdb.createWordIdAuto("aldo0035", {
                //     wordSpanish : wordSpa,
                //     wordEnglish : wordEng,
                //     wordAudioUrl : "",
                //     wordAudioName : fileAud.name,
                //     wordImgUrl : "",
                //     wordImgName : fileImg.name,
                // });
                // firebaseSto.subirImg(fileImg, "aldo0035", wordEng);
                // firebaseSto.subirAudio(fileAud, "aldo0035", wordEng);
            }
            clearAllInputs()
            alert("se han subido todos los archivos..!!");
        }
    }

}

function clearAllInputs(){
    var elemSel = document.getElementsByClassName("elementsToUploadCtd");
    document.getElementById('selTodosElementos').checked = false;
    var idElemSel = "";
    for(let i=0; i<elemSel.length; i++){
        idElemSel =  getIndexIdElement(elemSel[i].id);
        document.getElementById("selElement_".concat(idElemSel)).checked = false; //checkbox
        document.getElementById("fSpa_".concat(idElemSel)).value = ""; //spa
        document.getElementById("fEng_".concat(idElemSel)).value = ""; //eng
        document.getElementById("cargarAudio_".concat(idElemSel)).value = ""; //fileAudio
        document.getElementById("fselectTAud_".concat(idElemSel)).innerHTML = ""; //fileAudio text
        document.getElementById("cargarImg_".concat(idElemSel)).value = ""; //fileImage
        document.getElementById("fselectTImg_".concat(idElemSel)).innerHTML = ""; //fileImage text
        console.log('limpiando inputs..!!');
    }
}

function addEventOnChangeFilesForText(idFile, idSelectFile){
    document.getElementById(idFile).addEventListener('change', function(ev){
        var fselectTImg_ = document.getElementById(idSelectFile);
        fselectTImg_.innerHTML = ev.target.files[0]? ev.target.files[0].name : "nombre de la imagen";
    })
}

function addEventHoverImage(idMain, idImagen, pathIcon, pathIconHover){
    document.getElementById(idMain).addEventListener('mouseover', function(){
        document.getElementById(idImagen).src = pathIcon;
    });
    document.getElementById(idMain).addEventListener('mouseout', function(){
        document.getElementById(idImagen).src = pathIconHover;
    });
}

function addEventDeleteElement(id){
    document.getElementById(id).addEventListener('click', function(){
        let deleteElement = "elementsUploadCtd_".concat(getIndexIdElement(id));
        document.getElementById(deleteElement).remove();
    });
}

function getIndexIdElement(cadena){
    return cadena.slice(cadena.indexOf("_")+1, cadena.length);
}

function typeFile(path){
    path = path.split("/");
    return path[0];
}