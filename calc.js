let num = document.querySelectorAll('.num')
let h1 = document.querySelector('.h1')
let h4 = document.querySelector('.h4')
let sign = document.querySelectorAll('.sign')
let remove = document.querySelectorAll('.remove-element')
let dot = document.querySelector('.dot')
let equal = document.querySelector('.equal')

let arr = []
let text1 = ''
let text2 = ''
let count = 0


class CALC {
    num (i) {
        text1 += i.textContent
        text2 += i.textContent
        h1.textContent = text1
        count = 0
        // arr = []
    }

    sign (i) {
        text1 = ''
        arr.push(i.textContent)
        if(arr.length>1) this.equal()
        if(count!=0) {
            let a = text2.split('')
            a.pop()
            h4.textContent = a.join('')
            h4.textContent += i.textContent 
        } else {
            text2 += i.textContent
            h4.textContent = text2
        }
        count++

        
    }

    remove (i) {
        if(i.textContent == 'R') {
            let a = text1.split('')
            a.pop()
            text1 = a.join('')
            let b = text2.split('')
            b.pop()
            text2 = b.join('')
            h1.textContent = text1

        } else {
            h1.textContent = ''
            h4.textContent = ''
            text1 = ''
            text2 = ''
            count = 0
        }
    }

    dot () {
        if(text1 != '') {
            text1 += '.'
            text2 += '.'
            h1.textContent = text1
        }
    }

    equal () {
        let a = h4.textContent.split(h4.textContent.match(/[x|+|÷|-]/))
        if(h4.textContent.match(/[x|+|÷|-]/) == 'x') {
            text2 = +a[0]* +h1.textContent
            h1.textContent = ''
            h4.textContent = text2
            text1 = ''
        } else if(h4.textContent.match(/[x|+|÷|-]/) == '÷') {
            text2 = +a[0]/ +h1.textContent
            h1.textContent = ''
            h4.textContent = text2
            text1 = ''
        } else if(h4.textContent.match(/[x|+|÷|-]/) == '+') {
            text2 = +a[0]+ +h1.textContent
            h1.textContent = ''
            h4.textContent = text2
            text1 = '' 
        } else if(h4.textContent.match(/[x|+|÷|-]/) == '-') {
            text2 = +a[0]- +h1.textContent
            h1.textContent = ''
            h4.textContent = text2
            text1 = ''
        }
    } 
}

let calc = new CALC()

for(let i of num) {
    i.addEventListener('click', () => {
        calc.num(i)
    })
}

for(let i of sign) {
    i.addEventListener('click', () => {
        calc.sign(i)
    })
}

for(let i of remove) {
    i.addEventListener('click', () => {
        calc.remove(i)
    })
}
dot.addEventListener('click', () => {
    calc.dot()
})

equal.addEventListener('click', () => {
    calc.equal()
}) 

