document.body.style.overflowX = 'hidden';

const data = [
      { name: "Home", url: "https://sigmagames69.github.io", query: "home" },
      { name: "Home", url: "https://sigmagames69.github.io", query: "back" },
      
      { name: "Minecraft", url: "minecraft", query: "minecraft" },
      { name: "Minecraft", url: "minecraft", query: "eaglercraft" },
        
      { name: "Drive Mad", url: "/drive-mad", query: "drive mad" },
      { name: "Drive Mad", url: "/drive-mad", query: "monster truck" },

      { name: "Blocky Browser", url: "/services/browser", query: "internet" },
      { name: "Blocky Browser", url: "/services/browser", query: "internet browser" },
      { name: "Blocky Browser", url: "/services/browser", query: "browser" },
      { name: "Blocky Browser", url: "/services/browser", query: "blocky browser" },

      { name: "Boxing Random", url: "/boxing-random", query: "boxing random" },
      { name: "Boxing Random", url: "/boxing-random", query: "boxing" },

      { name: "Calculator", url: "/services/calculator", query: "math" },
      { name: "Calculator", url: "/services/calculator", query: "calculator" },

      { name: "Deal or no Deal", url: "/deal-or-no-deal", query: "deal" },
      { name: "Deal or no Deal", url: "/deal-or-no-deal", query: "deal or no deal" },

      { name: "OvO", url: "/ovo", query: "ovo" },

      { name: "Angry birds", url: "/angry-birds", query: "angry birds" },

      { name: "Bad piggies", url: "/bad-piggies", query: "bad piggies" },
      { name: "Bad piggies", url: "/bad-piggies", query: "bad pigs" },
        
      { name: "Cookie clicker", url: "/cookie-clicker", query: "cookie clicker" },

      { name: "Retro Bowl", url: "/retro-bowl", query: "retro bowl" },
      { name: "Retro Bowl", url: "/retro-bowl", query: "retro bowl college" },
      { name: "Retro Bowl", url: "/retro-bowl", query: "retro bowl NFL" },
      { name: "Retro Bowl college", url: "/retro-bowl-college", query: "retro bowl" },
      { name: "Retro Bowl college", url: "/retro-bowl-college", query: "retro bowl college" },

      { name: "Snow Rider 3D", url: "/snow-rider-3d", query: "snow rider 3d" },
      { name: "Snow Rider 3D", url: "/snow-rider-3d", query: "snow rider" },

      { name: "Basket Random", url: "/basket-random", query: "basket" },
      { name: "Basket Random", url: "/basket-random", query: "basketball" },
      { name: "Basket Random", url: "/basket-random", query: "basket random" },

      { name: "Soccer Random", url: "/soccer-random", query: "soccer" },
      { name: "Soccer Random", url: "/soccer-random", query: "basketball" },
      { name: "Soccer Random", url: "/soccer-random", query: "basket random" },

      { name: "Volley Random", url: "/volley-random", query: "volley" },
      { name: "Volley Random", url: "/volley-random", query: "volleyball" },
      { name: "Volley Random", url: "/volley-random", query: "volley random" },

      { name: "Balloons TD 1", url: "/balloons-td-1", query: "balloons td" },
      { name: "Balloons TD 2", url: "/balloons-td-2", query: "balloons td" },
      { name: "Balloons TD 3", url: "/balloons-td-3", query: "balloons td" },
      { name: "Balloons TD 4", url: "/balloons-td-4", query: "balloons td" },
      { name: "Balloons TD 4 expansion", url: "/balloons-td-4e", query: "balloons td" },
      { name: "Balloons TD 5", url: "/balloons-td-5", query: "balloons td" },
      { name: "Balloons TD 1", url: "/balloons-td-1", query: "balloons td 1" },
      { name: "Balloons TD 2", url: "/balloons-td-2", query: "balloons td 2" },
      { name: "Balloons TD 3", url: "/balloons-td-3", query: "balloons td 3" },
      { name: "Balloons TD 4", url: "/balloons-td-4", query: "balloons td 4" },
      { name: "Balloons TD 4 expansion", url: "/balloons-td-4e", query: "balloons td 4 expansion" },
      { name: "Balloons TD 4 expansion", url: "/balloons-td-4e", query: "balloons td 4e" },
      { name: "Balloons TD 5", url: "/balloons-td-5", query: "balloons td 5" },
      { name: "Balloons TD 1", url: "/balloons-td-1", query: "balloons tower defense" },
      { name: "Balloons TD 2", url: "/balloons-td-2", query: "balloons tower defense" },
      { name: "Balloons TD 3", url: "/balloons-td-3", query: "balloons tower defense" },
      { name: "Balloons TD 4", url: "/balloons-td-4", query: "balloons tower defense" },
      { name: "Balloons TD 4 expansion", url: "/balloons-td-4e", query: "balloons tower defense" },
      { name: "Balloons TD 5", url: "/balloons-td-5", query: "balloons tower defense" },
      { name: "Balloons TD 1", url: "/balloons-td-1", query: "balloons tower defense 1" },
      { name: "Balloons TD 2", url: "/balloons-td-2", query: "balloons tower defense 2" },
      { name: "Balloons TD 3", url: "/balloons-td-3", query: "balloons tower defense 3" },
      { name: "Balloons TD 4", url: "/balloons-td-4", query: "balloons tower defense 4" },
      { name: "Balloons TD 4 expansion", url: "/balloons-td-4e", query: "balloons tower defense 4 expansion" },
      { name: "Balloons TD 4 expansion", url: "/balloons-td-4e", query: "balloons tower defense 4e" },
      { name: "Balloons TD 5", url: "/balloons-td-5", query: "balloons tower defense 5" },

      { name: "Duck Life 1", url: "/duck-life-1", query: "duck life" },
      { name: "Duck Life 2", url: "/duck-life-2", query: "duck life" },
      { name: "Duck Life 3", url: "/duck-life-3", query: "duck life" },
      { name: "Duck Life 4", url: "/duck-life-4", query: "duck life" },
      { name: "Duck Life 1", url: "/duck-life-1", query: "duck life 1" },
      { name: "Duck Life 2", url: "/duck-life-2", query: "duck life 2" },
      { name: "Duck Life 3", url: "/duck-life-3", query: "duck life 3" },
      { name: "Duck Life 4", url: "/duck-life-4", query: "duck life 4" },

      { name: "Super Mario bros.", url: "/super-mario", query: "mario" },
      { name: "Super Mario bros.", url: "/super-mario", query: "super mario" },
      { name: "Super Mario bros.", url: "/super-mario", query: "super mario bros" },
      { name: "Super Mario bros.", url: "/super-mario", query: "super mario brothers" },
      
      { name: "Granny", url: "/granny", query: "granny" },
        
      { name: "Moto Road Rash 3D", url: "/moto-road-rash-3d", query: "moto rush" },
      { name: "Moto Road Rash 3D", url: "/moto-road-rash-3d", query: "moto rush 3d" },
      { name: "Moto Road Rash 3D", url: "/moto-road-rash-3d", query: "moto road rash 3d" },
      { name: "Moto Road Rash 3D", url: "/moto-road-rash-3d", query: "moto road rash" },
      { name: "Moto Road Rash 3D", url: "/moto-road-rash-3d", query: "moto road rush 3d" },
      { name: "Moto Road Rash 3D", url: "/moto-road-rash-3d", query: "moto road rush" },
      { name: "Moto Road Rash 3D", url: "/moto-road-rash-3d", query: "motorcycle game" },
      { name: "Moto Road Rash 3D", url: "/moto-road-rash-3d", query: "motorcycle" },

      { name: "Temple Run 2", url: "/temple-run-2", query: "temple run" },
      { name: "Temple Run 2", url: "/temple-run-2", query: "temple run 2" },
      { name: "Temple Run 2", url: "/temple-run-2", query: "temple" },
      { name: "Temple Run 2", url: "/temple-run-2", query: "temple rush" },

      { name: "Tunnel Rush", url: "/tunnel-rush", query: "tunnel rush" },

      { name: "Subway Surfers", url: "/subway-surfers", query: "subway surfers" },
      { name: "Subway Surfers", url: "/subway-surfers", query: "subway surf" },
      { name: "Subway Surfers", url: "/subway-surfers", query: "subway surfer" },

      // audio services
      { name: "Audio Services", url: "/services", query: "audio services" },
      { name: "Audio Services", url: "/services", query: "audio" },
      { name: "Audio Services", url: "/services", query: "music services" },
      { name: "Audio Services", url: "/services", query: "music" },
      { name: "Audio Services", url: "/services", query: "audio converter" },
      { name: "Audio Service", url: "/services", query: "mp3" },
      { name: "Audio Service", url: "/services", query: "converter" },
      { name: "Audio Service", url: "/services", query: "convert" },

      { name: "Audio Service", url: "/services", query: "bass boost" },
      { name: "Audio Service", url: "/services", query: "bass booster" },
      { name: "Audio Service", url: "/services", query: "audio boost" },
      { name: "Audio Service", url: "/services", query: "audio booster" },
      { name: "Audio Service", url: "/services", query: "music boost" },
      { name: "Audio Service", url: "/services", query: "music booster" },
      { name: "Audio Service", url: "/services", query: "audio bass boost" },
      { name: "Audio Service", url: "/services", query: "audio bass booster" },
      { name: "Audio Service", url: "/services", query: "music bass boost" },
      { name: "Audio Service", url: "/services", query: "music bass booster" },
      { name: "Audio Service", url: "/services", query: "mp3 bass boost" },
      { name: "Audio Service", url: "/services", query: "mp3 bass booster" },
      { name: "Audio Service", url: "/services", query: ".mp3 bass boost" },
      { name: "Audio Service", url: "/services", query: ".mp3 bass booster" },
      { name: "Audio Service", url: "/services", query: "mpeg bass boost" },
      { name: "Audio Service", url: "/services", query: "mpeg bass booster" },
      { name: "Audio Service", url: "/services", query: "mp4 bass boost" },
      { name: "Audio Service", url: "/services", query: "mp4 bass booster" },
      { name: "Audio Service", url: "/services", query: ".mp4 bass boost" },
      { name: "Audio Service", url: "/services", query: ".mp4 bass booster" },
      { name: "Audio Service", url: "/services", query: "mpeg video bass booster" },
      { name: "Audio Service", url: "/services", query: "mpeg video bass boost" },
      { name: "Audio Service", url: "/services", query: "m4a bass boost" },
      { name: "Audio Service", url: "/services", query: "m4a bass booster" },
      { name: "Audio Service", url: "/services", query: ".m4a bass boost" },
      { name: "Audio Service", url: "/services", query: ".m4a bass booster" },

      { name: "Audio Service", url: "/services", query: "youtube" },
      { name: "Audio Service", url: "/services", query: "youtube to mp3" },
      { name: "Audio Service", url: "/services", query: "youtube download" },
      { name: "Audio Service", url: "/services", query: "yt" },
      { name: "Audio Service", url: "/services", query: "yt mp3" },
      { name: "Audio Service", url: "/services", query: "yt download" },
      { name: "Audio Service", url: "/services", query: "youtube" },

      { name: "Audio Service", url: "/services", query: "mp3 to wav" },
      { name: "Audio Service", url: "/services", query: "wav" },

      { name: "Monkey mart", url: "/monkey-mart", query: "monkey" },
      { name: "Monkey mart", url: "/monkey-mart", query: "monkey mart" },

      { name: "Paper plane", url: "/paper-plane", query: "airplane" },
      { name: "Paper plane", url: "/paper-plane", query: "plane" },
      { name: "Paper plane", url: "/paper-plane", query: "paper plane" },

      { name: "Bitlife", url: "/bitlife", query: "bitlife" },
      { name: "Bitlife", url: "/bitlife", query: "bit life" },

      { name: "We become what we behold", url: "/we-become-what-we-behold", query: "we become what we behold" },
      { name: "We become what we behold", url: "/we-become-what-we-behold", query: "you become what you behold" },

      { name: "Run 3", url: "/run3", query: "alien run" },
      { name: "Run 3", url: "/run3", query: "run 3" },

      { name: "Idle ants", url: "/idle-ants", query: "ants" },
      { name: "Idle ants", url: "/idle-ants", query: "idle ants" },

      { name: "C.a.t.s", url: "/cats", query: "cats" },
      { name: "C.a.t.s", url: "/cats", query: "cats mobile" },
      { name: "C.a.t.s", url: "/cats", query: "cats online" },
      { name: "C.a.t.s", url: "/cats", query: "cats game" },

      { name: "Stack Game", url: "/stack", query: "stack" },
      { name: "Stack Game", url: "/stack", query: "stack game" },
      { name: "Stack ball", url: "/stack", query: "stack" },
      { name: "Stack ball", url: "/stack-ball", query: "stack" },
      { name: "Stack ball", url: "/stack-ball", query: "stack ball" },

      { name: "Brain Test: Tricky Puzzles", url: "/brain-test-tricky-puzzle", query: "brain test" },        
      { name: "Brain Test: Tricky Puzzles", url: "/brain-test-tricky-puzzle", query: "brain test game" },
      { name: "Brain Test: Tricky Puzzles", url: "/brain-test-tricky-puzzle", query: "brain test puzzles" },
      { name: "Brain Test: Tricky Puzzles", url: "/brain-test-tricky-puzzle", query: "brain test tricky puzzle" },        

      { name: "Top Speed 3D", url: "/top-speed-3d", query: "top speed game" },      
      { name: "Top Speed 3D", url: "/top-speed-3d", query: "top speed" },      
      { name: "Top Speed 3D", url: "/top-speed-3d", query: "top speed 3d" },

      { name: "Gladihoppers", url: "/gladihoppers", query: "gladihoppers" },   
      { name: "Gladihoppers", url: "/gladihoppers", query: "gladehoppers" },   
      { name: "Gladihoppers", url: "/gladihoppers", query: "gladiator game" },   

      { name: "Water color sort", url: "/water-color-sort", query: "water seperating" },
      { name: "Water color sort", url: "/water-color-sort", query: "water seperate" },
      { name: "Water color sort", url: "/water-color-sort", query: "water sort" },
      { name: "Water color sort", url: "/water-color-sort", query: "water color sort" },

      { name: "Drift Hunters", url: "/drift-hunters", query: "drift hunters" },
    ];
