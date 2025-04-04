 export class Person{
    id:number = 0 ;
    endereco: string = "";
    email: string =  "";
    telefone:  string = "";
    cadastrar():string{
        let msg = ""
        if(this.endereco!=""){
            msg = "Dados cadastrados";

        }

        else{
            msg = "Não Cadastrou"
        }
        return msg;
    }
}
const ps = new Person();
ps.endereco = "Rua nova Esperança, 78"
console.log(ps.cadastrar());
