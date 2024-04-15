const Blockchain=require('./blockchain');
const blockchain=new Blockchain();

blockchain.addblock({data:"block2"});
let prevTimestamp,nextTimestamp,nextBlock,averageTime,Timediff;

let Times=[];

for(let i=0;i<1000;i++){
    prevTimestamp=blockchain.chain[blockchain.chain.length-1].timestamp;
    blockchain.addblock({data:'block '+i});
    nextBlock=blockchain.chain[blockchain.chain.length-1];
    nextTimestamp=nextBlock.timestamp;
    Timediff=nextTimestamp-prevTimestamp;
    Times.push(Timediff);

    averageTime=Times.reduce((total,num)=>(total+num))/Times.length;
    console.log("Time to mine block difficulty ",nextBlock.difficulty,"timesdiff: ",Timediff, " average time: ",averageTime);
}
console.log(blockchain);