export default function initAnimacaoScroll(){

  const sections = document.querySelectorAll('[data-js="scroll"]');

  if(sections.length){
    const windowHalfSize = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalfSize) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}