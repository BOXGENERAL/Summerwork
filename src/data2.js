    var count = 0;
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
      var button = document.createElement('input');
      button.setAttribute('type', 'button');
      button.setAttribute('value', 'Remove');
      button.setAttribute('onclick', 'removeRow(this)');
      if (due < start)
      {
        alert("Invalid Date")
      }
      else
      {
      //count increases by 1 indicating there is more data array list
      count = count + 1; 
      document.getElementById("myforms").reset();
      var table = document.getElementById("myTable");
      document.getElementById("myTable").style.textAlign = "center";
      var row = table.insertRow(count);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4)
      cell1.innerHTML = name;
      cell2.innerHTML = status;
      cell3.innerHTML = start;
      cell4.innerHTML = due;
      cell5.appendChild(button);
        
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
  }