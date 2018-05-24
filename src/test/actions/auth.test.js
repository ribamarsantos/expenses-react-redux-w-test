import {
    login,
    logout
} from '../../actions/auth'
import configMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { firebase, googleAuthProvider } from '../../firebase/firebase'
const createMockStore = configMockStore([thunk])

test('should generate login action object', () => {
    const uid = '123qwe'
    const action = login(uid)
    expect(action).toEqual({
        type:'LOGIN',
        uid
    })
})


test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})