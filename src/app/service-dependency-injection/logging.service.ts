//@decorator daganna ona ne service walata.
//meka nikamma .ts class ekak
export class LoggingService{

    // constructor(private status: string, private changeFrom: string){
    //     console.log('A server status changed '+changeFrom+', new status: ' + status);
    // }

    logStatusChange(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}