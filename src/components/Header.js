import img from "../images/img1.png"


export default function Header(){
     return (
        <header className="header">       
            <img className="header-img" src={img}></img>
             <h1 className="header--title">Meme Generator</h1>
             <h4 className="header--project">  react course - project 3</h4>
        </header>

     )
}