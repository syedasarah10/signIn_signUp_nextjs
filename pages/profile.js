import { useState, useEffect } from 'react'
import { Auth, signInButton } from 'aws-amplify'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import ConfirmSignUp from '../components/ConfirmSignUp'
import styles from '../styles/Profile.module.css'

const initialState = {email :'', password: '', vCode: ''};

function Profile(){
    const [currentState, setCurrentState] = useState('signIn');
    const [formState, setFormState] = useState(initialState);
    const [user, setUserState] = useState(null);
    const email = formState.email;
    const password = formState.password;
    const vCode = formState.vCode;
    useEffect(() => {
       checkUser()
       async function checkUser(){
            const user = await Auth.currentAuthenticatedUser()
            setUserState(user)
            setCurrentState('signedIn')
       }
    },[])

    function onChange(event){
        setFormState({...formState, [event.target.name] : event.target.value })
    }
    async function signUp(){
        try {
           await Auth.signUp({
               username: email,
               password,
               attributes:{
                   email: email
               }
           })
           setCurrentState('confirmSignUp')
          } catch (err) { console.log({ err }); }
    }
    async function confirmSignUp(){
        try {
            await Auth.confirmSignUp(email, vCode)
            setCurrentState('signedIn')
            checkUser()
            signIn()
        } catch (err) { console.log({ err }); }
    }
    async function signIn(){
        try {
           await Auth.signIn(email, password)
           setCurrentState('signedIn')
        } catch (err) { console.log({ err }); }

    }


    return(
        <div className={styles.profile}>
        <div>
            <div>
            <div className={styles.profileDetails}>
            {
                currentState === 'signUp' && (
                    <div>
                        <SignUp 
                        onChange={onChange}
                        setCurrentState={setCurrentState}
                        signUp={signUp}
                        />
                    </div>
                )
            }   
            {
                currentState === 'confirmSignUp' &&(
                    <div>
                        <ConfirmSignUp 
                        onChange={onChange}
                        setCurrentState={setCurrentState}
                        confirmSignUp={confirmSignUp}
                        />
                    </div>
                )
            }
            {
                currentState === 'signIn' && (
                    <div>
                        <SignIn 
                        onChange={onChange}
                        setCurrentState={setCurrentState}
                        signIn={signIn}
                        />
                    </div>
                )
            }
            {
                currentState === 'signedIn' && (
                    <div> 
                        <p className={styles.welcome}>Welcome!</p>
                        <button 
                        className={styles.signOut}
                        onClick = {() => {
                            Auth.signOut();
                            setCurrentState('signIn');
                            setUserState(null)
                        }} 
                        >Sign Out</button>
                    </div>
                )
            }
            </div>
            </div>
        </div>
        </div>
    )
}


export default Profile