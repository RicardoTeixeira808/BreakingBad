import styles from "./Personagem.module.css";
import Link from "next/Link";





export default function Personagem({ personagem }) {
    

    return(

        <>
    
        <header>
        <Link href="./pages/index.js">  
            <div className="logo">
                <div className="logo1">Breaking Bad</div>
                <div className="logo2">Characters</div> 
            </div>
        </Link>
        </header>
        

        
            <div className={styles.container}>

                <div className={styles.container_left}>

                    <div className={styles.overview_panel}>
                    <img src={personagem.img}/> 
                    </div>
                </div>


                <div className={styles.container_right}>

                    <div className={styles.details_panel}>

                        <div className={styles.details_panel_heading}>{personagem.name}</div>

                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Nickname</div>
                            <div className={styles.details_panel_value}>{personagem.nickname}</div>
                        </div>

                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Birthday</div>
                            <div className={styles.details_panel_value}>{personagem.birthday}</div>
                        </div>


                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Occupation</div>
                            <div className={styles.details_panel_value}>{personagem.occupation}</div>
                        </div>


                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Status</div>
                            <div className={styles.details_panel_value}>{personagem.status}</div>
                        </div>


                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Appearances </div>
                            <div className={styles.details_panel_value}>{personagem.appearance}</div>
                        </div>


                        <div className={styles.details_panel_row}>
                            <div className={styles.details_panel_label}>Portrayed by </div>
                            <div className={styles.details_panel_value}>{personagem.portrayed}</div>
                        </div>
                            
                    </div>
                 
                </div>
                  
            </div>

        </>
    )
}



export async function getStaticPaths() {
    return{
        paths: [],
        fallback:'blocking'
    }
}

export async function getStaticProps({params}){
    const code = params.slug;
    const res = await fetch(`https://breakingbadapi.com/api/characters/${code}`);

    const personagem = await res.json();

    return {
        props: {
            personagem:personagem[0]
        },
        revalidate: 10
    }
}