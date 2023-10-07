let a = "liam"
let b = "17"
let c = "Samarkand"
let d = "school"
let e = "11"

let g = prompt("what is your name?")
if(a === g.trim() ) {
    console.log("next")
    let s = prompt("how old are you?")
    if ( b === s.trim() ) {
        console.log("next")
        let g = prompt("where are your from?")
        if ( c === g.trim() ) {
            console.log("next")
            let q = prompt("where are you study?")
            if (d === q.trim()) {
                console.log("next")
                let o = prompt("which class do you read?")
                if(e === o.trim() ) {
                    console.log("next")
                } else {
                    console.log("home")
                }
            } else {
                console.log("home")
            }
        } else {
            console.log("home")
        }
    } else{
        console.log("home")
    }
} else{
    console.log("home")
}
