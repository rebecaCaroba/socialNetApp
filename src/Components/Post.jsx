import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/rebecacaroba.png" />
                    <div className={styles.authorInfo}>
                        <strong>Rebeca Caroba</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de Maio às 16h30" dateTime="2022-08-06 16:30:50">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>    
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate inventore explicabo incidunt! Temporibus fugit maxime deleniti facere quidem.
                </p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>
                    <a href="#">#nlw</a>
                    <a href="#">#rocketseat</a>
                </p>    
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>

                <footer><button type='submit'>Publicar</button></footer>
            </form>
        </article>
    )
}
