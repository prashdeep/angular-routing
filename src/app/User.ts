
export class User{

    private id:number;
    private name: string;
    private email:string;
    private phone:string;
    private website:string;
    
    constructor(id:number, name:string, email:string, phone:string, website:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.website = website;
    }
}