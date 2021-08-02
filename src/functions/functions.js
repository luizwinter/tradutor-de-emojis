var txt_to_translate = [];
var text_translated = [];

export function InsertEmoji(emoji){
    txt_to_translate.push(emoji);
   
};

export function Translate(){

    let i = 0;
    do{
        if(i === 0){

            switch(txt_to_translate[0]){

                case 1:
                    text_translated.push('Eu apontei pra cima ');
                break;
                case 2:
                    text_translated.push('Fui embora ');
                break;
                case 3:
                    text_translated.push('Parei ');
    
                break;
                case 4:
                    text_translated.push('Eu Mauricio tava de boa ');
    
                break;
                case 5:
                    text_translated.push('Corri ');
    
                break;
                case 6:
                    text_translated.push('Se liga tava aqui ');
    
                break;    
                case 7:
                    text_translated.push('Fui almoçar ');
    
                break;
                case 8:
                    text_translated.push('Fui lanchar ');
    
                break;
                case 9:
                    text_translated.push('Fui tomar café ');
    
                break;
                case 10:
                    text_translated.push('Vi uma viatura ');
    
                break;
                case 11:
                    text_translated.push('Peguei o carro ');
    
                break;
                case 12:
                    text_translated.push('Fui para empresa ');
    
                break;  
                case 13:
                    text_translated.push('Vim andando de boa ');
    
                break;
                };



        }else if(i == 1 || i +1 < txt_to_translate.length){

            switch(txt_to_translate[i]){
                case 1:
                    text_translated.push('depois olhei pra cima ');
                break;
                case 2:
                    text_translated.push('depois dei tchau ');
                break;
                case 3:
                    text_translated.push('depois parei ');
    
                break;
                case 4:
                    //Vou adicionar uma função para gerar outras frases aleatorias.
                break;
                case 5:
                    text_translated.push('depois corri ');
    
                break;
                case 6:
                    text_translated.push('depois levantei a mão ');
    
                break;    
                case 7:
                    text_translated.push('depois almocei ');
    
                break;
                case 8:
                    text_translated.push('depois lanchei ');
    
                break;
                case 9:
                    text_translated.push('depois tomei cafe ');
    
                break;
                case 10:
                    text_translated.push('depois vi uma viatura ');
    
                break;
                case 11:
                    text_translated.push('depois peguei o carro ');
    
                break;
                case 12:
                    text_translated.push('depois fui para empresa ');

                break;      
                case 13:
                    text_translated.push('dei uma andada ');
    
                break;            };        

            }else{

                switch(txt_to_translate[i]){
                    case 1:
                        text_translated.push('e por fim olhei pra cima.');
                    break;
                    case 2:
                        text_translated.push('e por fim dei tchau.');
                    break;
                    case 3:
                        text_translated.push('e por fim parei');
                    break;
                    case 4:
                        text_translated.push('eu mesmo fiz tudo isso.');
        
                    break;
                    case 5:
                        text_translated.push('e por fim corri.');
        
                    break;
                    case 6:
                        text_translated.push('e por fim levantei a mão.');
        
                    break;    
                    case 7:
                        text_translated.push('e por fim almocei.');
        
                    break;
                    case 8:
                        text_translated.push('e por fim lanchei.');
        
                    break;
                    case 9:
                        text_translated.push('e por fim tomei cafe.');
        
                    break;
                    case 10:
                        text_translated.push('e por fim vi uma viatura.');
        
                    break;
                    case 11:
                        text_translated.push('e por fim peguei o carro.');
        
                    break;
                    case 12:
                        text_translated.push('e por fim cheguei na empresa.');
        
                    break;
                    case 13:
                        text_translated.push('e por fim vim andando.');
        
                    break;                };                 
                };
                i+=1;

    }while(i < txt_to_translate.length);
    

    document.getElementById("TextArea").value = text_translated;

     txt_to_translate = [];
     text_translated = [];

};