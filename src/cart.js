import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
            super();
            this.state = {
                products:[
                    {
                        title: "mobile",
                        price: 99999,
                        qty: 1,
                        img: '',
                        id:1
                    },
                    {
                        title: "afsdf",
                        price: 234213,
                        qty: 1,
                        img: '',
                        id:2
                    },
                    {
                        title: "dagasdfwe",
                        price: 2432,
                        qty: 1,
                        img: '',
                        id:3
                    }
                ]
            }
        }
    render() {
        const {products}=this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem 
                    //anything can be sent via props
                    product={product} 
                    key={product.id}
                    func={()=>{}}
                    isloggedin={false}
                    jsx={<h1>Test</h1>}
                    compo={<CartItem/> }
                    />
                })}
            </div>
        )
    }
}
export default Cart;