var currentSelectID = "";
var newSelectID = "";
var dragSrcEl = null;


function handleDragStart(e) {
  // Target (this) element is the source node.
  //this.style.opacity = '0.4';

  dragSrcEl = this;

  currentSelectID =  this.firstChild.id.substring(3);

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('dragover');
}

function handleDragLeave(e) {
  this.classList.remove('dragover');  // this / e.target is previous target element.
}

function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }
  
  newSelectID =  this.firstChild.id.substring(3);

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  var cols = document.querySelectorAll('.listbox');
  [].forEach.call(cols, function (col) {
    col.classList.remove('dragover');
    
  });

  console.log(currentSelectID + " | " + newSelectID);
  if(currentSelectID == "" || newSelectID ==""){

  }else{
  	mvDraggedRandomList(parseInt(currentSelectID, 10), parseInt(newSelectID, 10));
  }
  
}