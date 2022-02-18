import { Auth } from 'aws-amplify'
import styles from '../styles/ConfirmSignUp.module.css'


function ConfirmSignUp({ onChange, setCurrentState, confirmSignUp}){

    return(
        <div>
            <p className={styles.text}>Confirm Sign Up</p>
            <div>
                <label className={styles.confirm}>Confirmation Code</label>
                <input className={styles.input} onChange={onChange} name='vCode' />

                <button className={styles.confirmSignUp} onClick={confirmSignUp}>Confirm Sign Up</button>
            </div>
                <button
                onClick={() => setCurrentState('signIn')}
                className={styles.cancel}
                >Cancel</button>
        </div>
    )
}

export default ConfirmSignUp