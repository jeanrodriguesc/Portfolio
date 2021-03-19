let botoes = document.getElementsByClassName('botoes');

for (let btn of botoes) {
    btn.addEventListener( 'click', () => {
        let cmd = btn.dataset['command'];

        // document.execCommand(cmd, false, null);  Poderia fazer assim, sem o link.. e apagaria o resto

        if(cmd === 'createlink') {
            let url = prompt("Crie se proprio link:", "https:\/\/");
            document.execCommand(cmd, false, url);
        } else {
            document.execCommand(cmd, false, null);
        }
    })
}

