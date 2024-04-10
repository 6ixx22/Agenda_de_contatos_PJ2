document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    
    addContact(name, phone);
    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
  });
  
  function addContact(name, phone) {
    var table = document.getElementById('contact-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    cell1.innerHTML = name;
    cell2.innerHTML = phone;
  }