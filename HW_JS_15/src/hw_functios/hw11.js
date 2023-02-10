export async function getRandomChinese(length){
    let sign = '';
    for (let i = 0 ; i < length ; i++){
        let date = Date.now().toString().slice(-5);
        let symbol = String.fromCharCode(date);
        sign += symbol;
        await new Promise ((res)=>{ 
            setTimeout(()=>{ res() },50)
        })
    }
    console.log('Homework 11: ' + sign);
}
