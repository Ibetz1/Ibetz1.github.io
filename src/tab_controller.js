
function selectTab(tab, button) {
    tab.classList.remove("hidden")
    button.classList.remove("bg-slate-600")
    button.classList.add("bg-slate-500")
}

function deselectTab(tab, button) {
    tab.classList.add("hidden")
    button.classList.remove("bg-slate-500")
    button.classList.add("bg-slate-600")
}

// open smoothing code tab
function SmoothingCodeClick() {
    var buttonDemo = document.getElementById("smoothingDemoButton")
    var buttonCode = document.getElementById("smoothingCodeButton")
    var tabDemo = document.getElementById("SmoothingExampleChart")
    var tabCode = document.getElementById("SmoothingExampleCode")

    selectTab(tabCode, buttonCode)
    deselectTab(tabDemo, buttonDemo)
}

// open smoothing example tab
function SmoothingDemoClick() {
    var buttonDemo = document.getElementById("smoothingDemoButton")
    var buttonCode = document.getElementById("smoothingCodeButton")
    var tabDemo = document.getElementById("SmoothingExampleChart")
    var tabCode = document.getElementById("SmoothingExampleCode")

    selectTab(tabDemo, buttonDemo)
    deselectTab(tabCode, buttonCode)
}

// open hsv code tab
function HsvCodeClick() {
    var buttonDemo = document.getElementById("hsvDemoButton")
    var buttonCode = document.getElementById("hsvCodeButton")
    var tabDemo = document.getElementById("hsvExampleChart")
    var tabCode = document.getElementById("hsvExampleCode")

    selectTab(tabCode, buttonCode)
    deselectTab(tabDemo, buttonDemo)
}

// open hsv example tab
function HsvDemoClick() {
    var buttonDemo = document.getElementById("hsvDemoButton")
    var buttonCode = document.getElementById("hsvCodeButton")
    var tabDemo = document.getElementById("hsvExampleChart")
    var tabCode = document.getElementById("hsvExampleCode")

    selectTab(tabDemo, buttonDemo)
    deselectTab(tabCode, buttonCode)
}