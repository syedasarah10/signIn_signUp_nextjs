import { Auth } from 'aws-amplify'
import styles from '../styles/SignUp.module.css'

function SignUp({ onChange, setCurrentState, signUp }){

    return(
        <div className={styles.container}>
            <p className={styles.text}>Sign up for an Account</p>
            <div>
                <label>Email</label>
                <input onChange={onChange} name='email' />
                <labell>Password</labell>
                <input onChange={onChange} name='password' type='password' />
                <button className={styles.signInbutton} onClick={signUp}>Sign Up</button>
            </div>
            <p>Have an account?
                <button
                onClick={() => setCurrentState('signIn')}
                className={styles.signin}
                >Sign In</button>
            </p>
        </div>
    )

}
export default SignUp