export class Message{
    title:string;
    message:string;
    isSent:boolean;


    constructor(name:string,family:string){
        this.title=name;
        this.message=family;
        this.isSent=false

    }
}


const message = new Message('moahammad','Hiiiiii')