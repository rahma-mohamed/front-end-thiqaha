let field = document.querySelector('.items');
let li = Array.from(field.children);
let select = document.getElementById('select');
let ar = [];


for (let i of li){
    const last = i.lastElementChild
    const x = last.textContent.trim();
    const y = Number(x.substring(1));
    i.setAttribute('data-price',y);
    ar.push(i);
}

select.onchange = sortingValue;

function sortingValue(){
    if (this.value === 'difault'){
        while(field.firstChild){
            field.removeChild(field.firstChild);
        }
        field.append(...ar);
    }
    if (this.value === 'LowToHeigh'){
        sortElem(field ,li ,true);
    }
    if (this.value === 'HeighToLow'){
        sortElem(field ,li ,false);
    }
}

function sortElem(field ,li ,asc){
    let dm, sortLi;
    dm = asc ? 1 : -1 ;
    sortLi = li.sort((a,b)=>{
        const ax = a.getAttribute('data-price');
        const bx = b.getAttribute('data-price');

        return ax> bx ? (1*dm) : (-1*dm);
    });
    while(field.firstChild){
        field.removeChild(field.firstChild);
    }
    field.append(...sortLi);
}

const product = [
    {
        id : 1,
        image : '../imgs/احذيه/512w-KkWGSL.jpg',
        titel : ' Lorem ipsum dolor, sit amet consectetur!',
        price : 45.78,
        catigory :'shose'
    },
    {
        id : 1,
        image : '../imgs/احذيه/512w-KkWGSL.jpg',
        titel : ' Lorem ipsum dolor, sit amet consectetur!',
        price : 45.78,
        catigory :'shose'
    },
    {
        id : 1,
        image : '../imgs/اطفال/2c8577ff6e82ae723c86e9b6c8f314a35bad91fb.jpg',
        titel : ' Lorem ipsum dolor, sit amet consectetur!',
        price : 145.78,
        catigory :'kids'
    },
    {
        id : 1,
        image : '../imgs/اكسسوار/41ol08lfdCL._AC_.jpg',
        titel : ' Lorem ipsum dolor, sit amet consectetur!',
        price : 46.78,
        catigory :'Accessories'
    },
    {
        id : 2,
        image : '../imgs/الرياضه/16cf4994163e0331f5ffa4eda81066006f2bcb5b.jpg',
        titel : ' Lorem ipsum dolor, sit amet consectetur!',
        price : 65.78,
        catigory :'Sport'
    },
    {
        id : 2,
        image : '../imgs/النساء/167221278621114c063e45e1f6221e1c4f96a42763.webp',
        titel : ' Lorem ipsum dolor, sit amet consectetur!',
        price : 245.78,
        catigory :'Women'
    },
    {
        id : 2,
        image : '../imgs/تلفون/71PJQjOX1dL._AC_UL320_.jpg',
        titel : ' Lorem ipsum dolor, sit amet consectetur!',
        price : 1245.78,
        catigory :'Phone'
    },
    {
        id : 3,
        image : '../imgs/رجالي/Cotton-Construction-Worker-Uniform-Workwear-Clothes-made.jpg',
        titel : ' Lorem ipsum dolor, sit amet consectetur!',
        price : 850.78,
        catigory :'Men'
    },
    {
        id : 3,
        image : '../imgs/كاميرات/819FppDPXLL._AC_SX569_.jpg',
        titel : ' Lorem ipsum dolor, sit amet consectetur!',
        price : 300,
        catigory :'Camera'
    },
    {
        id : 3,
        image : '../imgs/لاب توب/61Hq7mU79LL._AC_SX569_ (1).jpg',
        titel : ' Lorem ipsum dolor, sit amet consectetur!',
        price : 4580,
        catigory :'Laptop'
    }
]
const gatigories = [...new Set(product.map((item)=>{
    return item
}))]

const displayItem = (item) =>{
    document.getElementById('root').innerHTML = items.map((item)=>{
        var {image,titel,price} = item;
        return()
    })
}