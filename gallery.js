function upDate(previewPic){
    var a = previewPic.getAttribute( "src" );
    var b = previewPic.getAttribute( "alt" );
    document.getElementById('image').style.backgroundImage = "url('" + a + "')";
    document.getElementById('image').innerHTML = b;
 }
 
   function unDo(X){
    X = document.getElementById('image');
    X.style.backgroundImage = "url('')";
     document.getElementById('image').innerHTML = "Hover over an image below to display here";
   
 }