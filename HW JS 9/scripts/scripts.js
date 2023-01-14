document.addEventListener("DOMContentLoaded" , function(){

    let wrapper = document.querySelector('.wrapper');
    Object.assign(wrapper.style,{margin:"0 auto", maxWidth:"250px", display:"flex" , flexWrap:"wrap"})
    
    function getRandomColor(){
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        return randomColor
    }

    function generateBlocks() {
        let div;
        for (let i = 0 ; i < 25 ; i++){
            div = document.createElement('div');
            div.classList.add('block')
            document.getElementById("wrap").append(div);
            Object.assign(div.style,{width:"50px" , height:"50px" ,display:"inline-block" ,backgroundColor: getRandomColor()});
        }
    }
    generateBlocks();

    function generateBlocksInterval(){
        document.querySelectorAll('.block').forEach((elem) => {
            elem.style.backgroundColor = getRandomColor();
        })
    }
    setInterval(generateBlocksInterval , 1000)
})

