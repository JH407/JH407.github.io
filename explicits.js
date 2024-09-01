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
	
	API.addQuestionsSet('singleChoicedrop',{
		inherit: 'basicQ',
		autoSubmit:false,
		type: 'dropdown'
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

	API.addQuestionsSet('num',{
		inherit: 'singleChoice',
		name: 'num002',
		style:'multiButtons',
		stem: "Hoe vaak heeft u al een Implicit Associations Test gedaan?",
		answers: [
			'0',
			'1',
			'2',
		  '3-5',
			'6+'
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
        stem: "Selecteer uw etniciteit(en). (Klik de om de categorie te selecteren, en klik opnieuw om te deselecteren. U kunt zo veel categorieën aanklikken als u wenst. Wanneer u klaar bent drukt u op Submit.)",
        answers: [
			{text:'Nederlands',value:1},
			{text:'Marokkaans',value:2},
			{text:'Surinaams',value:3},
			{text:'Turks',value:4},
			{text:'Carabisch',value:5},
			{text:'Europees buiten Nederland',value:6},
			{text:'Afrikaans', value:7},
			{text:'Aziatisch',value:8},
			{text:'Noord-Amerikaans',value:9},
			{text:'Zuid-Amerikaans',value:10},
			{text:'Oceanisch',value:11},
			{text:'Midden-Oosters',value:12},
			{text:'Anders',value:13}
		]
	});
	var countriesArray = [
		
    {text:"Afghanistan", value:1},
    {text:"Albanië", value:2},
    {text:"Algerije", value:3},
    {text:"Amerikaans-Samoa", value:4},
    {text:"Andorra", value:5},
    {text:"Angola", value:6},
    {text:"Anguilla", value:7},
    {text:"Antarctica", value:8},
    {text:"Antigua en Barbuda", value:9},
    {text:"Argentinië", value:10},
    {text:"Armenië", value:11},
    {text:"Aruba", value:12},
    {text:"Australië", value:13},
    {text:"Azerbeidzjan", value:14},
    {text:"Bahama's", value:15},
    {text:"Bahrein", value:16},
    {text:"Bangladesh", value:17},
    {text:"Barbados", value:18},
    {text:"België", value:19},
    {text:"Belarus", value:20},
    {text:"Belize", value:21},
    {text:"Benin", value:22},
    {text:"Bermuda", value:23},
    {text:"Bhutan", value:24},
    {text:"Bolivia", value:25},
    {text:"Bosnië en Herzegovina", value:26},
    {text:"Botswana", value:27},
    {text:"Bouveteiland", value:28},
    {text:"Brazilië", value:29},
    {text:"Brits Indische Oceaanterritorium", value:30},
    {text:"Brunei", value:31},
    {text:"Bulgarije", value:32},
    {text:"Burkina Faso", value:33},
    {text:"Burundi", value:34},
    {text:"Cambodja", value:35},
    {text:"Canada", value:36},
    {text:"Centraal-Afrikaanse Republiek", value:37},
    {text:"Chili", value:38},
    {text:"China", value:39},
    {text:"Christmaseiland", value:40},
    {text:"Cocoseilanden", value:41},
    {text:"Colombia", value:42},
    {text:"Comoren", value:43},
    {text:"Congo", value:44},
    {text:"Congo, Democratische Republiek", value:45},
    {text:"Cookeilanden", value:46},
    {text:"Costa Rica", value:47},
    {text:"Cuba", value:48},
    {text:"Curaçao", value:49},
    {text:"Cyprus", value:50},
    {text:"Denemarken", value:51},
    {text:"Djibouti", value:52},
    {text:"Dominica", value:53},
    {text:"Dominicaanse Republiek", value:54},
    {text:"Duitsland", value:55},
    {text:"Ecuador", value:56},
    {text:"Egypte", value:57},
    {text:"El Salvador", value:58},
    {text:"Equatoriaal-Guinea", value:59},
    {text:"Eritrea", value:60},
    {text:"Estland", value:61},
    {text:"Eswatini", value:62},
    {text:"Ethiopië", value:63},
    {text:"Faeröer", value:64},
    {text:"Falklandeilanden", value:65},
    {text:"Fiji", value:66},
    {text:"Filipijnen", value:67},
    {text:"Finland", value:68},
    {text:"Frankrijk", value:69},
    {text:"Frans-Guyana", value:70},
    {text:"Frans-Polynesië", value:71},
    {text:"Franse Zuidelijke Gebieden", value:72},
    {text:"Gabon", value:73},
    {text:"Gambia", value:74},
    {text:"Ghana", value:75},
    {text:"Gibraltar", value:76},
    {text:"Grenada", value:77},
    {text:"Griekenland", value:78},
    {text:"Groenland", value:79},
    {text:"Guadeloupe", value:80},
    {text:"Guam", value:81},
    {text:"Guatemala", value:82},
    {text:"Guinee", value:83},
    {text:"Guinee-Bissau", value:84},
    {text:"Guyana", value:85},
    {text:"Haïti", value:86},
    {text:"Heard en McDonaldeilanden", value:87},
    {text:"Honduras", value:88},
    {text:"Hongarije", value:89},
    {text:"Hongkong", value:90},
    {text:"Ierland", value:91},
    {text:"IJsland", value:92},
    {text:"India", value:93},
    {text:"Indonesië", value:94},
    {text:"Irak", value:95},
    {text:"Iran", value:96},
    {text:"Israël", value:97},
    {text:"Italië", value:98},
    {text:"Ivoorkust", value:99},
    {text:"Jamaica", value:100},
    {text:"Japan", value:101},
    {text:"Jemen", value:102},
    {text:"Jordanië", value:103},
    {text:"Kaapverdië", value:104},
    {text:"Kameroen", value:105},
    {text:"Kazachstan", value:106},
    {text:"Kenia", value:107},
    {text:"Kirgizië", value:108},
    {text:"Kiribati", value:109},
    {text:"Koeweit", value:110},
    {text:"Kosovo", value:111},
    {text:"Kroatië", value:112},
    {text:"Laos", value:113},
    {text:"Lesotho", value:114},
    {text:"Letland", value:115},
    {text:"Libanon", value:116},
    {text:"Liberia", value:117},
    {text:"Libië", value:118},
    {text:"Liechtenstein", value:119},
    {text:"Litouwen", value:120},
    {text:"Luxemburg", value:121},
    {text:"Macau", value:122},
    {text:"Madagaskar", value:123},
    {text:"Malawi", value:124},
    {text:"Maldiven", value:125},
    {text:"Maleisië", value:126},
    {text:"Mali", value:127},
    {text:"Malta", value:128},
    {text:"Marokko", value:129},
    {text:"Marshalleilanden", value:130},
    {text:"Martinique", value:131},
    {text:"Mauritanië", value:132},
    {text:"Mauritius", value:133},
    {text:"Mayotte", value:134},
    {text:"Mexico", value:135},
    {text:"Micronesia", value:136},
    {text:"Moldavië", value:137},
    {text:"Monaco", value:138},
    {text:"Mongolië", value:139},
    {text:"Montenegro", value:140},
    {text:"Montserrat", value:141},
    {text:"Mozambique", value:142},
    {text:"Myanmar", value:143},
    {text:"Namibië", value:144},
    {text:"Nauru", value:145},
    {text:"Nederland", value:146},
    {text:"Nederlandse Antillen", value:147},
    {text:"Nepal", value:148},
    {text:"Nieuw-Caledonië", value:149},
    {text:"Nieuw-Zeeland", value:150},
    {text:"Nicaragua", value:151},
    {text:"Niger", value:152},
    {text:"Nigeria", value:153},
    {text:"Niue", value:154},
    {text:"Noord-Korea", value:155},
    {text:"Noord-Macedonië", value:156},
    {text:"Noorwegen", value:157},
    {text:"Norfolk", value:158},
    {text:"Oekraïne", value:159},
    {text:"Oezbekistan", value:160},
    {text:"Oman", value:161},
    {text:"Oostenrijk", value:162},
    {text:"Oost-Timor", value:163},
    {text:"Pakistan", value:164},
    {text:"Palau", value:165},
    {text:"Palestina", value:166},
    {text:"Panama", value:167},
    {text:"Papoea-Nieuw-Guinea", value:168},
    {text:"Paraguay", value:169},
    {text:"Peru", value:170},
    {text:"Pitcairn", value:171},
    {text:"Polen", value:172},
    {text:"Portugal", value:173},
    {text:"Puerto Rico", value:174},
    {text:"Qatar", value:175},
    {text:"Réunion", value:176},
    {text:"Roemenië", value:177},
    {text:"Rusland", value:178},
    {text:"Rwanda", value:179},
    {text:"Saint Kitts en Nevis", value:180},
    {text:"Saint Lucia", value:181},
    {text:"Saint Pierre en Miquelon", value:182},
    {text:"Saint Vincent en de Grenadines", value:183},
    {text:"Salomonseilanden", value:184},
    {text:"Samoa", value:185},
    {text:"San Marino", value:186},
    {text:"Sao Tomé en Principe", value:187},
    {text:"Saudi-Arabië", value:188},
    {text:"Senegal", value:189},
    {text:"Servië", value:190},
    {text:"Seychellen", value:191},
    {text:"Sierra Leone", value:192},
    {text:"Singapore", value:193},
    {text:"Sint-Helena", value:194},
    {text:"Sint-Maarten", value:195},
    {text:"Slovenië", value:196},
    {text:"Slowakije", value:197},
    {text:"Soedan", value:198},
    {text:"Somalië", value:199},
    {text:"Spanje", value:200},
    {text:"Sri Lanka", value:201},
    {text:"Suriname", value:202},
    {text:"Svalbard en Jan Mayen", value:203},
    {text:"Syrië", value:204},
    {text:"Tadzjikistan", value:205},
    {text:"Taiwan", value:206},
    {text:"Tanzania", value:207},
    {text:"Thailand", value:208},
    {text:"Togo", value:209},
    {text:"Tokelau", value:210},
    {text:"Tonga", value:211},
    {text:"Trinidad en Tobago", value:212},
    {text:"Tsjaad", value:213},
    {text:"Tsjechië", value:214},
    {text:"Tunesië", value:215},
    {text:"Turkije", value:216},
    {text:"Turkmenistan", value:217},
    {text:"Turks- en Caicoseilanden", value:218},
    {text:"Tuvalu", value:219},
    {text:"Uruguay", value:220},
    {text:"Vanuatu", value:221},
    {text:"Vaticaanstad", value:222},
    {text:"Venezuela", value:223},
    {text:"Verenigd Koninkrijk", value:224},
    {text:"Verenigde Arabische Emiraten", value:225},
    {text:"Verenigde Staten", value:226},
    {text:"Vietnam", value:227},
    {text:"Wallis en Futuna", value:228},
    {text:"Westelijke Sahara", value:229},
    {text:"Wit-Rusland", value:230},
    {text:"Zambia", value:231},
    {text:"Zimbabwe", value:232},
    {text:"Zuid-Afrika", value:233},
    {text:"Zuid-Korea", value:234},
    {text:"Zuid-Soedan", value:235},
    {text:"Zweden", value:236},
    {text:"Zwitserland", value:237}
	];
	
	API.addQuestionsSet('countrycit',{
		inherit: 'singleChoicedrop',
		name: 'countrycit002',
		stem: "Van welk land bent u staatsburger? Indien u een dubbele nationaliteit hebt, kies dan voor het land waar u zich primair staatsburger van voelt. ",
		answers: countriesArray
	});

	API.addQuestionsSet('countryres',{
		inherit: 'singleChoicedrop',
		name: 'countryres002',
		stem: "In welk land of welke regio bent u woonachtig?",
		answers: countriesArray
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
	
	API.addQuestionsSet('transgender',{
     	inherit : 'basicSelect',
      	name: 'transgender',
      	stem: 'Identificeert u zich als transgender?',
      	answers: [
            {text:'Ja',value:2},
            {text:'Nee',value:1},
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
			questions: [{inherit: 'num'}]
		},
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
			inherit: 'basicPage',
			questions: [{inherit: 'countrycit'}]
		},
		{
			inherit: 'basicPage',
			questions: [{inherit: 'countryres'}]
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
                    questions: [{inherit:'transgender'}]
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
