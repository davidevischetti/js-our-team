// VARIABILI DI RICHIAMO ELEMENTI HTML
let cardContainer = document.querySelector('.team-container');
let card;
let cardPhotoImg;
let cardInfo;
let cardName;
let cardRole;
let cardPhoto;

// RICHIAMO FUNZIONE ARRAY MEMBRI TEAM
const ourTeam = ourTeamFunc ();
ourTeam.length = 6;

//RICHIAMO FUNZIONE CHE INSERISCE IL PROFILO DEI MEMBRI DEL TEAM NELL'ARRAY
addAllMemberFunc ();

//CICLO PER INSERIRE I VARI PROFILI
for (let i = 0; i < ourTeam.length; i ++){
    // RICHIAMO FUNZIONE CREAZIONE STRUTTURA HTML
    createHtml();
    // RICHIAMO FUNZIONE CHE INSERISCE I PROFILI DELL'HTML
    memberCardFunc (i);  
};


// FUNZIONI


// FUNZIONE CREAZIONE STRUTTURA HTML
function createHtml () {

    card = document.createElement('div');
    card.className = 'team-card';
    cardContainer.append(card);

    cardPhoto = document.createElement('div')
    cardPhoto.className = 'card-image';
    card.append(cardPhoto);

    cardPhotoImg = document.createElement('img');
    cardPhoto.append(cardPhotoImg);

    cardInfo = document.createElement('div');
    cardInfo.className = 'card-text';
    card.append(cardInfo);

    cardName = document.createElement('h3');
    cardInfo.append(cardName);

    cardRole = document.createElement('p');
    cardInfo.append(cardRole);

    return;
}

//FUNZIONE CREAZIONE PROFILO MEMBRI TEAM 
function addMemberFunc (num, memberName, memberRole, memberPhoto) {

    ourTeam[num].name = memberName;
    ourTeam[num].role = memberRole;
    ourTeam[num].photo = memberPhoto;

    return;
};

//FUNZIONE CHE INSERISCE IL PROFILO DEI MEMBRI DEL TEAM NELL'ARRAY
function addAllMemberFunc () {

    addMemberFunc(0,'Wayne Barnett', 'Founder & CEO', 'img/wayne-barnett-founder-ceo.jpg');
    addMemberFunc(1,'Angela Caroll', 'Chief Editor', 'img/angela-caroll-chief-editor.jpg');
    addMemberFunc(2,'Walter Gordon', 'Office Manager', 'img/walter-gordon-office-manager.jpg');
    addMemberFunc(3,'Angela Lopez', 'Social Media Manager', 'img/angela-lopez-social-media-manager.jpg');
    addMemberFunc(4,'Scott', 'Developer', 'img/scott-estrada-developer.jpg');
    addMemberFunc(5,'Barbara', 'Graphic Designer', 'img/barbara-ramos-graphic-designer.jpg');

    return;
}

// FUNZIONE CHE INSERISCE I PROFILI DELL'HTML
function memberCardFunc (arrPosition) {

    cardName.append(ourTeam[arrPosition].name);
    cardRole.innerHTML = ourTeam[arrPosition].role;
    cardPhotoImg.src = ourTeam[arrPosition].photo;

    return;
};

// FUNZIONE ARRAY MEMBRI TEAM
function ourTeamFunc () {
    let ourTeamArr = 
    [
        {
            'name' : '',
            'role' : '',
            'photo' : ''
        },
        {
            'name' : '',
            'role' : '',
            'photo' : ''
        },
        {
            'name' : '',
            'role' : '',
            'photo' : ''
        },
        {
            'name' : '',
            'role' : '',
            'photo' : ''
        },
        {
            'name' : '',
            'role' : '',
            'photo' : ''
        },
        {
            'name' : '',
            'role' : '',
            'photo' : ''
        }
    ];

return ourTeamArr;
};


