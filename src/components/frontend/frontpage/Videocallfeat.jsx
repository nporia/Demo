import React from 'react';
import './videocallfeat.css'
import Button from './button';
import Imageee from './img3.gif';

function Videocallfeature(){


   return <div className = "vcf">
    <div class="vcfleft">
       <div class = "subhead">
         Meet 
       </div>
       <div class = "subhead2">
        Instantly go from group chat to video conference <br/>with the touch of a button. <br/>Teams of two or 10,000 can meet <br/>in one place from anywhere.
       </div>
      <div class = "but">  <Button message = "Start for free →" bgcolor = "#078855" color = "white" /> </div>
    </div>
    <div class="vcfright">
    <img height = "300px"  widhth ="500px" src={Imageee} /> 
    </div>
   </div>



}

export default Videocallfeature;