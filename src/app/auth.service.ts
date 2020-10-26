
export class AuthService{
    loggedIn = true;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject)=>{
                setTimeout(()=>{
                    resolve(this.loggedIn);
                },1000);
            }
        )
        return promise;//authonticated nam promise eka return karanawa
    }

    login(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }
}