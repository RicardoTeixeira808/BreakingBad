
import Link from "next/link";





export default function Home({ personagens }) {
  return(
    <>
    <header>
      <div className="titulo">
        <div className="titulo1">Breaking Bad</div>
        <div className="titulo2">Characters</div> 
      </div>
    </header>
    

    <div className="container">

        <div className="row">

      
        {personagens && personagens.map(personagem => {
          return (
            
              <div className="card">
                <Link key={personagem.char_id} href={`personagem/${personagem.char_id}`}>
                  <a>
                    
                  <div className="card-img">
                    <img src={personagem.img}/>
                  </div>
                  
                  <div className="card-name"> {personagem.name} </div>
                  
                  </a>
                </Link>
              </div>
      
          )
        })}
    
      </div>

    </div>

    </>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://breakingbadapi.com/api/characters');
  const personagens = await res.json();

  return{
    props: {
      personagens
    },
    revalidate: 10
  }
}