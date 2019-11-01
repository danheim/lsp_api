const { gql } = require('apollo-server-express');

module.exports = gql`
    type Query {
        authUser: Account
        getAccount(id: ID!): Account
        getChar(id: ID!): Char
    }
    
    type Mutation {
        signIn(
            login: String!
            password: String!
        ): Account
    }

    type Account {
        chars: [Char]
        candidates: [Candidate]
        name: String
        token: String
        password: String
        email: String
        datereg: String
        lastseen: String
    }
    
    type Candidate {
        login: String
        password: String
        age: Int
        skin: Int
        sex: Int
        race: Int
        national: Int
        summary: String
        firstsit: String
        secondsit: String
    }

    type Char {
        account: Account!
        activeslot: Activeslot
        vehicles: [Vehicle]
        bankcard: Bankcard
        charinv: Charinv
        enterlogs: [Enterlog]
        login: String
        password: String
        loginw: String
        premium: Int
        premiumunix: Int
        settings: String
        salarybank: Int
        uberinfo: String
        uberban: Int
        uberbanreason: String
        houselog: String
        resmoney: Int
        unixpermit: Int
        number: String
        paydaytime: Int
        vehlicense: Int
        vehunixlicstop: Int
        vehlicunix: Int
        leader: Int
        cleader: Int
        faction: Int
        cfaction: Int
        cash: Int
        bankmoney: Int
        sex: Int
        race: Int
        x: Float
        y: Float
        z: Float
        r: Float
        vw: Int
        interrior: Int
        spawn: Int
        lastip: String
        health: Float
        dead: Int
        muted: Int
        salarytime: Int
        channel: Int
        slot: Int
        admact: Int
        fc: Int
        chatanim: Int
        su: Int
        sureason: String
        warning: String
        warningreason: String
        unixwarning: String
        ticket: String
        ticketreason: String
        unixticket: String
        flymode: Int
        pblacklist: String
        jailtime: Int
        mutetime: Int
    }
    
    type Activeslot {
        user: Int
        items: String
        counts: String
    }
    
    type Vehicle {
        model: Int
        unixcreate: Int
        mileage: Float
        damage: String
        health: Float
        plate: String
        ownerid: Int
        faction: Int
        cfaction: Int
        work: Int
        locked: Int
        trunklocked: Int
        color1: Int
        color2: Int
        siren: Int
        fuel: Float
        x: Float
        y: Float
        r: Float
        z: Float
        vw: Int
        interior: Int
        su: Int
        sureason: String
    }
    
    type Bankcard {
        cardnumber: Int
        money: Int
        ownerid: Int
        pincode: Int
    }

    type Charinv {
        user: Int
        items: String
        counts: String
    }
    
    type Enterlog {
        user: Int
        ip: String
        type: Int
        date: String
    }
`;
