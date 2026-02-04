//type,timestamp,target,currentTarget
//defaultPrevented, toElement,srcElement
//clientX,clientY,screenX,screenY


// event propagation
//bubbling and capturing
//if true, capturing phase, false-bubbling phase
//capture phase is from the window to the target
//bubbling phase is from the target to the window
// document.getElementById('images').addEventListener('click', function(e) {
//     // console.log(e)
//     console.log('click inside the ul!');
// });
// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log('Owl clicked!');
//     e.stopPropagation(); //stops the event from propagating further
// });


// document.getElementById('google').addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log('Default prevented!');
// },false);


//////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector('#images').addEventListener("click", function(e) {
    // console.log(e.target.id);
    console.log(e.target.parentNode);
    let removeit = e.target.parentNode;
    removeit.remove();
    // if(e.target.tagName === 'IMG') {
    //     removeit.remove();
    // }
});
