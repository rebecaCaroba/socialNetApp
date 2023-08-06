import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.pexels.com/photos/394377/pexels-photo-394377.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
            />

            <div className={styles.profile}>
                <strong>Rebeca Caroba</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}