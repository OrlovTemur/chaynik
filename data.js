let data = [
    {
        img: './img/chaynik1.jpg',
        title: 'Медный чайник с <br> фарфоровой ручкой',
        price: '1 953 грн',
        info: 'sale'
    },
    {
        img: './img/chaynik2.jpg',
        title: 'Медный чайник с <br> фарфоровой ручкой',
        price: '1 953 грн',
        info: 'sale'
    },
    {
        img: './img/chaynik3.jpg',
        title: 'Медный чайник с <br> фарфоровой ручкой',
        price: '1 953 грн',
        info: 'sale'
    }
]

let data2 = [
    {
        img: './img/ava.svg',
        name: 'Иван Иванов',
        date: '20.10.21',
        info: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. '
    },
    {
        img: './img/ava.svg',
        name: 'Иван Иванов',
        date: '20.10.21',
        info: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. '
    },
    {
        img: './img/ava.svg',
        name: 'Иван Иванов',
        date: '20.10.21',
        info: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. '
    }
]

let data3 = [
    {
        img: './img/potion 1.svg',
        name: 'Аутентичность',
        info: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
        next: 'Читать больше'
    },
    {
        img: './img/potion 1.svg',
        name: 'Изысканность',
        info: 'Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....',
        next: 'Читать больше'
    },
    {
        img: './img/potion 1.svg',
        name: 'Честная оплата',
        info: 'Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c...',
        next: 'Читать больше'
    },
    {
        img: './img/potion 1.svg',
        name: 'Большой ассортимент',
        info: 'У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...',
        next: 'Читать больше'
    },
    {
        img: './img/potion 1.svg',
        name: 'Доставка по всему миру',
        info: 'Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.',
        next: 'Читать больше'
    },
    {
        img: './img/potion 1.svg',
        name: 'Гарантия качества',
        info: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции.',
        next: 'Читать больше'
    },
    {
        img: './img/potion 1.svg',
        name: 'Удобство в использовании',
        info: 'Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной...',
        next: 'Читать больше'
    },
    {
        img: './img/potion 1.svg',
        name: 'Забота об окружающей среде',
        info: 'От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту....',
        next: 'Читать больше'
    }
]

let wrap = document.querySelector('.wrap-flex')
let wrapper = document.querySelector('.wrapper')
let wrapper1 = document.querySelector('.wrapper1')
let wrapper2 = document.querySelector('.wrapper2')

for(let item of data) {
    let box = document.createElement('div')
    box.classList.add('box')

    let chay = document.createElement('img')
    chay.classList.add('chay')
    chay.src = item.img

    let box2 = document.createElement('div')
    box2.classList.add('box2')

    let nazvanie = document.createElement('p')
    nazvanie.classList.add('nazvanie')
    nazvanie.innerHTML = item.title

    let cena = document.createElement('p')
    cena.classList.add('cena')
    cena.innerHTML = item.price


    box2.append(nazvanie, cena)
    box.append(chay, box2)
    wrap.append(box)
    // sale





}

for(let item of data) {
    let box = document.createElement('div')
    box.classList.add('box')

    let chay = document.createElement('img')
    chay.classList.add('chay')
    chay.src = item.img

    let box2 = document.createElement('div')
    box2.classList.add('box2')

    let nazvanie = document.createElement('p')
    nazvanie.classList.add('nazvanie')
    nazvanie.innerHTML = item.title

    let cena = document.createElement('p')
    cena.classList.add('cena')
    cena.style.color = '#9B0000'
    cena.innerHTML = item.price

    let sale = document.createElement('p')
    sale.classList.add('sale')
    sale.innerHTML = item.price

    let dopBox = document.createElement('div')
    dopBox.classList.add('dopBox')

    let saleBaner = document.createElement('p')
    saleBaner.classList.add('saleBaner')
    saleBaner.innerHTML = item.info

    dopBox.append(saleBaner)
    box2.append(nazvanie, cena, sale)
    box.append(chay, box2, dopBox)
    wrapper.append(box)
}

for(let item of data2) {
    let el = document.createElement('div')
    el.classList.add('el')

    let ava = document.createElement('img')
    ava.classList.add('ava')

    let name = document.createElement('p')
    name.classList.add('name')

    let text = document.createElement('p')
    text.classList.add('text')

    let date = document.createElement('p')
    date.classList.add('date')

    el.append(ava, name, text, date)
    wrapper1.append(el)

    date.innerHTML = item.date
    text.innerHTML = item.info
    ava.src = item.img
    name.innerHTML = item.name
}

for(let item of data3) {
    let box = document.createElement('div')
    box.classList.add('nowrap')

    let bg = document.createElement('div')
    bg.classList.add('bg')

    let name = document.createElement('p')
    name.classList.add('argument')

    let arg = document.createElement('p')
    arg.classList.add('text')

    let next = document.createElement('next')
    next.classList.add('next')

    let img = document.createElement('img')
    img.classList.add('pohuy')


    bg.append(img)
    box.append(bg, name, arg, next)
    wrapper2.append(box)

    img.src = item.img
    next.innerHTML = item.next
    arg.innerHTML = item.info
    name.innerHTML = item.name
}

document.querySelector('.katal2').onclick = () => {
    window.scrollTo(pageYOffset, 0);
}