
function displayDetails() {
    var xml = new XMLHttpRequest();

    console.log('after create obj', xml.readyState)

    let url = "https://6411afc9b6067ba2f141c0e3.mockapi.io/menu";
    xml.open('GET', url);

    console.log("after open", xml.readyState)

    //  xml.onreadystatechange=function(){
    //      console.log('inside onreadystate()',xml.readyState)
    //      if(xml.readyState == 4){
    //          let data= xml.responseText;
    //          // str to obj convert  JSON.parse
    //          //obj to str convert   JSON.stringify
    //          console.log("data",data)
    //          let convert_data=JSON.parse(data)
    //          console.log(convert_data)

    //      }
    //  }

    xml.onload = function () {
        // let l1 = document.getElementById('l1');
        // let breakfastnow = document.querySelector("#breakfast");
        let data = xml.responseText;
        // let data1 = xml.responseText.breakfast;
        // console.log("data", data)
        let convert_data = JSON.parse(data);

console.log("convert_data",convert_data)
        // l1.textContent = data;
        // for (i = 0; i < data.length; i++) {
            // var newlabel = document.createElement("label");
            // newlabel.setAttribute("for", i);
            // breakfastnow.textContent = data.breakfast;


            // l1.appendChild(a);
            // document.getElementById('l1').textContent = data[i] + "\n";
        // }

        // console.log("\n");
        // console.log(data["breakfast"]);
        // console.log(convert_data.breakfast);
        // let data1 = Object.values(data);
        // let data2 = data1.splice('');
    //     let data2 = data.split(',');
    //     console.log(data2);
    //     console.log(data2[0].replace('[{', '') + "\t" + data2[1] + "\t" + data2[2] + "\t" + data2[3] + "\t" + data2[4].replace('}]', ''));
    // document.querySelector("#breakfast").textContent = data2[0].replace('[{"', '');
    // document.querySelector("#lunch").textContent = data2[1];
    // document.querySelector("#juice").textContent = data2[2];
    // document.querySelector("#bill").textContent = data2[3];
    // document.getElementById("l1").textContent = data2;

    //display breakfast content 
   let container = document.querySelector('.container');
    for(let i=0;i<convert_data.length;i++){
       let label= document.createElement('label');
       label.innerHTML="Breakfast: "+convert_data[i].breakfast +" Lunch:" +convert_data[i].lunch  +"<br/>"
       container.append(label)
    }
    // for (i = 0; i < data2.length; i++) {

    //     var newlabel = document.createElement("label");
    //     newlabel.setAttribute("for", i);
    //     i.textContent = data;
    // }
    alert("Fetch out succesfully");
    }
    xml.send()
}

let postDetails= (e) => {
    //   e.preventDefault();
    //   let updateurl = "https://63a3cbee471b38b206162fa5.mockapi.io/api/register/" + id;
      let url = "https://6411afc9b6067ba2f141c0e3.mockapi.io/menu";
      let data = {
        breakfast: document.querySelector("#breakfast").value,
        lunch: document.querySelector("#lunch").value,
        juice: document.querySelector("#juice").value,
        bill: document.querySelector("#bill").value,
      }
      const req = new XMLHttpRequest();
    
      req.open('POST', url); // 'POST' or 'PUT'
    
      req.setRequestHeader("Content-Type", "application/json");
    
      req.addEventListener('load', function () {
        
        alert("saved succesfully");
    
      });
    
      req.send(JSON.stringify(data));
    }

    function displayDetails() {
        var xml = new XMLHttpRequest();

        console.log('after create obj', xml.readyState)

        let url = "https://6411afc9b6067ba2f141c0e3.mockapi.io/menu";
        xml.open('GET', url);

        console.log("after open", xml.readyState)

        xml.onload = function () {
            let data = xml.responseText;
            let convert_data = JSON.parse(data);

            console.log("convert_data", convert_data)
            let container = document.querySelector('.container');
            for (let i = 0; i < convert_data.length; i++) {
                let label = document.createElement('label');
                label.innerHTML = "Breakfast: " + convert_data[i].breakfast + " Lunch:" + convert_data[i].lunch + "<br/>"
                container.append(label)
            }
            alert("Fetch out succesfully");
        }
        xml.send()
    }

    let updateDetails= (e) => {
        //   let updateurl = "https://63a3cbee471b38b206162fa5.mockapi.io/api/register/id" + id;
          let url = "https://6411afc9b6067ba2f141c0e3.mockapi.io/menu/" + document.querySelector("#ID").value;
          let data = {
            breakfast: document.querySelector("#breakfast").value,
            lunch: document.querySelector("#lunch").value,
            juice: document.querySelector("#juice").value,
            bill: document.querySelector("#bill").value,
          }
          const req = new XMLHttpRequest();
        
          req.open('PUT', url); // 'POST' or 'PUT'
        
          req.setRequestHeader("Content-Type", "application/json");
        
          req.addEventListener('load', function () {
            alert("Updated succesfully");
        
          });
        
          req.send(JSON.stringify(data));
        }

        let deleteDetails= (e) => {
            let url = "https://6411afc9b6067ba2f141c0e3.mockapi.io/menu/" + document.querySelector("#ID").value;
//   let data = {
//     breakfast: document.querySelector("#breakfast").value,
//     lunch: document.querySelector("#lunch").value,
//     juice: document.querySelector("#juice").value,
//     bill: document.querySelector("#bill").value,
//   }
  const req = new XMLHttpRequest();

  req.open('DELETE', url); // 'POST' or 'PUT'

  req.setRequestHeader("Content-Type", "application/json");

  req.addEventListener('load', function () {
    // const res = JSON.parse(req.responseText);
    // console.log(res);
    alert("Deleted succesfully");

  });

//   req.send(JSON.stringify(data));
  req.send();
}
//mockapi site : https://mockapi.io
//http status code : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

