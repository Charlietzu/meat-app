import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

export class ErrorHandler {
    static handleError(error: Response | any){
        let errorMessage: string
        if(error instanceof Response) {
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        } else {
            //caso não seja instância de Response, o erro não estará parametrizado pelo Angular, logo só passaremos a string dele
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage) 
    }
}