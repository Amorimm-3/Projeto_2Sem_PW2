function exibir()
{

let dia_nas = document.getElementById("dia_txt").value;
let mes_nas = document.getElementById("mes_txt").value;
let ano_nas = document.getElementById("ano_txt").value;

if ( ( (dia_nas>=22) && (mes_nas==12) ) || ( (dia_nas<=20) &&(mes_nas==1))) //	Capricornio: de 22 dezembro a 20 janeiro
    {
        document.images["signos"].src="../signos_imgs/jiren.webp";
        document.getElementById("texto").innerHTML="Capricórnio";
    }

else if ( ( (dia_nas>=21) && (mes_nas==1) ) || ( (dia_nas<=19) &&(mes_nas==2))) //Aquario: de 21 janeiro a 19 fevereiro
    {   
         document.images["signos"].src="../signos_imgs/beerus.jpg";
         document.getElementById("texto").innerHTML="Aquário";
    }
else if ( ( (dia_nas>=20) && (mes_nas==2) ) || ( (dia_nas<=20) &&(mes_nas==3))) //Peixes: de 20 fevereiro a 20 março	
    {
    document.images["signos"].src="../signos_imgs/Tien_DBZ_Kai.wep";
    document.getElementById("texto").innerHTML="Peixes";
    }
    
else if ( ( (dia_nas>=21) && (mes_nas==3) ) || ( (dia_nas<=20) &&(mes_nas==4))) //Aries: de 21 marco a 20 abril
    {
    document.images["signos"].src="../signos_imgs/majin_vegeta.jpg";
    document.getElementById("texto").innerHTML="Áries";
    }

else if ( ( (dia_nas>=21) && (mes_nas==4) ) || ( (dia_nas<=20) &&(mes_nas==5))) //Touro: de 21 abril a 20 maio

    document.images["signos"].src="../signos_imgs/goku_mui.jpg";
    

else if ( ( (dia_nas>=21) && (mes_nas==5) ) || ( (dia_nas<=20) &&(mes_nas==6))) //Gemeos: de 21 maio a 20 junho
    document.images["signos"].src="../signos_imgs/kid.jpg";

 else if ( ( (dia_nas>=21) && (mes_nas==6) ) || ( (dia_nas<=22) &&(mes_nas==7))) //Cancer: de 21 junho a 22 julho
    document.images["signos"].src="../signos_imgs/broly.jpg";

else if ( ( (dia_nas>=23) && (mes_nas==7) ) || ( (dia_nas<=22) &&(mes_nas==8))) //Leao: de 23 julho a 22 agosto
    document.images["signos"].src="../signos_imgs/freeza.png";
 
else if ( ( (dia_nas>=23) && (mes_nas==8) ) || ( (dia_nas<=22) &&(mes_nas==9))) //	Virgem: de 23 agosto a 22 setembro
    document.images["signos"].src="../signos_imgs/zamasu.jpg";
    
else if ( ( (dia_nas>=23) && (mes_nas==9) ) || ( (dia_nas<=22) &&(mes_nas==10))) //	Libra: de 23 setembro a 22 outubro
    document.images["signos"].src="../signos_imgs/gohan_beast.png";

else if ( ( (dia_nas>=23) && (mes_nas==10) ) || ( (dia_nas<=21) &&(mes_nas==11))) //	Escorpiao: de 23 outubro a 21 novembro
    document.images["signos"].src="../signos_imgs/cell.jpg";

else //	Sagitario: de 22 novembro a 21 dezembro
    document.images["signos"].src="../signos_imgs/goku_black.png";

}

function limpar(){


}