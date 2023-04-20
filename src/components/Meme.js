import Memesdata from "./Memesdata"
import React from "react"

export default function Meme(){

    // let url
    // const [memeImage , setMemeImage] = React.useState("")
    const [meme , setmeme] =  React.useState({
        toptext : "",
        bottomtext : "",
        randomImage : "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages , setAllMemeImage] = React.useState([])

    React.useEffect(() =>{
        fetch("https://i.imgflip.com/30b1gx.jpg")
            .then(res => res.json())
            .then(data =>setAllMemeImage(data.data.memes))

    },[])


    function getMemeImage(){
        const memesArray = Memesdata.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url =  memesArray[randomNumber].url
        setmeme(pervMeme => ({
            ...pervMeme,
            randomImage:url,
        }))
        console.log(meme);
    }

    function handlechange(event){
        const {name , value}=event.target
        setmeme(pervMeme => ({
            ...pervMeme,
            [name]:value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                 type="text" 
                 placeholder="Top text"
                  className="form--input" 
                  name="toptext"
                  value={meme.toptext}
                  onChange={handlechange}
                  />
                <input type="text"
                 placeholder="Bottom text"  
                  className="form--input"
                  name="bottomtext"
                  value={meme.bottomtext}
                  onChange={handlechange}
                  />
                <button onClick={getMemeImage}
                 className="form--button">
                    Get a new meme Image 
                </button>
                <img className="meme--image" src={meme.randomImage}></img>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"></img>
                <h2 className="meme--text top">{meme.toptext}</h2>
                <h2 className="meme--text bottom">{meme.bottomtext}</h2>
            </div>
        </main>
    )
}