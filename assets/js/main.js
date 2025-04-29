function criaCalculadora (){
    return {
        display: document.querySelector(".display"),
        
        inicia(){
            this.cliqueBotoes();
            this.precionaEnter();
        },

        precionaEnter(){
            this.display.addEventListener("Keyup", e =>{
                if(e.key === "Enter") {
                    this.realizaConta();
                }
            });
        },
        
        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert("Conta Inválida");
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert("Conta Inválida");
            }
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay(){
            this.display.value = '';
        },

        cliqueBotoes(){
            document.addEventListener("click", (e) => {
                const el = e.target;

                if (el.classList.contains("btn-num")){
                    this.btnPararDisplay(el.innerText);
                }

                if (el.classList.contains("btn-clear")){
                    this.clearDisplay();
                }

                if (el.classList.contains("btn-del")){
                    this.apagaUm();
                }

                if (el.classList.contains("btn-eq")){
                    this.realizaConta();
                }
            });
        },

        btnPararDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();