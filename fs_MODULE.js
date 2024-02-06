//ASYNCHRONOUS
const {readFile, writeFile, read} = require('fs')

readFile('./files/docs/hello.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./files/world1.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./files/docs/hello.txt',' HIIIII',{flag: 'a'},(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})
// console.log(readFileSync('./files/world1.txt','utf8'))




//SYNCHRONOUS
// const {readFileSync, writeFileSync, read} = require('fs')

// console.log(readFileSync('./files/docs/hello.txt','utf8'))
// console.log(readFileSync('./files/world1.txt','utf8'))

// writeFileSync('./files/docs/hello.txt'," Aaryan",{flag: 'a'})