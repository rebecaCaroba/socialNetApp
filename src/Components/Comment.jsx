import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/rebecacaroba.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rebeca Caroba</strong>
                            <time title='11 de Maio às 08:30h' dateTime='20023-08-07 08:30:45'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns!!</p>
                </div>

                <footer>
                    
                    <button><ThumbsUp /> Aplaudir <span>20</span></button>
                </footer>
            </div>
        </div>
    )
}