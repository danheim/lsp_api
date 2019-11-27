const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    authUser: Account
    getAccount(id: ID!): Account
    getChar(id: ID!): Char
    getQuestions: [Question]
  }
  
  type Mutation {
    signIn(
      login: String!
      password: String!
    ): Account
  }

  type Account {
    id: Int
    chars: [Char]
    candidates: [Candidate]
    admin: Admin
    login: String
    token: String
    email: String
    datereg: String
    lastseen: String
  }
  
  type Candidate {
    id: Int
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
    id: Int
    account: Account!
    activeslot: Activeslot
    vehicles: [Vehicle]
    bankcard: Bankcard
    charinv: Charinv
    enterlogs: [Enterlog]
    warns: [Warn]
    login: String
#   password: String
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
    id: Int
    user: Int
    items: String
    counts: String
  }
  
  type Vehicle {
    id: Int
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
    id: Int
    cardnumber: Int
    money: Int
    ownerid: Int
    pincode: Int
  }

  type Charinv {
    id: Int
    user: Int
    items: String
    counts: String
  }
  
  type Enterlog {
    id: Int
    user: Int
    ip: String
    type: Int
    date: String
  }

  type Admin {
    id: Int
    account: Int
    pass: String
    rank: Int
    rname: String
    lastip: String
  }
  
  type Warn {
    id: Int
    character: Int
    admin: Int
    reason: String
    status: Int
  }
  
  type Question {
    id: Int
    text: String
    answers: [Answer]
  }
  
  type Answer {
    id: Int
    questionId: Int
    text: String
    valid: Boolean
  }
`;
