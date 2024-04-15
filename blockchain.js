const Block=require('./block');
const cryptohash = require('./cryptohash');
const { genesis_block } = require("./genesis");
class Blockchain{
    chain=[];
    constructor (){
        this.chain=[Block.genesis()];
    }
    addblock({data}){
        const new_block=Block.mineBlock(
            {
                prevBlock:this.chain[this.chain.length-1],data
            }
        );
        this.chain.push(new_block);
    }
    static isValidChain(chain){
        if(JSON.stringify(chain[0])!==JSON.stringify(Block.genesis())) 
            return false;
        for(let i=1;i<chain.length;i++){
            let lastdifficulty=chain[i-1].difficulty;
            const {prevhash,timestamp,hash,nonce,difficulty,data}=chain[i];
            const hashprev=chain[i-1].hash;
            if(hashprev!==prevhash)
                return false;
            const validatehash=cryptohash(timestamp,prevhash,nonce,difficulty,data);
            if(validatehash!==hash)
                return false;
            if(Math.abs(difficulty-lastdifficulty)>1) 
                return false;
        }
        return true;
    }
    static replaceChain(chain){
        if(chain<=this.chain.length){
            console.error("This chain is not no longer than current chain");
            return;
        }
        if(!Blockchain.isValidChain(chain)){
            console.error("This chain is not a validate chain");
            return;
        }
        this.chain=chain;
    }
}
const blockchain=new Blockchain();
blockchain.addblock({data:"hello world"});
blockchain.addblock({data:"hello juet"});
// console.log(blockchain);
// console.log(Blockchain.isValidChain(blockchain.chain));
module.exports=Blockchain;
