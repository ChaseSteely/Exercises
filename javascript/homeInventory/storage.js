// Example objects
const vintageInkwell = {
    "name": "Vintage Ink Well",
    "type": "crafts",
    "location": "Writing desk",
    "description": "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }
  
  const writingDesk = {
    "name": "Shaker Writing Desk",
    "type": "furniture",
    "location": "Bedroom",
    "description": "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

const television = {
    "name": "Viso HDTV",
    "type": "electronics",
    "location": "Living Room",
    "description": "My sweet smart tv"
  }
  
  const playstation = {
    "name": "Playstation 4",
    "type": "electronics",
    "location": "Living Room",
    "description": "This playstion is used to watch Blu-Ray movies. I do not own a video game."
  }

  const bookshelf = {
    "name": "Bookshelf",
    "type": "furniture",
    "location": "office",
    "description": "I built this bookshelf with my bare hands"
  }
  
  const fountainPen = {
    "name": "Fountain Pen",
    "type": "crafts",
    "location": "Writing desk",
    "description": "Writing with this pen is like writing with a live octopus."
  }

  const roku = {
    "name": "Roku Streaming Stick",
    "type": "electronics",
    "location": "Living Room",
    "description": "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }
  
  const deskChair = {
    "name": "Ergonomic 3000 Desk Chair",
    "type": "furniture",
    "location": "Office",
    "description": "This super-futuristic desk chair is the most advanced chair ever."
  }

  const ink = {
    "name": "Vintage Ink",
    "type": "crafts",
    "location": "Writing desk",
    "description": "I enjoy this ink because I traveled to far off lands to harvest it from ancient ink trees."
  }
  
  const beerFridge = {
    "name": "Beer Refrigerator",
    "type": "electronics",
    "location": "office",
    "description": "This beer fridge magically stocks itself with the most rare craft beers."
  }

  // Example arrays
let crafts = []
let furniture = []
let electronics = []

crafts.push(vintageInkwell, fountainPen, ink)
furniture.push(writingDesk, bookshelf, deskChair)
electronics.push(television, playstation, roku, beerFridge)

// Example database
let HomeInventory = {
    "furniture": furniture,
    "crafts": crafts,
    "electronics": electronics
  }

  const homeInventoryString = JSON.stringify(HomeInventory)
  localStorage.setItem("homeInventory", homeInventoryString)
