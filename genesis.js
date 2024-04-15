const MINE_RATE=1000;
const INITIAL_DIFFICULTY=2;
const genesis_block={
    timestamp:'22/01/24',
    prevhash:'0x000',
    hash:'0x111',
    nonce:0,
    difficulty:INITIAL_DIFFICULTY,
    data:'hello'
}
module.exports={genesis_block,MINE_RATE};