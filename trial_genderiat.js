define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : global.transgenderLabels, //Will appear in the data.
            title : {
                media : {word : global.transgenderLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'T1.jpg'},
                {image: 'T2.jpg'},
                {image: 'T3.jpg'},              
                {image: 'T4.jpg'}     
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : global.cisgenderLabels, //Will appear in the data.
            title : {
                media : {word : global.cisgenderLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'C1.jpg'},
                {image: 'C2.jpg'},
                {image: 'C3.jpg'},
                {image: 'C4.jpg'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
       
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch,
            
        remindErrorText : '<p align="center" style="font-size:1em; font-family:arial; color:#000000">' +
        'Als je een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font> op je scherm. ' +
        'Druk op de andere toets om verder te gaan.<p/>',

        remindErrorTextTouch : '<p align="center" style="font-size:1.4em; font-family:arial; color:#000000">' +
        'Als je een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font> op je scherm. ' +
        'Druk op de andere kant om verder te gaan.<p/>',

        leftKeyText : 'Druk op "E" voor', 
        rightKeyText : 'Druk op "I" voor', 

        orText : 'of',
        
        finalText : 'Druk op de spatiebalk om verder te gaan', 
        finalTouchText : 'Druk op het groene vlak om verder te gaan',

        instImagePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Deel blockNum van de nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Leg uw linker vinger op de <b>E</b> toets voor de items die bij de categorie <font color="#0000ff">leftAttribute.</font> horen' +
				'<br/>Leg uw rechter vinger op de <b>I</b> toets voor de items die bij de categorie <font color="#0000ff">rightAttribute</font> horen.<br/><br/>' +
				'Als u een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font>.' +
				'Druk op de andere toets om verder te gaan.<br/>' +
				'<u>Ga zo snel als u kan,</u> maar blijf ook accuraat.<br/><br/></p>'+
				'<p align="center">Druk op de <b>spatiebalk</b> zodra u klaar bent.</font></p></div>',

        instImagePracticeTouch: [
            '<div>',
                '<p align="center">',
                    '<u>Deel blockNum van de nBlocks</u>',
                '</p>',
                '<p align="left" style="margin-left:5px">',
                    '<br/>',
                    'Plaats uw linker vinger boven het the <linker>left</b>groene vlak voor items die bij de categorie <font color="#0000ff">leftAttribute</font> horen.<br/>',
                    'Plaats uw rechter vinger boven het <b>rechter</b> groene vlak voor items die bij de categorie <font color="#0000ff">rightAttribute</font> horen.<br/>',
                    'Items komen een voor een voorbij<br/>',
                    '<br/>',
                    'Als u een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font>. Raak de andere kant aan. <u>Ga zo snel als u kan,</u> maar blijf ook accuraat.',
                '</p>',
                '<p align="center">Druk op het <b>benedenstaande</b> groene vlak om te beginnen.</p>',
            '</div>'
        ].join('\n'),

        
    });
});
