function onEdit(e) {

 addTimestamp(e);

}

  
  function addTimestamp(e){
  //variables
  var startRow = 4;
  var targetColumn = 2;
  var ws = "VWL";

  //get modified row and column
  var row = e.range.getRow();
  var col = e.range.getColumn();
  
  if(col === targetColumn && row >= startRow && e.source.getActiveSheet().getName() === ws  ){

    var currentDate = new Date();

    e.source.getActiveSheet().getRange(row,6).setValue(currentDate);
    if(e.source.getActiveSheet().getRange(row,5).getValue() == ""){
    e.source.getActiveSheet().getRange(row,5).setValue(currentDate);
    } // END IF CHECK if date created exists
  }  // END IF check column, row, worksheet

} // END function addTimestamp
