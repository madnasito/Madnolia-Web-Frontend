import { Game } from "../interfaces/game/game.interface"

export function resizeGameImage(game: Game){
     let image = game.background.split('/')
      if(image[image.length -3] == "screenshots"){
        game.background = `https://media.rawg.io/media/crop/600/400/screenshots/${image[image.length - 2]}/${image[image.length - 1]}`
      }else{
        game.background = `https://media.rawg.io/media/crop/600/400/games/${image[image.length - 2]}/${image[image.length - 1]}`
      }
  }
