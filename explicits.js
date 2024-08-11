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
        progressBar:  'Pagina <%= pagesMeta.number %> van 3'
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
        help: '<%= pagesMeta.number < 3 %>',
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
        stem: 'Welk statement pas het beste bij u?',
        answers: [
            {text:'Ik heb een sterke voorkeur voor <%= global.cisgenderLabels %> boven <%= global.transgenderLabels %>.',value:7},
            {text:'Ik heb een matige voorkeur voor <%= global.cisgenderLabels %> boven <%= global.transgenderLabels %>.',value:6},
            {text:'Ik heb een lichte voorkeur voor <%= global.cisgenderLabels %> boven <%= global.transgenderLabels %>.',value:5},
            {text:'Ik heb tussen <%= global.cisgenderLabels %> en <%= global.transgenderLabels %> geen voorkeur.',value:4},
            {text:'Ik heb een lichte voorkeur voor <%= global.transgenderLabels %> boven <%= global.cisgenderLabels %>.',value:3},
            {text:'Ik heb een matige voorkeur voor <%= global.transgenderLabels %> boven <%= global.cisgenderLabels %>.',value:2},
            {text:'Ik heb een sterke voorkeur voor <%= global.transgenderLabels %> boven <%= global.cisgenderLabels %>.',value:1}
        ]
    });

    API.addQuestionsSet('age', {
        inherit : 'basicDropdown',
        name: 'age',
        stem: 'Wat is uw geboortejaar?',
	answers: [2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922,1921,1920]
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
	
    API.addQuestionsSet('thermBlack',{
        inherit : 'therm',
        name: 'Tblack_0to10',
        stem: 'Hoe warm of koud voel je je ten opzichte van <b><%= global.transgenderLabels %></b>?'
    });

    API.addQuestionsSet('thermWhite',{
        inherit : 'therm',
        name: 'Twhite_0to10',
        stem: 'Hoe warm of koud voel je je ten opzichte van <b><%= global.cisgenderLabels %></b>?'
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
                            questions: {inherit:'thermBlack'}
                        },
                        {
                            inherit:'basicPage', 
                            questions: {inherit:'thermWhite'}							
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
                }
            ]
        }
    ]);

    return API.script;
});
