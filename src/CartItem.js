import React from "react";
import { AiOutlineMinusCircle, AiFillPlusCircle,AiFillDelete } from 'react-icons/ai';
class CartItem extends React.Component {
    constructor(){
        super ();
        this.state={
            title:"mobile",
            price:99999,
            qty:1,
            img:''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity=()=>{
        console.log(this.state);
    }
    render() {
        const {title,price,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div>Rs {price}</div>
                    <div>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <span className="action-icons" onClick={this.increaseQuantity}>
                        <AiOutlineMinusCircle />
                        </span>
                        <span className="action-icons">
                        <AiFillPlusCircle/>
                        </span>
                        <span className="action-icons">
                        <AiFillDelete/>
                        </span>
                    </div>
                </div> 
            </div>
        )
    }
}
const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }
export default CartItem;