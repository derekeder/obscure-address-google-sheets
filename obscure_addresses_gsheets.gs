var ui = SpreadsheetApp.getUi();
var addressColumn = 1;
var outputColumn = 2;

function processAddress(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var cells = sheet.getActiveRange();
  
  if (cells.getNumColumns() != 2) {
    ui.alert(
      'Warning',
      'You must select 2 columns: Address, Obscured Address',
      ui.ButtonSet.OK
    );
    return;
  }
  
  for (addressRow = 1; addressRow <= cells.getNumRows(); addressRow++) {
    var address = cells.getCell(addressRow, addressColumn).getValue();
    
    if (!address) {continue}
    
    obscureAddress(cells, addressRow, address);
  }
}

function obscureAddress(cells, row, address){
  // pluck first set of digits at the beginning of the address string
  var myregexp = /^\d+/g;
  var match = myregexp.exec(address);
  
  if (!match) {
    insertDataIntoSheet(cells, row, [
      [outputColumn, address]
    ]);
  }
  else {
  
    var street_num = match[0];
  
    // replaces last 2 digits with zeroes
    var street_num_obscured = street_num.slice(0, -2) + "00";
  
    // return obscured address
    var obscured_address = address.replace(street_num, street_num_obscured);
  
    insertDataIntoSheet(cells, row, [
      [outputColumn, obscured_address]
    ]);
  }
}
  
/**
 * Sets cells from a 'row' to values in data
 */
function insertDataIntoSheet(cells, row, data) {
  for (d in data) {
    cells.getCell(row, data[d][0]).setValue(data[d][1]);
  }
}

function onOpen() {
  ui.createMenu('Obscure Address')
   .addItem('Obscure selected addresses', 'processAddress')
   .addToUi();
}