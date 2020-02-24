import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Order, OrderItem} from './order.model';
import {MEAT_API} from '../app.api';

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http){}

    //iremos expor algums elementos que já são fornecidas pelo shoppingCartService, porém, iremos criar específicos para as compras
    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    clear(){
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string>{
        //configurando o observable da Order para o backend através de HTTP utilizando o método POST para a URL, quando a resposta chegar iremos mapear a resposta para o formato JSON
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`, 
                            JSON.stringify(order), 
                            new RequestOptions({headers: headers}))
                        .map(response=> response.json())
    }
}