let inputString= ''
const buttons= document.querySelectorAll('.buttons')
const outputBox= document.getElementById('outputBox')
const body = document.body


Array.from(buttons).forEach((item)=>{

    item.addEventListener('click',(e)=>{

        
        if (e.target.innerText === 'C') {
            outputBox.innerText= ''
            inputString= ''
        }
        else if (e.target.innerText === '1/x') {
            inputString = 1/(eval(inputString))
            outputBox.innerText= inputString
        }

        else if (e.target.innerText === '√') {
            inputString= Math.pow(eval(inputString),0.5)
            outputBox.innerText = inputString
        }

        else if (e.target.innerText === '=') {
            inputString = eval(inputString)
            outputBox.innerText= inputString
    }


        else{
            inputString = inputString + e.target.innerText
            outputBox.innerText = inputString
        }

    })
})