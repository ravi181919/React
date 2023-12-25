
/**
 ********************************************************************************************************************
 *********************** React.createElement(object) => HTML(browser understand) ************************************
 ********************************************************************************************************************
 */

/*
/*
*************************************************************************************************************
*********************************  Element creation in React ************************************************
*************************************************************************************************************
/*

const head = React.createElement('h1', {className:'heading'}, 'Hello World Using React' );
const button = React.createElement('button', {className:'btn'}, 'click me to change');
const creatDiv = React.createElement('div', {className:'card'}, head, button);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(creatDiv);

*/


/******************************************************************************************************************
 ************************************     Nested element creation in React   **************************************
 ******************************************************************************************************************
 */

const nested =
React.createElement('div', {className: 'container'}, 
React.createElement('div', {className: 'nest'},
React.createElement('h1', {}, 'hello, i am h1')))


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(nested);

/**************************************************************************************************************
 *********************************     create  Siblingns in React      ****************************************
 **************************************************************************************************************
 */
const newNested = 
React.createElement('div', {className: 'container'}, 
React.createElement('div', {className: 'nest'},
[React.createElement('h1', {}, 'hello, i am h1'),
React.createElement('h2', {}, 'hello, i am h2') 
]))

// root.render(newNested);


/**
 * ***************************************************************************************************************
 * ******************************** how to one more than children of one parent **********************************
 * ***************************************************************************************************************
 */

const oneMoreThanChildren = 
React.createElement('div', {className: 'container'}, 
[React.createElement('div', {className: 'nest'},
[React.createElement('h1', {}, 'hello, i am h1'),React.createElement('h2', {}, 'hello, i am h2') ]),
React.createElement('div', {className: 'nest2'},
[React.createElement('h1', {}, 'hello, i am h1'),React.createElement('h2', {}, 'hello, i am h2') ])])

root.render(oneMoreThanChildren)