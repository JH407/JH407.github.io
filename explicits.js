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
        declineText: isTouch ? 'Weiger' : 'Wil ik liever niet beantwoorden', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 8'
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
                : 'Selecteer een antwoord of klik op \'Wil ik liever niet beantwoorden\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 8 %>',
        helpText: 'Tip: Klik twee maal op uw keuze om snel te antwoorden.'
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
            {text:'8 - Warm', value:8},
            {text:'7 - Best warm', value:7},
            {text:'6 - Beetje warm', value:6},
            {text:'5 - Noch warm noch koud', value:5},
            {text:'4 - Beetje koud', value:4},
            {text:'3 - Best koud', value:3},
            {text:'2 - Koud', value:2},
            {text:'1 - Zeer koud', value:1},
            {text:'0 - Extreem koud', value:0}
        ]
    });

	
    /**
	*Specific questions
	*/	
    API.addQuestionsSet('attributes7',{
        inherit : 'basicSelect',
        name: 'attributes7',
        stem: 'Welk statement past het best bij u?',
        answers: [
            {text:'Ik heb een sterke voorkeur voor <%= global.cisgenderLabels %> boven <%= global.transgenderLabels %>.',value:7},
            {text:'Ik heb een matige voorkeur voor <%= global.cisgenderLabels %> boven <%= global.transgenderLabels %>.',value:6},
            {text:'Ik heb een lichte voorkeur voor<%= global.cisgenderLabels %> boven <%= global.transgenderLabels %>.',value:5},
            {text:'Ik heb tussen <%= global.cisgenderLabels %> en <%= global.transgenderLabels %> geen voorkeur.',value:4},
            {text:'Ik heb een lichte voorkeur voor <%= global.transgenderLabels %> boven <%= global.cisgenderLabels %>.',value:3},
            {text:'Ik heb een matige voorkeur voor  <%= global.transgenderLabels %> boven <%= global.cisgenderLabels %>.',value:2},
            {text:'Ik heb een sterke voorkeur voor  <%= global.transgenderLabels %> boven <%= global.cisgenderLabels %>.',value:1}
        ]
    });
	  API.addQuestionsSet('age', {
        	inherit : 'basicText',
       		name: 'age',
       		stem: 'Wat is uw geboortejaar?',
    });
	
	API.addQuestionsSet('thermTransgender',{
       		inherit : 'therm',
       	 	name: 'Ttransgender_0to10',
        	stem: 'Hoe warm of koud voel je je ten opzichte van <b><%= global.transgenderLabels %></b>?'
    });

    	API.addQuestionsSet('thermCisgender',{
        	inherit : 'therm',
        	name: 'Tcisgender_0to10',
        	stem: 'Hoe warm of koud voel je je ten opzichte van <b><%= global.cisgenderLabels %></b>?'
    });
	
	API.addQuestionsSet('education',{
     	   inherit : 'basicSelect',
      	  name: 'educationlevel',
      	  stem: 'Wat is uw huidige functie?',
      	  answers: [
            {text:'Coassistent',value:4},
            {text:'ANIOS',value:3},
            {text:'AIOS',value:2},
            {text:'Specialist',value:1},
        ]
    });
	API.addQuestionsSet('transgender',{
     	   inherit : 'basicSelect',
      	  name: 'cisortrans',
      	  stem: 'Bent u cisgender of transgender? <br/><br/> Om de termen nogmaals op te helderen: Met cisgender wordt bedoeld dat er een match is tussen het geslacht dat bij geboorte is bepaald en de genderidentiteit die iemand nu heeft. Transgender betekent dat er geen match is tussen het geslacht bepaald bij geboorte en iemands genderidentiteit.',
      	  answers: [
            {text:'Cisgender',value:2},
            {text:'Transgender',value:1},
        ]
    });
	
	API.addQuestionsSet('genderidentity',{
     	   inherit : 'basicSelect',
      	  name: 'genderidentity',
	stem: 'Hoe zou u uw het best genderidentiteit omschrijven?',
	answers: [
            {text:'Geen van alle passen bij mij',value:6},
            {text:'Genderfluïde',value:5},
	    {text:'Genderqueer',value:4},
            {text:'Non-Binair',value:3},
	    {text:'Man',value:2},
            {text:'Vrouw',value:1},
        ]
		API.addQuestionsSet('patienten',{
     	   inherit : 'basicSelect',
      	  name: 'patiente',
      	  stem: 'Heeft u patiënten die zich als transgender identificeren?',
      	  answers: [
            {text:'Ja',value:2},
            {text:'Nee',value:1},
        ]
    });
    });
    API.addSequence([
        {
            mixer : 'random', 
            data : [
                {
                    mixer : 'random', 
                    wrapper:true, 
                    data : [
                        {
                            inherit:'basicPage', 
                            questions: {inherit:'thermTransgender'}
                        },
                        {
                            inherit:'basicPage', 
                            questions: {inherit:'thermCisgender'}							
                        }
                    ]
                },
                {
                    inherit:'basicPage', 
                    questions: {inherit:'attributes7'}
                },
		{
                    inherit:'basicPage', 
                    questions: [{inherit:'age'}]
                },
		{
                    inherit:'basicPage', 
                    questions: [{inherit:'education'}]
                },
		{
                    inherit:'basicPage', 
                    questions: [{inherit:'transgender'}]
                },
		    {
                    inherit:'basicPage', 
                    questions: [{inherit:'patienten'}]
                },
		{
                    inherit:'basicPage', 
                    questions: [{inherit:'genderidentity'}]
                }
            ]
        }
    ]);

    return API.script;
});
