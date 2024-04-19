const redis=require('redis');

const channels={
    TEST:'TEST',
    BLOCKCHAIN:'BLOCKCHAIN',
}

class PubSub{
    constructor({blockchain}){
        this.blockchain=blockchain;
        this.subscriber=redis.createClient();
        this.publishers=redis.createClient();
         

        this.subscriber.subscribe(channels.TEST);
        this.subscriber.subscribe(channels.BLOCKCHAIN);
        this.subscriber.on('message',(channel,message)=>this.handleMessage(channel,message))
    }
    handleMessage(channel,message){
        const parseMessage=JSON.parse(message);
        console.log(parseMessage);
        console.log("Recieved message on channel: ",channel," message is : ",message);
        if(channel===channels.BLOCKCHAIN){
            this.blockchain.replaceChain(parseMessage);
        }
        
    }
    publish({channel,message}){
        this.publishers.publish(channel,message);
    }
    broadcastChain(){
        this.publish({
            channel:channels.BLOCKCHAIN,
            message:JSON.stringify(this.blockchain.chain),
        })
    }
}
//  const checkPubSub=new PubSub();
//  setTimeout(
//     ()=>checkPubSub.publishers.publish(channels.TEST,'hello Mr.'),1000
//  );
 module.exports=PubSub;