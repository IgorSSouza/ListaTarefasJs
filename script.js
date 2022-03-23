function criaCalculadora(){
    return{
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionarEnter();
        },

        pressionarEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizarConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagarUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizarConta(){
            let conta = this.display.value;
            
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta Inválida');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta Inválida');
            }   

        },
        
        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagarUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizarConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();