class Order {
    constructor(
        public adress: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = []
    ){}
}

class OrderItem {
    //o backend já consta as informações de nome, valor, descrição, só precisaremos passar um ID e a quantidade
    constructor(public quantity: number, public menuId: string){}
}

export {Order, OrderItem}