define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: true,
        declineText: isTouch ? 'Weiger' : 'Weigeren te antwoorden', 
        autoFocus:true, 
        progressBar:  'Vraag <%= pagesMeta.number %> van de 4'
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Selecteer een antwoord of klik op \'Weiger\'' 
                : 'Selecteer een antwoord of klik op \'Weigeren te antwoorden\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 4 %>',
        helpText: 'Tip: Voor een snel antwoord klik om je antwoord te selecteren en klik je nogmaals om te verzenden.'
    });

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });

    API.addQuestionsSet('basicText',{
        inherit :'basicQ',
        type: 'text'
    });
	
    API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });
	
    API.addQuestionsSet('therm',{
        inherit: 'basicSelect',
        answers: [
            {text:'10 - Extreem warm', value:10},
            {text:'9 - Zeer warm', value:9},
            {text:'8 - Matig warm', value:8},
            {text:'7 - Enigszins warm', value:7},
            {text:'6 - Licht warm', value:6},
            {text:'5 - Noch warm noch koud', value:5},
            {text:'4 - Licht koud', value:4},
            {text:'3 - Enigszins koud', value:3},
            {text:'2 - Matig koud', value:2},
            {text:'1 - Zeer koud', value:1},
            {text:'0 - Extreem koud', value:0}
        ]
    });

	
    /**
	*Specific questions
	*/	
    API.addQuestionsSet('attributes7',{
        inherit : 'basicSelect',
        name: 'voorkeur',
        stem: 'Welke uitspraak beschrijft jou het best?',
        answers: [
            {text:'Ik heb een sterke voorkeur voor <%= global.rightLabels %> boven <%= global.leftLabels %>.',value:7},
            {text:'Ik geef een matige voorkeur aan <%= global.rightLabels %> boven <%= global.leftLabels %>.',value:6},
            {text:'Ik geef een lichte voorkeur aan <%= global.rightLabels %> boven <%= global.leftLabels %>.',value:5},
            {text:'Ik vind <%= global.rightLabels %> en <%= global.leftLabels %> even leuk.',value:4},
            {text:'Ik geef een lichte voorkeur aan <%= global.leftLabels %> boven <%= global.rightLabels %>.',value:3},
            {text:'Ik geef een matige voorkeur aan <%= global.leftLabels %> boven <%= global.rightLabels %>.',value:2},
            {text:'Ik heb een sterke voorkeur voor <%= global.leftLabels %> boven <%= global.rightLabels %>.',value:1}
        ]
    });

    API.addQuestionsSet('age', {
        inherit : 'basicText',
        name: 'uniek',
        stem: 'Voer hier de code in die u in de vragenlijst heeft gegenereerd.'
    });
	
	 API.addQuestionsSet('age', {
        inherit : 'basicText',
        name: 'check',
        stem: 'Werkt de code zo wel?.'
    });
	
	
    API.addQuestionsSet('thermBlack',{
        inherit : 'therm',
        name: 'progressief_0to10',
        stem: 'Hoe warm of koud voel je je ten opzichte van <b><%= global.leftLabels %></b>?'
    });

    API.addQuestionsSet('thermWhite',{
        inherit : 'therm',
        name: 'conservatiefs_0to10',
        stem: 'Hoe warm of koud voel je je ten opzichte van <b><%= global.rightLabels %></b>?'
    });

    API.addSequence([
	    
        {  inherit:'basicPage', 
        questions: [{inherit:'uniek'}] },
	    
	     {  inherit:'basicPage', 
        questions: [{inherit:'check'}] }
    ]);

    return API.script;
});

