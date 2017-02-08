    'use strict'

    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello');

    // Interpolated
    console.log('Hello I am a %s string!', 'interpolated');
    var cut = "es6 easy";
    console.log(`Hello I am ${cut} string!`);

    // Styled
    // console.log('%c This is a short paragraph that gets es6 style!', 'font-size: 50px; background: blue;');

    // warning!
    console.warn('WARNING!');

    // Error :|
    console.error('OH SHIT, RUN!');

    // Info
    console.info('Box jumps are dangerous!');

    // Testing if true
    console.assert(5 === 4, 'Thats wrong');

    // clearing
    // console.clear();

    // Viewing DOM Elements
    // console.log(p);
    // console.dir(p);

    // Grouping
    dogs.forEach(dog => {
        //Groups
        //Open group in console.
        console.group(`${dog.name}`);
        //Collapsed group in console.
        // console.groupCollapsed(`${dog.name}`);

        //Attributes
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old.`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old.`);

        //End the group by passing the same name when started.
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Jason');
    console.count('Spencer');
    console.count('Jason');
    console.count('Jason');
    console.count('Spencer');
    console.count('Jason');
    console.count('Jason');


    // timing
    //Start and end with same string
    console.time('fetching data');

    fetch('https://api.github.com/users/jtreplogle')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

    //Table
    console.table(dogs);



