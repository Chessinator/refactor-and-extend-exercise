import Companies from './Companies.js'
import {
    ADD_COMPANY,
    REMOVE_COMPANY,
    UPDATE_COMPANY
} from '../../actions/Companies/Companies.js'


describe('companies', () => {

    it('initializes with an empty state and returns it for an undefined action', () => {
        expect( Companies(undefined, undefined) ).toEqual( [] );
    });

    it('adds empty companies with default values', () => {
        const resultCompanies = Companies(
            undefined,
            {
                type: ADD_COMPANY,
                payload: {}
            }
        )
        const company = resultCompanies[0];
        expect(company.id).toEqual(0)
        expect(company.name).toEqual("")
        expect(company.adress).toEqual("")
        expect(company.VATNumber).toEqual("")
        expect(company.email).toEqual("")
    });

    it('adds valid companies', () => {
        const resultCompanies = Companies(
            undefined,
            {
                type: ADD_COMPANY,
                payload: { company: {
                    id: 9001,
                    name: "Volkswagen",
                    adress: "Volkswagenstraße, 12345 Wolfsburg",
                    VATNumber: "VW",
                    email: "vw@volkswagen.de"
                }}
            }
        )
        const company = resultCompanies[0];
        expect(company.id).toEqual(9001)
        expect(company.name).toEqual("Volkswagen")
        expect(company.adress).toEqual("Volkswagenstraße, 12345 Wolfsburg")
        expect(company.VATNumber).toEqual("VW")
        expect(company.email).toEqual("vw@volkswagen.de")
    });

    it('removes nothing for invalid company removal', () => {
        const resultCompanies = Companies(
            [{
                id: 9001,
                name: "Volkswagen",
                adress: "Volkswagenstraße, 12345 Wolfsburg",
                VATNumber: "VW",
                email: "vw@volkswagen.de"
            }],
            { type: REMOVE_COMPANY, payload: { company: {} } }
        );
        const company = resultCompanies[0];
        expect(company.id).toEqual(9001)
        expect(company.name).toEqual("Volkswagen")
        expect(company.adress).toEqual("Volkswagenstraße, 12345 Wolfsburg")
        expect(company.VATNumber).toEqual("VW")
        expect(company.email).toEqual("vw@volkswagen.de")
    });

    it('removes companpanies by id', () => {
        const resultCompanies = Companies(
            [{
                id: 9001,
                name: "Volkswagen",
                adress: "Volkswagenstraße, 12345 Wolfsburg",
                VATNumber: "VW",
                email: "vw@volkswagen.de"
            }],
            { type: REMOVE_COMPANY, payload: { company: { id: 9001 } } }
        );
        expect(resultCompanies).toEqual([])
    });

    it('updates companies by id', () => {
        const resultCompanies = Companies(
            [{
                id: 9001,
                name: "Volkswagen",
                adress: "Volkswagenstraße, 12345 Wolfsburg",
                VATNumber: "VW",
                email: "vw@volkswagen.de"
            }],
            { type: UPDATE_COMPANY, payload: { company: {
                id: 9001,
                email: "volkswagen@volkswagen.de"
            } } }
        );
        const company = resultCompanies[0];
        expect(company.id).toEqual(9001)
        expect(company.name).toEqual("Volkswagen")
        expect(company.adress).toEqual("Volkswagenstraße, 12345 Wolfsburg")
        expect(company.VATNumber).toEqual("VW")
        expect(company.email).toEqual("volkswagen@volkswagen.de")
    });

    it('updates with no change for an invalid company id', () => {
        const resultCompanies = Companies(
            [{
                id: 9001,
                name: "Volkswagen",
                adress: "Volkswagenstraße, 12345 Wolfsburg",
                VATNumber: "VW",
                email: "vw@volkswagen.de"
            }],
            { type: UPDATE_COMPANY, payload: { company: {
                id: 100_000,
                email: "volkswagen@volkswagen.de"
            } } }
        );
        const company = resultCompanies[0];
        expect(company.id).toEqual(9001)
        expect(company.name).toEqual("Volkswagen")
        expect(company.adress).toEqual("Volkswagenstraße, 12345 Wolfsburg")
        expect(company.VATNumber).toEqual("VW")
        expect(company.email).toEqual("vw@volkswagen.de")
    });
});