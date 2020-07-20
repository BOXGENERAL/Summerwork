
    var data = [[]]; 
    var count=0;
    //Function in which it recieves the HTML data nad 
    function addData ()
    {
      //Prevents HTML from resetting
      event.preventDefault();
      //Gets the form data and stores the value in a variable
      name = document.getElementById("name").value; 
      status = document.getElementById("status").value;
      start = document.getElementById("start").value;
      due = document.getElementById("due").value;
      //stores the variable above to a list of 2d array
      data[count] = {name, status, start, due}; 
      //count increases by 1 indicating there is more data array list
      count = count + 1; 
      document.getElementById("myforms").reset();
      //Calls upon the displayfunction
      displayData (count);

    }
    //Function in which data is displayed on the HTML paragraph using for loops
    function displayData (count2)
    {
      var i;
      var j;
      //var x = document.createElement("Button");
      //var y = document.createTextNode("X");
      //x.appendChild(y);
      var button = document.createElement('input');
      button.setAttribute('type', 'button');
      button.setAttribute('value', 'Remove');
      button.setAttribute('onclick', 'removeRow(this)');
      var tempcell=0;
      

      var table = document.getElementById("myTable");
      document.getElementById("myTable").style.textAlign = "center";
      var row = table.insertRow(count2);
      var cell1 = row.insertCell(0);
      console.log(data[0][0]);
      for (i in data[count2-1])
      {

        cell1.innerHTML = data[count2-1][i];
        tempcell = tempcell + 1;
        if (tempcell < 4)
        {
          cell1 = row.insertCell(tempcell);
        }
        
      }
      cell1 = row.insertCell(4);
      cell1.appendChild(button);

      /*
      var text;
      //Resets what the paragraph contains and puts no data in the paragraph
      var paragraph = document.getElementById("displaydata").innerHTML = "";
      paragraph = document.getElementById("displaydata");
      
      //For loop in which to display the data
     for (i in data)
      {   
          for(j in data[i])
          {
              


            
            //Displays the Data each data from the list
            text = document.createTextNode(data[i][j]+ "        ");
            paragraph.appendChild(text);
            
          }      



          
          //When 1 data array list is done displaying the data, the paragraph makes a new line for the new set of data list to display for formatting
          paragraph.appendChild(document.createElement("br"));
          
      }
      */
    }
    function removeRow(oButton) {
      var empTab = document.getElementById("myTable");
      document.getElementById("myTable").style.textAlign = "center";
      empTab.deleteRow(oButton.parentNode .parentNode.rowIndex); // buttton -> td -> tr
      count = count - 1;
  }
    function resetHtml()
    {
        location.reload();
    }
    
 