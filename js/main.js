const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const dataList = [
    {
        id: 'Product 01',
        name: 'Product 01',
        type: 'bracelets',
        price: 25,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/b1.jpg',
    },
    {
        id: 'Product 02',
        name: 'Product 02',
        type: 'bracelets',
        price: 50,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/b2.jpg',
    },
    {
        id: 'Product 03',
        name: 'Product 03',
        type: 'bracelets',
        price: 35,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/b3.jpg',
    },
    {
        id: 'Product 04',
        name: 'Product 04',
        type: 'bracelets',
        price: 42,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/b4.jpg',
    },
    {
        id: 'Product 05',
        name: 'Product 05',
        type: 'bracelets',
        price: 27,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/b5.jpg',
    },
    {
        id: 'Product 06',
        name: 'Product 06',
        type: 'bracelets',
        price: 15,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/b6.jpg',
    },
    {
        id: 'Product 07',
        name: 'Product 07',
        type: 'bracelets',
        price: 39,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/b7.jpg',
    },
    {
        id: 'Product 08',
        name: 'Product 08',
        type: 'rings',
        price: 200,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/r1.jpg',
    },
    {
        id: 'Product 09',
        name: 'Product 09',
        type: 'rings',
        price: 325,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/r2.jpg',
    },
    {
        id: 'Product 10',
        name: 'Product 10',
        type: 'rings',
        price: 475,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/r3.jpg',
    },
    {
        id: 'Product 11',
        name: 'Product 11',
        type: 'rings',
        price: 365,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/r4.jpg',
    },
    {
        id: 'Product 12',
        name: 'Product 12',
        type: 'rings',
        price: 495,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/r5.jpg',
    },
    {
        id: 'Product 13',
        name: 'Product 13',
        type: 'rings',
        price: 220,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/r6.jpg',
    },
    {
        id: 'Product 14',
        name: 'Product 14',
        type: 'rings',
        price: 300,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/r7.jpg',
    },
    {
        id: 'Product 15',
        name: 'Product 15',
        type: 'earrings',
        price: 80,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/e1.jpg',
    },
    {
        id: 'Product 16',
        name: 'Product 16',
        type: 'earrings',
        price: 65,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/e2.jpg',
    },
    {
        id: 'Product 17',
        name: 'Product 17',
        type: 'earrings',
        price: 73,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/e3.jpg',
    },
    {
        id: 'Product 18',
        name: 'Product 18',
        type: 'earrings',
        price: 79,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/e4.jpg',
    },
    {
        id: 'Product 19',
        name: 'Product 19',
        type: 'earrings',
        price: 68,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/e5.jpg',
    },
    {
        id: 'Product 20',
        name: 'Product 20',
        type: 'earrings',
        price: 55,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/e6.jpg',
    },
    {
        id: 'Product 21',
        name: 'Product 21',
        type: 'earrings',
        price: 45,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/e7.jpg',
    },
    {
        id: 'Product 22',
        name: 'Product 22',
        type: 'necklaces',
        price: 70,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/n1.jpg',
    },
    {
        id: 'Product 23',
        name: 'Product 23',
        type: 'necklaces',
        price: 70,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/n2.jpg',
    },
    {
        id: 'Product 24',
        name: 'Product 24',
        type: 'necklaces',
        price: 60,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/n3.jpg',
    },
    {
        id: 'Product 25',
        name: 'Product 25',
        type: 'necklaces',
        price: 700,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/n4.jpg',
    },
    {
        id: 'Product 26',
        name: 'Product 26',
        type: 'necklaces',
        price: 500,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/n5.jpg',
    },
    {
        id: 'Product 27',
        name: 'Product 27',
        type: 'necklaces',
        price: 665,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/n6.jpg',
    },
    {
        id: 'Product 28',
        name: 'Product 28',
        type: 'necklaces',
        price: 595,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/n7.jpg',
    },
    {
        id: 'Product 29',
        name: 'Product 29',
        type: 'necklaces',
        price: 805,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/n8.jpg',
    },
    {
        id: 'Product 30',
        name: 'Product 30',
        type: 'bracelets',
        price: 690,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/b8.jpg',
    },
    {
        id: 'Product 31',
        name: 'Product 31',
        type: 'rings',
        price: 890,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/r8.jpg',
    },
    {
        id: 'Product 32',
        name: 'Product 32',
        type: 'earrings',
        price: 790,
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        img: 'images/e8.jpg',
    },
]

