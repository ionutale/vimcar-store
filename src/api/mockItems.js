export const items = [
    'h38ss-dtbl-sel-201603',
    'h38ss-dtgr-sel-201603',
    'h38ss-dtrd-sel-201603',
    'h42ss-stbk-sel-201603',
    's42gd-nsgb-sel-201603',
    's42rg-nsdb-sel-201603',
    's42sg-nsbk-sel-201603',
    's42si-nssb-sel-201603',
]

const colors = {
    'sb': 'Scuba Blue ',        
    'bk': 'Black ',        
    'db': 'Royal Blue ',
    'gb': 'Gold/Royal Blue ',
    'rd': 'Capucine ',
    'gr': 'Etain ',
    'bl': 'Blue Jean ',
}


const screenSize = {
    '38': '38mm',
    '42': '42mm'
}

const bandType = {
    'dt': 'Double Tour,',        
    'st': 'Single Tour,',        
    'ns': 'Woven Nylon',        
}

export const createName = imageName => {
    const screenS = imageName.substring(0, 3)
    const watchC = imageName.substring(3, 2)
    const bandT = imageName.substring(6, 2)
    const col = imageName.substring(8, 2)

    const colorWatchCase = watchC === 'ss' ? 
    'Stainless Stell Case with ' :
    `${col[watchC]} Aluminum Case with `

    return bandType === 'ns' ? 
    `${screenSize[screenS]} ${colors[col]} ` :
    `${bandType[bandT]} ${screenSize[screenS]} ${colors[col]} ` 
}

