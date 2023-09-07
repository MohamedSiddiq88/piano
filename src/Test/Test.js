import React, { useEffect, useRef, useState } from 'react'
import c from '../pianokeysound/c.mp3';
import d from '../pianokeysound/d.mp3';
import E from '../pianokeysound/E.mp3';
import f from '../pianokeysound/f.mp3';
import g from '../pianokeysound/g.mp3';
import a from '../pianokeysound/a.mp3';
import b from '../pianokeysound/b.mp3';
import cSharp from '../pianokeysound/cSharp.mp3';
import dSharp from '../pianokeysound/dSharp.mp3';
import fSharp from '../pianokeysound/fSharp.mp3';
import gSharp from '../pianokeysound/gSharp.mp3';
import aSharp from '../pianokeysound/aSharp.mp3';


const Test = () => {

const [pianoKey,setPianoKey]= useState({
    "c": {
        name:"c",
        pair:"j",
        style:{},
        keypress:false,
        mousepress:false,
        color:"white"
    },
    "j": {
        name:"j",
        pair:"",
        style:{},
        keypress:false,
        mousepress:false,
        color:"black"
    },
    "d": {
        name:"d",
        pair:"k",
        style:{},
        keypress:false,
        mousepress:false,
        color:"white"
    },
    "k": {
        name:"k",
        pair:"",
        style:{},
        keypress:false,
        mousepress:false,
        color:"black"
    },
    "e": {
        name:"e",
        pair:"",
        style:{},
        keypress:false,
        mousepress:false,
        color:"white"
    },
    "f": {
        name:"f",
        pair:"l",
        style:{},
        keypress:false,
        mousepress:false,
        color:"white"
    },
    "l": {
        name:"l",
        pair:"",
        style:{},
        keypress:false,
        mousepress:false,
        color:"black"
    },
    "g": {
        name:"g",
        pair:"m",
        style:{},
        keypress:false,
        mousepress:false,
        color:"white"
    },
    "m": {
        name:"m",
        pair:"",
        style:{},
        keypress:false,
        mousepress:false,
        color:"black"
    },
    
    "a": {
        name:"a",
        pair:"n",
        style:{},
        keypress:false,
        mousepress:false,
        color:"white"
    },
    "n": {
        name:"n",
        pair:"",
        style:{},
        keypress:false,
        mousepress:false,
        color:"black"
    },
   
    "b": {
        name:"b",
        pair:"",
        style:{},
        keypress:false,
        mousepress:false,
        color:"white"
    },
    
    
    
    
    

    })

  

const isKeyPressed =useRef({});
const isMousePressed =useRef({});

function handleTouchEnd(e,key) {
  e.preventDefault(); // Prevents the default touch behavior (e.g., zooming)
  handleKeyUp(key);
}
function handleKeyUp(e){
  let key = e;
  if(e.key){
    key=e.key;
  }
  // console.log("handle key up", e.key, keyRelease)
  console.log("up",e)  
  // setStyle((pre) => ({ ...pre, [key]: {} }));
  setPianoKey((pre)=>({...pre,[key]:{
    ...pre[key],
    style:{}
  }}))
    isKeyPressed.current[key]=false;
    isMousePressed.current[key]=false;
  }

  function styleKey(key, color) {
    isKeyPressed.current[key]=true;
    isMousePressed.current[key]=true;
    if (color == "black") {
      

      setPianoKey((pre)=>(
       { ...pre,
        [key]:{
          ...pre[key],
          style:{
            backgroundColor: "rgb(41, 41, 41)",
            height: "65%"
          }
         
        }}
      ))

    } else {
      
      setPianoKey((pre)=>(
        { ...pre,
         [key]:{
           ...pre[key],
           style:{
             backgroundColor: "rgb(157, 156, 156)",
             height: "95%"
           }
          
         }}
       ))
    }
  
  

  }

  function playSound(note) {
    let Sound = new Audio(note);
    Sound.play();
  }

  function handleKeyPress(e) {
    console.log("85")

    let key = e;
    if(e.key){
      key = e.key
    }
    if(!isKeyPressed.current[key] || !isMousePressed.current[key]){
      switch (key) {
        case "c":
          
          playSound(c);
          styleKey("c","white")

          break;
  
        case "d":
          playSound(d);
          styleKey("d")
          break;
  
        case "e":
          playSound(E);
          styleKey("e")
          break;
  
        case "f":
          playSound(f);
          styleKey("f")
          break;
  
        case "g":
          playSound(g);
          styleKey("g")
          break;
  
        case "a":
          playSound(a);
          styleKey("a")
          break;
  
        case "b":
          playSound(b);
          styleKey("b")
          break;
  
        case "j":
          playSound(cSharp);
          styleKey("j", "black")
          break;
  
        case "k":
          playSound(dSharp);
          styleKey("k", "black")
          break;
  
        case "l":
          playSound(fSharp);
          styleKey("l", "black")
          break;
  
        case "m":
          playSound(gSharp);
          styleKey("m", "black")
          break;
  
        case "n":
          playSound(aSharp);
          styleKey("n", "black")
          break;
  
        default:
          break;
  
      }
    }
    
  }

  useEffect(() => {
    
    window.addEventListener("keyup",handleKeyUp)
    window.addEventListener("keydown", handleKeyPress)
  }, [])
  return (
    <div className='piano-container'>
      {Object.entries(pianoKey).map(([key, value], ind) => (
        <div key={key}>
          {value.color === 'white' ? (
            <div
              className='key'
              style={value.style}
              onMouseDown={() => {
                handleKeyPress(key);
              }}
              onMouseUp={() => {
                handleKeyUp(key);
              }}
              onTouchStart={() => {
                handleKeyPress(key);
              }}
              onTouchEnd={(e) => handleTouchEnd(e, key)} 
            >
              {(value.pair) ? (
                <div
                  className='hash-key'
                  style={pianoKey[value.pair].style}
                  onMouseDown={(e) => { e.stopPropagation(); handleKeyPress(value.pair); }}
                  onMouseUp={(e) => { e.stopPropagation(); handleKeyUp(value.pair); }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                    handleKeyPress(key);
                  }}
                  onTouchEnd={(e) => {e.stopPropagation();handleTouchEnd(e, value.pair)}} 
                >
                  <p className='hash-key-name'>{value.pair}</p>
                </div>
              ) : null}
              <p className='key-name'>{key.toUpperCase()}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Test
