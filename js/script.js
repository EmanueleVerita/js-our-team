//creo l' array di oggetti

const teamInfo = [
    {
        name: 'Wayne Barnett',
        role: 'Found er&CEO',
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

teamInfo[0].name
teamInfo[0]['name']

for (const key in teamInfo) {
    console.log(key , teamInfo[key]);
}

