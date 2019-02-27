function Sort(array) {
  var done = false;
  var unique_array = []
  while (!done) {
    done = true;
    for (var i = 1; i < array.length;i++) {

       if(unique_array.indexOf(array[i]) == -1){
         done = false;
            unique_array.push(array[i])
         }
        
      else if (unique_array[i - 1] < unique_array[i]) 
      {
         
        done = false;
        var tmp = unique_array[i - 1];
        unique_array[i - 1] = unique_array[i];
        unique_array[i] = tmp;
      }
        
    
    }
  }

  return unique_array;
}
function reverse(array) {
  var done = false;
  var unique_array = []
  while (!done) {
    done = true;
    for (var i = 1; i < array.length;i++) {

       if(unique_array.indexOf(array[i]) == -1){
         done = false;
            unique_array.push(array[i])
         }
        
       if (unique_array[i - 1] > unique_array[i]) 
      {
         
        done = false;
        var tmp = unique_array[i - 1];
        unique_array[i - 1] = unique_array[i];
        unique_array[i] = tmp;
      }
        
    
    }
  }

  return unique_array;
}
