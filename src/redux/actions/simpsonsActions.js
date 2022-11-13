import * as actionNames from './actionNames'

export const addCharacter = (character) =>({
     type:actionNames.ADD_CHARACTER, 
     payload:character
})

export const addCharacters = (characters) =>({
    type:actionNames.ADD_CHARACTERS, 
    payload:characters
})

export const removeCharacter = (character) =>({
    type:actionNames.REMOVE_CHARACTER, 
    payload:character
})

export const increaseCharacter = (character) =>({
    type:actionNames.INCREASE_CHARACTER_RANKING, 
    payload:character
})

export const reduceCharacter = (character) =>({
    type:actionNames.REDUCE_CHARACTER_RANKING, 
    payload:character
})