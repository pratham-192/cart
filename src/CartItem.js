import React from "react";
import { AiOutlineMinusCircle, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
class CartItem extends React.Component {
    //not required as we are getting data from 'props'
    // constructor() {
    //     super();
    //     this.state = {
    //         title: "mobile",
    //         price: 99999,
    //         qty: 1,
    //         img: ''
    //     }
    //     //binding so that the reference(this) is saved (see video for clarity)
    //     this.increaseQuantity = this.increaseQuantity.bind(this);
    // }
    increaseQuantity() {
        // console.log(this.state);

        // ******************* setState function calls render function after batching

        //method-1 of set-state function of react component
        //in this method, shallow-batching happens (all the setState functions are combined into one 
        // function and the object in the last function gets higher priotity for common entities)
        //  and page is rendered only once

        // this.setState({
        //     qty: this.state.qty+1
        // },()=>{})

        //method-1 of set-state
        //here first queue is maintained to execute all setState by maintaining the prevState in queue
        //and then batchng happens and page is rendered only once(first batching of all setState functions
        // and then callback function of all the setState functions called)
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, () => {
            console.log(this.state.qty);
        })
        //react is 'asynchronous' so we don't know when the call will get complete so we can use callback
        // function which executes only when setstate function completes
        //from react version 17, all the calls of the setState is ansynchronous (in ajax and promises also)
    }


        //arrow function binds 'this'
        decreaseQuantity = () => {
            this.setState((prevState) => {
                if (prevState.qty > 0)
                    return {
                        qty: prevState.qty - 1
                    }
            })
        }
        render(){
            const { title, price, qty } = this.props.product;
            return (
                <div className="cart-item">
                    <div className="left-block">
                        <img style={styles.image}  />
                    </div>
                    <div className="right-block">
                        <div>{title}</div>
                        <div>Rs {price}</div>
                        <div>Qty: {qty}</div>
                        <div className="cart-item-actions">
                            {/* buttons */}
                            <span className="action-icons" onClick={this.decreaseQuantity}>
                                <AiOutlineMinusCircle />
                            </span>
                            <span className="action-icons" onClick={this.increaseQuantity}>
                                <AiFillPlusCircle />
                            </span>
                            <span className="action-icons">
                                <AiFillDelete />
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