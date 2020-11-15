
export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject)=>{
                setTimeout(()=>{
                    resolve(this.loggedIn);
                },800);
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