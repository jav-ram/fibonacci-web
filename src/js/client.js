const state = {
    elementos: 0,
    graficas: [],
    scale: 5,
}


const render = lState => {
    const root = document.getElementById('root');
    if (root.innerHTML != undefined) {
        root.innerHTML = null;
    }

    //header 
    const header = document.createElement('div');
    header.className = 'header'
    //input
    const input = document.createElement('input');
    input.setAttribute('type','text');
    input.className = 'insert';
    //submit
    const submit = document.createElement('button')
    submit.setAttribute('type','submit');
    submit.innerHTML = 'add';
    submit.onclick = () => {
        const e = parseInt(input.value);
        lState.graficas.push(fibonacci(e));
        render(lState);
    };
    //add to header
    header.appendChild(input);
    header.appendChild(submit);

    //content
    const content = document.createElement('div');
    content.className = 'content';
    //crear graficas 
    for (let i = lState.graficas.length-1; i >= 0; i -= 1) {
        const card = document.createElement('div');
        card.className = 'card';
        const grafica = document.createElement('div');
        grafica.className = 'grafica';

        //fecha
        const now = new Date();
        const nowText = document.createElement('p');
        nowText.innerHTML = now;
        card.appendChild(nowText)

        //crear barras
        for (let j = 0; j < lState.graficas[i].length; j += 1) {
            const val = lState.graficas[i][j];
            const barra = document.createElement('div');
            barra.className = 'barra';
            barra.style = `height: ${lState.scale * val}px`
            
            grafica.appendChild(barra);
        }
        card.appendChild(grafica);
        content.appendChild(card);

    }

    root.appendChild(header);
    root.appendChild(content);

}

const fibonacci = (e) => {
    if (e === 0) {
        return [];
    } else if (e === 1) {
        return [1];
    } else if (e === 2) {
        return [1, 1];
    } else {
        let secuencia = [1, 1];
        for (let i = 2; i < e; i += 1) {
            const val = secuencia[i - 1] + secuencia[i - 2];
            secuencia.push(val);
        }
        return secuencia;
    }
}

render(state);