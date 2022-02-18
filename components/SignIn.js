import { Auth } from 'aws-amplify'
import styles from '../styles/SignIn.module.css'

function SignIn({ onChange, setCurrentState, signIn }){

    return(
        <div className={styles.container}>
            <p className={styles.text}>Sign into Your Account</p>
            <div>
                <label>Email</label>
                <input onChange={onChange} name='email' />
                <labell>Password</labell>
                <input onChange={onChange} name='password' type='password' />
                <button className={styles.signInbutton} onClick={signIn}>Sign In</button>
            </div>
            <p>Don't have an account?
                <button
                onClick={() => setCurrentState('signUp')}
                className={styles.signup}
                >Sign Up</button>
            </p>

        </div>
    )

}

export default SignIn