import * as actionNames from '../actions/actionNames'

const simpsonsReducer = (state=[],action) =>{
    switch (action.type) {

        case actionNames.ADD_CHARACTER: 
            state = [...state,action.payload]
            console.log("yeni state",state)
            return state;
        
        case actionNames.ADD_CHARACTERS: 
        return action.payload

        case actionNames.REMOVE_CHARACTER:
            console.log('remove a geldi')
            console.log("itemId", action.payload.item.id)
            state= state.filter((item)=>item.id !== action.payload.item.id)
            console.log("removeItem",state)
            return state;

        case actionNames.INCREASE_CHARACTER_RANKING:
          
            const indexI  = action.payload.index;
            const copyI=[...state]
            const tempI = copyI;
            const copyItem1 = copyI[indexI-1]
            const copyItem2 =copyI[indexI]
            tempI[indexI]=copyItem1
            tempI[indexI-1]=copyItem2
            return tempI;

        case actionNames.REDUCE_CHARACTER_RANKING:
            const indexR  = action.payload.index;
            const copyR=[...state]
            const tempR = copyR;
            const copyItemR1 = copyR[indexR]
            const copyItemR2 =copyR[indexR+1]
            tempR[indexR]=copyItemR2
            tempR[indexR+1]=copyItemR1
            return tempR;
    
        default: return state;
    }
}

export default simpsonsReducer;