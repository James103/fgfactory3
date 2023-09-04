//---
class GameScenario {
    //---
    constructor(data) {
        //---
        this.initData = data
        //---
        let names = Object.getOwnPropertyNames(data) 
        names.forEach(name => { Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(data, name)) })
    }
    //---
    reset(game) {
        //---
        this.startDate = null
        this.victoryDate = null
    }
    //---
    load(data) {
        //---
        if (data.startDate != null) this.startDate = data.startDate
        if (data.victoryDate != null) this.victoryDate = data.victoryDate
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.startDate = this.startDate
        savedData.victoryDate = this.victoryDate
        //---
        return savedData
    }
}
//---
class GameItem {
    //---
    constructor(data) {
        //---
        this.initData = data
        //---
        let names = Object.getOwnPropertyNames(data) 
        names.forEach(name => { Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(data, name)) })
    }
    //---
    reset(game) {
        //---
        let recipe = game.currentScenario.recipes.find(recipe => recipe.id == this.recipeId)
        //---
        this.max = this.initData.max ? this.initData.max : Infinity
        if (recipe.output && this.max !== Infinity) {
            if (this.max % recipe.output !== 0) {
                this.max = recipe.output * Math.ceil(this.max / recipe.output)
            }
        }
        //---
        this.count = this.initData.count ? this.initData.count : 0
        this.toComplete = this.initData.toComplete ? this.initData.toComplete : false
        //---
        this.status = 'wait'
        //---
        this.name = recipe.id
        this.output = recipe.output
        //---
        this.machineId = recipe.machineId
        this.machineCount = 0
        //---
        this.balance = 0
        //---
        this.parentItem = null
        //---
        if (recipe.inputs) {
            //---
            this.inputs = {}
            this.children = []
            //---
            for (let id in recipe.inputs) {
                //---
                let cat = this.cat == 'energy' ? 'energy' : 'item'
                //---
                let item = new GameItem({ id:this.id + '-' + id, cat:cat, recipeId:id, max:recipe.inputs[id], toComplete:this.toComplete })
                game.currentItems.push(item)
                item.reset(game)
                //---
                item.parentItem = this
                this.children.push(item)
                //---
                this.inputs[item.id] = recipe.inputs[id]
            }
        }
        //---
        this.reqs = recipe.reqs
        this.unlocked = this.reqs ? false : true
        //---
        this.time = recipe.time
        this.initTime = recipe.time
        this.remainingTime = recipe.time
        //---
        if (recipe.storerId) {
            //---
            let storage = game.getStorage(recipe.id)
            if (!storage) {
                //---
                storage = new GameStorage({ id:recipe.id, reqs:recipe.reqs, storerId:recipe.storerId, stack:recipe.stack })
                game.currentStorages.push(storage)
                storage.reset(this)
            }
        }
    }
    //---
    load(data) {
        //---
        if (data.count != null) this.count = data.count
        if (data.status != null) this.status = data.status
        if (data.machineCount != null) this.machineCount = data.machineCount
        if (data.remainingTime != null) this.remainingTime = data.remainingTime
        //---
        if (this.max != Infinity && this.count > this.max) this.count = this.max
        //---
        if (data.machineCount <= 0) this.status = 'wait'
        //---
        this.refreshTime()
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.count = this.count
        savedData.status = this.status
        savedData.machineCount = this.machineCount
        savedData.remainingTime = this.remainingTime
        //---
        return savedData
    }
    //---
    getAddMachineCount(game) {
        //---
        if (game.selectedMachineCount == '1') return Math.min(game.getAvailableCount(this.machineId), 1)
        else if (game.selectedMachineCount == '5') return Math.min(game.getAvailableCount(this.machineId), 5)
        else if (game.selectedMachineCount == '10') return Math.min(game.getAvailableCount(this.machineId), 10)
        else if (game.selectedMachineCount == '100') return Math.min(game.getAvailableCount(this.machineId), 100)
        else if (game.selectedMachineCount == 'max') return game.getAvailableCount(this.machineId)
    }
    //---
    getRemoveMachineCount(game) {
        //---
        if (game.selectedMachineCount == '1') return Math.min(this.machineCount, 1)
        else if (game.selectedMachineCount == '5') return Math.min(this.machineCount, 5)
        else if (game.selectedMachineCount == '10') return Math.min(this.machineCount, 10)
        else if (game.selectedMachineCount == '100') return Math.min(this.machineCount, 100)
        else if (game.selectedMachineCount == 'max') return this.machineCount
    }
    //---
    getProgress() {
        //---
        return 100 - 100 * this.remainingTime / this.time
    }
    //---
    refreshTime() {
        //---
        let oldTime = this.time
        //---
        this.time = this.initTime
        if (this.machineCount > 0) {
            //---
            this.time /= this.machineCount
            //---
            let percent = this.time / oldTime
            this.remainingTime *= percent
        }
        else this.remainingTime = this.time
    }
    //---
    unassignAll(game) {
        //---
        this.status = 'wait'
        this.machineCount = 0
        //---
        this.refreshTime()
        //---
        if (this.children) this.children.forEach(child => { child.unassignAll(game) })
    }
}
//---
class GameStorage {
    //---
    constructor(data) {
        //---
        this.initData = data
        //---
        let names = Object.getOwnPropertyNames(data) 
        names.forEach(name => { Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(data, name)) })
    }
    //---
    reset(game) {
        //---
        this.count = this.stack
        this.unlocked = this.reqs ? false : true
        this.storerCount = 0
        //---
        this.refreshCount()
    }
    //---
    load(data) {
        //---
        if (data.storerCount != null) this.storerCount = data.storerCount
        //---
        this.refreshCount()
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.storerCount = this.storerCount
        //---
        return savedData
    }
    //---
    refreshCount() {
        //---
        this.count = this.stack + (this.stack * this.storerCount)
    }
    //---
    getAddStorerCount(game) {
        //---
        if (game.selectedStorerCount == '1') return Math.min(game.getAvailableCount(this.storerId), 1)
        else if (game.selectedStorerCount == '5') return Math.min(game.getAvailableCount(this.storerId), 5)
        else if (game.selectedStorerCount == '10') return Math.min(game.getAvailableCount(this.storerId), 10)
        else if (game.selectedStorerCount == '100') return Math.min(game.getAvailableCount(this.storerId), 100)
        else if (game.selectedStorerCount == 'max') return game.getAvailableCount(this.storerId)
    }
    //---
    getRemoveStorerCount(game) {
        //---
        if (game.selectedStorerCount == '1') return Math.min(this.storerCount, 1)
        else if (game.selectedStorerCount == '5') return Math.min(this.storerCount, 5)
        else if (game.selectedStorerCount == '10') return Math.min(this.storerCount, 10)
        else if (game.selectedStorerCount == '100') return Math.min(this.storerCount, 100)
        else if (game.selectedStorerCount == 'max') return this.storerCount
    }
}
//---
class Game {
    //---
    constructor() {
        //---
        this.currentScenario = null
        this.currentItems = []
        this.currentStorages = []
        //---
        this.selectedStorerCount = '1'
        this.selectedMachineCount = '1'
        //---
        this.victory = false
        this.victoryReqs = null
        //---
        this.scenarios = []
        DATA.scenarios.forEach(scenario => {
            //---
            let newScenario = new GameScenario(scenario)
            this.scenarios.push(newScenario)
        })
    }
    //---
    loadScenario(scenarioId) {
        //---
        this.currentScenario = this.scenarios.find(scenario => scenario.id == scenarioId)
        //---
        this.victory = false
        this.victoryReqs = this.currentScenario.victoryReqs ? this.currentScenario.victoryReqs : null
        //---
        this.currentItems = []
        this.currentStorages = []
        //---
        this.currentScenario.items.forEach(data => {
            //---
            let item = new GameItem(data)
            this.currentItems.push(item)
            item.reset(this)
        })
    }
    //---
    start(scenarioId) {
        //---
        this.loadScenario(scenarioId)
        //---
        this.refreshUnlocked()
    }
    //---
    load(data) {
        //---
        if (data.victory != null) this.victory = data.victory
        if (data.scenarioId != null) this.loadScenario(data.scenarioId)
        if (data.selectedStorerCount != null) this.selectedStorerCount = data.selectedStorerCount
        if (data.selectedMachineCount != null) this.selectedMachineCount = data.selectedMachineCount
        //---
        if (data.items != null) this.currentItems.forEach(item => { if (data.items[item.id]) item.load(data.items[item.id]) })
        if (data.storages != null) this.currentStorages.forEach(storage => { if (data.storages[storage.id]) storage.load(data.storages[storage.id]) })
        if (data.scenarios != null) this.scenarios.forEach(scenario => { if (data.scenarios[scenario.id]) scenario.load(data.scenarios[scenario.id]) })
        //---
        this.refreshUnlocked()
        this.refreshEnergies()
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.scenarioId = this.currentScenario.id
        //---
        savedData.selectedStorerCount = this.selectedStorerCount
        savedData.selectedMachineCount = this.selectedMachineCount
        //---
        savedData.victory = this.victory
        //---
        savedData.items = {}
        this.currentItems.forEach(item => savedData.items[item.id] = item.getSaveData())
        //---
        savedData.storages = {}
        this.currentStorages.forEach(storage => savedData.storages[storage.id] = storage.getSaveData())
        //---
        savedData.scenarios = {}
        this.scenarios.forEach(scenario => savedData.scenarios[scenario.id] = scenario.getSaveData())
        //---
        return savedData
    }
    //---
    getItem(itemId) { return this.currentItems.find(item => item.id == itemId) }
    getStorage(storageId) { return this.currentStorages.find(storage => storage.id == storageId) }
    //---
    checkReqs(reqs) {
        //---
        let check = true
        //---
        for (let id in reqs) {
            //---
            let item = this.getItem(id)
            if (item.count < reqs[id]) check = false
        }
        //---
        return check
    }
    //---
    refreshUnlocked() {
        //---
        this.currentItems.filter(item => item.reqs).forEach(item => { item.unlocked = this.checkReqs(item.reqs) })
        this.currentStorages.filter(storage => storage.reqs).forEach(storage => { storage.unlocked = this.checkReqs(storage.reqs) })
    }
    //---
    refreshEnergies() {
        //---
        let energies = this.currentItems.filter(item => item.cat == 'energy')
        energies.forEach(energy => {
            //---
            energy.balance = 0
        })
        //---
        let machines = this.currentItems.filter(item => item.cat == 'machine')
        machines.forEach(machine => {
            //---
            let usedCount = this.getMachineUsedCount(machine.id)
            for (let id in machine.energies) {
                //---
                let energy = this.getItem(id)
                energy.balance += usedCount * machine.energies[id]
            }
        })
    }
    //---
    isVictoryReached() {
        //---
        if (this.victory) return false
        else if (this.victoryReqs) return this.checkReqs(this.victoryReqs)
        else return false
    }
    //---
    doVictory() {
        //---
        this.victory = true
        this.currentScenario.victoryDate = Date.now()
    }
    //---
    getMachineUsedCount(itemId) {
        //---
        let usedCount = 0
        //---
        let items = this.currentItems.filter(item => item.machineCount > 0 && item.machineId == itemId)
        items.forEach(item => { usedCount += item.machineCount })
        //---
        return usedCount
    }
    //---
    getStorerUsedCount(itemId) {
        //---
        let usedCount = 0
        //---
        let storages = this.currentStorages.filter(storage => storage.storerCount > 0 && storage.storerId == itemId)
        storages.forEach(storage => { usedCount += storage.storerCount })
        //---
        return usedCount
    }
    //---
    getAvailableCount(itemId) {
        //---
        let item = this.getItem(itemId)
        //---
        let usedCount = 0
        if (item.cat == 'machine') usedCount = this.getMachineUsedCount(itemId)
        else if (item.cat == 'storage') usedCount = this.getStorerUsedCount(itemId)
        //---
        return item.count - usedCount
    }
    //---
    getTotalMachineCount(item) {
        //---
        let ret = item.machineCount
        //---
        if (item.children) item.children.forEach(child => { ret += this.getTotalMachineCount(child) })
        //---
        return ret
    }
    //---
    canProduce(item) {
        //---
        let storage = this.getStorage(item.name)
        if (storage && item.count >= storage.count) return false
        //---
        if (item.max != Infinity && item.count >= item.max) return false
        //---
        if (item.inputs) {
            for (let id in item.inputs) {
                let inputItem = this.getItem(id)
                if (inputItem.count < item.inputs[id])
                    return false
            }
        }
        //---
        return true
    }
    //---
    doTick(stepMs) {
        //---
        let refresh = false
        //---
        let items = this.currentItems.filter(item => item.machineCount > 0 && item.cat != 'energy')
        items.forEach(item => {
            //---
            let seconds = stepMs / 1000
            //---
            if (item.status == 'wait' && this.canProduce(item)) {
                //---
                if ((item.inputs && !item.toComplete) || (item.inputs && item.toComplete && item.max != Infinity && item.count < (item.max - 1))) {
                    for (let id in item.inputs) {
                        //---
                        let inputElem = this.getItem(id)
                        inputElem.count -= item.inputs[id]                        
                    }
                }
                //---
                item.status = 'inprogress'
                item.refreshTime()
            }
            //---
            if (item.status == 'inprogress') {
                if (seconds >= item.remainingTime) {
                    //---
                    seconds -= item.remainingTime
                    //---
                    let estimatedCycleCount = Math.floor(seconds / item.time)
                    if (estimatedCycleCount >= 1) {
                        //---
                        if (item.max) {
                            //---
                            let cycleCount = Math.floor((item.max - item.count) / item.output)
                            if (cycleCount < estimatedCycleCount) estimatedCycleCount = cycleCount
                        }
                        //---
                        if (item.inputs) {
                            //---
                            for (let id in item.inputs) {
                                //---
                                let inputElem = this.getItem(id)
                                let cycleCount = Math.floor(inputElem.count / item.inputs[id])
                                if (cycleCount < estimatedCycleCount) estimatedCycleCount = cycleCount
                            }
                            //---
                            if (item.machineId == 'manual') estimatedCycleCount = 0
                            //---
                            if (estimatedCycleCount > 0) {
                                //---
                                for (let id in item.inputs) {
                                    //---
                                    let inputElem = this.getItem(id)
                                    inputElem.count -= estimatedCycleCount * item.inputs[id]
                                }
                            }
                        }
                    }
                    //---
                    item.count += (estimatedCycleCount + 1) * item.output
                    if (item.max != Infinity && item.count >= item.max) item.count = item.max
                    //---
                    if ((item.toComplete && !item.parentItem && item.max != Infinity && item.count >= item.max) || (item.toComplete && (item.parentItem && item.parentItem.max != Infinity && item.parentItem.count >= (item.parentItem.max - 1)) && item.max != Infinity && item.count >= item.max)) {
                        //---
                        item.status = 'wait'
                        item.remainingTime = item.time
                        //---
                        item.unassignAll(this)
                        //---
                        if (item.hasUnlocks) {
                            //---
                            refresh = true
                            this.refreshUnlocked()
                        }
                        //---
                        this.refreshEnergies()
                    }
                    //---
                    else if (this.canProduce(item)) {
                        //---
                        if ((item.inputs && !item.toComplete) || (item.inputs && item.toComplete && item.max != Infinity && item.count < (item.max - 1))) {
                            for (let id in item.inputs) {
                                //---
                                let inputElem = this.getItem(id)
                                inputElem.count -= item.inputs[id]                        
                            }
                        }
                        //---
                        item.status = 'inprogress'
                        item.remainingTime = item.time
                    }
                    else {
                        //---
                        item.status = 'wait'
                        item.remainingTime = item.time
                    }
                }
                else item.remainingTime -= seconds
            }
        })
        //---
        return refresh
    }
    //---
    canAddMachineCount(item) {
        //---
        if (!item.unlocked) return false
        if (item.max != Infinity && item.totalCount >= item.max) return false
        //---
        let addCount = item.getAddMachineCount(this)
        if (addCount <= 0) return false
        //---
        if (this.getAvailableCount(item.machineId) < addCount) return false
        //---
        let machine = this.getItem(item.machineId)
        for (let id in machine.energies) {
            //---
            let energy = this.getItem(id)
            if (energy.balance < -addCount * machine.energies[id]) return false
        }
        //---
        return true
    }
    //---
    addMachineCount(itemId) {
        //---
        let item = this.getItem(itemId)
        if (this.canAddMachineCount(item)) {            
            //---
            let addCount = item.getAddMachineCount(this)
            item.machineCount += addCount
            item.refreshTime()
            //---
            this.refreshEnergies()
        }
    }
    //---
    canRemoveMachineCount(item) {
        //---
        let removeCount = item.getRemoveMachineCount(this)
        if (item.machineCount < 1 || item.machineCount < removeCount) return false
        //---
        return true
    }
    //---
    removeMachineCount(itemId) {
        //---
        let item = this.getItem(itemId)
        if (this.canRemoveMachineCount(item)) {
            //---
            let removeCount = item.getRemoveMachineCount(this)
            item.machineCount -= removeCount
            if (item.machineCount <= 0) item.status = 'wait'
            item.refreshTime()
            //---
            this.refreshEnergies()
        }
    }
    //---
    canAddStorerCount(storage) {
        //---
        if (!storage.unlocked) return false
        //---
        let addCount = storage.getAddStorerCount(this)
        if (addCount <= 0) return false
        //---
        if (this.getAvailableCount(storage.storerId) < addCount) return false
        //---
        return true
    }
    //---
    addStorerCount(storageId) {
        //---
        let storage = this.getStorage(storageId)
        if (this.canAddStorerCount(storage)) {            
            //---
            let addCount = storage.getAddStorerCount(this)
            storage.storerCount += addCount
            storage.refreshCount()
        }
    }
    //---
    canRemoveStorerCount(storage) {
        //---
        let removeCount = storage.getRemoveStorerCount(this)
        if (storage.storerCount < 1 || storage.storerCount < removeCount) return false
        //---
        return true
    }
    //---
    removeStorerCount(storageId) {
        //---
        let storage = this.getStorage(storageId)
        if (this.canRemoveStorerCount(storage)) {
            //---
            let removeCount = storage.getRemoveStorerCount(this)
            storage.storerCount -= removeCount
            storage.refreshCount()
        }
    }
}