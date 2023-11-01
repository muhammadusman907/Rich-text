var setText = document.getElementById("set-text")
var quill = new Quill('#editor', {
    theme: 'snow'
  });

  function getValue(){
    var delta = quill.getContents();                            
    console.log(delta)
    // var text = quill.getText(0);
    
//   var text =  quill.insertText(0, 'Hello', 'bold', true);
    
    // var text = quill.insertText(5, 'Quill', {
    //     'color': '#ffff00',
    //     'italic': true
    // });
    
    // console.log(text)
  }
var des ;
var text = quill.setContents([
    { insert: 'Hello ' },
    { insert: 'World!', attributes: { bold: true } },
    { insert: '\n' }
  ]);
 
  console.log(text.ops)
  for (var i = 0 ; i < text.ops.length ; i++){
      console.log(text.ops[i].insert)  
    text.ops[i] =  des ;
    //   console.log(text.ops[i])   
        // setText.innerHTML = text.ops[i] 
  }
//   ==================post open

var mainPost = document.getElementById("main-post")
function postOpen(){
mainPost.style.display = "flex";
    mainPost.style.position = "absolute"
    mainPost.style.justifyContent = "center"
    mainPost.style.alignItems = "center"
    mainPost.style.width = "100%"
    // console.log("he")
    
}
function posts(){
    var text = quill.getText(0); 
    console.log(text)                           
}