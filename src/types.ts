/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export interface ExistingUser {
  email: string
  name: string,
  surname: string,
  passwordHash: string,
  cards: Array<string>,
  decks: Array<string>,
}

export interface NewUser {
  email: string,
  name: string,
  surname: string,
  password: string,
}

export interface UpdatedUser {
  email: string,
  name: string,
  surname: string,
  currentPassword: string,
  newPassword: string,
}

export interface UserCredential {
  email: string,
  password: string,
}

export interface ExistingDeck {
  title: string,
  creationDate: Date,
  cards: Array<string>,
  user: string,
}

export interface ExistingCard {
  front: string,
  back: string,
  level: number,
  creationDate: Date,
  checkpointDate: Date,
}

export interface NewCard {
  deckId: string,
  front: string,
  back: string,
  level: number,
}

export enum Level {
  zero = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}
