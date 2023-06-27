//creo l' array di oggetti

const teamInfo = [
    {
        name: 'Wayne Barnett',
        role: 'Founder&CEO',
        immagine: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll' ,
        role: 'Chief Editor',
        immagine: 'angela-caroll-chief-editor.jpg'
    },

    
    {
        name: 'Walter Gordon' ,
        role: 'Office Manager',
        immagine: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez' ,
        role: 'Social Media Manager',
        immagine: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        immagine: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos' ,
        role: 'Graphic Designer',
        immagine: 'barbara-ramos-graphic-designer.jpg' 
    }
    
]
/*
teamInfo[0].name
teamInfo[0]['name']

*/

const ulTeam = document.getElementById('team-list');

for(let i = 0 ; i < teamInfo.length ; i++){
    const singleMember = teamInfo[i];
    console.log(singleMember);


    ulTeam.innerHTML = ulTeam.innerHTML + `
    
    <li>
        <h2>
            ${singleMember.name}
        </h2>

        <h3>
            ${singleMember.role}
        </h3>

        <div>
            <img src="${singleMember.immagine}">
        </div>

    </li>
    
    
    `


    for (const key in singleMember) {
        console.log(key , singleMember[key]);
    
        
    }


}



