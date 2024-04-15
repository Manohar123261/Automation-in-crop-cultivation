const redis=require('redis');

const channels={
    TEST:'TEST',
    BLOCKCHAIN:'BLOCKCHAIN'
}

class PubSub{
    constructor(){
        // this.blockchain=blockchain;
        this.subscriber=redis.createClient();
        this.publishers=redis.createClient();
         

        this.subscriber.subscribe(channels.TEST);
        // this.subscriber.subscribe(channels.BLOCKCHAIN);
        this.subscriber.on('message',(channel,message)=>this.handleMessage(channel,message))
    }
    handleMessage(channel,message){
        // const parseMessage=JSON.parse(message);
        if(channel===channels.BLOCKCHAIN){
            this.blockchain.replaceChain(parseMessage);
        }
        console.log("Recieved message on channel: ",channel," message is : ",message);
    }
    publish({channel,message}){
        this.publishers.publish(channel,message);
    }
}
 const checkPubSub=new PubSub();
 setTimeout(
    ()=>checkPubSub.publishers.publish(channels.TEST,'hello Mr.'),1000
 );