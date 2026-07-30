let output = document.getElementById('output')
let equal = document.getElementById('equal')
let buttons = document.querySelectorAll('button')
let clearButton = document.getElementById('clearButton')
let deletButton = document.getElementById( 'deletButton')
let outputValue = []
let outputvalueResult = []

// defining the function for handling the click of the buttons except the clear, delete and equal buttons
let buttonOnclickHandler = (btn, out) => {

    const standardInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '.', '-', '+', '*', '/']

    if (standardInputs.includes(btn.value)) {
        outputValue.push(btn.value)
        outputvalueResult.push(btn.value)
        out.value += btn.value
    } else if (btn.value === '%') { 
        outputValue.push(btn.value)
        outputvalueResult.push('*0.01')
        out.value += btn.value
    } else if (btn.value === 'exp') {
        outputValue.push(btn.value +'(')
        outputvalueResult.push('Math.exp(')
        out.value += btn.value +'('
    } else if (btn.value === '^') {
        outputValue.push(btn.value)
        outputvalueResult.push('**')
        out.value += btn.value
    } else if (btn.value === 'π' || btn.value === '&pi;') {
        outputValue.push(btn.value)
        outputvalueResult.push('Math.PI')
        out.value += btn.value
    } else if (btn.value === 'e') {
        outputValue.push(btn.value)
        outputvalueResult.push('Math.E')
        out.value += btn.value
    } else if (btn.value === 'cos') {
        outputValue.push(btn.value +'(')
        outputvalueResult.push('Math.cos(')
        out.value += btn.value +'('
    } else if (btn.value === 'sin') {
        outputValue.push(btn.value +'(')
        outputvalueResult.push('Math.sin(')
        out.value += btn.value +'('
    } else if (btn.value === 'tan') {
        outputValue.push(btn.value +'(')
        outputvalueResult.push('Math.tan(')
        out.value += btn.value +'('
    } else if (btn.value === '√' || btn.value === '&#8730;') {
        outputValue.push(btn.value +'(')
        outputvalueResult.push('Math.sqrt(')
        out.value += btn.value +'('
    } 
}

// add the clik and  mousedown and mouseup events handlers  to evey button  using the for loop
for (let button of buttons) {
    if (button.value) {
        button.addEventListener( 'click' , () =>  {
            buttonOnclickHandler(button, output)
        })
        button.onmousedown = () => button.classList.add('clicked_button')
        button.onmouseup = () => button.classList.remove('clicked_button')
    }
}

// handling the clik event of delete button
deletButton.addEventListener( 'click' , () => {
    outputValue.splice(-1, 1)
    outputvalueResult.splice(-1, 1)
    output.value = outputValue.join('')                
})
// handling the mousedown and mouseup events of delete button
deletButton.onmousedown = () => deletButton.classList.add('clicked_button')
deletButton.onmouseup = () => deletButton.classList.remove('clicked_button')

// handling the clik event of clear button
clearButton.onclick = () => {
    output.value=''
    outputValue=[]
    outputvalueResult=[]
}
// handling the mousedown and mouseup events of clear button
clearButton.onmousedown = () => clearButton.classList.add('clicked_button')
clearButton.onmouseup = () => clearButton.classList.remove('clicked_button')

// handling the clik event of equal button
equal.addEventListener( 'click' , () => {
    let result = outputvalueResult.join('')
    if(result) {
        try {
            let finalResult = new Function(`return ${result}`)()

            if ( !isNaN(finalResult) ) {
                output.value = finalResult 
            } else {
                output.value = 'Error'
            }
        } catch(err) {
            output.value = 'Error'
        }
    } else {
        output.value=""
    }
    
})
// handling the mousedown and mouseup events of equal button
equal.onmousedown = () => equal.classList.add('clicked_button')
equal.onmouseup = () => equal.classList.remove('clicked_button')



const sound = document.getElementById('clickSound')
let delet_icon = document.getElementsByTagName('i')[0] 

delet_icon.addEventListener('click', () => {
    sound.currentTime = 0; // Reset to start for rapid clicks
    sound.play();
});

for (let button of buttons) {
    button.addEventListener('click', () => {
    sound.currentTime = 0; // Reset to start for rapid clicks
    sound.play();
    });
}