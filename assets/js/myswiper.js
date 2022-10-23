const projectCard = document.querySelectorAll('.project-card');
const swipers = [];

[...projectCard].forEach((ele,idx) => {
  const classId = `#${ele.id} .swiper`

  const swiper = new Swiper(classId , {
    spaceBetween: 30,
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  swipers.push(swiper);

  [...ele.querySelectorAll('.slide-link')].forEach((ele,idx2) => {

    ele.addEventListener('click', function (e) {
      swipers[idx].slideTo(idx2, 0);
    });
  });
})

// common 설정 
const cardTop = document.querySelectorAll('.card-top');
const swiperMoreInfoBtn = document.querySelectorAll('.more-info');

[...cardTop].forEach(ele => {
  ele.addEventListener('click',e => {
    const targetCard = e.target.closest('.project-card');
    if(!targetCard.classList.contains('get-smaller')) return

    const targetTitle = targetCard.querySelector('.project-card .title');
    const targetInfo = targetCard.querySelector('.project-card .card-body');


    // 카드 설정
    targetCard.classList.toggle('get-smaller')
    targetCard.style.paddingTop = '0px'

    // 타이틀 크기조정
    targetTitle.style.fontSize = `28px`

    // 탑메뉴 크기조정
    const targetTop = targetCard.querySelector('.card-top');
    targetTop.classList.toggle('active')

    // 인포창 크기조정
    targetInfo.classList.toggle('active')

    // 버튼 생성
    targetCard.querySelector('.more-info').style.display = 'block'
  });
});

[...swiperMoreInfoBtn].forEach((ele) => {
  ele.addEventListener('click',e => {
    const targetCard = e.target.closest('.project-card');
    
    const targetTitle = targetCard.querySelector('.project-card .title');
    const targetInfo = targetCard.querySelector('.project-card .card-body');

    // 카드 설정
    targetCard.classList.toggle('get-smaller')
    targetCard.style.paddingTop = '240px'

    // 타이틀 크기조정
    targetTitle.style.fontSize = `18px`

    // 탑메뉴 스타일조정
    const targetTop = targetCard.querySelector('.card-top');
    targetTop.classList.toggle('active')

    // 인포창 크기조정
    targetInfo.classList.toggle('active')

    // 버튼 삭제
    ele.style.display = 'none'

    e.stopPropagation();
  });
});