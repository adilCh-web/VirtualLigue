const team1 = ["Fc Barcelona","Fc Liverpool", "Real Madrid","Bayern Munich","Manchester City"]

const team2 = ["Manchester Utd","Paris S-G","Ac Milan","Juventus","Chelsea"]
const team3 = ["Fc Valencia","Borussia Dortmund","Inter Milan","Fc Arsenal","Ajax Amsterdam","Atlético Madrid"]
const team4 = ["Fc Porto","Tottenham","Fc Sevilla","Red Bull Salzburg","SSC Napoli","Bayer Leverkusen"]
const team5 = ["Fc Lyon","As Roma","Villarreal","Benifica","PSV Eindhoven"]
const team6 = ["Slavia Prague","Shakhtar Donetsk","Olympiakos","Zenit St. Petersburg","Dinamo Zagreb"]
let teams 
teams = team2.concat(team3,team4,team5,team6)


var storeInnerHtml
let teams16 = []
var teams8 = []
let teams4 = []
FinalTeams = []

let groupNotPlayed = []
for(let i =1;i<9;i++){groupNotPlayed.push("group"+i)}


//console.log(teams.length)

//lets separate the stronger teams --team1
let groups = [[],[],[],[],[],[],[],[]]
let n=0;

let indexSelected = []
while(n !== team1.length )
{
    let index = Math.floor(Math.random()*team1.length)
    if(indexSelected.includes(index) === false)
    {
        indexSelected.push(index)
        groups[n].push(team1[index])
       
        n+=1
    }
}
// console.log(groups)
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
    if(groupNotPlayed.includes(object.value) == true)

    {
        groupNotPlayed.splice(groupNotPlayed.indexOf(object.value),1)
    }
    document.getElementById("displayResult").style.display = "block"

    document.getElementsByTagName("table")[0].style.display = "none"

    for(let i =1;i<9;i++)
    {
    let group = "group"+i
    if(object.value == group)
        {
            document.getElementById("info").innerHTML =  groups[i-1][0]+  "<br>" + 
            groups[i-1][1] +  "<br>" + groups[i-1][2]  + "<br>" + groups[i-1][3] + "<br>" 

        }

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
 

    let divTeam1 = document.createElement("div")
    divTeam1.setAttribute("id","div1")
    let divResult = document.createElement("div")
    divResult.setAttribute("id","div2")
    let divTeam2 = document.createElement("div")
    divTeam2.setAttribute("id","div3")

    //console.log("ckicked")
    //console.log(object.value)
    for(let i = 0;i<groups.length;i++)
    {

        let p1=0, p2=0, p3 =0, p4 = 0 
        let g1 =0, g2=0 ,g3=0, g4=0

        //console.log("group"+ Number(i+1))
        if(object.value == "group"+ Number(i+1))
        {
            //console.log("condition met")

            // div teams 1

            divTeam1.innerHTML = 
            groups[i][0] + "<br>" +
            groups[i][2] + "<br>" + "<br>" +
            groups[i][0] + "<br>" +
            groups[i][1] + "<br>" + "<br>" +
            groups[i][0] + "<br>" + 
            groups[i][1] 
            document.getElementById("result").appendChild(divTeam1)

            // div result games

            divResult.innerHTML = 
            scrores[i][0].toString().replace(",", " - ") + "<br>" +
            scrores[i][1].toString().replace(",", " - ") + "<br>" + "<br>" +
            scrores[i][2].toString().replace(",", " - ") + "<br>" +
            scrores[i][3].toString().replace(",", " - ") + "<br>" + "<br>" +
            scrores[i][4].toString().replace(",", " - ") + "<br>" +
            scrores[i][5].toString().replace(",", " - ")

            document.getElementById("result").appendChild(divResult)
            //div teams 2
            divTeam2.innerHTML = 
            groups[i][1] + "<br>" +
            groups[i][3] + "<br>" + "<br>" +
            groups[i][3] + "<br>" +
            groups[i][2] + "<br>" + "<br>" +
            groups[i][2] + "<br>" +
            groups[i][3] 
            document.getElementById("result").appendChild(divTeam2)
            divResult.style.display = "none"
            

            //points Game1
            g1+= scrores[i][0][0]
            g2+= scrores[i][0][1]
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
            //points & goals Game2
            g3+= scrores[i][1][0]
            g4+= scrores[i][1][1]
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
            //points & goals Game3
            g1+=scrores[i][2][0]
            g4+=scrores[i][2][1]
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
            //points & goals Game4

            g2+=scrores[i][3][0]
            g3+=scrores[i][3][1]
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
            //points & goals Game5
            g1+=scrores[i][4][0] 
            g3+=scrores[i][4][1]
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
            //points & goals Game6

            g2+=scrores[i][5][0]
            g4+=scrores[i][5][1]
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
            // table classifications 
            let teamAndPoint = [[p1,g1,groups[i][0]],[p2,g2,groups[i][1]],[p3,g3,groups[i][2]],[p4,g4,groups[i][3]]]
            document.getElementById("team1").innerHTML = teamAndPoint.sort().reverse()[0][2]
            document.getElementById("team2").innerHTML = teamAndPoint.sort().reverse()[1][2]
            document.getElementById("team3").innerHTML = teamAndPoint.sort().reverse()[2][2]
            document.getElementById("team4").innerHTML = teamAndPoint.sort().reverse()[3][2]
            document.getElementById("team1P").innerHTML = teamAndPoint.sort().reverse()[0][0]
            document.getElementById("team2P").innerHTML =teamAndPoint.sort().reverse()[1][0]
            document.getElementById("team3P").innerHTML =teamAndPoint.sort().reverse()[2][0]
            document.getElementById("team4P").innerHTML = teamAndPoint.sort().reverse()[3][0]
            document.getElementById("team1G").innerHTML = teamAndPoint.sort().reverse()[0][1]
            document.getElementById("team2G").innerHTML =teamAndPoint.sort().reverse()[1][1]
            document.getElementById("team3G").innerHTML =teamAndPoint.sort().reverse()[2][1]
            document.getElementById("team4G").innerHTML = teamAndPoint.sort().reverse()[3][1]

            //passing the qualifying team to the teams16 array
            if (teams16.includes(teamAndPoint.sort().reverse()[0][2]) == false)
            {
                teams16.push(teamAndPoint.sort().reverse()[0][2])
            }
            if (teams16.includes(teamAndPoint.sort().reverse()[1][2]) == false)
            {
                teams16.push(teamAndPoint.sort().reverse()[1][2])
            }


        }
    }
    
}



