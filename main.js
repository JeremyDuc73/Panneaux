const panneaux = document.querySelectorAll('.panneau')
console.log(panneaux)
panneaux.forEach(panneau =>{
    panneau.addEventListener('click', ()=>{
        panneau.classList.toggle('panneauOuvert');
    })

})