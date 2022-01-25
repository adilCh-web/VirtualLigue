const team1 = ["Fc Barcelona","Fc Liverpool", "Real Madrid","Bayern Munich","Manchester City"]
const team2 = ["Manchester Utd","Paris S-G","Ac Milan","Juventus","Chelsea"]
const team3 = ["Fc Valencia","Borussia Dortmund","Inter Milan","Fc Arsenal","Ajax Amsterdam","Atlético Madrid"]
const team4 = ["Fc Porto","Tottenham","Fc Sevilla","Red Bull Salzburg","SSC Napoli","Bayer Leverkusen"]
const team5 = ["Fc Lyon","As Roma","Villarreal","Benifica","PSV Eindhoven"]
const team6 = ["Slavia Prague","Shakhtar Donetsk","Olympiakos","Zenit St. Petersburg","Dinamo Zagreb"]
let teams 
teams = team2.concat(team3,team4,team5,team6)
let logos = ['./img/barcelona.png', './img/liverpool.png', './img/madrid.png', './img/bayern.png', './img/city.png', './img/united.png', './img/paris.png', './img/milan.png', './img/juventus.png', './img/chelsea.png', './img/valencia.png', './img/dortmund.png', './img/inter.png', './img/arsenal.png', './img/ajax.png', './img/atletico.png', './img/porto.png', './img/tottenham.png', './img/sevilla.png', './img/salzburg.png', './img/napoli.png', './img/leverkusen.png', './img/lyon.png', ' ./img/roma.png', './img/villarreal.png', './img/benifica.png', './img/eindhoven.png', './img/prague.png', './img/shakhtar.png', './img/olympiakos.png', './img/zenit.png. ./img/petersburg.png', './img/dinamo.png']
//console.log(teams.length)

//lets separate the stronger teams --team1
let groups = [[],[],[],[],[],[],[],[]]
let n=0;
let  m=0
let indexSelected = []
while(n !== team1.length )
{
    let index = Math.floor(Math.random()*team1.length)
    if(indexSelected.includes(index) === false)
    {
        indexSelected.push(index)
        groups[m].push(team1[index])
        m+=1
        n+=1
    }
}
console.log(groups)
let alreadyChoised = []

// adding the rst of the teams 
for(let i=0;i<groups.length;i++)
{
    while(groups[i].length != 4)
    {
        let index = Math.floor(Math.random()*teams.length)
        let team = teams[index]
        if(alreadyChoised.includes(team) == false)
            {
                groups[i].push(team)
                alreadyChoised.push(team)
            }
        
    }
}


let scrores = [
    [
        scooring(groups[0][0],groups[0][1]),
        scooring(groups[0][2],groups[0][3]),
        scooring(groups[0][0],groups[0][2]),
        scooring(groups[0][1],groups[0][3]),
        scooring(groups[0][0],groups[0][3]),
        scooring(groups[0][1],groups[0][2])
    ],
    [
        scooring(groups[1][0],groups[1][1]),
        scooring(groups[1][2],groups[1][3]),
        scooring(groups[1][0],groups[1][2]),
        scooring(groups[1][1],groups[1][3]),
        scooring(groups[1][0],groups[1][3]),
        scooring(groups[1][1],groups[1][2])
    ],

    [
        scooring(groups[2][0],groups[2][1]),
        scooring(groups[2][2],groups[2][3]),
        scooring(groups[2][0],groups[2][2]),
        scooring(groups[2][1],groups[2][3]),
        scooring(groups[2][0],groups[2][3]),
        scooring(groups[2][1],groups[2][2])
        
    ],
    [
        scooring(groups[3][0],groups[3][1]),
        scooring(groups[3][2],groups[3][3]),
        scooring(groups[3][0],groups[3][2]),
        scooring(groups[3][1],groups[3][3]),
        scooring(groups[3][0],groups[3][3]),
        scooring(groups[3][1],groups[3][2])
    ],
    [
        scooring(groups[4][0],groups[4][1]),
        scooring(groups[4][2],groups[4][3]),
        scooring(groups[4][0],groups[4][2]),
        scooring(groups[4][1],groups[4][3]),
        scooring(groups[4][0],groups[4][3]),
        scooring(groups[4][1],groups[4][2])
    ],

    [
        scooring(groups[5][0],groups[5][1]),
        scooring(groups[5][2],groups[5][3]),
        scooring(groups[5][0],groups[5][2]),
        scooring(groups[5][1],groups[5][3]),
        scooring(groups[5][0],groups[5][3]),
        scooring(groups[5][1],groups[5][2])
    ],

    [
        scooring(groups[6][0],groups[6][1]),
        scooring(groups[6][2],groups[6][3]),
        scooring(groups[6][0],groups[6][2]),
        scooring(groups[6][1],groups[6][3]),
        scooring(groups[6][0],groups[6][3]),
        scooring(groups[6][1],groups[6][2])
    ],

    [
        scooring(groups[7][0],groups[7][1]),
        scooring(groups[7][2],groups[7][3]),
        scooring(groups[7][0],groups[7][2]),
        scooring(groups[7][1],groups[7][3]),
        scooring(groups[7][0],groups[7][3]),
        scooring(groups[7][1],groups[7][2])
    ]
]


