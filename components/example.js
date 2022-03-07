import React from "react";
import { render } from "react-dom";

export default function Example()
{

      const multiplier = {
         numbers : [1,2,2],
         multiplby: 3,
         multiply(){
           return  this.numbers.map( (number)=> this.multiplby*number)
         }
      }
    console.log( multiplier.multiply())

    

    return(null)
}