const cartList = []

const localStorageDataList = "LOCAL_STORAGE_DATA_LIST"
const localStorageCartList = "LOCAL_STORAGE_CART_LIST"
const localStorageBillList = "LOCAL_STORAGE_BILL_LIST"

const navBarLink = $$('.navbar_link')
const shopList = $('.shop_list')
const navBarPrice = $('.navbar_price')
const cartCount = $('.cart_count')
const cartProduct = $('.cart_product')
const homeContainer = $('.home_container')
const shopContainer = $('.shop_container')
const cartContainer = $('.cart_container')
const aboutContainer = $('.about_container')
const shopBtn = $$('.shop_header button')
const cartItem = $('.cart_item')
const cartMoney = $('.cart_money div p')
const category = $$('.category_img')
const noCart = $('.no_cart')
const cartSection = $('.cart_section')
const imageItem = $$('.image_item img')
const gallery = $('.gallery_content')
const galleryInner = $('.gallery_inner img')
const galleryClose = $('.gallery_close')
const next = $('.control.next')
const prev = $('.control.prev')



navBarLink.forEach((item) => {
    item.addEventListener('click', () => {
        $('.navbar_link.active').classList.remove('active')
        item.classList.add('active')
    })
})

category.forEach(item => {
    item.addEventListener('click', () => {
        handleShop()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
})

const handleScrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}



// toasts
const renderToast = (msg) => {
    const toasts = $('#toasts')
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = `
        <i class="fa-solid fa-check toast_icon"></i>
        <p class="toast_msg">${msg}</p>
        <div class="toast_timeline"></div>
    `
    toasts.appendChild(toast)
    
    function removeToast(toast) {
        setTimeout(() => {
            toast.style.animation = 'slideHide 2s linear forwards'
        }, 4000)
    }
    removeToast(toast)
    
    function removeToastsDOM(toast) {
        setTimeout(() => {
            toast.remove()
        }, 6000)
    }
    removeToastsDOM(toast)
}

// save data to local storage
const setDataStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
setDataStorage(localStorageDataList, dataList)
setDataStorage(localStorageCartList, cartList)

// get data from local storage
const getDataStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

// render data
const datas = getDataStorage(localStorageDataList)
const renderData = () => {
    const htmls = datas.map(data => {
        return `
            <div class="shop_item" value=${data.type}>
                <div class="shop_img">
                    <img src=${data.img} alt="">
                </div>
                <span class="shop_value">${data.type}</span>
                <h2 class="shop_name">${data.name}</h2>
                <p class="shop_price">$ ${data.price}</p>
                <div class="shop_btn" onclick="handleAddCart('${data.id}')">
                    <i class="fa-solid fa-bag-shopping" ></i>
                </div>
            </div>
        `
    })
    shopList.innerHTML = htmls.join('')
}
renderData()

// filter data
const shopItem = $$('.shop_item')
shopBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const type = e.target.getAttribute('type')

        $('.shop_header button.active').classList.remove('active')
        e.target.classList.add('active')

        shopItem.forEach(item => {
            if (type === 'all' || item.getAttribute('value') === type) {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
    })
})

// render cart
const renderCart = () => {
    const datasItemCart = getDataStorage(localStorageCartList)
    if (datasItemCart.length === 0) {
        noCart.style.display = 'block'
        cartSection.style.display = 'none'
    }
    const htmls = datasItemCart.map(data => {
        return `
            <tr>
                <td style="width: 0">
                    <div class="cart_img">
                        <img src=${data.img}>
                    </div>
                </td>
                <td>${data.name}</td>
                <td>$ ${data.price}</td>
                <td>
                    <div style="display: flex; justify-content: center; align-items: center">
                        <button class="change_quantity btn_decrease" onclick="handleDecrease('${data.id}')">-</button>
                        <p style="width: 24px">${data.quantity}</p>
                        <button class="change_quantity increase" onclick="handleIncrease('${data.id}')">+</button>
                    </div>
                </td>
                <td>$ ${data.price * data.quantity}</td>
                <td>
                    <i class="fa-solid fa-trash" onclick="handleRemoveCart('${data.id}')"></i>
                </td>
            </tr>
        `
    })
    cartItem.innerHTML = htmls.join('')
}


