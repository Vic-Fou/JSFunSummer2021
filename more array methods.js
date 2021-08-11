//.Filters

/*
const positiveNumbers = [-.01, .03, .7, .05, -.2].filter((num) => {
    return num >= 0;
  });
  
  console.log(positiveNumbers);*/

//
  const citiesInNewYork=['NYC','Albany','Buffalo','Syracuse']

  const citiesVisited = citiesInNewYork.filter((locales)=>{
      if(locales !=="Buffalo"){
          
          return locales 
          
      }
     
  });
  console.log(citiesVisited)

  //.reduce used to accumulate amounts
/* can be used to tally items*/

const playersWins= ['Daigo','Smug','MaxDood','Daigo','Daigo','Smug']

const tallyWins= playersWins.reduce( (acc,player)=>{
    acc[player] = acc[player] ? acc[player] + 1:1;
    return acc;
},{});
console.log(tallyWins);
