const { gql } = require('apollo-server-express');

module.exports = gql`
    type Query {
        getAccount(id: ID!): Account
        getChar(id: ID!): Char
        signIn(
            name: String!
            password: String!
        ): Account
    }

    type Account {
        chars: [Char!]
        name: String
        token: String
        password: String
        email: String
        datereg: String
        lastseen: String
    }

    type Char {
        account: Account!
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
    }
`;
