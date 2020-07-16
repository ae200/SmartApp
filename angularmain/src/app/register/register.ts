export class UserRegisterData {
	username: string;
	email: string;
	password: string;
    constructor(un:string, em:string, pass: string){
		this.username = un;
		this.email = em;
		this.password = pass;
	}
}