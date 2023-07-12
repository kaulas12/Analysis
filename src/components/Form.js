import React,{useState} from 'react'



export default function Form(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" +text);
        let newText = text.toLocaleUpperCase();
        setText(newText);

    }
    const handleUpClick2=()=>{
        console.log("Uppercase was clicked" +text);
        let newText = text.toLocaleLowerCase();
        setText(newText);

    }
    const handleUpClick3=()=>{
        let sortString = (str) => {
            return [...str].sort((a, b) => a.localeCompare(b)).join("");
          }                
        let newText = sortString(text);
        setText(newText);
    }
    const handleUpClick4=()=>{        
        let newText = '';
        setText(newText);
    }
    const convertToHindi=()=> {
        const mapping = {
          'a': 'अ',
          'b': 'ब',
          'c': 'स',
          'd': 'ड',
          'e': 'ई',
          'f': 'फ',
          'g': 'ग',
          'h': 'ह',
          'i': 'इ',
          'j': 'ज',
          'k': 'क',
          'l': 'ल',
          'm': 'म',
          'n': 'न',
          'o': 'ओ',
          'p': 'प',
          'q': 'क्यू',
          'r': 'र',
          's': 'स',
          't': 'ट',
          'u': 'उ',
          'v': 'व',
          'w': 'डब्ल्यू',
          'x': 'एक्स',
          'y': 'य',
          'z': 'जेड',
        };
      
        let newText = '';
        for (let i = 0; i < text.length; i++) {
          const character = text[i].toLowerCase();
          const hindiCharacter = mapping[character] || character;
          newText += hindiCharacter;
        }
      
        setText(newText);
      }
      

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value)
        
    }
    const[text,setText] = useState("");
    
    return (
        <>
    <div>
       <h1>{props.heading}</h1> 
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"
            rows="8"></textarea>
        </div>
      <button className="btn btn-dark mx-2" onClick={handleUpClick}>Upper Case</button>
      <button className="btn btn-dark mx-2" onClick={handleUpClick2}>Lower Case</button>
      <button className="btn btn-dark mx-2" onClick={handleUpClick3}>Sort</button>
      <button className="btn btn-dark mx-2" onClick={handleUpClick4}>Erase</button>
      <button className="btn btn-dark mx-2" onClick={convertToHindi}>convertToHindi</button>
    </div>
    <div className='container'>
        <h1>Your text summary</h1>
        <p>Number of words ={text.split(" ").length} and total characters = {text.length}</p>
        <p>Time for reading = {0.008 * text.split(" ").length}minutes</p>
    </div>
    </>
  )
}
