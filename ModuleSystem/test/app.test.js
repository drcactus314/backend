import {expect} from "chai";
import {culcArea, calcPerimetr, isSquare} from "../src/app.js";

describe('testing the geometry functions', function(){
   it('Should calculate the area of the rectangle', function(done){
     expect(culcArea(3, 4)).to.equal(12);
     done();
   })
   it('2. Calculate the perimetr of the rectangle', function(done){
     expect(calcPerimetr(5, 7)).to.equal(24);
     done();
   })
   it('3. it should chek is the shape is a square', function(done){
     expect(isSquare(6, 6)).to.be.true;
     expect(isSquare(6, 10)).to.be.false;
     done();
   })
})
