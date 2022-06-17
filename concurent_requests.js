const baseURL= 'http://example.com';
const mygetrequest = new XMLHttpRequest()
mygetrequest.open("GET", baseURL)
mygetrequest.send()


mygetrequest.onload = function() {
  if (xhr.status === 200) {
    data = JSON.parse(mygetrequest.responseText)
    var RspBody = data.body;
    var tokendata = RspBody.tokenid;
    var tokendataedit = "Bearer "+ tokendata;
  } 
}

const baseURL2= 'http://auth.com';
const mypostrequest = new XMLHttpRequest();
mypostrequest.open("POST", baseURL2);

  const testdata = {
    dataone: "testdata",
    datatwo: 450,
    datathree: 3
  };

mypostrequest.setRequestHeader("Content-Type", "application/json");
mypostrequest.setRequestHeader("Authorization", tokendata);

mypostrequest.send(JSON.stringify(testdata))