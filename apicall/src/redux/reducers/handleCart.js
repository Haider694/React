const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id)
            if (!exist) {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id)
            {
                return state.filter((x) => x.id !== exist1.id);
            }
            break;
        case "DECCART":
            return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            break;

        case "INCCART":

            return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);

            break;
        case "CLRCART":
             if (state.length > 0) {

                return  { product: []}
                

            }
            

            break;
        default:
            return state;
            break;
    }

}
export default handleCart;