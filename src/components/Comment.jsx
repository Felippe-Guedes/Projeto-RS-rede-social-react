import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';



export function Comment ({ content, onDeleteComment}) {
    
    const [likeCount, setLikeCount] = useState(0);
    
    const handleLikeComment = () => {
        setLikeCount(likeCount + 1)
    }

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
        
        <Avatar hasBorder={false}  src="https://github.com/Felippe-Guedes.png" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Felippe Guedes</strong>
                        <time title='21 de dezembro às 10:58h' dateTime='2022-12-21 10:55:00'>Cerca de 1h atrás.</time>
                    </div>
                    
                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>                

            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>

        </div>

        
        </div>
    )
}