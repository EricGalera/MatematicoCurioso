function calcular(){

    let semilla =
        parseInt(
            document.getElementById("semilla").value
        );

    if(
        isNaN(semilla) ||
        semilla < 1 ||
        semilla >= 10000
    ){
        alert("Ingrese una semilla entre 1 y 9999");
        return;
    }

    // VECTOR
    let secuencia = [];

    let numero = semilla;
    let maximo = numero;

    secuencia.push(numero);

    while(numero !== 1){

        if(numero % 2 === 0){
            numero = numero / 2;
        }
        else{
            numero = numero * 3 + 1;
        }

        secuencia.push(numero);

        if(numero > maximo){
            maximo = numero;
        }
    }

    let largo = secuencia.length;

    document.getElementById("resultado").innerHTML =
    `
        <h2>Resultados</h2>

        <p>
            <b>Largo de la secuencia:</b>
            ${largo}
        </p>

        <p>
            <b>Número máximo:</b>
            ${maximo}
        </p>

        <div class="secuencia">
            <b>Secuencia:</b><br>
            ${secuencia.join(" → ")}
        </div>
    `;
}