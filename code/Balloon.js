class Balloon{
    constructor(balloonNumber, D, P, V) {
        this.number = balloonNumber;
        this.d = D;
        this.p = P;
        this.v = V;
    }

    getNumber(){
        return this.number;
    }
    setDPV(dpv){
        //code
    }
    getDPV(){
        return this.d + " " + this.p + " " + this.v;
    }

    printDPV(){
    return "D:" + this.d + " \n" +  "P:" + this.p + " \n" + "V:" + this.v;
    }
    moveAll(){
        //move
    }
    //shift?
}