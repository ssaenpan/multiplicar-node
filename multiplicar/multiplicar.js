const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor capturado ${base} no es un número`);
            return;
        }

        let i = 1;
        let data = '';
        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${base*i}`);
            data += (`${base} * ${i} = ${base*i}\n`);
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });

}

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`)
    }
}

module.exports = {
    crearArchivo,
    listarTabla
};