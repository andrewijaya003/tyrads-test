export interface item {
    id: Number
    name: String 
}

export interface user {
    id: Number
    name: String 
    image?: String
}

export interface message {
    id: Number
    message: String
    sender: user
    reciever: user
}

export interface transaction {
    id: Number
    user: user
    date: Date
    price: Number
}

export interface spend {
    id: Number
    user: user
    name: String
    date: Date
}