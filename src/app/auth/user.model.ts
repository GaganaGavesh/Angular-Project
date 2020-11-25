//TO MANAGE TOKEN AND USER
export class User{
    constructor(
        public email: String, 
        public id: String, 
        private _token: String, 
        private _tokenExpirationDate: Date
        ){}
    //get kiyana ekedi apata e ena monawath override karanna be
    get token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
        {
            //token eka null nam or token expiraion date eka current date ekata wada adu nam null return karanawa
            return null;
        }
        return this._token;
    }
}