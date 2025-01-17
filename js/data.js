//---
var DATA = {
    //---
    categories:[ 'mission','energy','machine','storage','tech' ],
    //---
    scenarios:[
        //---
        {   id:'fto1', img:'img/fto1/', label:'fto1-', victoryReqs:{ 'mission-satellite':1 },
            //---
            items:[
                
                // Missions
                //---
                { id:'mission-furnace',             cat:'mission',  recipeId:'mission-furnace',             max:1,      hasUnlocks:true, toComplete:true, desc:true },
                { id:'mission-assembler',           cat:'mission',  recipeId:'mission-assembler',           max:1,      hasUnlocks:true, toComplete:true, desc:true },
                { id:'mission-lab',                 cat:'mission',  recipeId:'mission-lab',                 max:1,      hasUnlocks:true, toComplete:true, desc:true },
                { id:'mission-car',                 cat:'mission',  recipeId:'mission-car',                 max:1,      hasUnlocks:true, toComplete:true, desc:true },
                { id:'mission-train',               cat:'mission',  recipeId:'mission-train',               max:1,      hasUnlocks:true, toComplete:true, desc:true },
                { id:'mission-defense',             cat:'mission',  recipeId:'mission-defense',             max:1,      hasUnlocks:true, toComplete:true, desc:true },
                { id:'mission-equipment',           cat:'mission',  recipeId:'mission-equipment',           max:1,      hasUnlocks:true, toComplete:true, desc:true },
                { id:'mission-spidertron',          cat:'mission',  recipeId:'mission-spidertron',          max:1,      hasUnlocks:true, toComplete:true, desc:true },
                { id:'mission-rocket',              cat:'mission',  recipeId:'mission-rocket',              max:100,    hasUnlocks:true, toComplete:true, desc:true },
                { id:'mission-satellite',           cat:'mission',  recipeId:'mission-satellite',           max:1,      hasUnlocks:true, toComplete:true, desc:true },
                
                // Energy
                //---
                { id:'electricity',                 cat:'energy',   recipeId:'electricity'                  },
                { id:'steam',                       cat:'energy',   recipeId:'steam'                        },
                { id:'energy-water',                cat:'energy',   recipeId:'energy-water'                 },
                { id:'energy-coal',                 cat:'energy',   recipeId:'energy-coal'                  },
                
                // Machines
                //---
                { id:'manual',                      cat:'machine',  recipeId:'manual',                                  count:1,    },
                { id:'furnace',                     cat:'machine',  recipeId:'furnace',                     desc:true,  count:1,    energies:{ 'energy-coal':-0.0225 } },
                { id:'miner',                       cat:'machine',  recipeId:'miner',                       desc:true,  count:1,    energies:{ 'energy-coal':-0.15 } },
                { id:'miner-coal',                  cat:'machine',  recipeId:'miner-coal',                  desc:true,  count:1,    energies:{ 'energy-coal':1 } },
                { id:'assembler',                   cat:'machine',  recipeId:'assembler',                   desc:true,  count:1,    energies:{ 'electricity':-75 } },
                { id:'assembler-2',                 cat:'machine',  recipeId:'assembler-2',                 desc:true,              energies:{ 'electricity':-150 } },
                { id:'assembler-3',                 cat:'machine',  recipeId:'assembler-3',                 desc:true,              energies:{ 'electricity':-375 } },
                { id:'pump',                        cat:'machine',  recipeId:'pump',                        desc:true,  count:1,    energies:{ 'energy-water':100 } },
                { id:'boiler',                      cat:'machine',  recipeId:'boiler',                      desc:true,  count:1,    energies:{ 'steam':60, 'energy-water':-60, 'energy-coal':-0.015 } },
                { id:'steam-engine',                cat:'machine',  recipeId:'steam-engine',                desc:true,  count:1,    energies:{ 'electricity':900, 'steam':-30 } },
                { id:'lab',                         cat:'machine',  recipeId:'lab',                         desc:true,  count:1,    energies:{ 'electricity':-60 } },
                { id:'pumpjack',                    cat:'machine',  recipeId:'pumpjack',                    desc:true,              energies:{ 'electricity':-90 } },
                { id:'refinery',                    cat:'machine',  recipeId:'refinery',                    desc:true,              energies:{ 'electricity':-420 } },
                { id:'chemical-plant',              cat:'machine',  recipeId:'chemical-plant',              desc:true,              energies:{ 'electricity':-210 } },
                { id:'rocket-silo',                 cat:'machine',  recipeId:'rocket-silo',                 desc:true,              energies:{ 'electricity':-4e3 } },
                
                // Storage
                //---
                { id:'chest',                       cat:'storage',  recipeId:'chest',                       },
                { id:'barrel',                      cat:'storage',  recipeId:'barrel',                      },

                // Techs
                //---
                { id:'steel-tech',                  cat:'tech',     recipeId:'steel-tech',                  max:1,      hasUnlocks:true, toComplete:true },
                { id:'green-tech',                  cat:'tech',     recipeId:'green-tech',                  max:1,      hasUnlocks:true, toComplete:true },
                { id:'engine-tech',                 cat:'tech',     recipeId:'engine-tech',                 max:1,      hasUnlocks:true, toComplete:true },
                //---
                { id:'fluid-handling',              cat:'tech',     recipeId:'fluid-handling',              max:1,      hasUnlocks:true, toComplete:true },
                { id:'fluid-wagon-tech',            cat:'tech',     recipeId:'fluid-wagon-tech',            max:1,      hasUnlocks:true, toComplete:true },
                { id:'rail-signals',                cat:'tech',     recipeId:'rail-signals',                max:1,      hasUnlocks:true, toComplete:true },
                { id:'railway',                     cat:'tech',     recipeId:'railway',                     max:1,      hasUnlocks:true, toComplete:true },
                { id:'train-stop-tech',             cat:'tech',     recipeId:'train-stop-tech',             max:1,      hasUnlocks:true, toComplete:true },
                //---
                { id:'battery-tech',                cat:'tech',     recipeId:'battery-tech',                max:1,      hasUnlocks:true, toComplete:true },
                { id:'blue-tech',                   cat:'tech',     recipeId:'blue-tech',                   max:1,      hasUnlocks:true, toComplete:true },
                { id:'electronics-2',               cat:'tech',     recipeId:'electronics-2',               max:1,      hasUnlocks:true, toComplete:true },
                { id:'explosives-tech',             cat:'tech',     recipeId:'explosives-tech',             max:1,      hasUnlocks:true, toComplete:true },
                { id:'flammables',                  cat:'tech',     recipeId:'flammables',                  max:1,      hasUnlocks:true, toComplete:true },
                { id:'flamethrower-tech',           cat:'tech',     recipeId:'flamethrower-tech',           max:1,      hasUnlocks:true, toComplete:true },
                { id:'gate-tech',                   cat:'tech',     recipeId:'gate-tech',                   max:1,      hasUnlocks:true, toComplete:true },
                { id:'grey-tech',                   cat:'tech',     recipeId:'grey-tech',                   max:1,      hasUnlocks:true, toComplete:true },
                { id:'gun-turret-tech',             cat:'tech',     recipeId:'gun-turret-tech',             max:1,      hasUnlocks:true, toComplete:true },
                { id:'land-mine-tech',              cat:'tech',     recipeId:'land-mine-tech',              max:1,      hasUnlocks:true, toComplete:true },
                { id:'laser',                       cat:'tech',     recipeId:'laser',                       max:1,      hasUnlocks:true, toComplete:true },
                { id:'laser-turret-tech',           cat:'tech',     recipeId:'laser-turret-tech',           max:1,      hasUnlocks:true, toComplete:true },
                { id:'military',                    cat:'tech',     recipeId:'military',                    max:1,      hasUnlocks:true, toComplete:true },
                { id:'military-2',                  cat:'tech',     recipeId:'military-2',                  max:1,      hasUnlocks:true, toComplete:true },
                { id:'oil-tech',                    cat:'tech',     recipeId:'oil-tech',                    max:1,      hasUnlocks:true, toComplete:true },
                { id:'optics',                      cat:'tech',     recipeId:'optics',                      max:1,      hasUnlocks:true, toComplete:true },
                { id:'plastics',                    cat:'tech',     recipeId:'plastics',                    max:1,      hasUnlocks:true, toComplete:true },
                { id:'sulfur-tech',                 cat:'tech',     recipeId:'sulfur-tech',                 max:1,      hasUnlocks:true, toComplete:true },
                { id:'tank-tech',                   cat:'tech',     recipeId:'tank-tech',                   max:1,      hasUnlocks:true, toComplete:true },
                { id:'wall-tech',                   cat:'tech',     recipeId:'wall-tech',                   max:1,      hasUnlocks:true, toComplete:true },
                //---
                { id:'armor-tech',                  cat:'tech',     recipeId:'armor-tech',                  max:1,      hasUnlocks:true, toComplete:true },
                { id:'automation-2',                cat:'tech',     recipeId:'automation-2',                max:1,      hasUnlocks:true, toComplete:true },
                { id:'belt-immunity-tech',          cat:'tech',     recipeId:'belt-immunity-tech',          max:1,      hasUnlocks:true, toComplete:true },
                { id:'discharge-defense-tech',      cat:'tech',     recipeId:'discharge-defense-tech',      max:1,      hasUnlocks:true, toComplete:true },
                { id:'efficiency',                  cat:'tech',     recipeId:'efficiency',                  max:1,      hasUnlocks:true, toComplete:true },
                { id:'efficiency-2',                cat:'tech',     recipeId:'efficiency-2',                max:1,      hasUnlocks:true, toComplete:true },
                { id:'electronics-3',               cat:'tech',     recipeId:'electronics-3',               max:1,      hasUnlocks:true, toComplete:true },
                { id:'energy-shield-tech',          cat:'tech',     recipeId:'energy-shield-tech',          max:1,      hasUnlocks:true, toComplete:true },
                { id:'engine-tech-2',               cat:'tech',     recipeId:'engine-tech-2',               max:1,      hasUnlocks:true, toComplete:true },
                { id:'low-density-structure-tech',  cat:'tech',     recipeId:'low-density-structure-tech',  max:1,      hasUnlocks:true, toComplete:true },
                { id:'lubricant-tech',              cat:'tech',     recipeId:'lubricant-tech',              max:1,      hasUnlocks:true, toComplete:true },
                { id:'material',                    cat:'tech',     recipeId:'material',                    max:1,      hasUnlocks:true, toComplete:true },
                { id:'modules',                     cat:'tech',     recipeId:'modules',                     max:1,      hasUnlocks:true, toComplete:true },
                { id:'nightvision-tech',            cat:'tech',     recipeId:'nightvision-tech',            max:1,      hasUnlocks:true, toComplete:true },
                { id:'personal-roboport-tech',      cat:'tech',     recipeId:'personal-roboport-tech',      max:1,      hasUnlocks:true, toComplete:true },
                { id:'robotics',                    cat:'tech',     recipeId:'robotics',                    max:1,      hasUnlocks:true, toComplete:true },
                { id:'speed',                       cat:'tech',     recipeId:'speed',                       max:1,      hasUnlocks:true, toComplete:true },
                { id:'speed-2',                     cat:'tech',     recipeId:'speed-2',                     max:1,      hasUnlocks:true, toComplete:true },
                { id:'yellow-tech',                 cat:'tech',     recipeId:'yellow-tech',                 max:1,      hasUnlocks:true, toComplete:true },
                //---
                { id:'exoskeleton-tech',            cat:'tech',     recipeId:'exoskeleton-tech',            max:1,      hasUnlocks:true, toComplete:true },
                { id:'fusion-reactor-tech',         cat:'tech',     recipeId:'fusion-reactor-tech',         max:1,      hasUnlocks:true, toComplete:true },
                { id:'productivity',                cat:'tech',     recipeId:'productivity',                max:1,      hasUnlocks:true, toComplete:true },
                { id:'rocket-control-unit-tech',    cat:'tech',     recipeId:'rocket-control-unit-tech',    max:1,      hasUnlocks:true, toComplete:true },
                { id:'rocketry',                    cat:'tech',     recipeId:'rocketry',                    max:1,      hasUnlocks:true, toComplete:true },
                //---
                { id:'concrete-tech',               cat:'tech',     recipeId:'concrete-tech',               max:1,      hasUnlocks:true, toComplete:true },
                { id:'material-2',                  cat:'tech',     recipeId:'material-2',                  max:1,      hasUnlocks:true, toComplete:true },
                { id:'oil-tech-2',                  cat:'tech',     recipeId:'oil-tech-2',                  max:1,      hasUnlocks:true, toComplete:true },
                { id:'purple-tech',                 cat:'tech',     recipeId:'purple-tech',                 max:1,      hasUnlocks:true, toComplete:true }, 
                { id:'rocket-fuel-tech',            cat:'tech',     recipeId:'rocket-fuel-tech',            max:1,      hasUnlocks:true, toComplete:true },
                { id:'rocket-tech',                 cat:'tech',     recipeId:'rocket-tech',                 max:1,      hasUnlocks:true, toComplete:true },
                //---
                { id:'accumulator-tech',            cat:'tech',     recipeId:'accumulator-tech',            max:1,      hasUnlocks:true, toComplete:true },
                { id:'automation-3',                cat:'tech',     recipeId:'automation-3',                max:1,      hasUnlocks:true, toComplete:true },                
                { id:'solar-energy',                cat:'tech',     recipeId:'solar-energy',                max:1,      hasUnlocks:true, toComplete:true },                
            ],
            //---
            recipes:[
            
                // Missions
                //---
                { id:'mission-furnace',                                                         machineId:'manual',             time:0.5,       output:1,   inputs:{ 'stone':5 } },
                { id:'mission-assembler',           reqs:{ 'mission-furnace':1 },               machineId:'manual',             time:7,         output:1,   inputs:{ 'copper-plate':5, 'copper':5, 'iron-plate':22, 'iron':22 } },
                { id:'mission-lab',                 reqs:{ 'mission-assembler':1 },             machineId:'assembler',          time:2,         output:1,   inputs:{ 'circuit':10, 'cable':30, 'copper-plate':15, 'copper':15, 'belt':4, 'gear':12, 'iron-plate':36, 'iron':36 } },
                { id:'mission-car',                 reqs:{ 'mission-lab':1 },                   machineId:'assembler',          time:2,         output:1,   inputs:{ 'engine':8, 'steel':13, 'gear':8, 'pipe':16, 'iron-plate':117, 'iron':117 } },
                { id:'mission-train',               reqs:{ 'mission-car':1 },                   machineId:'assembler',          time:2,         output:1,   inputs:{ 'locomotive':1, 'cargo-wagon':1, 'fluid-wagon':1, 'storage-tank':1, 'train-stop':10, 'rail-signal':10, 'rail-chain':10, 'rail':250, 'circuit':80, 'cable':240, 'copper-plate':120, 'copper':120, 'engine':20, 'steel':246, 'gear':40, 'pipe':48, 'stick':185, 'iron-plate':1731, 'iron':1731, 'stone':125 } },
                { id:'mission-defense',             reqs:{ 'mission-train':1 },                 machineId:'assembler',          time:5,         output:1,   inputs:{ 'tank':1, 'flamethrower-turret':5, 'laser-turret':5, 'gun-turret':10, 'land-mine':50, 'gate':25, 'wall':250, 'explosives':25, 'battery':60, 'sulfuric-acid':1200, 'sulfur':133, 'plastic':20, 'petrol':2188, 'light-oil':1431, 'heavy-oil':561, 'oil':2244, 'water':7486, 'coal':23, 'circuit-2':10, 'circuit':220, 'cable':700, 'copper-plate':510, 'copper':510, 'engine':57, 'steel':420, 'radar':10, 'gear':297, 'pipe':164, 'iron-plate':3460, 'iron':3460, 'brick':1375, 'stone':2750 } },
                { id:'mission-equipment',           reqs:{ 'mission-defense':1 },               machineId:'assembler',          time:5,         output:1,   inputs:{ 'armor':1, 'discharge-defense':1, 'personal-roboport':1, 'energy-shield':1, 'belt-immunity':1, 'nightvision':1, 'submachine-gun':1, 'pistol':1, 'low-density-structure':55, 'efficiency-module-2':25, 'efficiency-module':100, 'speed-module-2':25, 'speed-module':100, 'battery':345, 'sulfuric-acid':9000, 'sulfur':900, 'plastic':4675, 'petrol':60250, 'lubricant':600, 'light-oil':39141, 'heavy-oil':15526, 'oil':62103, 'water':112886, 'coal':2338, 'circuit-3':420, 'circuit-2':2200, 'circuit':14080, 'cable':51040, 'copper-plate':26975, 'copper':26975, 'engine-2':40, 'engine':40, 'steel':590, 'gear':250, 'pipe':80, 'iron-plate':18150, 'iron':18150 } },
                { id:'mission-spidertron',          reqs:{ 'mission-equipment':1 },             machineId:'assembler',          time:10,        output:1,   inputs:{ 'exoskeleton':4, 'fusion-reactor':2, 'rocket-launcher':4, 'rocket-control-unit':16, 'low-density-structure':100, 'speed-module':16, 'sulfuric-acid':2280, 'sulfur':228, 'plastic':2484, 'petrol':28260, 'lubricant':1800, 'light-oil':17717, 'heavy-oil':7477, 'oil':29908, 'water':44908, 'coal':1242, 'circuit-3':456, 'circuit-2':992, 'circuit':11454, 'cable':38330, 'copper-plate':21165, 'copper':21165, 'engine-2':120, 'engine':120, 'steel':400, 'radar':2, 'gear':150, 'pipe':240, 'iron-plate':14080, 'iron':14080 } },
                { id:'mission-rocket',              reqs:{ 'mission-spidertron':1 },            machineId:'rocket-silo',        time:3,         output:1,   inputs:{ 'rocket-fuel':10, 'solid-fuel':100, 'rocket-control-unit':10, 'low-density-structure':10, 'speed-module':10, 'sulfuric-acid':50, 'sulfur':5, 'plastic':190, 'petrol':1975, 'light-oil':1771, 'heavy-oil':695, 'oil':2778, 'water':2756, 'coal':95, 'circuit-3':10, 'circuit-2':70, 'circuit':390, 'cable':1450, 'copper-plate':925, 'copper':925, 'steel':20, 'iron-plate':491, 'iron':491 } },
                { id:'mission-satellite',           reqs:{ 'mission-rocket':100 },              machineId:'assembler-3',        time:5,         output:1,   inputs:{ 'accumulator':100, 'solar-panel':100, 'rocket-fuel':50, 'solid-fuel':500, 'low-density-structure':100, 'battery':500, 'sulfuric-acid':10500, 'sulfur':1050, 'plastic':900, 'petrol':24750, 'light-oil':18581, 'heavy-oil':7287, 'oil':29146, 'water':69868, 'coal':450, 'circuit-3':100, 'circuit-2':200, 'circuit':3925, 'cable':12575, 'copper-plate':9288, 'copper':9288, 'steel':700, 'radar':5, 'gear':25, 'iron-plate':8435, 'iron':8435 } },
                
                // Energy
                //---
                { id:'electricity',                 reqs:{ 'mission-assembler':1 },             machineId:'steam-engine'        },
                { id:'steam',                       reqs:{ 'mission-assembler':1 },             machineId:'boiler'              },
                { id:'energy-water',                reqs:{ 'mission-assembler':1 },             machineId:'pump'                },
                { id:'energy-coal',                                                             machineId:'miner-coal'          },
                
                // Machines
                //---
                { id:'manual',                      },
                { id:'furnace',                     reqs:{ 'mission-furnace':1 },               machineId:'manual',             time:0.5,       output:1,   inputs:{ 'stone':5 } },
                { id:'miner',                                                                   machineId:'manual',             time:2,         output:1,   inputs:{ 'gear':3, 'iron-plate':9, 'iron':9, 'stone':5 } },
                { id:'miner-coal',                                                              machineId:'manual',             time:2,         output:1,   inputs:{ 'gear':3, 'iron-plate':9, 'iron':9, 'stone':5 } },
                { id:'assembler',                   reqs:{ 'mission-assembler':1 },             machineId:'manual',             time:0.5,       output:1,   inputs:{ 'circuit':4, 'cable':10, 'copper-plate':5, 'copper':5, 'gear':5, 'iron-plate':22, 'iron':22 } },
                { id:'assembler-2',                 reqs:{ 'automation-2':1 },                  machineId:'manual',             time:0.5,       output:1,   inputs:{ 'circuit':6, 'cable':18, 'copper-plate':9, 'copper':9, 'steel':2, 'gear':10, 'iron-plate':45, 'iron':45  } },
                { id:'assembler-3',                 reqs:{ 'automation-3':1 },                  machineId:'manual',             time:0.5,       output:1,   inputs:{ 'speed-module':4, 'plastic':40, 'petrol':400, 'light-oil':262, 'heavy-oil':103, 'oil':411, 'water':544, 'coal':20, 'circuit-2':20, 'circuit':72, 'cable':296, 'copper-plate':148, 'copper':148, 'steel':4, 'gear':20, 'iron-plate':150, 'iron':150 } },
                { id:'pump',                        reqs:{ 'mission-assembler':1 },             machineId:'manual',             time:0.5,       output:1,   inputs:{ 'circuit':2, 'cable':6, 'copper-plate':3, 'copper':3, 'pipe':1, 'gear':1, 'iron-plate':5, 'iron':5  } },
                { id:'boiler',                      reqs:{ 'mission-assembler':1 },             machineId:'manual',             time:0.5,       output:1,   inputs:{ 'pipe':4, 'iron-plate':4, 'iron':4, 'stone':5 } },
                { id:'steam-engine',                reqs:{ 'mission-assembler':1 },             machineId:'manual',             time:0.5,       output:1,   inputs:{ 'pipe':5, 'gear':8, 'iron-plate':31, 'iron':31 } },
                { id:'lab',                         reqs:{ 'mission-lab':1 },                   machineId:'manual',             time:2,         output:1,   inputs:{ 'circuit':10, 'cable':30, 'copper-plate':15, 'copper':15, 'belt':4, 'gear':12, 'iron-plate':36, 'iron':36  } },
                { id:'pumpjack',                    reqs:{ 'oil-tech':1 },                      machineId:'manual',             time:5,         output:1,   inputs:{ 'circuit':5, 'cable':15, 'copper-plate':8, 'copper':8, 'steel':5, 'pipe':10, 'gear':10, 'iron-plate':60, 'iron':60  } },
                { id:'refinery',                    reqs:{ 'oil-tech':1 },                      machineId:'manual',             time:8,         output:1,   inputs:{ 'circuit':10, 'cable':30, 'copper-plate':15, 'copper':15, 'steel':15, 'pipe':10, 'gear':10, 'iron-plate':115, 'iron':115, 'brick':10, 'stone':20 } },                
                { id:'chemical-plant',              reqs:{ 'oil-tech':1 },                      machineId:'manual',             time:5,         output:1,   inputs:{ 'circuit':5, 'cable':15, 'copper-plate':8, 'copper':8, 'steel':5, 'pipe':5, 'gear':5, 'iron-plate':45, 'iron':45  } },
                { id:'rocket-silo',                 reqs:{ 'rocket-tech':1 },                   machineId:'manual',             time:30,        output:1,   inputs:{ 'sulfuric-acid':1000, 'sulfur':100, 'plastic':800, 'petrol':9500, 'lubricant':3000, 'light-oil':5057, 'heavy-oil':3089, 'oil':11080, 'water':24274, 'coal':437, 'circuit-3':200, 'circuit-2':400, 'circuit':5200, 'cable':17200, 'copper-plate':8600, 'copper':8600, 'engine-2':200, 'engine':200, 'steel':1200, 'pipe':500, 'gear':200, 'iron-plate':12120, 'iron':12220, 'concrete':1000, 'brick':500, 'stone':1000 } },
                
                // Storage
                //---
                { id:'chest',                       reqs:{ 'steel-tech':1 },                    machineId:'manual',             time:0.5,       output:1,   inputs:{ 'steel':8 } },
                { id:'barrel',                      reqs:{ 'oil-tech':1 },                      machineId:'manual',             time:1,         output:1,   inputs:{ 'steel':1 } },
                
                // Techs
                //---
                { id:'engine-tech',                 reqs:{ 'green-tech':1 },                    machineId:'lab',                time:15*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100 } },
                { id:'green-tech',                  reqs:{ 'mission-lab':1 },                   machineId:'lab',                time:5*75,      output:1,   inputs:{ 'red-pack':75 } },
                { id:'steel-tech',                  reqs:{ 'mission-lab':1 },                   machineId:'lab',                time:5*50,      output:1,   inputs:{ 'red-pack':50 } },
                //---
                { id:'fluid-handling',              reqs:{ 'mission-car':1 },                   machineId:'lab',                time:15*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50 } },
                { id:'fluid-wagon-tech',            reqs:{ 'fluid-handling':1 },                machineId:'lab',                time:30*200,    output:1,   inputs:{ 'red-pack':200, 'green-pack':200 } },
                { id:'rail-signals',                reqs:{ 'train-stop-tech':1 },               machineId:'lab',                time:30*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100 } },
                { id:'railway',                     reqs:{ 'mission-car':1 },                   machineId:'lab',                time:30*75,     output:1,   inputs:{ 'red-pack':75, 'green-pack':75 } },
                { id:'train-stop-tech',             reqs:{ 'railway':1 },                       machineId:'lab',                time:30*75,     output:1,   inputs:{ 'red-pack':75, 'green-pack':75 } },
                //---
                { id:'battery-tech',                reqs:{ 'sulfur-tech':1 },                   machineId:'lab',                time:30*150,    output:1,   inputs:{ 'red-pack':150, 'green-pack':150 } },
                { id:'blue-tech',                   reqs:{ 'sulfur-tech':1 },                   machineId:'lab',                time:10*75,     output:1,   inputs:{ 'red-pack':75, 'green-pack':75 } },
                { id:'electronics-2',               reqs:{ 'plastics':1 },                      machineId:'lab',                time:15*200,    output:1,   inputs:{ 'red-pack':200, 'green-pack':200 } },
                { id:'explosives-tech',             reqs:{ 'sulfur-tech':1 },                   machineId:'lab',                time:15*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100 } },
                { id:'flammables',                  reqs:{ 'oil-tech':1 },                      machineId:'lab',                time:30*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50 } },
                { id:'flamethrower-tech',           reqs:{ 'flammables':1 },                    machineId:'lab',                time:30*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50, 'grey-pack':50 } },
                { id:'gate-tech',                   reqs:{ 'military-2':1 },                    machineId:'lab',                time:30*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100 } },
                { id:'grey-tech',                   reqs:{ 'military-2':1 },                    machineId:'lab',                time:15*30,     output:1,   inputs:{ 'red-pack':30, 'green-pack':30 } },
                { id:'gun-turret-tech',             reqs:{ 'mission-train':1 },                 machineId:'lab',                time:10*10,     output:1,   inputs:{ 'red-pack':10 } },
                { id:'land-mine-tech',              reqs:{ 'explosives-tech':1 },               machineId:'lab',                time:30*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100, 'grey-pack':100 } },
                { id:'laser',                       reqs:{ 'optics':1 },                        machineId:'lab',                time:30*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100, 'blue-pack':100 } },
                { id:'laser-turret-tech',           reqs:{ 'laser':1 },                         machineId:'lab',                time:30*150,    output:1,   inputs:{ 'red-pack':150, 'green-pack':150, 'grey-pack':150, 'blue-pack':150 } },
                { id:'military',                    reqs:{ 'mission-train':1 },                 machineId:'lab',                time:15*10,     output:1,   inputs:{ 'red-pack':10 } },
                { id:'military-2',                  reqs:{ 'military':1 },                      machineId:'lab',                time:15*20,     output:1,   inputs:{ 'red-pack':20, 'green-pack':20 } },
                { id:'oil-tech',                    reqs:{ 'mission-train':1 },                 machineId:'lab',                time:30*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100 } },
                { id:'optics',                      reqs:{ 'mission-train':1 },                 machineId:'lab',                time:15*10,     output:1,   inputs:{ 'red-pack':10 } },
                { id:'plastics',                    reqs:{ 'oil-tech':1 },                      machineId:'lab',                time:30*200,    output:1,   inputs:{ 'red-pack':200, 'green-pack':200 } },
                { id:'sulfur-tech',                 reqs:{ 'oil-tech':1 },                      machineId:'lab',                time:30*150,    output:1,   inputs:{ 'red-pack':150, 'green-pack':150 } },
                { id:'tank-tech',                   reqs:{ 'explosives-tech':1 },               machineId:'lab',                time:30*250,    output:1,   inputs:{ 'red-pack':250, 'green-pack':250, 'grey-pack':250, 'blue-pack':250 } },
                { id:'wall-tech',                   reqs:{ 'mission-train':1 },                 machineId:'lab',                time:10*10,     output:1,   inputs:{ 'red-pack':10 } },
                //---
                { id:'armor-tech',                  reqs:{ 'yellow-tech':1 },                   machineId:'lab',                time:30*400,    output:1,   inputs:{ 'red-pack':400, 'green-pack':400, 'grey-pack':400, 'blue-pack':400, 'yellow-pack':400 } },
                { id:'automation-2',                reqs:{ 'mission-defense':1 },               machineId:'lab',                time:15*40,     output:1,   inputs:{ 'red-pack':30, 'green-pack':30 } },
                { id:'belt-immunity-tech',          reqs:{ 'mission-defense':1 },               machineId:'lab',                time:15*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50 } },
                { id:'discharge-defense-tech',      reqs:{ 'mission-defense':1 },               machineId:'lab',                time:30*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100, 'grey-pack':100, 'blue-pack':100 } },
                { id:'efficiency',                  reqs:{ 'modules':1 },                       machineId:'lab',                time:30*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50 } },
                { id:'efficiency-2',                reqs:{ 'efficiency':1 },                    machineId:'lab',                time:30*75,     output:1,   inputs:{ 'red-pack':75, 'green-pack':75, 'blue-pack':75 } },
                { id:'electronics-3',               reqs:{ 'mission-defense':1 },               machineId:'lab',                time:30*300,    output:1,   inputs:{ 'red-pack':300, 'green-pack':300, 'blue-pack':300 } },
                { id:'energy-shield-tech',          reqs:{ 'low-density-structure-tech':1 },    machineId:'lab',                time:30*200,    output:1,   inputs:{ 'red-pack':200, 'green-pack':200, 'grey-pack':200, 'blue-pack':200 } },
                { id:'engine-tech-2',               reqs:{ 'lubricant-tech':1 },                machineId:'lab',                time:30*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50, 'blue-pack':50 } },
                { id:'low-density-structure-tech',  reqs:{ 'material':1 },                      machineId:'lab',                time:45*300,    output:1,   inputs:{ 'red-pack':300, 'green-pack':300, 'blue-pack':300 } },
                { id:'lubricant-tech',              reqs:{ 'mission-defense':1 },               machineId:'lab',                time:30*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50, 'blue-pack':50 } },
                { id:'material',                    reqs:{ 'mission-defense':1 },               machineId:'lab',                time:30*75,     output:1,   inputs:{ 'red-pack':75, 'green-pack':75 } },
                { id:'modules',                     reqs:{ 'mission-defense':1 },               machineId:'lab',                time:30*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100 } },
                { id:'nightvision-tech',            reqs:{ 'mission-defense':1 },               machineId:'lab',                time:15*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50 } },
                { id:'personal-roboport-tech',      reqs:{ 'robotics':1 },                      machineId:'lab',                time:30*250,    output:1,   inputs:{ 'red-pack':250, 'green-pack':250, 'blue-pack':250, 'yellow-pack':250 } },
                { id:'robotics',                    reqs:{ 'engine-tech-2':1 },                 machineId:'lab',                time:30*75,     output:1,   inputs:{ 'red-pack':75, 'green-pack':75, 'blue-pack':75 } },
                { id:'speed',                       reqs:{ 'modules':1 },                       machineId:'lab',                time:30*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50 } },
                { id:'speed-2',                     reqs:{ 'speed':1 },                         machineId:'lab',                time:30*75,     output:1,   inputs:{ 'red-pack':75, 'green-pack':75, 'blue-pack':75 } },
                { id:'yellow-tech',                 reqs:{ 'electronics-3':1 },                 machineId:'lab',                time:30*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100, 'blue-pack':100 } },
                //---
                { id:'exoskeleton-tech',            reqs:{ 'mission-equipment':1 },             machineId:'lab',                time:30*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50, 'blue-pack':50 } },
                { id:'fusion-reactor-tech',         reqs:{ 'mission-equipment':1 },             machineId:'lab',                time:30*200,    output:1,   inputs:{ 'red-pack':200, 'green-pack':200, 'grey-pack':200, 'blue-pack':200, 'yellow-pack':200 } },
                { id:'rocket-control-unit-tech',    reqs:{ 'mission-equipment':1 },             machineId:'lab',                time:45*300,    output:1,   inputs:{ 'red-pack':300, 'green-pack':300, 'blue-pack':300, 'yellow-pack':300 } },
                { id:'rocketry',                    reqs:{ 'mission-equipment':1 },             machineId:'lab',                time:15*120,    output:1,   inputs:{ 'red-pack':120, 'green-pack':120, 'grey-pack':120 } },
                //---
                { id:'concrete-tech',               reqs:{ 'material-2':1 },                    machineId:'lab',                time:30*250,    output:1,   inputs:{ 'red-pack':250, 'green-pack':250 } },
                { id:'material-2',                  reqs:{ 'mission-spidertron':1 },            machineId:'lab',                time:30*250,    output:1,   inputs:{ 'red-pack':250, 'green-pack':250, 'blue-pack':250 } },
                { id:'oil-tech-2',                  reqs:{ 'mission-spidertron':1 },            machineId:'lab',                time:30*75,     output:1,   inputs:{ 'red-pack':75, 'green-pack':75, 'blue-pack':75 } },
                { id:'productivity',                reqs:{ 'mission-spidertron':1 },            machineId:'lab',                time:30*50,     output:1,   inputs:{ 'red-pack':50, 'green-pack':50 } },
                { id:'purple-tech',                 reqs:{ 'productivity':1 },                  machineId:'lab',                time:30*100,    output:1,   inputs:{ 'red-pack':100, 'green-pack':100, 'blue-pack':100 } },
                { id:'rocket-fuel-tech',            reqs:{ 'oil-tech-2':1 },                    machineId:'lab',                time:45*300,    output:1,   inputs:{ 'red-pack':300, 'green-pack':300, 'blue-pack':300 } },
                { id:'rocket-tech',                 reqs:{ 'rocket-fuel-tech':1 },              machineId:'lab',                time:60*1000,   output:1,   inputs:{ 'red-pack':1000, 'green-pack':1000, 'blue-pack':1000, 'purple-pack':1000, 'yellow-pack':1000 } },
                //---
                { id:'accumulator-tech',            reqs:{ 'mission-rocket':1 },                machineId:'lab',                time:30*150,    output:1,   inputs:{ 'red-pack':150, 'green-pack':150 } },
                { id:'automation-3',                reqs:{ 'mission-rocket':1 },                machineId:'lab',                time:60*150,    output:1,   inputs:{ 'red-pack':150, 'green-pack':150, 'blue-pack':150, 'purple-pack':150 } },
                { id:'solar-energy',                reqs:{ 'mission-rocket':1 },                machineId:'lab',                time:30*250,    output:1,   inputs:{ 'red-pack':250, 'green-pack':250 } },

                // Elems
                //---
                { id:'stone',                                                                   storerId:'chest',       stack:50,       machineId:'miner',              time:1,         output:1,   }, 
                //---
                { id:'copper',                      reqs:{ 'mission-furnace':1 },               storerId:'chest',       stack:50,       machineId:'miner',              time:1,         output:1,   }, 
                { id:'copper-plate',                reqs:{ 'mission-furnace':1 },               storerId:'chest',       stack:100,      machineId:'furnace',            time:3.2,       output:1,   }, 
                { id:'iron',                        reqs:{ 'mission-furnace':1 },               storerId:'chest',       stack:50,       machineId:'miner',              time:1,         output:1,   },  
                { id:'iron-plate',                  reqs:{ 'mission-furnace':1 },               storerId:'chest',       stack:100,      machineId:'furnace',            time:3.2,       output:1,   }, 
                //---
                { id:'belt',                        reqs:{ 'mission-assembler':1 },             storerId:'chest',       stack:100,      machineId:'assembler',          time:0.5,       output:2,   }, 
                { id:'cable',                       reqs:{ 'mission-assembler':1 },             storerId:'chest',       stack:200,      machineId:'assembler',          time:0.5,       output:2,   }, 
                { id:'circuit',                     reqs:{ 'mission-assembler':1 },             storerId:'chest',       stack:200,      machineId:'assembler',          time:0.5,       output:2,   }, 
                { id:'gear',                        reqs:{ 'mission-assembler':1 },             storerId:'chest',       stack:100,      machineId:'assembler',          time:0.5,       output:1,   }, 
                //---
                { id:'engine',                      reqs:{ 'engine-tech':1 },                   storerId:'chest',       stack:50,       machineId:'assembler',          time:10,        output:1,   }, 
                { id:'green-pack',                  reqs:{ 'green-tech':1 },                    storerId:'chest',       stack:200,      machineId:'assembler',          time:6,         output:1,   }, 
                { id:'pipe',                        reqs:{ 'mission-lab':1 },                   storerId:'chest',       stack:100,      machineId:'assembler',          time:0.5,       output:1,   }, 
                { id:'red-pack',                    reqs:{ 'mission-lab':1 },                   storerId:'chest',       stack:200,      machineId:'assembler',          time:5,         output:1,   }, 
                { id:'steel',                       reqs:{ 'steel-tech':1 },                    storerId:'chest',       stack:100,      machineId:'furnace',            time:16,        output:1,   }, 
                //---
                { id:'cargo-wagon',                 reqs:{ 'railway':1 },                                                               machineId:'assembler',          time:1,         output:1,   }, 
                { id:'fluid-wagon',                 reqs:{ 'fluid-wagon-tech':1 },                                                      machineId:'assembler',          time:4.5,       output:1,   }, 
                { id:'locomotive',                  reqs:{ 'railway':1 },                                                               machineId:'assembler',          time:4,         output:1,   }, 
                { id:'rail',                        reqs:{ 'railway':1 },                       storerId:'chest',       stack:100,      machineId:'assembler',          time:0.5,       output:2,   },
                { id:'rail-chain',                  reqs:{ 'rail-signals':1 },                  storerId:'chest',       stack:50,       machineId:'assembler',          time:0.5,       output:1,   },
                { id:'rail-signal',                 reqs:{ 'rail-signals':1 },                  storerId:'chest',       stack:50,       machineId:'assembler',          time:0.5,       output:1,   },
                { id:'stick',                       reqs:{ 'mission-car':1 },                   storerId:'chest',       stack:100,      machineId:'assembler',          time:0.5,       output:2,   }, 
                { id:'storage-tank',                reqs:{ 'fluid-handling':1 },                storerId:'chest',       stack:50,       machineId:'assembler',          time:3,         output:1,   }, 
                { id:'train-stop',                  reqs:{ 'train-stop-tech':1 },               storerId:'chest',       stack:10,       machineId:'assembler',          time:0.5,       output:1,   }, 
                //---
                { id:'battery',                     reqs:{ 'battery-tech':1 },                  storerId:'chest',       stack:200,      machineId:'chemical-plant',     time:4,         output:1,   },
                { id:'blue-pack',                   reqs:{ 'blue-tech':1 },                     storerId:'chest',       stack:200,      machineId:'assembler',          time:24,        output:2,   }, 
                { id:'brick',                       reqs:{ 'mission-train':1 },                 storerId:'chest',       stack:100,      machineId:'furnace',            time:3.2,       output:1,   },
                { id:'circuit-2',                   reqs:{ 'electronics-2':1 },                 storerId:'chest',       stack:200,      machineId:'assembler',          time:6,         output:1,   }, 
                { id:'coal',                        reqs:{ 'oil-tech':1 },                      storerId:'chest',       stack:50,       machineId:'miner',              time:1,         output:1,   }, 
                { id:'explosives',                  reqs:{ 'explosives-tech':1 },               storerId:'chest',       stack:50,       machineId:'chemical-plant',     time:4,         output:2,   }, 
                { id:'flamethrower-turret',         reqs:{ 'flamethrower-tech':1 },             storerId:'chest',       stack:50,       machineId:'assembler',          time:20,        output:1,   }, 
                { id:'gate',                        reqs:{ 'gate-tech':1 },                     storerId:'chest',       stack:50,       machineId:'assembler',          time:1,         output:1,   }, 
                { id:'grenade',                     reqs:{ 'military-2':1 },                    storerId:'chest',       stack:100,      machineId:'assembler',          time:8,         output:1,   }, 
                { id:'grey-pack',                   reqs:{ 'grey-tech':1 },                     storerId:'chest',       stack:200,      machineId:'assembler',          time:10,        output:2,   }, 
                { id:'gun-turret',                  reqs:{ 'gun-turret-tech':1 },               storerId:'chest',       stack:50,       machineId:'assembler',          time:8,         output:1,   }, 
                { id:'heavy-oil',                   reqs:{ 'oil-tech':1 },                      storerId:'barrel',      stack:1e3,      machineId:'refinery',           time:1,         output:5,   },
                { id:'land-mine',                   reqs:{ 'land-mine-tech':1 },                storerId:'chest',       stack:100,      machineId:'assembler',          time:5,         output:1,   }, 
                { id:'laser-turret',                reqs:{ 'laser-turret-tech':1 },             storerId:'chest',       stack:50,       machineId:'assembler',          time:20,        output:1,   }, 
                { id:'light-oil',                   reqs:{ 'oil-tech':1 },                      storerId:'barrel',      stack:1e3,      machineId:'chemical-plant',     time:1,         output:15,  },
                { id:'oil',                         reqs:{ 'oil-tech':1 },                      storerId:'barrel',      stack:1e3,      machineId:'pumpjack',           time:1,         output:1,   },
                { id:'petrol',                      reqs:{ 'oil-tech':1 },                      storerId:'barrel',      stack:1e3,      machineId:'refinery',           time:1,         output:9,   },
                { id:'plastic',                     reqs:{ 'plastics':1 },                      storerId:'chest',       stack:100,      machineId:'chemical-plant',     time:1,         output:1,   },
                { id:'radar',                       reqs:{ 'mission-train':1 },                 storerId:'chest',       stack:50,       machineId:'assembler',          time:0.5,       output:1,   },
                { id:'sulfur',                      reqs:{ 'sulfur-tech':1 },                   storerId:'chest',       stack:50,       machineId:'chemical-plant',     time:1,         output:2,   },
                { id:'sulfuric-acid',               reqs:{ 'sulfur-tech':1 },                   storerId:'barrel',      stack:1e3,      machineId:'chemical-plant',     time:1,         output:50,  },
                { id:'tank',                        reqs:{ 'tank-tech':1 },                                                             machineId:'assembler',          time:5,         output:1,   },
                { id:'wall',                        reqs:{ 'wall-tech':1 },                     storerId:'chest',       stack:100,      machineId:'assembler',          time:0.5,       output:1,   },
                { id:'water',                       reqs:{ 'oil-tech':1 },                      storerId:'barrel',      stack:1e3,      machineId:'pump',               time:1,         output:1,   },
                //---
                { id:'armor',                       reqs:{ 'armor-tech':1 },                                                            machineId:'assembler',          time:25,        output:1,   },
                { id:'belt-immunity',               reqs:{ 'belt-immunity-tech':1 },                                                    machineId:'assembler',          time:10,        output:1,   },
                { id:'circuit-3',                   reqs:{ 'electronics-3':1 },                 storerId:'chest',       stack:100,      machineId:'assembler-2',        time:10,        output:1,   },
                { id:'discharge-defense',           reqs:{ 'discharge-defense-tech':1 },                                                machineId:'assembler',          time:10,        output:1,   },
                { id:'efficiency-module',           reqs:{ 'efficiency':1 },                    storerId:'chest',       stack:50,       machineId:'assembler',          time:15,        output:1,   },
                { id:'efficiency-module-2',         reqs:{ 'efficiency-2':1 },                  storerId:'chest',       stack:50,       machineId:'assembler',          time:30,        output:1,   },
                { id:'energy-shield',               reqs:{ 'energy-shield-tech':1 },                                                    machineId:'assembler',          time:10,        output:1,   },
                { id:'engine-2',                    reqs:{ 'engine-tech-2':1 },                 storerId:'chest',       stack:50,       machineId:'assembler-2',        time:10,        output:1,   },
                { id:'low-density-structure',       reqs:{ 'low-density-structure-tech':1 },    storerId:'chest',       stack:10,       machineId:'assembler',          time:20,        output:1,   },
                { id:'lubricant',                   reqs:{ 'lubricant-tech':1 },                storerId:'barrel',      stack:1e3,      machineId:'chemical-plant',     time:1,         output:10,  },
                { id:'nightvision',                 reqs:{ 'nightvision-tech':1 },                                                      machineId:'assembler',          time:10,        output:1,   },
                { id:'personal-roboport',           reqs:{ 'personal-roboport-tech':1 },                                                machineId:'assembler',          time:70,        output:1,   },
                { id:'pistol',                      reqs:{ 'mission-defense':1 },                                                       machineId:'assembler',          time:5,         output:1,   },
                { id:'robot',                       reqs:{ 'robotics':1 },                      storerId:'chest',       stack:50,       machineId:'assembler',          time:20,        output:1,   },
                { id:'speed-module',                reqs:{ 'speed':1 },                         storerId:'chest',       stack:50,       machineId:'assembler',          time:15,        output:1,   },
                { id:'speed-module-2',              reqs:{ 'speed-2':1 },                       storerId:'chest',       stack:50,       machineId:'assembler',          time:30,        output:1,   },
                { id:'submachine-gun',              reqs:{ 'military':1 },                                                              machineId:'assembler',          time:10,        output:1,   },
                { id:'yellow-pack',                 reqs:{ 'yellow-tech':1 },                   storerId:'chest',       stack:200,      machineId:'assembler',          time:21,        output:3,   },
                //---
                { id:'exoskeleton',                 reqs:{ 'exoskeleton-tech':1 },                                                      machineId:'assembler',          time:10,        output:1,   },
                { id:'flamethrower',                reqs:{ 'flamethrower-tech':1 },             storerId:'chest',       stack:5,        machineId:'assembler',          time:10,        output:1,   }, 
                { id:'fusion-reactor',              reqs:{ 'fusion-reactor-tech':1 },           storerId:'chest',       stack:20,       machineId:'assembler',          time:10,        output:1,   },
                { id:'rocket-control-unit',         reqs:{ 'rocket-control-unit-tech':1 },      storerId:'chest',       stack:10,       machineId:'assembler',          time:30,        output:1,   },
                { id:'rocket-launcher',             reqs:{ 'rocketry':1 },                                                              machineId:'assembler',          time:10,        output:1,   },
                //---
                { id:'concrete',                    reqs:{ 'concrete-tech':1 },                 storerId:'chest',       stack:100,      machineId:'assembler-2',        time:10,        output:10,  },
                { id:'purple-pack',                 reqs:{ 'purple-tech':1 },                   storerId:'chest',       stack:200,      machineId:'assembler',          time:21,        output:3,   },
                { id:'productivity-module',         reqs:{ 'productivity':1 },                  storerId:'chest',       stack:50,       machineId:'assembler',          time:15,        output:1,   },
                { id:'rocket-fuel',                 reqs:{ 'rocket-fuel-tech':1 },              storerId:'chest',       stack:10,       machineId:'assembler-2',        time:30,        output:1,   },
                { id:'solid-fuel',                  reqs:{ 'oil-tech-2':1 },                    storerId:'chest',       stack:50,       machineId:'chemical-plant',     time:2,         output:1,   },
                //---
                { id:'accumulator',                 reqs:{ 'accumulator-tech':1 },              storerId:'chest',       stack:50,       machineId:'assembler',          time:10,        output:1,   },
                { id:'solar-panel',                 reqs:{ 'solar-energy':1 },                  storerId:'chest',       stack:50,       machineId:'assembler',          time:10,        output:1,   },
            ],
        }
    ]
}
