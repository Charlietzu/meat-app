import {CartItem} from './cart-item.model'
import {MenuItem} from '../menu-item/menu-item.model'

export class ShoppingCartService{
    //receber um array vazio será sua instânciação, o carrinho irá começar com um array vazio
    items: CartItem[] = []

    clear(){
        this.items = []
    }

    //ao adicionar será do tipo menuitem, pois o item ainda não está no carrinho, está no menu de itens.
    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item:CartItem){
        this.items.splice(this.items.indexOf(item), 1)
    }

    total():number{
        return this.items
        //trocando o item pelo seu valor, pois queremos somente o valor nessa função
        .map(item => item.value())
        //somar o valor prévio com o atual
        .reduce((prev, value) => prev + value, 0)
    }

    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }
}