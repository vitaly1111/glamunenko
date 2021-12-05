export function smoothScroll() {
	
	const linkButton=document.querySelector('.footer__button')

	
	linkButton.addEventListener('click',e=>{
		e.preventDefault()
		const ID=e.target.getAttribute('href').substr(1);
		if (ID) {
			document.getElementById(ID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	})

}