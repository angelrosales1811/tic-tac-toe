export const saveGameToStorage = ({board, turn}) =>{
     // guardar aqui la partida
     window.localStorage.setItem('board', JSON.stringify(board))
     window.localStorage.setItem('turn', turn)
}

export const resetGameToStorage = () =>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}