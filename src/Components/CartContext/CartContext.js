import {useContext, useState, createContext} from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some((e) => e.id === id);
    };

    const addItem = (item, amount) => {
        let itemAmount = { ...item, amount };
        if (!isInCart(item.id)) {
            setCart([...cart, itemAmount]);
        } else {
            
            const newProducts = cart.map(prod => {
                if(prod.id === item.id) {
                    const newProduct = {
                        ...prod,
                        amount: prod.amount + amount
                    }
                    return newProduct
                } else {
                    return prod
                }
            })

            setCart(newProducts)
        }
    };


    const getQuantity = () => {
        let cant = 0
        cart.forEach((e) => cant += e.amount)
        return cant
    };
    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id));
    };

    const clear = () => {
        setCart([]);
    };
    return  (
    <CartContext.Provider value={{cart, getQuantity,setCart , addItem, isInCart, removeItem, clear }}>
        {children}
    </CartContext.Provider>
)
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) 
        throw new Error('useCart must be used within a CartContext')
    
    return context
}