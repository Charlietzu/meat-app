import {MenuItem} from '../menu-item/menu-item.model'

export class CartItem {
    //será public pois o carrinho de compras terá acesso a esses dados.
    constructor(public menuItem: MenuItem, 
                public quantity: number = 1){}

    value(): number {
        return this.menuItem.price * this.quantity
    }
}