let object = document.getElementById("groups")

function displayGroups()
{
    document.getElementById("classification").style.display = "none"
    document.getElementById("displayResult").style.display = "block"

    if(object.value == "group1")
    
    
    {
        document.getElementById("info").innerHTML =  groups[0][0]+  "<br>" + 
          groups[0][1] +  "<br>" + groups[0][2]  + "<br>" + groups[0][3] + "<br>" 
    }

      
    else if(object.value ==="group2")
    {
        document.getElementById("info").innerHTML = groups[1][0] + "<br>" + groups[1][1] + "<br>" + groups[1][2] + "<br>" + groups[1][3]
    }
    else if(object.value ==="group3")
        {
            document.getElementById("info").innerHTML = groups[2][0] + "<br>" + groups[2][1] + "<br>" + groups[2][2] + "<br>" + groups[2][3]
        }
        else if(object.value === "group4")
        {
            document.getElementById("info").innerHTML = groups[3][0] + "<br>" + groups[3][1] + "<br>" + groups[3][2] + "<br>" + groups[3][3]
        }

        else if(object.value === "group5")
        {
            document.getElementById("info").innerHTML = groups[4][0] + "<br>" + groups[4][1] + "<br>" + groups[4][2] + "<br>" + groups[4][3]

        }

        else if(object.value === "group6")
        {
            document.getElementById("info").innerHTML = groups[5][0] + "<br>" + groups[5][1] + "<br>" + groups[5][2] + "<br>" + groups[5][3]
        }

        else if(object.value === "group7")
        {
            document.getElementById("info").innerHTML = groups[6][0] + "<br>" + groups[6][1] + "<br>" + groups[6][2] + "<br>" + groups[6][3]
        }
      else if (object.value === "group8")
        {
            document.getElementById("info").innerHTML = groups[7][0] + "<br>" + groups[7][1] + "<br>" + groups[7][2] + "<br>" + groups[7][3]
        }

        displayGames()
}

object.addEventListener("click",displayGroups)



function scooring(t1,t2)
{
    const numbersOfTries = [1,1,2,2,2,3,3,3,3,4,4,5,5,6,7]
    const staminaTeam1 = [0,0,1,1,1,1,1,1,1]
    const staminaTeam2 = [0,0,0,1,1,1,1,1,1]
    const staminaTeam3 = [0,0,0,0,1,1,1,1,1]
    const staminaTeam4 = [0,0,0,0,0,1,1,1,1]
    const staminaTeam5 = [0,0,0,0,0,0,1,1,1]
    const staminaTeam6 = [0,0,0,0,0,0,0,1,1]
    let goalTeam1 = 0
    let goalTeam2 = 0

    for(let i=0;i<numbersOfTries[Math.floor(Math.random()*numbersOfTries.length)];i++)
    {
        if(team1.includes(t1))
        {
            goalTeam1+=staminaTeam1[Math.floor(Math.random()*staminaTeam1.length)]
        }
        if(team1.includes(t2))
        {
            goalTeam2+=staminaTeam1[Math.floor(Math.random()*staminaTeam1.length)]
        }
        if(team2.includes(t1))
        {
            goalTeam1+=staminaTeam2[Math.floor(Math.random()*staminaTeam2.length)]
        }
        if(team2.includes(t2))
        {
            goalTeam2+=staminaTeam2[Math.floor(Math.random()*staminaTeam2.length)]
        }
        if(team3.includes(t1))
        {
            goalTeam1+=staminaTeam3[Math.floor(Math.random()*staminaTeam3.length)]
        }
        if(team3.includes(t2))
        {
            goalTeam2+=staminaTeam3[Math.floor(Math.random()*staminaTeam3.length)]
        }
        if(team4.includes(t1))
        {
            goalTeam1+=staminaTeam4[Math.floor(Math.random()*staminaTeam4.length)]
        }
        if(team4.includes(t2))
        {
            goalTeam2+=staminaTeam4[Math.floor(Math.random()*staminaTeam4.length)]
        }
        if(team5.includes(t1))
        {
            goalTeam1+=staminaTeam5[Math.floor(Math.random()*staminaTeam5.length)]
        }
        if(team5.includes(t2))
        {
            goalTeam2+=staminaTeam5[Math.floor(Math.random()*staminaTeam5.length)]
        }
        if(team6.includes(t1))
        {
            goalTeam1+=staminaTeam6[Math.floor(Math.random()*staminaTeam6.length)]
        }
        if(team6.includes(t2))
        {
            goalTeam2+=staminaTeam6[Math.floor(Math.random()*staminaTeam6.length)]
        }
    }
    return [goalTeam1,goalTeam2]
}


