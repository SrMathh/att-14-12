export  {};

declare global {

    module '*.png'
    module '*.jpg'

    type PokemonType = {
    type: {
        name: string,
        uri: string
    }
    }

    type Pokemon = {
    name: string,
    url: string,    
    }
}