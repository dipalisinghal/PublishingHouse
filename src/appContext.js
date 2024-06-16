import React, { useContext, createContext, useState } from 'react'


export const StateContext = createContext();

 const StateProvider = ({ children }) => {
     const [cartItems, setCartItems] = useState([]);
     const [updatedCart, setUpdatedCart] = useState([]);
     const [Quantity, setQuantity] = useState(1);
     let quantity ;
     var total = 0;
    // cartItems?.length < 1 ? total = 0 : total = cartItems[0].num_pages 
     const [subTotal, setSubtotal] = useState(0);
//     const addToCart = (item) => {
//         if (cartItems?.length === 0) {
//             //setQuantity(1)
//            // quantity = 1;
//             const newCart = [...cartItems, { ...item, quantity: Quantity }];
//           //  console.log("quantity", quantity)
//             console.log("QUANTITY", Quantity)
//             setCartItems(newCart);
//         }
//        // let idPresent = cartItems?.includes(item.id)
//        // cartItems?.map(el => el.map(ele => console.log("ele nested", ele)))
//         const sameidPresent = cartItems?.filter(person =>
//             person.id === item.id
//         );
//       //  sameidPresent?.length ? setCartItems([{ ...item, quantity: Quantity }]) : setCartItems([...cartItems, { ...item, quantity: Quantity }])
//         if (sameidPresent?.length) {
//             setQuantity(PRE => PRE + 1)
//            // quantity = quantity+1;
//             setCartItems([{ ...item, quantity: Quantity  }])
//         }
//         else {
//            // setQuantity(1)
//             //quantity = 1;
//             setCartItems([...cartItems, { ...item, quantity: Quantity }])
//         }
//     //    let newCart;
//         //    //let basket =
//         //const idPresent = cartItems?.includes(ele => {
//         //    console.log("idPresentinside", ele.id);
//         //    console.log("itemid", item.id)
//         //    if (ele.id !== item.id) {
//         //        return false;
//         //    }
//         //    if (ele.id === item.id) {
//         //        return true;

//         //    }
//         //})

//         //if (cartItems?.length !== 0 && !idPresent) {
//         //    const newCart = [...cartItems, { ...item, quantity: 1 }];
//         //    setCartItems(newCart);
//         //}
//        // console.log("cartItems", cartItems)
//         //console.log("idPresent", idPresent)
//     //    cartItems?.map(ele => {
//     //        //elements.map(items =>
//     //        //   console.log("id", items.id)
//     //        // items.id !== item.id ? console.log("id after false", item.id): console.log("id", item.id)
//     //        // newCart =   items.id !== item.id ? [...cartItems, { ...item, quantity: 1 }] :  [...cartItems, { ...item, quantity: quantity + 1 }]
//     //        if (!idPresent) {
//     //        setCartItems([...cartItems, { ...item, quantity: 1 }])
//     //    }
//     //        else if ( idPresent) {
//     //        setCartItems([...cartItems, { ...item, quantity: quantity + 1 }])
//     //    }
//     //    else {
//     //        setCartItems([...cartItems, { ...item, quantity: 1 }])
//     //    }
//     //        return cartItems;
//     //}
//     //     )
////                     [...cartItems, { ...item, quantity: quantity + 1 }] : [...cartItems, { ...item, quantity: 1 }]


//        // const newCart = [...cartItems, {...item, quantity:1}];
//        //setCartItems(newCart);
//     }

     const addToCart = (item) => {
         const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
         
         if (existingItemIndex !== -1) {
             // Item already exists in the cart, update its quantity
             const updatedCartItems = [...cartItems];
             let matchingcart = updatedCartItems?.find((items => items.id === item.id))
             let maxStock = matchingcart?.num_pages.toString().substring(0, 1);
             
             if (updatedCartItems[existingItemIndex].quantity < maxStock) {
                 updatedCartItems[existingItemIndex].quantity += 1;
                 setCartItems(updatedCartItems);
             }
             else {
                 alert("item added to cart is greater than available stock of that item")
             }
             
         } else {
             // Item does not exist in the cart, add it with quantity 1
             setCartItems([...cartItems, { ...item, quantity: 1 }]);
            
         }
         //const total = 0;
          
         //setSubtotal(total);
         console.log(subTotal);
     };

     //const addToCart = (book, id) => {
         
        
     //    let oldcart = cartItems.filter((item => item.id === id))
         
     //    let matchingcart = cartItems?.find((item => item.id === id))
     //    console.log("matchingcart: ", matchingcart);
     //    let maxStock =  matchingcart?.num_pages.toString().substring(0, 1);
     //    console.log("maxStock: ", maxStock);
     //    console.log("old: ", oldcart.length);
     //    //oldcart.length >= 0
     //    //if (oldcart) {
     //    if (oldcart.length === 0) {

     //        const newCart = [...cartItems, book];
     //        //setCartItems(newCart);
     //        setUpdatedCart(newCart)
     //        setQuantity(1);
     //        console.log("quantity at 0: ", quantity);
     //    }
     //    if (oldcart.length < maxStock && oldcart.length > 0) {
     //            const newCart = [...cartItems, book];
     //        setCartItems(newCart);
     //        setQuantity(quantity + 1);
     //        console.log("quantity at > 0: ", quantity);
     //        }
     //         if (maxStock === "undefined") {
     //            const newCart = [...cartItems, book];
     //             setCartItems(newCart);
                
     //        }
     //    if (oldcart.length > maxStock - 1) {
     //        alert("You are trying to exceed the stock ")
     //    }
        
     //    }
     //    const newCart = [...cartItems, book];
     //    setCartItems(newCart);
     //};
     const removeFromCart = (id) => {
         ////const newCart = cartItems.filter(book => book.id !== id);
         ////setCartItems(newCart);
         //let newBasket = [...cartItems];
         //const index = cartItems.findIndex(
         //    (basketItem) => basketItem.id === id
         //);
         //if (index >= 0) {
         //    //item exist in basket, remove it
         //    newBasket.splice(index, 1);
         ////    var FilterNewBasket = newBasket.filter((item, indexBasket) => {
         ////        return
         ////        console.log("indeBasket: ", indexBasket, "; index: ", index); indexBasket !== index

         ////});
         //}
         const newbasket = cartItems.filter(item => item.id !== id)
         setCartItems(newbasket);
         //else {
         //    console.warn(`Can not remove product (id: ${id}) as it is no longer exists.`);
         //}

         
        // setCartItems(FilterNewBasket)
     }
     const decrementQuantity = (id) => {
         const Updatedcart = [...cartItems]
         const Index = Updatedcart.findIndex(item => item.id === id)
         if (Index !== -1) {

             if (Updatedcart[Index].quantity > 1) {
                 Updatedcart[Index].quantity -= 1;
                 setCartItems(Updatedcart);
             }
            else {
                 const newbasket = cartItems.filter(item => item.id !== id)
                 setCartItems(newbasket);

             }
         }
         
         

     }

     const calculatePrice = () => {
         const total = cartItems?.length >= 0 ? cartItems?.reduce(total, items => total + items.num_pages * items.quantity) : 0
         setSubtotal(total);
     }

     return (<>
         <StateContext.Provider value={{ cartItems, addToCart, removeFromCart, subTotal, calculatePrice, decrementQuantity }}>
            {children}
        </StateContext.Provider>
    </>)
   
}
export const useStateContext =()=> useContext(StateContext);
export default StateProvider;