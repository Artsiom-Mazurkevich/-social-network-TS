import {addPostAC, deletePost, profileReducer} from "./profile-reducer";
import {v1} from "uuid";


it('new post should be added', () => {
    let action = addPostAC('IT-INC')
    let state = {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 20},
            {id: v1(), message: "It's my first post", likesCount: 20},
        ],
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 0,
            photos: {
                large: '',
                small: ''
            }
        },
        status: ''
    }
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3)
})


it('after deleting length of messages should be decrement', () => {

    let state = {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 20},
            {id: v1(), message: "It's my first post", likesCount: 20},
        ],
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 0,
            photos: {
                large: '',
                small: ''
            }
        },
        status: ''
    }
    let action = deletePost(state.posts[0].id)
    let newState = profileReducer(state, action);
    expect(newState.posts[0].message).toBe("It's my first post")
})