//console.log(groups[0][0] + " " + scooring(groups[0][0],groups[0][1])[0] + " : " + scooring(groups[0][0],groups[0][1])[1] + " " + groups[0][1] )


function displayGames()
{

    // lets remove the previous displayed result on the divs if they were displayed
    if (document.contains(document.getElementById("div1")))
    {
        document.getElementById("div1").remove()
    }
    if (document.contains(document.getElementById("div2")))
    {
        document.getElementById("div2").remove()
    }
    if (document.contains(document.getElementById("div3")))
    {
        document.getElementById("div3").remove()
    }
    // creating/recreating divs
    //let divLogo1 = document.createElement("div")
    //divLogo1.setAttribute("id","div1logo1")
    //let divLogo2 = document.createElement("div")
    //divLogo2.setAttribute("id","div1logo2")
    let divTeam1 = document.createElement("div")
    divTeam1.setAttribute("id","div1")
    let divResult = document.createElement("div")
    divResult.setAttribute("id","div2")
    let divTeam2 = document.createElement("div")
    divTeam2.setAttribute("id","div3")

    console.log("clisked")
    console.log(object.value)
    for(let i = 0;i<groups.length;i++)
    {

        let p1=0, p2=0, p3 =0, p4 = 0
        console.log("group"+ Number(i+1))
        if(object.value == "group"+ Number(i+1))
        {
            //console.log("condition met")

            divTeam1.innerHTML = 
            groups[i][0] + "<br>" +
            groups[i][2] + "<br>" + "<br>" +
            groups[i][0] + "<br>" +
            groups[i][1] + "<br>" + "<br>" +
            groups[i][0] + "<br>" + 
            groups[i][1] 
            document.getElementById("result").appendChild(divTeam1)

            divResult.innerHTML = 
            scrores[i][0].toString().replace(",", " - ") + "<br>" +
            scrores[i][1].toString().replace(",", " - ") + "<br>" + "<br>" +
            scrores[i][2].toString().replace(",", " - ") + "<br>" +
            scrores[i][3].toString().replace(",", " - ") + "<br>" + "<br>" +
            scrores[i][4].toString().replace(",", " - ") + "<br>" +
            scrores[i][5].toString().replace(",", " - ")

            //points Game1
            if(scrores[i][0][0] > scrores[i][0][1])
            {
                p1+=3
            }
            else if(scrores[i][0][0] < scrores[i][0][1])
            {
                p2+=3
            }
            else{
                p1+=1
                p2+=1
            }
                        //points Game2
            if(scrores[i][1][0] > scrores[i][1][1])
            {
                p3+=3
            }
            else if(scrores[i][1][0] < scrores[i][1][1])
            {
                p4+=3
            }
            else{
                p3+=1
                p4+=1
            }
                        //points Game3
            if(scrores[i][2][0] > scrores[i][2][1])
            {
                p1+=3
            }
            else if(scrores[i][2][0] < scrores[i][2][1])
            {
                p4+=3
            }
            else{
                p1+=1
                p4+=1
            }
                        //points Game4
            if(scrores[i][3][0] > scrores[i][3][1])
            {
                p2+=3
            }
            else if(scrores[i][3][0] < scrores[i][3][1])
            {
                p3+=3
            }
            else{
                p2+=1
                p3+=1
            }
                        //points Game5
            if(scrores[i][4][0] > scrores[i][4][1])
            {
                p1+=3
            }
            else if(scrores[i][4][0] < scrores[i][4][1])
            {
                p3+=3
            }
            else{
                p3+=1
                p1+=1
            }
                        //points Game6
            if(scrores[i][5][0] > scrores[i][5][1])
            {
                p2+=3
            }
            else if(scrores[i][5][0] < scrores[i][5][1])
            {
                p4+=3
            }
            else{
                p4+=1
                p2+=1
            }
            document.getElementById("classification").innerHTML = 
            groups[i][0] + " : " + p1 +"<br>" +
            groups[i][1] + " : " + p2 +"<br>" + 
            groups[i][2] + " : " + p3 +"<br>" +
            groups[i][3] + " : " + p4 

            document.getElementById("result").appendChild(divResult)
            divTeam2.innerHTML = 
            groups[i][1] + "<br>" +
            groups[i][3] + "<br>" + "<br>" +
            groups[i][3] + "<br>" +
            groups[i][2] + "<br>" + "<br>" +
            groups[i][2] + "<br>" +
            groups[i][3] 
            document.getElementById("result").appendChild(divTeam2)
            divResult.style.display = "none"

        }
    }
    
}

function displayResult()
{
    document.getElementById("div2").style.display = "block"

    setTimeout(()=>{document.getElementById("classification").style.display = "block"},4000)
}


//console.log(scrores)