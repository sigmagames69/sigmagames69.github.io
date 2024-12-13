document.body.style.overflowX = 'hidden';

const data = [
      { name: "Sigma games", url: "/.https://sigmagames69.github.io/index.html", query: "home" },
      { name: "Sigma games", url: "/.https://sigmagames69.github.io/index.html", query: "sigma games" },
        
      { name: "Drive Mad", url: "/./drive-mad/index.html", query: "drive mad" },
      { name: "Drive Mad", url: "/./drive-mad/index.html", query: "monster truck" },

      { name: "Blocky Browser", url: "/./services/browser/index.html", query: "internet" },
      { name: "Blocky Browser", url: "/./services/browser/index.html", query: "internet browser" },
      { name: "Blocky Browser", url: "/./services/browser/index.html", query: "browser" },
      { name: "Blocky Browser", url: "/./services/browser/index.html", query: "blocky browser" },

      { name: "Boxing Random", url: "/./boxing-random/index.html", query: "boxing random" },
      { name: "Boxing Random", url: "/./boxing-random/index.html", query: "boxing" },

      { name: "Calculator", url: "/./services/calculator/index.html", query: "math" },
      { name: "Calculator", url: "/./services/calculator/index.html", query: "calculator" },

      { name: "Deal or no Deal", url: "/./deal-or-no-deal/index.html", query: "deal" },
      { name: "Deal or no Deal", url: "/./deal-or-no-deal/index.html", query: "deal or no deal" },

      { name: "OvO", url: "/./ovo/index.html", query: "ovo" },

      { name: "Angry birds", url: "/./angry-birds/index.html", query: "angry birds" },

      { name: "Bad piggies", url: "/./bad-piggies/index.html", query: "bad piggies" },
      { name: "Bad piggies", url: "/./bad-piggies/index.html", query: "bad pigs" },
        
      { name: "Cookie clicker", url: "/./cookie-clicker/index.html", query: "cookie clicker" },

      { name: "Retro Bowl", url: "/./retro-bowl/index.html", query: "retro bowl" },
      { name: "Retro Bowl", url: "/./retro-bowl/index.html", query: "retro bowl college" },
      { name: "Retro Bowl", url: "/./retro-bowl/index.html", query: "retro bowl NFL" },
      { name: "Retro Bowl college", url: "/./retro-bowl-college/index.html", query: "retro bowl" },
      { name: "Retro Bowl college", url: "/./retro-bowl-college/index.html", query: "retro bowl college" },

      { name: "Snow Rider 3D", url: "/./snow-rider-3d/index.html", query: "snow rider 3d" },
      { name: "Snow Rider 3D", url: "/./snow-rider-3d/index.html", query: "snow rider" },

      { name: "Basket Random", url: "/./basket-random/index.html", query: "basket" },
      { name: "Basket Random", url: "/./basket-random/index.html", query: "basketball" },
      { name: "Basket Random", url: "/./basket-random/index.html", query: "basket random" },

      { name: "Soccer Random", url: "/./soccer-random/index.html", query: "soccer" },
      { name: "Soccer Random", url: "/./soccer-random/index.html", query: "basketball" },
      { name: "Soccer Random", url: "/./soccer-random/index.html", query: "basket random" },

      { name: "Volley Random", url: "/./volley-random/index.html", query: "volley" },
      { name: "Volley Random", url: "/./volley-random/index.html", query: "volleyball" },
      { name: "Volley Random", url: "/./volley-random/index.html", query: "volley random" },

      { name: "Balloons TD 1", url: "/./balloons-td-1/index.html", query: "balloons td" },
      { name: "Balloons TD 2", url: "/./balloons-td-2/index.html", query: "balloons td" },
      { name: "Balloons TD 3", url: "/./balloons-td-3/index.html", query: "balloons td" },
      { name: "Balloons TD 4", url: "/./balloons-td-4/index.html", query: "balloons td" },
      { name: "Balloons TD 4 expansion", url: "/./balloons-td-4e/index.html", query: "balloons td" },
      { name: "Balloons TD 5", url: "/./balloons-td-5/index.html", query: "balloons td" },
      { name: "Balloons TD 1", url: "/./balloons-td-1/index.html", query: "balloons td 1" },
      { name: "Balloons TD 2", url: "/./balloons-td-2/index.html", query: "balloons td 2" },
      { name: "Balloons TD 3", url: "/./balloons-td-3/index.html", query: "balloons td 3" },
      { name: "Balloons TD 4", url: "/./balloons-td-4/index.html", query: "balloons td 4" },
      { name: "Balloons TD 4 expansion", url: "/./balloons-td-4e/index.html", query: "balloons td 4 expansion" },
      { name: "Balloons TD 4 expansion", url: "/./balloons-td-4e/index.html", query: "balloons td 4e" },
      { name: "Balloons TD 5", url: "/./balloons-td-5/index.html", query: "balloons td 5" },
      { name: "Balloons TD 1", url: "/./balloons-td-1/index.html", query: "balloons tower defense" },
      { name: "Balloons TD 2", url: "/./balloons-td-2/index.html", query: "balloons tower defense" },
      { name: "Balloons TD 3", url: "/./balloons-td-3/index.html", query: "balloons tower defense" },
      { name: "Balloons TD 4", url: "/./balloons-td-4/index.html", query: "balloons tower defense" },
      { name: "Balloons TD 4 expansion", url: "/./balloons-td-4e/index.html", query: "balloons tower defense" },
      { name: "Balloons TD 5", url: "/./balloons-td-5/index.html", query: "balloons tower defense" },
      { name: "Balloons TD 1", url: "/./balloons-td-1/index.html", query: "balloons tower defense 1" },
      { name: "Balloons TD 2", url: "/./balloons-td-2/index.html", query: "balloons tower defense 2" },
      { name: "Balloons TD 3", url: "/./balloons-td-3/index.html", query: "balloons tower defense 3" },
      { name: "Balloons TD 4", url: "/./balloons-td-4/index.html", query: "balloons tower defense 4" },
      { name: "Balloons TD 4 expansion", url: "/./balloons-td-4e/index.html", query: "balloons tower defense 4 expansion" },
      { name: "Balloons TD 4 expansion", url: "/./balloons-td-4e/index.html", query: "balloons tower defense 4e" },
      { name: "Balloons TD 5", url: "/./balloons-td-5/index.html", query: "balloons tower defense 5" },

      { name: "Duck Life 1", url: "/./duck-life-1/index.html", query: "duck life" },
      { name: "Duck Life 2", url: "/./duck-life-2/index.html", query: "duck life" },
      { name: "Duck Life 3", url: "/./duck-life-3/index.html", query: "duck life" },
      { name: "Duck Life 4", url: "/./duck-life-4/index.html", query: "duck life" },
      { name: "Duck Life 1", url: "/./duck-life-1/index.html", query: "duck life 1" },
      { name: "Duck Life 2", url: "/./duck-life-2/index.html", query: "duck life 2" },
      { name: "Duck Life 3", url: "/./duck-life-3/index.html", query: "duck life 3" },
      { name: "Duck Life 4", url: "/./duck-life-4/index.html", query: "duck life 4" },

      { name: "Super Mario bros.", url: "/./super-mario/index.html", query: "mario" },
      { name: "Super Mario bros.", url: "/./super-mario/index.html", query: "super mario" },
      { name: "Super Mario bros.", url: "/./super-mario/index.html", query: "super mario bros" },
      { name: "Super Mario bros.", url: "/./super-mario/index.html", query: "super mario brothers" },
      
      { name: "Granny", url: "/./granny/index.html", query: "granny" },
        
      { name: "Moto Road Rash 3D", url: "/./moto-road-rash-3d/index.html", query: "moto rush" },
      { name: "Moto Road Rash 3D", url: "/./moto-road-rash-3d/index.html", query: "moto rush 3d" },
      { name: "Moto Road Rash 3D", url: "/./moto-road-rash-3d/index.html", query: "moto road rash 3d" },
      { name: "Moto Road Rash 3D", url: "/./moto-road-rash-3d/index.html", query: "moto road rash" },
      { name: "Moto Road Rash 3D", url: "/./moto-road-rash-3d/index.html", query: "moto road rush 3d" },
      { name: "Moto Road Rash 3D", url: "/./moto-road-rash-3d/index.html", query: "moto road rush" },
      { name: "Moto Road Rash 3D", url: "/./moto-road-rash-3d/index.html", query: "motorcycle game" },
      { name: "Moto Road Rash 3D", url: "/./moto-road-rash-3d/index.html", query: "motorcycle" },

      { name: "Temple Run 2", url: "/./temple-run-2/index.html", query: "temple run" },
      { name: "Temple Run 2", url: "/./temple-run-2/index.html", query: "temple run 2" },
      { name: "Temple Run 2", url: "/./temple-run-2/index.html", query: "temple" },
      { name: "Temple Run 2", url: "/./temple-run-2/index.html", query: "temple rush" },

      { name: "Tunnel Rush", url: "/./tunnel-rush/index.html", query: "tunnel rush" },

      { name: "Subway Surfers", url: "/./subway-surfers/index.html", query: "subway surfers" },
      { name: "Subway Surfers", url: "/./subway-surfers/index.html", query: "subway surf" },
      { name: "Subway Surfers", url: "/./subway-surfers/index.html", query: "subway surfer" },

      // audio services
      { name: "Audio Services", url: "/./services/index.html", query: "audio services" },
      { name: "Audio Services", url: "/./services/index.html", query: "audio" },
      { name: "Audio Services", url: "/./services/index.html", query: "music services" },
      { name: "Audio Services", url: "/./services/index.html", query: "music" },
      { name: "Audio Services", url: "/./services/index.html", query: "audio converter" },
      { name: "Audio Service", url: "/./services/index.html", query: "mp3" },
      { name: "Audio Service", url: "/./services/index.html", query: "converter" },
      { name: "Audio Service", url: "/./services/index.html", query: "convert" },

      { name: "Audio Service", url: "/./services/index.html", query: "bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: "bass booster" },
      { name: "Audio Service", url: "/./services/index.html", query: "audio boost" },
      { name: "Audio Service", url: "/./services/index.html", query: "audio booster" },
      { name: "Audio Service", url: "/./services/index.html", query: "music boost" },
      { name: "Audio Service", url: "/./services/index.html", query: "music booster" },
      { name: "Audio Service", url: "/./services/index.html", query: "audio bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: "audio bass booster" },
      { name: "Audio Service", url: "/./services/index.html", query: "music bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: "music bass booster" },
      { name: "Audio Service", url: "/./services/index.html", query: "mp3 bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: "mp3 bass booster" },
      { name: "Audio Service", url: "/./services/index.html", query: ".mp3 bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: ".mp3 bass booster" },
      { name: "Audio Service", url: "/./services/index.html", query: "mpeg bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: "mpeg bass booster" },
      { name: "Audio Service", url: "/./services/index.html", query: "mp4 bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: "mp4 bass booster" },
      { name: "Audio Service", url: "/./services/index.html", query: ".mp4 bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: ".mp4 bass booster" },
      { name: "Audio Service", url: "/./services/index.html", query: "mpeg video bass booster" },
      { name: "Audio Service", url: "/./services/index.html", query: "mpeg video bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: "m4a bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: "m4a bass booster" },
      { name: "Audio Service", url: "/./services/index.html", query: ".m4a bass boost" },
      { name: "Audio Service", url: "/./services/index.html", query: ".m4a bass booster" },

      { name: "Audio Service", url: "/./services/index.html", query: "youtube" },
      { name: "Audio Service", url: "/./services/index.html", query: "youtube to mp3" },
      { name: "Audio Service", url: "/./services/index.html", query: "youtube download" },
      { name: "Audio Service", url: "/./services/index.html", query: "yt" },
      { name: "Audio Service", url: "/./services/index.html", query: "yt mp3" },
      { name: "Audio Service", url: "/./services/index.html", query: "yt download" },
      { name: "Audio Service", url: "/./services/index.html", query: "youtube" },

      { name: "Audio Service", url: "/./services/index.html", query: "mp3 to wav" },
      { name: "Audio Service", url: "/./services/index.html", query: "wav" },

      { name: "Monkey mart", url: "/./monkey-mart/index.html", query: "monkey" },
      { name: "Monkey mart", url: "/./monkey-mart/index.html", query: "monkey mart" },

      { name: "Paper plane", url: "/./paper-plane/index.html", query: "airplane" },
      { name: "Paper plane", url: "/./paper-plane/index.html", query: "plane" },
      { name: "Paper plane", url: "/./paper-plane/index.html", query: "paper plane" },

      { name: "Bitlife", url: "/./bitlife/index.html", query: "bitlife" },
      { name: "Bitlife", url: "/./bitlife/index.html", query: "bit life" },

      { name: "We become what we behold", url: "/./we-become-what-we-behold/index.html", query: "we become what we behold" },
      { name: "We become what we behold", url: "/./we-become-what-we-behold/index.html", query: "you become what you behold" },

      { name: "Run 3", url: "/./run3/index.html", query: "alien run" },
      { name: "Run 3", url: "/./run3/index.html", query: "run 3" },

      { name: "Idle ants", url: "/./idle-ants/index.html", query: "ants" },
      { name: "Idle ants", url: "/./idle-ants/index.html", query: "idle ants" },

      { name: "C.a.t.s", url: "/./cats/index.html", query: "cats" },
      { name: "C.a.t.s", url: "/./cats/index.html", query: "cats mobile" },
      { name: "C.a.t.s", url: "/./cats/index.html", query: "cats online" },
      { name: "C.a.t.s", url: "/./cats/index.html", query: "cats game" },

      { name: "Stack Game", url: "/./stack/index.html", query: "stack" },
      { name: "Stack Game", url: "/./stack/index.html", query: "stack game" },
      { name: "Stack ball", url: "/./stack/index.html", query: "stack" },
      { name: "Stack ball", url: "/./stack-ball/index.html", query: "stack" },
      { name: "Stack ball", url: "/./stack-ball/index.html", query: "stack ball" },

      { name: "Brain Test: Tricky Puzzles", url: "/./brain-test-tricky-puzzle/index.html", query: "brain test" },        
      { name: "Brain Test: Tricky Puzzles", url: "/./brain-test-tricky-puzzle/index.html", query: "brain test game" },
      { name: "Brain Test: Tricky Puzzles", url: "/./brain-test-tricky-puzzle/index.html", query: "brain test puzzles" },
      { name: "Brain Test: Tricky Puzzles", url: "/./brain-test-tricky-puzzle/index.html", query: "brain test tricky puzzle" },        

      { name: "Top Speed 3D", url: "/./top-speed-3d/index.html", query: "top speed game" },      
      { name: "Top Speed 3D", url: "/./top-speed-3d/index.html", query: "top speed" },      
      { name: "Top Speed 3D", url: "/./top-speed-3d/index.html", query: "top speed 3d" },

      { name: "Gladihoppers", url: "/./gladihoppers/index.html", query: "gladihoppers" },   
      { name: "Gladihoppers", url: "/./gladihoppers/index.html", query: "gladehoppers" },   
      { name: "Gladihoppers", url: "/./gladihoppers/index.html", query: "gladiator game" },   

      { name: "Water color sort", url: "/./water-color-sort/index.html", query: "water seperating" },
      { name: "Water color sort", url: "/./water-color-sort/index.html", query: "water seperate" },
      { name: "Water color sort", url: "/./water-color-sort/index.html", query: "water sort" },
      { name: "Water color sort", url: "/./water-color-sort/index.html", query: "water color sort" },

      { name: "Drift Hunters", url: "/./drift-hunters/index.html", query: "drift hunters" },
    ];
