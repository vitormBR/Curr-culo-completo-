
    function comecaragora() {
        window.location.href = "pag2.html"
    }
    
         function guiaexplicacao() {
        window.location.href = "pagexplicaçao.html"
    }      



     function calcularcomprasparceladas() {
        var x = parseFloat(document.getElementById("vista").value);
        var y = parseFloat(document.getElementById("valor").value);
        var z = parseFloat(document.getElementById("parcelas").value);
            var resultado="";

            if(x==0 || y==0 || z==0){

                    resultado=" Preencha os campos com valores"
            }else{

            var teto=(x*115)/100;
            var totalparcelado=y*z;

            if(totalparcelado <= teto){

                    resultado=" A compra é recomendada e você pagará: " + "R$" + totalparcelado + " cada mês, valor que cabe no seu orçamento"

            }else{

                    resultado=" A compra não é recomendada porque você pagará: " + "R$" + totalparcelado + " cada mês, que fica apertado no seu orçamento"
                }
                }

            document.getElementById("resultado").textContent = "resultado :" + resultado
   }

   





   function calcularcomprasfutu() {
         var x = parseFloat(document.getElementById("orcamento").value);
         var y = parseFloat(document.getElementById("valor").value);
         var z = parseFloat(document.getElementById("meses").value);
         var resultado="";

         if(x==0 || y==0 || z==0){

                resultado=" Preencha os campos com valores"
         }else{

         var precisomes= y/z;
         var teto=(x*40)/100;

         if(precisomes <= teto){

                resultado=" A compra é recomendada e você deverá economizar : " + "R$" + precisomes + " cada mês, valor que cabe no seu orçamento"

         }else{

                resultado=" A compra não é recomendada porque você deverá economizar : " + "R$" + precisomes + " cada mês, que fica apertado no seu orçamento"
              }
              }

         document.getElementById("resultado").textContent = "resultado :" + resultado
   }
   







   function calcularinvestimentos() {
         var x = parseFloat(document.getElementById("entrada").value);
         var y = parseFloat(document.getElementById("juros").value);
         var z = parseFloat(document.getElementById("tempo").value);
         var g = parseFloat(document.getElementById("quantespera").value);
         var resultado="";
         var resulatdo2="";

         if(x==0 || y==0 || z==0 || g==0){

                resultado=" Preencha os campos com valores";
         }else{

         var valorfverdade= x*((1+y)**z); 

         }if(valorfverdade < quantespera){

                resultado=" O investimemto não é recomendada";


         }else if(valorfverdade >= quantespera){

                resultado=" O investimento é recomendado";
              }
              

         document.getElementById("resultado").textContent = "resultado :" + resultado;
        }








        function calcularorçamento() {
         var x = parseFloat(document.getElementById("renda").value);
         var y = parseFloat(document.getElementById("nece").value);
         var z = parseFloat(document.getElementById("nnece").value);
         var resultado="";
           


         if(x==0 || y==0 || z==0){

                resultado=" Preencha os campos com valores"
         }else{

         var orcamento= x-(y+z);
         if(orcamento<0){

                resultado=" Você está endividado, busque se organizar financeiramente, seu orçamento é " + orcamento.toFixed(2) + "R$";

         }else if(orcamento<= (x *35/100) && orcamento >=0){

                resultado="Você não esta endividado,porém pode se organizar melhor, seu orçamento é " + orcamento.toFixed(2) + "R$";
         }else if(orcamento> (x *35/100)){
                   
                resultado="Parabéns, você está bem organizado com o seu dinheiro, seu orçamento é " + orcamento.toFixed(2) + "R$";
         }
         }

         document.getElementById("resultado").textContent = "resultado :" + resultado;
   }
   
   function buscarcalculo() {
    var nomecalculo = document.getElementById("nomecalculo").value.toLowerCase();
            if (nomecalculo == "compras futuras") { 
                window.location.href = "calculo1.html";
            } else if (nomecalculo == "compras parceladas") {
                window.location.href = "calculo2.html"
            } else if (nomecalculo == "investimentos") {
                window.location.href = "calculo3.html"
            } else if (nomecalculo == "orçamento mensal") {
               window.location.href = "calculo4.html"
            }
        }