function displayResult()   
{
    document.getElementById("div2").style.display = "block"

    setTimeout(()=>{document.getElementsByTagName("table")[0].style.display = "block"},10000)
}


//console.log(scrores)

function drawAndReseult(teams,numberOfTeams,btn)
{
    let qualifiedTeam = []
    if(teams.length == numberOfTeams)
    {
        btn.setAttribute('disabled', 'disabled')
        let decrease = Number(numberOfTeams-1)
        document.getElementById("round16teams1").innerHTML= document.getElementById("round16teams1").innerHTML + "<hr>" + "<hr>" 

        document.getElementById("round16Result").innerHTML= document.getElementById("round16Result").innerHTML + "<hr>" + "<hr>" 

        document.getElementById("round16teams2").innerHTML= document.getElementById("round16teams2").innerHTML + "<hr>" + "<hr>" 
        for(let i =0;i<numberOfTeams/2;i++)
        {   
            document.getElementById("round16teams1").innerHTML = document.getElementById("round16teams1").innerHTML+ "<br>" + teams[i]

            document.getElementById("round16teams2").innerHTML = document.getElementById("round16teams2").innerHTML + "<br>" + teams[decrease] 
            console.log(teams[decrease])
 
            let result = scooring(teams[i],teams[decrease])
            document.getElementById("round16Result").innerHTML =document.getElementById("round16Result").innerHTML+ "<br>" + result.toString().replace(","," - ") 
            if(result[0] > result[1])
            {
                qualifiedTeam.push(teams[i])
            }
            else if(result[0] < result[1])
            {
                qualifiedTeam.push(teams[decrease])
            }
            else
            {
                let index = Math.floor(Math.random()*2)
                qualifiedTeam.push([teams[i],teams[decrease]][index])
            }
            decrease-=1


        }
        console.log(qualifiedTeam)
        return qualifiedTeam
        
    }

}
// phase 16 teams
function display16Teams()
{
    if(teams16.length == 16)
    {
        teams8 = drawAndReseult(teams16,16,document.getElementById("button16"))
    }
    else
    {
        
        console.log(groupNotPlayed)
        document.getElementById("infoMessage").innerHTML = groupNotPlayed.toString().replace(",", " ") + " Still In Play";
        setTimeout(() => { document.getElementById("infoMessage").innerHTML = ""
                
        }, 4000);
       
    }


}


function quarterFinal()
{
    console.log(teams8.length)
    if (teams8.length == 8)
    {
        teams4 = drawAndReseult(teams8,8,document.getElementById("button8"))
    }
    else
    {

        document.getElementById("infoMessage").innerHTML = "check this Round later";
        setTimeout(() => { document.getElementById("infoMessage").innerHTML = ""

        }, 4000);    
    }

   
}


function semiFinal()
{
    console.log("hallooooo")
    if (teams4.length == 4)
    {
        FinalTeams = drawAndReseult(teams4,4,document.getElementById("button4"))
    }
    else
    {
        document.getElementById("infoMessage").innerHTML = "check this Round later";
        setTimeout(() => { document.getElementById("infoMessage").innerHTML = ""

        }, 4000);    
    }
}

function final()

    {

        if (FinalTeams.length == 2)
        {
            let winner = drawAndReseult(FinalTeams,2,document.getElementById("button5"))
            console.log(winner)
        }
        else
        {
            document.getElementById("infoMessage").innerHTML = "check this Round later";
            setTimeout(() => { document.getElementById("infoMessage").innerHTML = ""

            }, 4000);    
        }
    }



