while(true){

    const nam = prompt("Name");
    const snam = prompt("Surename");
    const ag = Number(prompt("age")); 
    

    const num=(a, b, c)=>{ 
       
        if (isNaN(c)){  
            return ("try again");    
        }

        if (a===""|| b===""|| c===""){
              
            return ("try again");     
        }
        
        if (a===null|| b===null|| c===null){
                
            return ("try again");    
        }
       
        else {
            const obj= {name: a.trim(),
                    Surename: b.trim(),
                    Age: c 
        }
        for(let i in obj) {
            console.log(`${i}, ${obj[i]}`)
       
        }
        return;
        }
        }
        const data=  num(nam,snam,ag);
        console.log(data);

        if(data!=="try again"){
        break; }


        }