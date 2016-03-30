var plvSlc;
var dicaPlv;
var plvArr      = new Array();
var plvTmp      = new Array();
var ltrsDigts   = "";
var sepLtr      = "_";
var maxLtr      = 1;
var tent        = 0;
var erros       = 0;
var maxErro     = 6; //maximo de erros permitidos

//OK Função digitar palavra
function modJogo(apcao){
        switch(apcao){
			case 1:
			plvSlc  = plvValida("Digite uma palavra(s) para começar!").toUpperCase();
            dicaPlv = plvValida('Digite uma "Dica" para essa palavra!');
            iniciar();
            break;
        }
}

//OK Função iniciar jogo
function iniciar(){
	trataPlv(plvSlc);
	//replaceConteudo();
	}

//OK Função trata palavra digitada ao iniciar
function trataPlv(plvSlc){
        var espaco = "&nbsp;";

        for (var i = 0; i < plvSlc.length; i++){
			if(plvSlc.charAt(i) == " "){
				plvTmp[i] = espaco;
                plvArr[i] = espaco;
                }
			else{
				plvTmp[i] = sepLtr;
				plvArr[i] = plvSlc.charAt(i).toUpperCase();
}}}



//OK Função Verifica Letra Digitada
function virificaLtr(){
        var trocaLtr    = false;
        var ltrRepet    = false;
        var ltr         = document.getElementById("letra").value.toUpperCase();
            
        if (ltr.length == 0)
                alert("Digite algo...");
        else if (ltr.length > 1){
			alert("Só é permitido uma letra por vez.");
            document.getElementById("letra").value = "";
        }
        else if (ltr == " "){
			alert("Não é permitido espaço...");
            document.getElementById("letra").value = "";
        }
        
        else{
			for (var i = 0; i < plvSlc.length; i++){
				if(ltrsDigts.search(ltr) !== -1)
					ltrRepet = true;
				else if((plvArr[i] == ltr)){
					plvTmp[i] = plvArr[i];
                    trocaLtr  = true;
				}
			}
			ltrsDigts += ltr;
			
			if(trocaLtr == true){
				tent++;
                replaceConteudo();
                comparaPlv();
                }
				else if(ltrRepet == true){
					alert("Você já digitou essa letra");
                    document.getElementById("letra").value = "";
                }

                else{
					alert("Letra errada!");
                    erros++;
                    tent++;
					
					if (erros > maxErro){
						alert("Fim de jogo!\nVocê morreu animalzinho...");
                        location.reload();
                        }
                        else
                        replaceConteudo();
}}}

//FUNÇÃO VERIFICA GANHADOR
function comparaPlv(){
        var fimJogo = true;

        for (var i = 0; i < plvSlc.length; i++){
			verifica = plvTmp[i] == plvArr[i];
			if (verifica == false)
				fimJogo = false;
		}
        if(fimJogo == true){
			alert("Parabéns!\nEm apenas "+ tent +" tentativa(s) você adivinhou:\n\""+ plvSlc +"\".");
            location.reload();
}}


//OK FUNCAO DIGITAR PALAVRA
function plvValida(msg){
	var rs = false;
	do{
		rs = prompt(msg);
		if (rs.length == 0){
			alert("Digite algo...");
			rs = false;
		}
		else if (rs == " "){
			alert("Não é permitido somente espaço.");
            rs = false;
		}
		else
			return rs;
        }
        while(rs == false)
}

//OK FUNCAO DIGITAR DICA
function dica(){
        alert("Dica:\n" + dicaPlv);
        document.getElementById("letra").focus();
}

//OK FUNÇÃO REPLACE TELA
function replaceConteudo(){
        document.getElementById("conteudo").
        innerHTML = '\
            <div class="bs-example">\n\
                <div>\n\
                    <img alt="100%x200" data-src="holder.js/100%x200" style="width: 100%; display: block;" src="img/boneco/'+ erros +'.png">\n\
                    <div class="caption">\n\
                        <h3 class="text-center">'+ plvTmp.join(" ") +'</h3>\n\
                        <form class="form-horizontal">\n\
                            <div class="input-group busca">\n\
                                <input type="text" maxlength="'+ maxLtr +'"  id="letra" placeholder="Digite uma letra!" class="form-control">\n\
                                <div class="input-group-btn">\n\
                                    <button type="submit" onclick="virificaLtr();return false;" class="btn btn-primary">\n\
                                        <i class="glyphicon glyphicon-search"></i>\n\
                                    </button>\n\
                                </div>\n\
                            </div>\n\
                        </form>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        ';
        document.getElementById("letra").focus();
}