export class Message{
    title:string;
    message:string;
    isSent:boolean;


    constructor(name:string,family:string){
        this.title=name;
        this.message=family;
        this.isSent=false

    }

    previewMessage():string{
        return this.message.slice(0,10).concat('123')
    }
}


const message = new Message('moahammad','Hiiiiii')

message.previewMessage();