// add cart
const handleAddCart = (id) => {
    const cartList = getDataStorage(localStorageCartList)
    const addId = id => {
        const itemCart = datas.filter(item => {
            return item.id === id
        })
        itemCart[0].quantity = 1
        cartList.unshift(...itemCart)
    }

    if (cartList.length === 0) {
        addId(id)
    } else {
        let flag = false
        cartList.map(item => {
            if (item.id === id) {
                item.quantity += 1
                flag = true
            }
        })
        
        if (!flag) {
            addId(id)
        }
    }
    
    setDataStorage(localStorageCartList, cartList)
    renderToast('add to cart')
    totalMoney()
    numberCartCount()
}

// decrease and increase quantity
const handleDecrease = id => {
    const datasItemCart = getDataStorage(localStorageCartList)
    datasItemCart.map(data => {
        if (data.id === id && data.quantity > 1) {
            data.quantity -= 1
        }
    })
    setDataStorage(localStorageCartList, datasItemCart)
    renderCart()
    totalMoney()
    numberCartCount()
}

const handleIncrease = id => {
    const datasItemCart = getDataStorage(localStorageCartList)
    datasItemCart.map(data => {
        if (data.id === id && data.quantity < 20) {
            data.quantity += 1
        }
    })
    setDataStorage(localStorageCartList, datasItemCart)
    renderCart()
    totalMoney()
    numberCartCount()
}

// remove cart
const handleRemoveCart = id => {
    const datasItemCart = getDataStorage(localStorageCartList)
    const newCart = datasItemCart.filter(data => {
        return data.id !== id
    })
    setDataStorage(localStorageCartList, newCart)
    renderCart()
    renderToast('remove from cart')
    totalMoney()
    numberCartCount()
}


// total money
const totalMoney = () => {
    const datasItemCart = getDataStorage(localStorageCartList)
    const sum = datasItemCart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity
    }, 0)
    navBarPrice.innerHTML = '$ ' + sum
    cartMoney.innerHTML = 'total: $ ' + sum

}

// number cart count
const numberCartCount = () => {
    const datasItemCart = getDataStorage(localStorageCartList)
    const sum = datasItemCart.reduce((acc, curr) => {
        return acc + curr.quantity
    }, 0)
    cartCount.innerHTML = sum
}

// check out
const handleCheckOut = () => {
    const dataBill = getDataStorage(localStorageCartList)
    setDataStorage(localStorageBillList, dataBill)
    setDataStorage(localStorageCartList, [])
    renderCart()
    totalMoney()
    numberCartCount()
    renderToast('thank you')
}

const handleHome = () => {
    homeContainer.classList.remove('hide')
    shopContainer.classList.add('hide')
    cartContainer.classList.add('hide')
    aboutContainer.classList.add('hide')
}
const handleShop = () => {
    shopContainer.classList.remove('hide')
    homeContainer.classList.add('hide')
    cartContainer.classList.add('hide')
    aboutContainer.classList.add('hide')
}
const handleAbout = () => {
    aboutContainer.classList.remove('hide')
    homeContainer.classList.add('hide')
    shopContainer.classList.add('hide')
    cartContainer.classList.add('hide')
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
const handleCart = () => {
    const datasItemCart = getDataStorage(localStorageCartList)
    
    cartContainer.classList.remove('hide')
    homeContainer.classList.add('hide')
    shopContainer.classList.add('hide')
    aboutContainer.classList.add('hide')
    if (!datasItemCart.length !== 0) {
        noCart.style.display = 'none'
        cartSection.style.display = 'block'
        renderCart()
    }
}

// gallery

let currIndex = 0
imageItem.forEach((img, index) => {
    img.addEventListener('click', () => {
        currIndex = index
        showGallery()
    })
})

const showGallery = () => {
    currIndex == imageItem.length - 1 ? next.classList.add('hide') : next.classList.remove('hide')
    currIndex == 0 ? prev.classList.add('hide') : prev.classList.remove('hide')
    gallery.classList.add('show_gallery')
    galleryInner.src = imageItem[currIndex].src
}

galleryClose.addEventListener('click', () => {
    gallery.classList.remove('show_gallery')
})

next.addEventListener('click', () => {
    currIndex != imageItem.length - 1 ? currIndex++ : undefined
    showGallery()
})

prev.addEventListener('click', () => {
    currIndex != 0 ? currIndex-- : undefined
    showGallery()
})