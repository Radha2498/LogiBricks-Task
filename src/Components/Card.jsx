import React, {useState } from "react";
import { css } from "@emotion/css";
import Button from '@material-ui/core/Button';


const Card = () => {
const [ background, setBackground] = useState("#32caba21");
const [ font, setFont] = useState("#424246");


const setStyle = (background, font ) =>{
    setBackground(background);
    setFont(font);
}
    const card = css`
    width: 1277px;
    height: 577px;
    padding: 40px;

    background-color :${background};
    h1{
        font-family :"Abril Fatface",cursive;
        font-weight:400;
        font-size:36px;
        margin-bottom:10px;
        color: ${font};
    }
    p{
        font-family:"poppins", sans-serif;
        font-weight:300;
        margin-size:16px;
        margin-bottom:20px;
        color:${font};
    }

`;

const cardButton = css`
button{
    font-family:"poppins", sans-serif;
    font-weight:500;
    font-size:12px;
    padding:10px 30px;
    margin-right:20px;
    border-radius:50px;
    cursor:pointer;
    border:none;

}
`;

const blueButton = css`
color:#5E4FDB;
background-color:#5E4FDB;

`;

const greyButton = css`
color:#F3F2FC;
background-color:#1d499b;
`;

const redButton = css`
color :#D64B4B;
background-color:#32CABA;
`;



return(
   
<div className = {card}>
<h1>Change the color of background</h1>

<div className={cardButton}>


<Button onClick={()=>setStyle("#5E4FDB","fdfdfd")}
    onMouseOut={()=>setStyle("fdfdfd","#424246")}
    className={blueButton} variant="contained" color="primary">
    Blue
</Button>

<Button onClick={()=>setStyle("#F3F2FC","fdfdfd")}
    onMouseOut={()=>setStyle("fdfdfd","#424246")}
    className={greyButton} variant="contained" color="default">
    Grey
</Button>

<Button onClick={()=>setStyle("#D64B4B","fdfdfd")}
    onMouseOut={()=>setStyle("fdfdfd","#424246")}
    className={redButton} variant="contained" color="secondary">
    Red
</Button>

<Button onClick={()=>setStyle("#852121","fdfdfd")} variant="contained"
 onMouseOut={()=>setStyle("fdfdfd","#424246")}
    style={{backgroundColor: '#852121', color: '#FFFFFF'}}>
    Dark Red
    </Button>

<Button onClick={()=>setStyle("#FFE3E3","fdfdfd")} variant="contained"
 onMouseOut={()=>setStyle("fdfdfd","#424246")}
    style={{backgroundColor: '#FFE3E3', color: '#FFFFFF'}}>
    Pink
    </Button>

<Button onClick={()=>setStyle("#0E4316","fdfdfd")} variant="contained"
 onMouseOut={()=>setStyle("fdfdfd","#424246")}
    style={{backgroundColor: '#0E4316', color: '#FFFFFF'}}>
    Dark Green
    </Button>

<Button onClick={()=>setStyle("#000000","fdfdfd")} variant="contained"
 onMouseOut={()=>setStyle("fdfdfd","#424246")}
    style={{backgroundColor: '#000000', color: '#FFFFFF'}}>
    Black
    </Button>


{/* simple buttons */}
<Button color="primary"  
onClick={()=>setStyle("#5E4FDB","fdfdfd")}  
onMouseOut={()=>setStyle("fdfdfd","#424246")}>Primary</Button>

<Button color="secondary" 
onClick={()=>setStyle("#D64B4B","fdfdfd")} 
onMouseOut={()=>setStyle("fdfdfd","#424246")}>Secondary</Button>

{/* Outlined buttons */}

<Button variant="outlined" color="primary"
onClick={()=>setStyle("#5E4FDB","000000")}
onMouseOut={()=>setStyle("fdfdfd","#424246")} >
Blue
</Button>

<Button variant="outlined" 
onClick={()=>setStyle("#FFFFFF","000000")}
onMouseOut={()=>setStyle("fdfdfd","#424246")} >
White
</Button> 

<Button variant="outlined" color="secondary" 
onClick={()=>setStyle("#E34404","000000")}
onMouseOut={()=>setStyle("fdfdfd","#424246")} >
Orange
</Button> 


<a href = "/switch" >Next Page</a>

</div>
</div>
);
};

export default Card;