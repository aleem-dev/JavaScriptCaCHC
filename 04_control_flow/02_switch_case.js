// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

const userStatusCode = 1 // 0 = logged in, 1 = active, 2 = inactive since 5 mins, 3 = away, 4 = in meeting, 5 = dnd, default = logged out

switch (userStatusCode){
    case 0:
        console.log("user is logged in");
        break;
    case 1:
        console.log("user is active");
        break;
    case 2:
        console.log("user is inactive since 5 mins");
        break;
    case 3:
        console.log("user is away");
        break;
    case 4:
        console.log("user is in meeting");
        break;
    case 5:
        console.log("user is dnd");
        break;
    case 6:
        console.log("user is logged in");
        break;
    
    default:
        console.log("userStatusCode error")
}