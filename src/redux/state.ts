



export type DialogsDataPropsType = {
    id: number
    name: string
}
export type MessagesDataPropsType = {
    id: number
    message: string
}
export type PostsDataPropsType = {
    id: number
    message: string
    likesCount: number
}


let state = {

    profilePage: {posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 20},
            {id: 2, message: "It's my first post", likesCount: 20},
        ],
        dialogs: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Alexander'},
            {id: 4, name: 'Nikolay'},
        ],},

    messagesPage: {messages:[
        {id: 1, message: 'hi'},
        {id: 2, message: 'yo'},
        {id: 3, message: 'hello world'},
        {id: 4, message: 'hello world'},
    ]}
};

export default state;