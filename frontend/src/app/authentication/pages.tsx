import Link from 'next/link'
import styles from '../../styles/authentication.module.css'

export default function Authentication(){
    return (        
        <div className={styles.authentication}>
            <input type="email" name="txt_email" id="idEmail" placeholder='Email'/>
            <input type="password" name="txt_password" id="idPassword" placeholder='Senha'/>
            <button>Entrar</button>
            <Link href="/">Esqueci minha senha</Link>
        </div>
    )
}