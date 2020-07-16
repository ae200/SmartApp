export class authRegisterData{
    displayname:string;
    email:string;
    secretquestion:number;
    secretanswer:string;
    password1:string;
    password2:string;
    firstname:string;
    lastname:string;


    constructor(un:string, email:string, ps:string, secretquestion:number, secretanswer:string, firstname:string, lastname:string ){
        this.email = un;
        this.password1 = email;
        this.password2 = ps;
        this.secretquestion = secretquestion;
        this.secretanswer = secretanswer;
        this.firstname = firstname;
        this.lastname = lastname;
        this.displayname = firstname + " " + lastname;
    }
}