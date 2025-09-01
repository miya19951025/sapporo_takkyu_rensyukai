// スムーズスクロール

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ハンバーガーメニュー開閉
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    // メニュークリックで自動的に閉じる
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// 画像拡大モーダル
function setupImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close-modal');
    // 対象画像
    const images = document.querySelectorAll('.tournament-img, .gallery-img');
    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });
    // 閉じる
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        modalImg.src = '';
    });
    // モーダル外クリックで閉じる
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            modalImg.src = '';
        }
    });
}

// 共通ヘッダー・フッターの読み込み
function loadCommonParts() {
    // ヘッダー
    fetch('header.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
            setupHamburger();
        });
    // フッター
    fetch('footer.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        });
}

// ハンバーガーメニューのセットアップ（header読み込み後用）
function setupHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // ヘッダー
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            setupHamburger();
        });

    // フッター
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
    setupImageModal();
}); 