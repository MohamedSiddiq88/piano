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


const Piano = () => {

  const [style, setStyle] = useState({

    "c": {},
    "d": {},
    "e": {},
    "f": {},
    "g": {},
    "a": {},
    "b": {},
    "j": {},
    "k": {},
    "l": {},
    "m": {},
    "n": {},
  });

  // const [keyRelease, setKeyRelease] = useState({

  //   "c": true,
  //   "d": true,
  //   "e": true,
  //   "f": true,
  //   "g": true,
  //   "a": true,
  //   "b": true,
  //   "j": true,
  //   "k": true,
  //   "l": true,
  //   "m": true,
  //   "n": true,
  // });

const isKeyPressed =useRef({});
const isMousePressed =useRef({});


function handleKeyUp(e){
  let key = e;
  if(e.key){
    key=e.key;
  }
  // console.log("handle key up", e.key, keyRelease)
  console.log("up",e)  
  setStyle((pre) => ({ ...pre, [key]: {} }));
    isKeyPressed.current[key]=false;
    isMousePressed.current[key]=false;
  }

  function styleKey(key, color) {
    isKeyPressed.current[key]=true;
    isMousePressed.current[key]=true;
    if (color == "black") {
      setStyle((pre) => ({
        ...pre,
        [key]: {
          backgroundColor: "rgb(41, 41, 41)",
          height: "65%"
        }
      }))

    } else {
      setStyle((pre) => ({
        ...pre, [key]: {
          backgroundColor: "rgb(157, 156, 156)",
          height: "95%"
        },
      }));

    }
    // console.log("type",type)
  
  

  }

  function playSound(note) {
    let Sound = new Audio(note);
    Sound.play();
  }

  function handleKeyPress(e) {
    console.log("85")

    // console.log("type in",e.type)
    let key = e;
    if(e.key){
      key = e.key
    }
    // console.log(key)
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
      <div className="key" style={style.c} onMouseDown={()=>{handleKeyPress("c")}} onMouseUp={()=>{handleKeyUp("c")}}>
      <div className='hash-key' style={style.j}  onMouseDown={(e)=>{e.stopPropagation();handleKeyPress("j")}} onMouseUp={(e)=>{e.stopPropagation();handleKeyUp("j")}}>
        <p className='hash-key-name'>j</p>
        </div>
        <p className='key-name'>C</p>
      </div>
      

      <div className="key" style={style.d} onMouseDown={()=>{handleKeyPress("d")}} onMouseUp={()=>{handleKeyUp("d")}}>
        <div className='hash-key'style={style.k} onMouseDown={(e)=>{e.stopPropagation(); handleKeyPress("k")}} onMouseUp={(e)=>{e.stopPropagation(); handleKeyUp("k")}}>
        <p className='hash-key-name'>k</p>
        </div>
        <p className='key-name'>D</p>
      </div>

      <div className="key" style={style.e} onMouseDown={()=>{handleKeyPress("e")}} onMouseUp={()=>{handleKeyUp("e")}}>
        <p className='key-name'>E</p>
      </div>

      <div className="key" style={style.f} onMouseDown={()=>{handleKeyPress("f")}} onMouseUp={()=>{handleKeyUp("f")}}>
        <div className='hash-key'style={style.l} onMouseDown={(e)=>{e.stopPropagation();handleKeyPress("l")}} onMouseUp={(e)=>{e.stopPropagation();handleKeyUp("l")}}>
        <p className='hash-key-name'>l</p>
        </div>
        <p className='key-name'>F</p>
      </div>

      <div className="key" style={style.g} onMouseDown={()=>{handleKeyPress("g")}} onMouseUp={()=>{handleKeyUp("g")}}>
        <div className='hash-key'style={style.m} onMouseDown={(e)=>{e.stopPropagation();handleKeyPress("m")}} onMouseUp={(e)=>{e.stopPropagation();handleKeyUp("m")}}>
        <p className='hash-key-name'>m</p>
        </div>
        <p className='key-name'>G</p>
      </div>

      <div className="key" style={style.a} onMouseDown={()=>{handleKeyPress("a")}} onMouseUp={()=>{handleKeyUp("a")}}>
        <div className='hash-key'style={style.n} onMouseDown={(e)=>{e.stopPropagation();handleKeyPress("n")}} onMouseUp={(e)=>{e.stopPropagation();handleKeyUp("n")}}>
        <p className='hash-key-name'>n</p>
        </div>
        <p className='key-name'>A</p>
      </div>

      <div className="key" style={style.b} onMouseDown={()=>{handleKeyPress("b")}} onMouseUp={()=>{handleKeyUp("b")}}>
        <p className='key-name'>B</p>
      </div>


    </div>
  )
}

export default Piano
