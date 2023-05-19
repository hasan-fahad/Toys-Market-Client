import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,signOut,updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
export const auth = getAuth(app);
const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logIn =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUser = (name, photo) =>{
        setLoading(true)
        return updateProfile(name, photo)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);
        setLoading(false);
       }); 
       return () => {
        // eslint-disable-next-line no-undef
        return unsubscribe();
       }
    },[])
    const updateUserData = (user, name, photoURL)=>{
        updateProfile(user,{
          displayName:name, photoURL: photoURL
        })
        .then(()=>{
          console.log('user name and photo URL updated');
        })
        .catch(error =>{
          console.log(error)
        })
      }
    
    const authInfo ={
        user,
        loading,
        createUser,
        logIn,
        updateProfile,
        updateUserData,
        updateUser,
        logOut,
        provider,
        githubProvider
        
    }

    return (
        <AuthContext.Provider value={authInfo}>

                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;