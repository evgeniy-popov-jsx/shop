import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { action, makeAutoObservable, observable } from 'mobx';

class AuthStore {
  @observable user: { email: string } | null = null;
  @observable error: boolean = false;
  private firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

  constructor() {
    firebase.initializeApp(this.firebaseConfig);

    makeAutoObservable(this);

    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user);
    });
  }

  setUser = (user: any) => {
    this.user = user;
  };

  @action
  async signIn(email: string, password: string){
    try {
      this.error = false;
      await firebase.auth().signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
        this.error = true;
    }
  };

  @action
  async register(email: string, password: string){
    try {
      this.error = false;
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
        console.log(error)
        this.error = true;
    }
  };

  @action
  async logout(){
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };
};

export default new AuthStore;
