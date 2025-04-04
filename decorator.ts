function logar(target:any, key:string){
    console.log(`${key} foi chamada`);
}

class exemplo{
    @logar
    exibir(){
        console.log("Metodo exibir sendo executado");
    }
}

const ex = new exemplo();
ex.exibir();
