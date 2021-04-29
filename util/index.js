const EC = require('elliptic').ec; // Importa o modulo de elliptic curve encryption
const cryptoHash = require('./crypto-hash');

const ec = new EC('secp256k1'); // Cria uma nova instancia de EC | "secp256k1" -> (sec) Standards of Efficient Cryptography, (p) Prime, (256) 256 bits 

const verifySignature = ({ publicKey, data, signature }) => {
    const KeyFromPublic = ec.keyFromPublic(publicKey, 'hex');

    return KeyFromPublic.verify(cryptoHash(data), signature);
}; 

module.exports = { ec, verifySignature, cryptoHash };