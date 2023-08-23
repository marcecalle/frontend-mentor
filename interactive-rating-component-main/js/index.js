const btnContainer = document.querySelector('.main__rating__btn-container')
const numberSelected = document.querySelector('.main__thankyou__rating-select--number')
const btnSubmit = document.querySelector('.main__rating__submit')
const mainRating = document.querySelector('.main__rating')
const mainThankyou = document.querySelector('.main__thankyou')


btnContainer.addEventListener('click', (e)=>{
   const btnSelect = e.target.innerText
   numberSelected.innerText = btnSelect
   if(btnSelect > 0 || btnSelect <= 5){
      btnSubmit.addEventListener('click', ()=>{
         mainRating.style.display = 'none'
         mainThankyou.style.display = 'flex'
      })
   }
})