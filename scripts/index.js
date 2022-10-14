const $subscribeBtn = document.getElementById('subscribe')

let isSubscribed;
isSubscribed = localStorage.getItem('isSubscribed')

if (isSubscribed === 'true') {
    $subscribeBtn.innerText = 'Telah berlangganan'
}

$subscribeBtn.onclick = () => {
    if (isSubscribed !== 'true') {
        $subscribeBtn.innerText = 'Telah Berlangganan'
        isSubscribed = 'true'
        localStorage.setItem('isSubscribed', 'true')
    } else {
        $subscribeBtn.innerText = 'Berlangganan'
        isSubscribed = 'false'
        localStorage.setItem('isSubscribed', 'false')
    }
}

// Konten Artikel artikel

const articleContents = [
    {
        title: 'Tutorial Setup Express dengan webpack',
        date: '8 Oktober 2022',
        imgSource: './assets/express-typescript.png',
        imgAlt: 'Express Typescript',
        text: 'Express memang salah satu atau bahkan framework backend nodejs paling populer. tetapi dibalik itu developer express biasanya dihadapi dengan tantangan debugging yang sangat ribet. Nah di artikel kali ini saya akan membahas cara setup express dengan typescript agar debugging lebih mudah'
    },
    {
        title: 'Tutorial Css Grid',
        date: '7 Oktober 2022',
        imgSource: './assets/css-grid.jfif',
        imgAlt: 'CSS Grid',
        text: 'Halo di artikel kali ini seperti sebelumnya saya akan membahas css lagi, khususnya css grid. fungsinya sendiri kurang lebih mirip seperti flexbox yakni untuk mengatur layout, tetapi di css grid kita bisa lebih fleksibel dalam mengatur layout website'
    },
    {
        title: 'Tutorial Css Flexbox',
        date: '6 Oktober 2022',
        imgSource: './assets/css-flexbox.jfif',
        imgAlt: 'CSS Flexbox',
        text: 'Halo di artikel kali ini saya akan memperkenalkan Flexbox. Jadi flexbox adalah salah satu display di css yang kegunaannya adalah untuk mengatur layout dari sebuah website'
    }
]

// Menyajikan konten article dengan dinamik
const $articles = document.getElementById('articles')

articleContents.forEach((article) => {
    const $article = document.createElement('article')
    $article.classList.add('article')

    const $articleTitle = document.createElement('h1')
    $articleTitle.classList.add('article-title')
    $articleTitle.innerText = article.title

    const $articleDate = document.createElement('p')
    $articleDate.classList.add('article-date')

    const $articleBody = document.createElement('div')
    $articleBody.classList.add('article-body')

    const $articleImg = document.createElement('img')
    $articleImg.classList.add('article-img')
    $articleImg.setAttribute('src', article.imgSource)
    $articleImg.setAttribute('alt', article.imgAlt)

    const $articleContent = document.createElement('p')
    $articleContent.classList.add('article-text')
    $articleContent.innerText = article.text

    const $articleLink = document.createElement('a')
    $articleLink.setAttribute('href', './index.html')
    $articleLink.classList.add('article-link')

    const $articleButton = document.createElement('button')

    $articleButton.innerText = 'Selengkapnya'

    $articleLink.appendChild($articleButton)

    $articleBody.appendChild($articleImg)
    $articleBody.appendChild($articleContent)

    $article.appendChild($articleTitle)
    $article.appendChild($articleDate)
    $article.appendChild($articleBody)
    $article.appendChild($articleLink)

    $articles.appendChild($article)
})

