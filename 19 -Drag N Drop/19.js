const boxes = document.querySelectorAll('.box');
const fill = document.querySelector('.fill');
// const hold = document.querySelector('.hold');
const hover = document.querySelector('.hover');


    fill.addEventListener('dragstart',dragStart)
    
    // fill.addEventListener('dragover',dragOver)
    fill.addEventListener('dragend', dragEnd)
    

 for (const box of boxes){
 box.addEventListener('dragenter',dragEnter);
 box.addEventListener('dragover', dragOver)
 box.addEventListener('dragleave', dragLeave)
 box.addEventListener('drop', DragDrop)
 }
function dragStart(){
    console.log("drag start");
    this.className += ' hold';
    setTimeout(()=>this.className = '', 0);
    }

    function dragOver(e){
        e.preventDefault();
        console.log("drag over");
        }

        function dragEnter(e){
            e.preventDefault();
            console.log("drag enter");
            
            this.className += ' hover';
            }

            function dragLeave(){
                console.log("drag leave");
                this.className = 'box'
                }

                function DragDrop(){
                    console.log("drag drop");
                    this.className = 'box'
                    this.append(fill);
                    }
function dragEnd(){
    console.log("drag end");
    this.className = 'fill'
    
    }