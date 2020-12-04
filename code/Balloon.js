class Balloon {
    constructor(balloonNumber, D, P, V) {
        this.number = balloonNumber;
        this.d = D;
        this.p = P;
        this.v = V;
    }

    getNumber() {
        return this.number;
    }

    setDPV(dpv) {
        //code
    }

    getDPV() {
        return this.d + " " + this.p + " " + this.v;
    }

    printDPV() {
        return "D:" + this.d + " \n" + "P:" + this.p + " \n" + "V:" + this.v;
    }

    //moveFromAtoB(a,b){
        //a is what we take from
        // b is what we give to
        //
    //}



    getFrom(){

    }


    giveTo(){

    }
    moveAll() {
        //move
        //let's go with the truly random method
        let a = getRandomArbitrary(1, 3);//it will generate a number between 1 and 3
        let b = getRandomArbitrary(1,3);// we need to make sure that the numbers arent the same in the end
        do{ // while a and b are equal do it
            a = getRandomArbitrary(1, 3);
            b = getRandomArbitrary(1, 3);
        }while(a === b)
        // D = 1, p = 2, v = 3
        if (a === 1) {// while a === 1 give to b
            while(this.d > 0){

            }

        } else if (a === 2) {// while a === 2 give to b

        } else if (a === 3) {// while a === 3 give to b

        }
    }


    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    //shift?
}