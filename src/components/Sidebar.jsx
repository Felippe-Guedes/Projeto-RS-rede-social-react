import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar (){
    return (

        <aside className={styles.sidebar}>
                     
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1597266029701-618ac066150a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=500" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/Felippe-Guedes.png" />
                <strong>Felippe Guedes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={ 20 }/>
                    Editar seu perfil
                </a>
            </footer>


        </aside>

    );
}