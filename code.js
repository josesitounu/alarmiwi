let horas = document.createElement("select")
horas.id = "horas"

let minutos = document.createElement("select")
minutos.id = "minutos"

let segundos = document.createElement("select")
segundos.id = "segundos"

for(let i = 0; i < 24 ; i++){

	let optionH = document.createElement("option")
	optionH.textContent = i
	optionH.value = i

	horas.appendChild(optionH)
}
for(let i = 0; i < 60 ; i++){

	let optionM = document.createElement("option")
	optionM.textContent = i
	optionM.value = i

	minutos.appendChild(optionM)
}
for(let i = 0; i < 60 ; i++){

	let optionS = document.createElement("option")
	optionS.textContent = i
	optionS.value = i

	segundos.appendChild(optionS)
}

document.body.appendChild(horas)
document.body.appendChild(minutos)
document.body.appendChild(segundos)


function primero(){

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function reloj() {

	let ceritosH,ceritosM,ceritosS

	const audio = document.createElement("audio")
	audio.id = "anuel"
	audio.src = "alarma_anuel_aa.mp3"
	audio.type = "audio/mp3"
	

	const div = document.createElement("div")

	let ho,min,seg

	ho = parseInt(document.getElementById("horas").value)
	min = parseInt(document.getElementById("minutos").value)
	seg = parseInt(document.getElementById("segundos").value)

	let mimir = 1000
	let momo
	let tiempoMimir = document.getElementsByName('vel');

		for (let i = 0; i <  tiempoMimir.length; i++) {
		  if (tiempoMimir[i].checked) {
		    momo = (tiempoMimir[i].value);
		    break;
		  }
		}
	
	if(momo == 1){
		mimir = 1000
	}
	else if(momo == 2){
		mimir = 100
	}
	else if(momo == 3){
		mimir = 10
	}

	let relojito = document.createElement("div")
	relojito.id = "relojon"

	for(let h = 0; h < 24; h++){

		for(let m = 0; m < 60; m++){

			for(let s = 0; s < 60; s++){


				await sleep(mimir);
				 
                 if(h < 10){ ceritosH = "0"}else{ceritosH = ""}
                 if(m < 10){ ceritosM = "0"}else{ceritosM = ""}
                 if(s < 10){ ceritosS = "0"}else{ceritosS = ""}


				textoRelojito = "<br><h6> HORA	MINUTO	SEGUNDO</h6> <h1>"+ceritosH+h+"    :    "+ceritosM+m+"    :    "+ceritosS+s+"</h1>" 
				 
				relojito.innerHTML = textoRelojito

				document.body.appendChild(relojito)

				if(h == ho && m == min && s == seg){
					div.appendChild(audio)
					audio.autoplay = true
					audio.loop = true
					audio.play()
					document.body.appendChild(div)
					
					await sleep(20000);
					h = 25
				  }
			}

		}

	}


}
   

reloj();
}








