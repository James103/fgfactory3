//---
var TplScreenGame = function(data) {
    //---
    let html = ''
    //---
    html += '<div class="position-relative w-100 h-100">'
        
        // Top bar
        //---
        html += '<div class="position-absolute" style="top:0; width:100%; height:48px;">'
            html += '<div class="h-100 container px-2 col-12 bg-light border-bottom border-dark d-flex align-items-center">'
                html += '<div class="flex-fill row gx-2 align-items-center">'
                    html += '<div class="col">'
                        html += '<div class="row gx-2 align-items-center">'
                            html += '<div class="col-auto">'
                                html += '<img src="logo.png" width="24px" height="24px" class="rounded">'
                            html += '</div>'
                            html += '<div class="col-auto">'
                                html += '<span class="fs-6 text-white">' + i18next.t('game_title') + '</span>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                    html += '<div class="col-auto">'
                        html += '<div class="dropdown">'
                            html += '<button type="button" class="btn btn-outline-danger" data-bs-toggle="dropdown" aria-expanded="false">'
                                html += '<i class="fas fa-exclamation-triangle"></i> v.dev 0.22'
                            html += '</button>'
                            html += '<div class="dropdown-menu">'
                                html += '<div class="px-2 py-1 text-center small">'
                                    html += '<span class="text-danger">' + i18next.t('game_disclaimer') + '</span>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                    html += '<div class="col-auto">'
                        html += '<div class="dropdown">'
                            html += '<button type="button" class="btn btn-outline-warning" data-bs-toggle="dropdown" aria-expanded="false">'
                                html += '<i class="fas fa-info-circle"></i>'
                            html += '</button>'
                            html += '<div class="dropdown-menu">'
                                html += '<div class="px-2 py-1 text-center small">'
                                    html += '<span>' + i18next.t('text_iconsBy') + '</span>'
                                    html += '<div><a href="https://fontawesome.com/" target="_blank">Fontawesome</a></div>'
                                html += '</div>'
                                html += '<div class="px-2 py-1 text-center small">'
                                    html += '<span>' + i18next.t('text_love') + '</span>'
                                html += '</div>'
                                html += '<div class="px-2 py-1">'
                                    html += '<div class="row gx-4 align-items-center justify-content-around flex-nowrap">'
                                        html += '<div class="col-auto">'
                                            html += '<a href="https://www.patreon.com/bePatron?u=61283131" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_patreon') + '">'
                                                html += '<img src="img/patreon.png" width="24px" height="24px" />'
                                            html += '</a>'
                                        html += '</div>'
                                        html += '<div class="col-auto">'
                                            html += '<a href="https://ko-fi.com/freddecgames" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_kofi') + '">'
                                                html += '<img src="img/kofi.png" width="24px" height="24px" />'
                                            html += '</a>'
                                        html += '</div>'
                                        html += '<form class="col-auto" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_paypal') + '">'
                                            html += '<input type="hidden" name="cmd" value="_s-xclick">'
                                            html += '<input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">'
                                            html += '<button type="submit" class="btn-link bg-transparent p-0 border-0">'
                                                html += '<img src="img/paypal.png" width="24px" height="24px" />'
                                            html += '</button>'
                                        html += '</form>'
                                        html += '<div class="col-auto">'
                                            html += '<a href="https://discord.gg/ZXrggavUpv" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_discord') + '">'
                                                html += '<img src="img/discord.png" width="24px" height="24px" />'
                                            html += '</a>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
        
        // Tab panes
        //---
        html += '<div class="position-absolute tab-content" style="top:48px; bottom:58px; width:100%; ">'
            
            // Factory pane
            //---
            html += '<div class="position-relative container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTabId == 'factory' ? ' show active' : '') + '" id="factory-tab-pane" role="tabpanel" aria-labelledby="factory-tab" tabindex="0">'
            html += '</div>'

            // Scenarios pane
            //---
            html += '<div class="position-relative container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTabId == 'scenarios' ? ' show active' : '') + '" id="scenarios-tab-pane" role="tabpanel" aria-labelledby="scenarios-tab" tabindex="0">'
            html += '</div>'

            // Options pane
            //---
            html += '<div class="position-relative container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTabId == 'options' ? ' show active' : '') + '" id="options-tab-pane" role="tabpanel" aria-labelledby="options-tab" tabindex="0">'
                html += '<div class="p-2">'
                    html += '<div class="row g-2">'
                        html += '<div class="col-12">'
                            html += '<span class="fs-6 text-white">' + i18next.t('word-language') + '</span>'
                        html += '</div>'
                        html += '<div class="col-auto">'
                            html += '<button type="button" class="btn btn-light' + (i18next.language == 'en-US' ? ' border-warning' : '') + '" onclick="window.app.changeLocale(\'en-US\')">'
                                html += '<img src="img/en.png" height="24px">'
                            html += '</button>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="p-2">'
                    html += '<div class="row gy-2 gx-3 align-items-center">'
                        html += '<div class="col-12">'
                            html += '<span class="fs-6 text-white">' + i18next.t('word-options') + '</span>'
                        html += '</div>'
                        html += '<div class="col-12 col-md-auto">'
                            html += '<div class="form-check">'
                                html += '<input class="form-check-input" type="checkbox" value="" id="checkShowLocked"' + (data.showLocked ? ' checked' : '') + ' onclick="window.app.doClick(\'toggleShowLocked\')">'
                                html += '<label class="form-check-label text-white" for="checkShowLocked">' + i18next.t('word-show-locked') + '</label>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="col-12 col-md-auto">'
                            html += '<div class="form-check">'
                                html += '<input class="form-check-input" type="checkbox" value="" id="checkShowCompleted"' + (data.showCompleted ? ' checked' : '') + ' onclick="window.app.doClick(\'toggleShowCompleted\')">'
                                html += '<label class="form-check-label text-white" for="checkShowCompleted">' + i18next.t('word-show-completed') + '</label>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="p-2">'
                    html += '<div class="row g-2">'
                        html += '<div class="col-12">'
                            html += '<span class="fs-6 text-white">' + i18next.t('word-local-data') + '</span>'
                        html += '</div>'
                        html += '<div class="col-12 col-md-6">'
                            html += '<div class="card card-body">'
                                html += '<div class="mb-2 d-flex justify-content-center">'
                                    html += '<textarea spellcheck="false" rows="3" class="w-100 form-control" disabled readonly>' + window.app.getLocalData() + '</textarea>'
                                html += '</div>'
                                html += '<div class="row g-2 align-items-center justify-content-center">'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-danger" onclick="window.app.showModal(\'modalWipe\')">'
                                            html += '<span><i class="fas fa-fw fa-skull"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_wipeSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-warning" onclick="window.app.exportSave()">'
                                            html += '<span><i class="fas fa-fw fa-copy"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_exportSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-warning px-0" onclick="window.app.downloadSave()">'
                                            html += '<span><i class="fas fa-fw fa-download"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_downloadSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="col-12 col-md-6">'
                            html += '<div class="card card-body">'
                                html += '<div class="mb-2 d-flex">'
                                    html += '<textarea spellcheck="false" rows="3" id="importData" class="w-100 form-control"></textarea>'
                                html += '</div>'
                                html += '<div class="col-4 ms-auto">'
                                    html += '<button type="button" class="w-100 btn btn-warning" onclick="window.app.importSave()">'
                                        html += '<span><i class="fas fa-fw fa-upload"></i></span>'
                                        html += '<span class="ms-1">' + i18next.t('btn_importSave') + '</span>'
                                    html += '</button>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
            
        html += '</div>'
        
        // Tabs bar
        //---
        let tabs = [
            { id:'factory', label:'tab_factory', img:'fas fa-industry', },
            { id:'scenarios', label:'tab_scenarios', img:'fas fa-th', },
            { id:'options', label:'tab_options', img:'fas fa-cog', },
        ]
        //---       
        html += '<div class="position-absolute" style="bottom:0; width:100%; height:58px;">'
            html += '<div class="h-100 container px-0 bg-light border-top border-dark">'
                html += '<div class="h-100 nav nav-tabs">'                
                    tabs.forEach(tab => {
                        html += '<div class="col col-md-2 col-lg-1 nav-item">'
                            html += '<button type="button" class="position-relative nav-link' + (data.selectedTabId == tab.id ? ' active' : '') + '" data-bs-toggle="tab" data-bs-target="#' + tab.id + '-tab-pane"role="tab" aria-controls="' + tab.id + '-tab-pane" onclick="window.app.doClick(\'selectTab\', { tabId:\'' + tab.id + '\' })">'
                                html += '<div class="text-center"><i class="fs-6 ' + tab.img + '"></i></div>'
                                html += '<div class="text-center small"><span>' + i18next.t(tab.label) + '</span></div>'
                            html += '</button>'
                        html += '</div>'
                    })
                html += '</div>'
            html += '</div>'
        html += '</div>'
        
    html += '</div>'
    //---
    html += '<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">'
        html += TplToastExport()
        html += TplToastImportEmpty()
        html += TplToastImportCorrupted()
    html += '</div>'
    //---
    html += TplModalOffline()
    html += TplModalWipe()
    html += TplModalVictory()
    html += TplModalScenario()
    //---
    return html
}
//---
var TplItem = function(scenario, item) {
    //---
    let html = ''
    //---
    html += '<div class="col-12">'
        html += '<div class="row g-1">'
            html += '<div class="col-12">'
                html += '<div class="card card-body">'
                    html += '<div class="row gx-3 gy-2 align-items-center">'
                        if (item.unlocked) {
                            let machine = window.app.game.getItem(item.machineId)
                            html += '<div class="col">'
                                html += '<div class="row gx-1 align-items-center">'
                                    html += '<div class="col-auto">'
                                        html += '<img src="' + scenario.img + item.name + '.png" width="24px" height="24px" data-bs-toggle="tooltip" data-bs-title="' + i18next.t(scenario.label + item.name) + '">'
                                    html += '</div>'
                                    if (item.cat != 'energy') {
                                        html += '<div class="col-auto" style="line-height:27.6px;">'
                                            html += '<small class="opacity-50">x</small> <span id="itemCount-' + item.id + '"></span>'
                                            if (item.max != Infinity) html += ' <small>/' + formatNumber(item.max) + '</small>'
                                        html += '</div>'
                                    }
                                    else {
                                        html += '<div class="col-auto">'
                                            html += '<span id="itemEnergyBalance-' + item.id + '"></span>'
                                        html += '</div>'
                                    }
                                html += '</div>'
                            html += '</div>'
                            if (machine.unlocked) {
                                html += '<div class="ms-auto col-auto">'
                                    html += '<div id="itemProduction-' + item.id + '" class="row gx-2 align-items-center">'
                                        if (item.time) {
                                            html += '<div class="col-auto text-end" style="min-width:55px;">'
                                                html += '<small id="itemRemainingTime-' + item.id + '"></small>'
                                                html += '<div class="progress" style="height:3px;">'
                                                    html += '<div id="itemProgress-' + item.id + '" class="progress-bar bg-success" style="width:0%;"></div>'
                                                html += '</div>'
                                            html += '</div>'
                                        }
                                        html += '<div class="col-auto">'
                                            html += '<div class="row gx-1 align-items-center justify-content-end">'
                                                html += '<div class="col-auto">'
                                                    html += '<img src="' + scenario.img + item.machineId + '.png" width="24px" height="24px" data-bs-toggle="tooltip" data-bs-title="' + i18next.t(scenario.label + item.machineId) + '">'
                                                html += '</div>'
                                                if (item.machineId != 'manual') {
                                                    html += '<div class="col-auto">'
                                                        html += '<span><small class="opacity-50">x</small> <span id="itemMachineCount-' + item.id + '"></span></span>'
                                                    html += '</div>'
                                                }
                                            html += '</div>'
                                        html += '</div>'
                                        html += '<div class="col-auto">'
                                            html += '<div class="row gx-1 align-items-center justify-content-end">'
                                                html += '<div class="col-auto">'
                                                    html += '<button type="button" id="itemRemoveMachineBtn-' + item.id + '" class="btn btn-outline-danger" onclick="window.app.doClick(\'removeMachineCount\', { itemId:\'' + item.id + '\' })">'
                                                        if (item.machineId != 'manual') html += '<i class="fas fa-fw fa-minus-circle"></i>'
                                                        else html += '<i class="fas fa-fw fa-stop"></i>'
                                                    html += '</button>'
                                                html += '</div>'
                                                html += '<div class="col-auto">'
                                                    html += '<button type="button" id="itemAddMachineBtn-' + item.id + '" class="btn btn-outline-warning" onclick="window.app.doClick(\'addMachineCount\', { itemId:\'' + item.id + '\' })">'
                                                        if (item.machineId != 'manual') html += '<i class="fas fa-fw fa-plus-circle"></i>'
                                                        else html += '<i class="fas fa-fw fa-play"></i>'
                                                    html += '</button>'
                                                html += '</div>'
                                            html += '</div>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            }
                            else {
                                html += '<div class="col-auto small">'
                                    html += '<div class="row gx-2 align-items-center justify-content-end">'
                                        html += '<div class="col-auto">'
                                            html += '<i class="fas fa-lock"></i>'
                                        html += '</div>'
                                        html += '<div class="col-auto">'
                                            html += '<span>' + i18next.t(scenario.label + machine.id) + '</span>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            }
                        }
                        else {
                            html += '<div class="col-auto" style="line-height:27.6px;">'
                                html += '<div class="row gx-2 align-items-center justify-content-end">'
                                    html += '<div class="col-auto">'
                                        html += '<i class="fas fa-lock"></i>'
                                    html += '</div>'
                                    for (let id in item.reqs) {
                                        html += '<div class="col-auto">'
                                            html += '<span>' + i18next.t(scenario.label + id) + '</span>'
                                        html += '</div>'
                                    }
                                html += '</div>'
                            html += '</div>'
                        }
                    html += '</div>'
                html += '</div>'
            html += '</div>'
            if (item.children) {
                html += '<div class="col-12">'
                    html += '<div class="row g-1">'
                        html += '<div class="col-auto d-flex justify-content-center" style="width:10px;">'
                            html += '<div class="border-start" style="height:100%;"></div>'
                        html += '</div>'
                        html += '<div class="col">'
                            html += '<div class="row g-1">'                
                                item.children.forEach(child => {
                                    html += '<div class="position-relative col-12">'
                                        html += '<div class="row g-1">' 
                                            html += '<div class="position-absolute border-bottom" style="top:13.5px; left:-5px; width:5px;"></div>'
                                            html += TplItem(scenario, child)
                                        html += '</div>'
                                    html += '</div>'
                                })
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            }
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
class ScreenGame {
    //---
    constructor() {
        //---
        this.selectedTabId = 'factory'
        this.selectedItemId = 'mission-furnace'
        //---
        this.showLocked = false
        this.showCompleted = false
        //---
        this.refreshNavList = []
    }
    //---
    load(data) {
        //---
        if (data.selectedTabId != null) this.selectedTabId = data.selectedTabId
        if (data.selectedItemId != null) this.selectedItemId = data.selectedItemId
        //---
        if (data.showLocked != null) this.showLocked = data.showLocked
        if (data.showCompleted != null) this.showCompleted = data.showCompleted
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.selectedTabId = this.selectedTabId
        savedData.selectedItemId = this.selectedItemId
        //---
        savedData.showLocked = this.showLocked
        savedData.showCompleted = this.showCompleted
        //---
        return savedData
    }
    //---
    init() {
        //---
        let node = document.getElementById('screen')
        node.innerHTML = TplScreenGame(this)
        //---
        this.displayFactoryTab()
        this.displayScenariosTab()
        //---
        let triggerTabList = document.querySelectorAll('[data-bs-toggle="tab"]')
        let tabList = [...triggerTabList].map(tabTriggerEl => new bootstrap.Tab(tabTriggerEl))
    }
    //---
    doClick(action, data) {
        //---
        if (action == 'selectTab') this.selectedTabId = data.tabId
        //---
        else if (action == 'toggleLeft') {
            //---
            let node = document.getElementById('left-pane')
            if (node.classList.contains('open')) node.classList.remove('open')
            else node.classList.add('open')
        }
        //---
        else if (action == 'selectItem') {
            //---
            if (this.selectedItemId == data.itemId) return
            //---
            let node = document.getElementById('left-pane')
            node.classList.remove('open')
            //---
            node = document.getElementById(this.selectedItemId + '-tab-pane')
            if (node) {
                node.classList.remove('active')
                node.classList.remove('show')
            }
            //---
            this.selectedItemId = data.itemId
            //---
            let triggerEl = document.querySelector('.nav.nav-pills button[data-bs-target="#' + this.selectedItemId + '-tab-pane"]')
            bootstrap.Tab.getInstance(triggerEl).show()
        }
        //---
        else if (action == 'toggleShowLocked') {
            //---
            this.showLocked = !this.showLocked
            this.displayFactoryTab()
        }
        else if (action == 'toggleShowCompleted') {
            //---
            this.showCompleted = !this.showCompleted
            this.displayFactoryTab()
        }
        //---
        else if (action == 'selectScenario') {
            //---
            window.app.newScenarioId = data.scenarioId
            window.app.showModal('modalScenario')
        }
        //---
        else if (action == 'addMachineCount') window.app.game.addMachineCount(data.itemId)
        else if (action == 'removeMachineCount') window.app.game.removeMachineCount(data.itemId)
        //---
        else if (action == 'setAllMachineSelectCount') window.app.game.selectedMachineCount = data.count
        //---
        else if (action == 'unassignAll') {
            //---
            data.itemId = data.itemId ? data.itemId : this.selectedItemId
            //---
            window.app.game.removeMachineCount(data.itemId)
            //---
            let item = window.app.game.getItem(data.itemId)
            if (item.inputs) {
                for (let id in item.inputs) {
                    this.doClick('unassignAll', { itemId:id })
                }
            }
        }
        //---
        else if (action == 'assignAll') {
            //---
            data.itemId = data.itemId ? data.itemId : this.selectedItemId
            //---
            window.app.game.addMachineCount(data.itemId)
            //---
            let item = window.app.game.getItem(data.itemId)
            if (item.inputs) {
                //---
                let inputs = []
                for (let id in item.inputs) inputs.push(id)
                inputs.reverse()
                //---
                for (let id in inputs) this.doClick('assignAll', { itemId:inputs[id] })
            }
        }
    }
    //---
    displayFactoryTab() {
        //---
        this.refreshNavList = []
        //---
        let items
        let scenario = window.app.game.currentScenario
        //---
        let html = ''
        html += '<div id="left-pane" class="bg-dark border-end">'
            html += '<div class="scrollbar nav nav-pills flex-column flex-nowrap">'
                DATA.categories.forEach(cat => {
                    items = window.app.game.currentItems.filter(item => item.id != 'manual' && item.cat == cat && (this.showLocked ? true : item.unlocked) && (this.showCompleted ? true : (item.max && item.count < item.max)))
                    if (items.length > 0) {
                        html += '<div class="w-100 p-2">'
                            html += '<div class="row g-1">'
                                html += '<div class="col-12">'
                                    html += '<span class="fs-6 text-white">' + i18next.t('cat-' + cat) + '</span>'
                                html += '</div>'
                                items.forEach(item => {
                                    html += '<div class="col-12 nav-item position-relative">'
                                        html += '<button class="w-100 position-relative nav-link' + (item.id == this.selectedItemId ? ' active' : '') + (!item.unlocked || (item.max && item.count >= item.max) ? ' disabled' : '') + '" id="' + item.id + '-tab" data-bs-toggle="tab" data-bs-target="#' + item.id + '-tab-pane" type="button" role="tab" aria-controls="' + item.id + '-tab-pane" onclick="window.app.doClick(\'selectItem\', { itemId:\'' + item.id + '\' })">'
                                            html += '<div class="row gx-2 align-items-center">'
                                                if (item.unlocked) {
                                                    html += '<div class="col-auto">'
                                                        html += '<img src="' + scenario.img + item.id + '.png" width="24px" height="24px">'
                                                    html += '</div>'
                                                    html += '<div class="col text-start text-truncate">'
                                                        html += '<span>' + i18next.t(scenario.label + item.id) + '</span>'
                                                    html += '</div>'
                                                    html += '<div class="col-auto">'
                                                        html += '<div id="machineUsing-' + item.id + '" class="d-none"><i class="fas fa-spinner text-success"></i></div>'
                                                    html += '</div>'
                                                    if (item.max && item.count >= item.max) {
                                                        html += '<div class="col-auto">'
                                                            html += '<span class="badge text-bg-success"><i class="fas fa-check-circle"></i></span>'
                                                        html += '</div>'
                                                    }
                                                    else if (item.cat == 'machine') {
                                                        html += '<div class="col-auto">'
                                                            html += '<div id="manualUsing-' + item.id + '" class="d-none">'
                                                                html += '<img src="' + scenario.img + 'manual.png" width="12px" height="12px">'
                                                            html += '</div>'
                                                        html += '</div>'
                                                        html += '<div class="col-auto">'
                                                            html += '<span id="navItemAvailableCount-' + item.id + '"></span>'
                                                        html += '</div>'
                                                    }
                                                    else if (item.cat == 'energy') {
                                                        html += '<div class="col-auto">'
                                                            html += '<span id="navItemEnergyBalance-' + item.id + '"></span>'
                                                        html += '</div>'
                                                    }
                                                    //---
                                                    item.toRefreshCount = true
                                                    this.refreshNavList.push(item)
                                                }
                                                else {
                                                    html += '<div class="col-auto text-center" style="width:32px;">'
                                                        html += '<i class="fas fa-lock"></i>'
                                                    html += '</div>'
                                                    html += '<div class="col-auto me-auto">'
                                                        html += '<span>' + i18next.t(scenario.label + item.id) + '</span>'
                                                    html += '</div>'
                                                }
                                            html += '</div>'
                                        html += '</button>'
                                    html += '</div>'
                                })
                            html += '</div>'
                        html += '</div>'
                    }
                })
            html += '</div>'
        html += '</div>'
        html += '<div id="right-pane" class="tab-content">'
            items = scenario.items.filter(item => item.id != 'manual')
            items.forEach(data => {
                let item = window.app.game.getItem(data.id)
                html += '<div class="scrollbar p-2 tab-pane fade' + (item.id == this.selectedItemId ? ' show active' : '') + '" id="' + item.id + '-tab-pane" role="tabpanel" aria-labelledby="' + item.id + '-tab" tabindex="0">'
                    html += '<div class="row g-1">'
                        html += '<div class="col-12">'
                            html += '<div class="pb-2">'
                                html += '<div class="row gx-2 align-items-center">'
                                    html += '<div class="col-auto">'
                                        html += '<img src="' + scenario.img + item.id + '.png" width="24px" height="24px">'
                                    html += '</div>'
                                    html += '<div class="col-auto">'
                                        html += '<span class="fs-6 text-white">' + i18next.t(scenario.label + item.id) + '</span>'
                                    html += '</div>'
                                    if (item.cat == 'machine') {
                                        html += '<div class="col-auto">'
                                            html += ' <span id="itemAvailableCount-' + item.id + '"></span>'
                                        html += '</div>'
                                    }
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                        if (item.desc) {
                            html += '<div class="col-12">'
                                html += '<div class="pb-2">'
                                    html += '<span>' + i18next.t(scenario.label + item.id + '-desc') + '</span>'
                                html += '</div>'
                            html += '</div>'
                        }
                        if (item.cat == 'tech') {
                            let unlocks = scenario.recipes.filter(recipe => recipe.reqs && recipe.reqs[item.id])
                            if (unlocks.length > 0) {
                                html += '<div class="col-12">'
                                    html += '<div class="pb-2">'
                                        html += '<div class="row gx-2 align-items-center">'
                                            html += '<div class="col-auto">'
                                                html += '<span>' + i18next.t('word-allows') + '</span>'
                                            html += '</div>'
                                            unlocks.forEach(unlock => {
                                                html += '<div class="col-auto">'
                                                    html += '<img src="' + scenario.img + unlock.id + '.png" width="24px" height="24px" data-bs-toggle="tooltip" data-bs-title="' + i18next.t(scenario.label + unlock.id) + '">'
                                                html += '</div>'
                                            })
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            }
                        }
                        else if (item.energies) {
                            html += '<div class="col-12">'
                                html += '<div class="pb-2">'
                                    html += '<div class="row gx-2 align-items-center">'
                                        html += '<div class="col-auto">'
                                            html += '<span>' + i18next.t('word-energy') + '</span>'
                                        html += '</div>'
                                        for (let id in item.energies) {
                                            html += '<div class="col-auto">'
                                                html += '<div class="row gx-1 align-items-center justify-content-end">'
                                                    html += '<div class="col-auto">'
                                                        html += '<img src="' + scenario.img + id + '.png" width="24px" height="24px" data-bs-toggle="tooltip" data-bs-title="' + i18next.t(scenario.label + id) + '">'
                                                    html += '</div>'
                                                    html += '<div class="col-auto">'
                                                        html += '<span class="text-white">' + (item.energies[id] > 0 ? '+' : '') + formatNumber(item.energies[id]) + ' <small class="opacity-50">/s</small></span>'
                                                    html += '</div>'
                                                html += '</div>'
                                            html += '</div>'
                                        }
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        }
                        html += TplItem(scenario, item)
                    html += '</div>'
                html += '</div>'
            })
        html += '</div>'
        html += '<div class="position-absolute p-2 border-top" style="bottom:0; left:0; right:0;">'
            html += '<div class="row gx-2">'
                html += '<div class="col d-lg-none">'
                    html += '<button class="btn btn-outline-warning" onclick="window.app.doClick(\'toggleLeft\')">'
                        html += '<i class="fas fa-bars"></i>'
                    html += '</button>'
                html += '</div>'
                html += '<div class="ms-auto col-auto">'
                    html += '<select class="form-control form-control-sm" onchange="window.app.doClick(\'setAllMachineSelectCount\', { count:this.value })">'
                        html += '<option' + (window.app.game.selectedMachineCount == '1' ? ' selected' : '') + '  value="1">1</option>'
                        html += '<option' + (window.app.game.selectedMachineCount == '5' ? ' selected' : '') + '  value="5">5</option>'
                        html += '<option' + (window.app.game.selectedMachineCount == '10' ? ' selected' : '') + '  value="10">10</option>'
                        html += '<option' + (window.app.game.selectedMachineCount == '100' ? ' selected' : '') + '  value="100">100</option>'
                        html += '<option' + (window.app.game.selectedMachineCount == 'max' ? ' selected' : '') + '  value="max">' + i18next.t('word-max') + '</option>'
                    html += '</select>'
                html += '</div>'
                html += '<div class="col-auto">'
                    html += '<button type="button" class="btn btn-outline-danger" onclick="window.app.doClick(\'unassignAll\', {})">'
                        html += '<i class="fas fa-fw fa-minus-circle"></i>'
                        html += ' <span>' + i18next.t('word-unassign-all') + '</span>'
                    html += '</button>'
                html += '</div>'
                html += '<div class="col-auto">'
                    html += '<button type="button" class="btn btn-outline-warning" onclick="window.app.doClick(\'assignAll\', {})">'
                        html += '<i class="fas fa-fw fa-plus-circle"></i>'
                        html += ' <span>' + i18next.t('word-assign-all') + '</span>'
                    html += '</button>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
        //---
        let node = window.document.getElementById('factory-tab-pane')
        node.innerHTML = html
        //---
        let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }
    //---
    displayScenariosTab() {
        //---
        let html = ''
        //---
        html += '<div class="p-2">'
            html += '<div class="row g-2">'
                html += '<div class="col-12">'
                    html += '<span class="fs-6 text-white">' + i18next.t('word-scenarios') + '</span>'
                html += '</div>'
                //---
                let scenarios = window.app.game.scenarios
                scenarios.forEach(scenario => {
                    html += '<div class="col-12 col-lg-6 col-xl-4">'
                        html += '<button type="button" class="w-100 btn btn-light text-start' + (scenario.id == window.app.game.currentScenario.id ? ' border-warning' : '') + '" onclick="window.app.doClick(\'selectScenario\', { scenarioId:\'' + scenario.id + '\' })">'
                            html += '<div class="row g-1 justify-content-center">'
                                html += '<div class="col-12">'
                                    html += '<div class="row gx-2 align-items-center">'
                                        html += '<div class="col">'
                                            html += '<span class="fs-6 text-white">' + i18next.t(scenario.label + 'name') + '</span>'
                                        html += '</div>'
                                        if (scenario.victoryDate) {
                                            html += '<div class="col-auto">'
                                                html += '<img src="img/victory.png" width="16px" height="16px" />'
                                            html += '</div>'
                                        }
                                    html += '</div>'
                                html += '</div>'
                                html += '<div class="col-12 small">'
                                    html += '<span class="text-normal">' + i18next.t(scenario.label + 'desc') + '</span>'
                                html += '</div>'
                            html += '</div>'
                        html += '</button>'
                    html += '</div>'
                })
            html += '</div>'
        html += '</div>'
        //---
        let node = window.document.getElementById('scenarios-tab-pane')
        node.innerHTML = html
    }
    //---
    refreshItem(item) {
        //---
        let node, value, html = '', style = ''
            
        // Item count
        //---
        node = document.getElementById('itemCount-' + item.id)
        if (node) {
            //---
            if (item.toComplete) value = item.totalCount
            else value = item.count
            //---                
            html = formatNumber(value)
            if (node.innerHTML != html) node.innerHTML = html
            //---
            style = 'text-normal'
            if (value > 0) style = 'text-white'
            if (node.className != style) node.className = style
        }
        
        // Item energy balance
        //---
        node = document.getElementById('itemEnergyBalance-' + item.id)
        if (node) {
            //---
            value = item.balance
            //---
            html = (value > 0 ? '+' : '') + formatNumber(value) + ' <small class="opacity-50">/s</small>'
            if (node.innerHTML != html) node.innerHTML = html
            //---
            style = 'text-normal'
            if (value > 0) style = 'text-white'
            if (node.className != style) node.className = style
        }
        
        // Item available count
        //---
        node = document.getElementById('itemAvailableCount-' + item.id)
        if (node) {
            //---
            value = window.app.game.getAvailableCount(item.id)
            //---
            html = formatNumber(value)
            if (node.innerHTML != html) node.innerHTML = html
            //---
            style = 'd-none'
            if (value > 0) style = 'badge text-bg-success'
            if (node.className != style) node.className = style
        }

        //---
        if (item.toComplete && item.max != Infinity && item.totalCount >= item.max) {
            
            // Item production
            //---
            node = document.getElementById('itemProduction-' + item.id)
            if (node) {
                //---
                html = '<div class="col-auto"><span class="badge text-bg-success"><i class="fas fa-check-circle" aria-hidden="true"></i> ' + i18next.t('word-done') + '</span></div>'
                if (node.innerHTML != html) node.innerHTML = html
            }
        }
        else {
            
            // Item machine count
            //---
            node = document.getElementById('itemMachineCount-' + item.id)
            if (node) {                    
                //---
                value = item.machineCount
                //---
                html = formatNumber(value)
                if (node.innerHTML != html) node.innerHTML = html
                //---
                style = 'text-normal'
                if (value > 0) style = 'text-white'
                if (node.className != style) node.className = style
            }
            
            // Item remove machine button
            //---
            node = document.getElementById('itemRemoveMachineBtn-' + item.id)
            if (node) {                    
                //---
                value = window.app.game.canRemoveMachineCount(item)
                //---
                style = 'btn btn-outline-danger'
                if (value == false) style += ' disabled'
                if (node.className != style) node.className = style
            }
            
            // Item add machine button
            //---
            node = document.getElementById('itemAddMachineBtn-' + item.id)
            if (node) {                    
                //---
                value = window.app.game.canAddMachineCount(item)
                //---
                style = 'btn btn-outline-warning'
                if (value == false) style += ' disabled'
                if (node.className != style) node.className = style
            }
            
            // Item remaining time
            //---
            node = document.getElementById('itemRemainingTime-' + item.id)
            if (node) {
                if (item.toComplete && item.max != Infinity && item.totalCount >= item.max) {
                    //---
                    html = i18next.t('word-done')
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    style = 'text-success'
                    if (node.className != style) node.className = style
                }
                else {
                    //---
                    value = item.remainingTime
                    //---
                    html = formatTime(value)
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    style = ''
                    if (item.status == 'wait' && item.machineCount > 0) style = 'text-danger'
                    else if (item.machineCount > 0) style = 'text-white'
                    if (node.className != style) node.className = style
                }
            }
            
            // Item progress
            //---
            node = document.getElementById('itemProgress-' + item.id)
            if (node) {
                if (item.toComplete && item.max != Infinity && item.totalCount >= item.max) {
                    //---
                    style = 'd-none'
                    if (node.className != style) node.className = style
                }
                else {
                    //---
                    value = item.getProgress() + '%'
                    //---
                    if (node.style.width != value) node.style.width = value
                }
            }
        }
        
        //---
        if (item.children) item.children.forEach(child => { this.refreshItem(child) })
    }
    //---
    refresh() {
        //---
        if (this.selectedTabId == 'factory') {
            //---
            let node, value, html = '', style = ''

            //---
            this.refreshNavList.forEach(item => {
                
                //---
                if (item.cat == 'machine') {
                    
                    // Nav item available count
                    //---
                    node = document.getElementById('navItemAvailableCount-' + item.id)
                    //---
                    value = window.app.game.getAvailableCount(item.id)
                    //---
                    html = formatNumber(value)
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    style = 'd-none'
                    if (value > 0) style = 'badge text-bg-success'
                    if (node.className != style) node.className = style

                    // Nav item manual using
                    //---
                    node = document.getElementById('manualUsing-' + item.id)
                    //---
                    style = 'd-none'
                    if (item.machineCount > 0) style = 'badge text-bg-success'
                    if (node.className != style) node.className = style
                }
                
                //---
                if (item.cat == 'energy') {
                    
                    // Nav item energy balance
                    //---
                    node = document.getElementById('navItemEnergyBalance-' + item.id)
                    //---
                    value = item.balance
                    //---
                    html = (value > 0 ? '+' : '') + formatNumber(value) + ' <small class="opacity-50">/s</small>'
                    if (node.innerHTML != html) node.innerHTML = html
                }
                else {
                    
                    // Nav item machine using
                    //---
                    node = document.getElementById('machineUsing-' + item.id)
                    //---
                    style = 'd-none'
                    if (window.app.game.getTotalMachineCount(item) > 0) style = 'rotate'
                    if (node.className != style) node.className = style
                }
            })
            
            // Selected item pane
            //---
            let item = window.app.game.getItem(this.selectedItemId)
            this.refreshItem(item)
        }
    }
}
