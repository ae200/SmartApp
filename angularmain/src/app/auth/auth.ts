export class AuthLoginData {
	email: string;
	password: string;
    
	constructor(un:string, pass: string){
		this.email = un;
		this.password = pass;
		
	}
}