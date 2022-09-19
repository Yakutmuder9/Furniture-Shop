import { useEffect, useState } from "react";
import './cart.css'
import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
} from "../../redux/features/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getOrderDetail } from "../../redux/features/OrderSlice"

const CartScreen = () => {
    const cart = useSelector((state) => state.getCart);
    const user = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { cartItems } = cart
    const [product] = useState({
        name: "Go Furniture",
        price: 64998.67,
        description: "Cool car"
    });

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (course) => {
        dispatch(addToCart(course));
    };
    const handleDecreaseCart = (course) => {
        dispatch(decreaseCart(course));
    };
    const handleRemoveFromCart = (course) => {
        dispatch(removeFromCart(course));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };


    async function handleToken(token, addresses) {
        const response = await axios.post(
            "/checkout",
            { token, addresses, product }
        );
        const { status } = response.data;

        console.log("Response:", response.data);
        if (status === "success") {
            dispatch(getOrderDetail(addresses))
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (
        <>
            <Header /> <div className="py-3 rounded mb-3" style={{
                background: "#fae6ae"
            }}>
                A simple warning alert—check it out!
            </div>
            <div className="cart-container px-4 py-2">
                <h2>Shopping Cart</h2>
                {cart.cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is currently empty</p>
                        <div className="start-shopping">
                            <Link to="/product">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="px-5">
                        <div className="titles">
                            <h3 className="product-title">Product</h3>
                            <h3 className="price">Price</h3>
                            <h3 className="quantity">Quantity</h3>
                            <h3 className="total">Total</h3>
                        </div>
                        <div className="cart-items">
                            {cart.cartItems &&
                                cart.cartItems.map((cartItem, id) => (
                                    <div className="cart-item" key={id}>
                                        <div className="cart-product">
                                            <img src={cartItem.images[0].image} alt={cartItem.name} style={{ width: "50%", height: "100%" }} />
                                            <div>
                                                <h5 className="bolder">{cartItem.name}</h5>
                                                <p>{cartItem.description}</p>
                                                <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-product-price"><h5>${cartItem.price}</h5></div>
                                        <div className="cart-product-quantity">
                                            <button onClick={() => handleDecreaseCart(cartItem)}>
                                                -
                                            </button>
                                            <div className="count">{cartItem.cartQuantity}</div>
                                            <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                        </div>
                                        <div className="cart-product-total-price">
                                            ${cartItem.price * cartItem.cartQuantity}
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="cart-summary">
                            <button className="clear-btn" onClick={() => handleClearCart()}>
                                Clear Cart
                            </button>
                            <div className="cart-checkout">
                                <div className="subtotal">
                                    <span>Subtotal</span>
                                    <span className="amount">${cart.cartTotalAmount}</span>
                                </div>
                                <p>Taxes and shipping calculated at checkout</p>

                                <StripeCheckout
                                    stripeKey="pk_test_51LM4lLLB8jsObGMGWAL8jVUisigDNFsIMOUla1M2EEMhdd3RrPS3nthbuJCnwchdKz4OoSPKEUC1HuFwnMDosmYu00rl1S1hDq"
                                    token={handleToken}
                                    amount={cart.cartTotalAmount * 100}
                                    name="Furniture"
                                    billingAddress
                                    shippingAddress
                                    className="btn btn-success p-0 m-0 w-100"
                                />
                                <div className="continue-shopping">
                                    <Link to="/product">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-arrow-left"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                            />
                                        </svg>
                                        <span>Continue Shopping</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ToastContainer />
            <Footer />
        </>

    )
}

export default CartScreen
