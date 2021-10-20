export class Message{
    title:string;
    message:string;
    private _isSent : boolean;
    set isSent(value:boolean){

        if(value===true){
            this.deliveryDate=new Date();
        }
        this._isSent=value;

    } 
    get isSent():boolean{
        return this._isSent;
    }
    deliveryDate:Date;


    constructor(name:string,family:string){
        this.title=name;
        this.message=family;
        this.isSent=false

    }

    get messageStatus():string{
        const sentMessage = this.isSent ? 'Has been sent': 'Has not been sent';

        return`${this.message} | ${sentMessage}`;
    }

    previewMessage():string{
        return this.message.slice(0,10).concat('123')
    }
}


const message = new Message('moahammad','Hiiiiii')
message.isSent=true;
message.messageStatus;
message.previewMessage();