export type ProductType = {
    "id": number,
    "name": string
    "description": string,
    "defaultImage": string,
    "images": string[],
    "price": number,
    "discount": number
}

export type CartItemType = {
    id: number,
    quantity: number
}

export type CartType = {
    id: number,
    products: CartItemType[],
}

export type CartSliceType = {
    cartItems: CartItemType[]
    total: number
}

export type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string,
    }
    phone: string,
    avatar: string,
    email: string,
    address: {
        country: string,
        city: string,
        zip: string,
        street: string,
    },
    orders: {
        id: number,
        products: {
            id: number,
            quantity: number,
        }[],
    },
    role: 'ADMIN' | 'CUSTOMER' // Role is based on i % 2
};
