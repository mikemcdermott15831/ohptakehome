/*
   Contains methods for MBI generation and verification
   AUTHOR: Mike McDermott, 03/23/2022
*/
// Use this package to generate an MBI based upon the regex definition
const RandExp= require('randexp')

class ohp {

    // Generate an MBI from the regex
    doGenerateMBI() {
        return new RandExp(this.mbiRegex).gen()
    }

    // Verify an MBI from the regex
    doVerifyMBI(input_mbi) {
        return this.mbiRegex.test(input_mbi)
    }

    // Build the regex
    constructor() {
        this.mbiRegex=new RegExp(/[1-9][AC-HJ-KM-RT-Y][AC-HJ-KM-RT-Y0-9][1-9]-[AC-HJ-KM-RT-Y][AC-HJ-KM-RT-Y0-9][1-9]-[AC-HJ-KM-RT-Y][AC-HJ-KM-RT-Y][1-9][1-9]/)
    }
}

module.exports=ohp