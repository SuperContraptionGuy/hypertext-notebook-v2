const CHILD_TEMPALTE = '<div class="cards"><div class="cards-title"><h2>Solutions to problems that may or may not exist</h2></div><div class="cards-body"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ducimus in, delectus excepturi mollitia eveniet nisi rem, impedit harum tempore amet ut,dolorum sed ullam. Sequi accusamus ea aspernatur possimus.</p></div></div>'


function testChildCard(number) {
    for(let i = 0; i < number; i++){
        $('.main-panel').append(CHILD_TEMPALTE)
    }
}

window.addEventListener('load', (event) => {
    testChildCard(6)
})