export function resizeGameImage(url: string): string {
    
    let image = url.split('/')
    let img: string;
    if(image[image.length -3] == "screenshots"){
      img = `https://media.rawg.io/media/crop/600/400/screenshots/${image[image.length - 2]}/${image[image.length - 1]}`
    }else{
      img = `https://media.rawg.io/media/crop/600/400/games/${image[image.length - 2]}/${image[image.length - 1]}`
    }

    return img;
  
  }
