const filters = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    exposure: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    HueRotate: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    Blur: {
        value: 0,
        min: 0,
        max: 200,
        unit: "%"
    },
    Grayscale: {
        value: 0,
        min: 0,
        max: 200,
        unit: "%"
    },
    Sepia: {
        value: 0,
        min: 0,
        max: 200,
        unit: "%"
    },
    Opacity: {
        value: 0,
        min: 0,
        max: 200,
        unit: "%"
    },
    Invert: {
        value: 0,
        min: 0,
        max: 200,
        unit: "%"
    },
}
const imageCanvas = document.querySelector("#imageCanvas")

const imageinput = document.querySelector("#Image-input")

const CanvasCtx = imageCanvas.getContext("2d")

const filterscontainer = document.querySelector(".filters")

let file = null 

let image = null 

const filterContainer = document.querySelector(".filters")

function createFilterelement(name, unit = "%", value, min, max) {
    const div = document.createlement("div")
    div.classlist.add("filter")

    const input = document.createElement("input")
    input.type = "range"
    input.min = min 
    input.max = max
    input.value = value
    input.id = name 

    const p = document.createElement("p")
    p.innerText = name

    div.appendChild(p)
    div.appendChild(input)

    input.addEventListener("input", (event) => {
        filters[ name ].value = input.value
    })

    return div 
}

imageinput.addEventListener("change", (event) => {

    file = event.target.files[0]

    const placeholder = document.querySelector(".image-add")
    placeholder.style.display = "none"

    const img = new Image()
    img.src = URL.createObjectURL(file)

    img.onload = () => {
        image = img
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        CanvasCtx.drawImage(img, 0, 0)
    }
})


function applyFilters() {
    CanvasCtx.filters = `
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.brightness.value}${filters.brightness.unit})
    exposure(${filters.brightness.value}${filters.brightness.unit})
    saturation(${filters.brightness.value}${filters.brightness.unit})
    HueRotate(${filters.brightness.value}${filters.brightness.unit})
    Blur(${filters.brightness.value}${filters.brightness.unit})
    Grayscale(${filters.brightness.value}${filters.brightness.unit})
    Sepia(${filters.brightness.value}${filters.brightness.unit})
    Opacity(${filters.brightness.value}${filters.brightness.unit})
    Invert(${filters.brightness.value}${filters.brightness.unit})
    `
    CanvasCtx.drawImage(image, 0, 0)
}
