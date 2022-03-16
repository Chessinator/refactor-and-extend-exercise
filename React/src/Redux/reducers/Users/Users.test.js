import Users from './Users.js'
import {
    ADD_USER,
    REMOVE_USER,
    UPDATE_USER
} from '../../actions/Users/Users.js'

describe('users', () => {

    it('initializes with an empty state and returns it for an undefined action', () => {
        expect( Users(undefined, undefined) )
        .toEqual( [] );
    });

    it('adds empty user with empty firstname, lastname and email', () => {
        const resultUsers = Users(
            undefined,
            {
                type: ADD_USER,
                payload: {}
            }
        );
        expect(resultUsers.length)
        .toBe(1);
        
        const user = resultUsers[0];
        expect(user.id).toEqual(0);
        expect(user.firstName).toEqual("");
        expect(user.lastName).toEqual("");
        expect(user.email).toEqual("");
    });

    it('adds valid users', () => {
        const resultUsers = Users(
            undefined,
            {
                type: ADD_USER,
                payload: { user: {
                    firstName: "Hans",
                    lastName: "Meiser",
                    email: "hans@meiser.de"
                }}
            }
        );
        const user = resultUsers[0];
        expect(user.id).toEqual(0);
        expect(user.firstName).toEqual("Hans");
        expect(user.lastName).toEqual("Meiser");
        expect(user.email).toEqual("hans@meiser.de");
    });

    it('removes nothing for invalid user removal', () => {
        const resultUsers = Users(
            [{
                id: 0,
                firstName: "Hans",
                lastName: "Meiser",
                email: "hans@meiser.de"
            }],
            {
                type: REMOVE_USER,
                payload: { user: {
                    id: -1
                }}
            }
        )
        const user = resultUsers[0];
        expect(user.id).toEqual(0);
        expect(user.firstName).toEqual("Hans");
        expect(user.lastName).toEqual("Meiser");
        expect(user.email).toEqual("hans@meiser.de");
    });

    it('removes user by id', () => {
        const resultUsers = Users(
            [{
                id: 0,
                firstName: "Hans",
                lastName: "Meiser",
                email: "hans@meiser.de"
            }],
            {
                type: REMOVE_USER,
                payload: { user: {
                    id: 0
                }}
            }
        )
        expect(resultUsers)
        .toEqual([]);
    });

    it('updates a user by id', () => {
        const resultUsers = Users(
            [{
                id: 0,
                firstName: "Hans",
                lastName: "Meiser",
                email: "hans@meiser.de"
            }],
            {
                type: UPDATE_USER,
                payload: { user: {
                    id: 0,
                    email: "hans@meiser.org"
                }}
            }
        )
        const user = resultUsers[0];
        expect(user.id).toEqual(0);
        expect(user.firstName).toEqual("Hans");
        expect(user.lastName).toEqual("Meiser");
        expect(user.email).toEqual("hans@meiser.org");
    });
});