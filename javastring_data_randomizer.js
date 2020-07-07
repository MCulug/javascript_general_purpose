
Skip to content
Pull requests
Issues
Marketplace
Explore
@MCulug
MCulug /
javascript_general_purpose

1
0

    0

    Code
    Issues
    Pull requests
    Actions
    Projects
    Wiki
    Security
    Insights
    Settings

javascript_general_purpose/javastring_data_randomizer
@MCulug
MCulug Create javastring_data_randomizer
Latest commit 0c5f6b9 1 minute ago
History
1 contributor
63 lines (53 sloc) 1.57 KB

let randomizer = {
     randomNumber: function (min, max){ 
          return Math.random() * (max - min) + min; 
     },
     randomName: function(){
     let chars = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
     let name;
     let firs = [];
     for(i = 0; i < 4; i++){
     let a = randomizer.randomNumber(0,25);
     let b = Math.ceil(a);
     firs[i]=chars[b];
     }
     name=firs[0]+firs[1]+firs[2]+firs[3]; 
     return name;
     },
     randomGender: function(){
     let rand = Math.ceil(randomizer.randomNumber(0,2));
     if (rand==1) {
          return "Male";
        } else {
          return "Female";
        }
     }
};

let person={
     name: randomizer.randomName(),
     age: Math.ceil(randomizer.randomNumber(20,40)),
     gender: randomizer.randomGender([0]),
     weight: Math.ceil(randomizer.randomNumber(60,80)),
     city_code: Math.ceil((randomizer.randomNumber(1,80)))
}

function random_indexer(){
     
     const my_request = new XMLHttpRequest();
     const my_url = 'http://localhost:3000';
     let jstring = JSON.stringify(person)

     my_request.open('PUT', my_url);
     my_request.setRequestHeader("Content-Type", "application/json");
     my_request.send(jstring);

     my_request.onreadystatechange=function(){
          if(this.readyState==4 && this.status==200){
          console.log(http.responseText)
       }
     }
}

random_indexer();

function requester()
{
  if(my_request.status==200)
  random_indexer();
  else return Promise.delay(1000).then(() => requester());
}

requester();

    © 2020 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

