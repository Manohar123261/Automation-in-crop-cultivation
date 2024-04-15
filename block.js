const {genesis_block, MINE_RATE}=require('./genesis');
const cryptohash=require('./cryptohash');
const hexToBinary=require("hex-to-binary");
class Block{
    constructor({prevhash,timestamp,hash,nonce,difficulty,data}){
        this.timestamp=timestamp;
        this.prevhash=prevhash;
        this.hash=hash;
        this.nonce=nonce;
        this.difficulty=difficulty;
        this.data=data;
    }
    static genesis(){
        return new this(genesis_block);
    }
    // Function for mining a new block
    static mineBlock({prevBlock,data}){
        let {difficulty}=prevBlock;
        let hash,timestamp;
        let prevhash=prevBlock.hash;
        let nonce=0;
        do{
            
            nonce++;
            timestamp=Date.now();
            difficulty=Block.adjustDifficulty({originalBlock:prevBlock,timestamp});
            hash=cryptohash(timestamp,prevhash,nonce,difficulty,data);

        }while(hexToBinary(hash).substring(0,difficulty)!=='0'.repeat(difficulty))
        
        return new this({
            timestamp,
            prevhash,
            hash,
            nonce,
            difficulty,
            data,
        });
    }
    static adjustDifficulty({originalBlock,timestamp}){
        const {difficulty}=originalBlock;
        if(difficulty<1) return 1;
        let diff=timestamp-originalBlock.timestamp;
        if(diff>MINE_RATE) return difficulty-1;
        return difficulty+1;
    }
}
// const block1=new Block({timestamp:'22/01/23',prevhash:'0xabc',hash:'0xdef',data:'hello'});
// console.log(block1);
// const genesis=Block.genesis();
// console.log(genesis);
// const result=Block.mineBlock({prevBlock: genesis,data: "block1"});
// console.log(result);
module.exports=Block;