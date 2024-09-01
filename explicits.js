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
        progressBar:  'Pagina <%= pagesMeta.number %> van 13'
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
        help: '<%= pagesMeta.number < 14 %>',
        helpText: 'Tip: Klik twee maal op uw keuze om snel te antwoorden.'
    });

	API.addQuestionsSet('singleChoice',{
		inherit: 'basicQ',
		type: 'selectOne', 
		
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

	API.addQuestionsSet('multiChoice',{
		inherit: 'basicQ',
		type: 'selectMulti'
	});

	
    API.addQuestionsSet('therm',{
        inherit: 'basicSelect',
        answers: [
            {text:'4 - Zeer positief', value:4},
            {text:'3 - Positief', value:3},
            {text:'2 - Neutraal', value:2},
            {text:'1 - Negatief', value:1},
            {text:'0 - Zeer negatief', value:0}
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
	API.addQuestionsSet('birthMonth',{
		inherit: 'singleChoice',
		style:'multiButtons',
		name: 'birthmonth',
		stem: "In welke maand bent u geboren?",
		answers: [
			{text:'Januari',value:1},
			{text:'Februari',value:2},
			{text:'Maart',value:3},
			{text:'April',value:4},
			{text:'Mei',value:5},
			{text:'Juni',value:6},
			{text:'Juli',value:7},
			{text:'Augustus',value:8},
			{text:'September',value:9},
			{text:'Oktober',value:10},
			{text:'November',value:11},
			{text:'December',value:12}
		]
	});

    API.addQuestionsSet('age', {
        inherit : 'basicDropdown',
        name: 'age',
        stem: 'Wat is uw geboortejaar?',
	answers: [2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922,1921,1920]
    });

API.addQuestionsSet('raceombmulti',{
		inherit: 'multiChoice',
		name: 'raceombmulti',
        stem: "Please select the categories that comprise your race. (Click a category once to select it. Click it again to deselect. You may select as many categories as you wish. When you are finished, click Submit.)",
        answers: [
			{text:'American Indian/Alaska Native',value:1},
			{text:'East Asian',value:2},
			{text:'South Asian',value:3},
			{text:'Native Hawaiian or other Pacific Islander',value:4},
			{text:'Black or African American',value:5},
			{text:'White',value:6},
			{text:'Other or Unknown',value:7}
		]
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

	
    API.addQuestionsSet('patienten',{
     	inherit : 'basicSelect',
      	name: 'patienten',
      	stem: 'Heeft u ooit contact (gehad) met een patiënt die zich als transgender identificeren?',
      	answers: [
            {text:'Ja',value:2},
            {text:'Nee',value:1},
        ]
    });
	
	API.addQuestionsSet('familie',{
     	inherit : 'basicSelect',
      	name: 'familie',
      	stem: 'Heeft u iemand in uw familie die zich als transgender identificeert?',
      	answers: [
            {text:'Ja',value:2},
            {text:'Nee',value:1},
        ]
    });

	API.addQuestionsSet('vriend',{
     	inherit : 'basicSelect',
      	name: 'vriend',
      	stem: 'Heeft u iemand in uw vriendenkring die zich als transgender identificeert?',
      	answers: [
            {text:'Ja',value:2},
            {text:'Nee',value:1},
        ]
    });
	
	API.addQuestionsSet('genderidentity',{
     	   inherit : 'basicSelect',
      	  name: 'genderidentity',
	stem: 'Hoe zou u uw het best genderidentiteit omschrijven?',
	answers: [
            {text:'Transgender of gender diverse',value:4},
	    {text:'Man',value:3},
            {text:'Vrouw',value:2},
	    {text:'Geen van alle passen bij mij',value:1},
      	 ]
     });

	API.addQuestionsSet('lhbt',{
     	inherit : 'basicSelect',
      	name: 'lhbt',
      	stem: 'Maakt u deel uit van de LHBTQ+ gemeenschap?',
      	answers: [
            {text:'Ja',value:2},
            {text:'Nee',value:1},
        ]
    });
	API.addQuestionsSet('religieus',{
     	inherit : 'basicSelect',
      	name: 'religieus',
      	stem: 'Bent u religieus, en zo ja, welk geloof hangt u aan?',
      	answers: [
            {text:'Ik ben niet gelovig',value:8},
            {text:'Anders',value:7},
		{text:'Boeddhisme',value:6},
            {text:'Hindoeïsme',value:5},
		{text:'Jodendom',value:4},
            {text:'Islam',value:3},
		{text:'Protestantse kerk',value:2},
            {text:'Katholieke kerk',value:1},
        ]
    });
	API.addQuestionsSet('gelovig',{
     	inherit : 'basicSelect',
      	name: 'gelovig',
      	stem: 'Hoe gelovig zou u zichzelf omschrijven?',
      	answers: [
		{text:'Sterk gelovig',value:4},
            {text:'Redelijk gelovig',value:3},
		{text:'Een beetje gelovig',value:2},
            {text:'Helemaal niet gelovig',value:1},
        ]
    });
	API.addQuestionsSet('politiek',{
     	inherit : 'basicSelect',
      	name: 'politiek',
      	stem: 'Hoe zou u uw politieke overtuiging omschrijven?',
      	answers: [
            {text:'Zeer conservatief',value:7},
		{text:'Redelijk conservatief',value:6},
            {text:'Een beetje conservatief',value:5},
		{text:'Noch conservatief noch progressief',value:4},
            {text:'Een beetje progressief',value:3},
		{text:'Redelijk progressief',value:2},
            {text:'Sterk progressief',value:1},
        ]
    });
	
    API.addQuestionsSet('thermBlack',{
        inherit : 'therm',
        name: 'Tblack_0to10',
        stem: 'Wat is uw gevoel richting <b><%= global.transgenderLabels %></b>?'
    });

    API.addQuestionsSet('thermWhite',{
        inherit : 'therm',
        name: 'Twhite_0to10',
        stem: 'Wat is uw gevoel richting <b><%= global.cisgenderLabels %></b>?'
    });

    API.addSequence([
        	{
			inherit: 'basicPage',
			questions: [{inherit: 'birthMonth'}]
		},
	    {
                    inherit:'basicPage', 
                    questions: [{inherit:'age'}]
                },
	    {
			inherit: 'basicPage',
			questions: [{inherit: 'raceombmulti'}]
		},
		{
                    inherit:'basicPage', 
                    questions: [{inherit:'education'}]
                },
	  	{
                    inherit:'basicPage', 
                    questions: [{inherit:'religieus'}]
                },
	   	{
                    inherit:'basicPage', 
                    questions: [{inherit:'gelovig'}]
                },
	    	{
                    inherit:'basicPage', 
                    questions: [{inherit:'politiek'}]
                },
	    	{
                    inherit:'basicPage', 
                    questions: [{inherit:'genderidentity'}]
                },
	   	{
                    inherit:'basicPage', 
                    questions: [{inherit:'lhbt'}]
                },
		{
                    inherit:'basicPage', 
                    questions: [{inherit:'familie'}]
                },
		{
                    inherit:'basicPage', 
                    questions: [{inherit:'vriend'}]
                },
	    	{	
                    inherit:'basicPage', 
                    questions: [{inherit:'patienten'}]
                },
		{
			inherit:'basicPage', 
       			questions: {inherit:'thermBlack'}
		},
	    
        	{	   		
			inherit:'basicPage', 
                	questions: {inherit:'thermWhite'}							
      		},
      		{	
                    inherit:'basicPage', 
                    questions: {inherit:'attributes7'}
                }
    ]);

    return API.script;
});
