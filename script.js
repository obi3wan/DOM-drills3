var friends = ['Jeff', 'Ben', 'Jake', 'Billy', 'Max'];


/* i loop nested inside f(friends) loop */
const button = document.getElementsByClassName('btn')[0];

button.addEventListener('click', function () {

    for (var f = 0; f < friends.length; f++) {
        let h2 = document.createElement('h2');
        let h2Text = document.createTextNode(`${friends[f]}`);
        h2.appendChild(h2Text);
        document.body.appendChild(h2);
        // div.appendChild('h2');


        for (var i = 99; i >= 1; i--) {
            if (i == 1) {
                let paragraph = document.createElement('p');
                document.body.appendChild(paragraph);
                let pText = document.createTextNode(`${(i)} line of code in the file, ${(i)} line of code; ${friends[f]} strikes one out, clears it all out, no more lines of code in the file`);
                paragraph.appendChild(pText);
                //console.log(`${(i)} line of code in the file, ${(i)} line of code; ${friends[f]} strikes one out, clears it all out, no more lines of code in the file`);
            } else {
                let paragraph2 = document.createElement('p');
                document.body.appendChild(paragraph2);
                let pText2 = document.createTextNode(`${(i)} lines of code in the file, ${(i)} lines of code; ${friends[f]} strikes one out, clears it all out, ${(i - 1)} lines of code in the file`);
                paragraph2.appendChild(pText2);

                // console.log(`${(i)} lines of code in the file, ${(i)} lines of code; ${friends[f]} strikes one out, clears it all out, ${(i - 1)} lines of code in the file`);   
            }
        }
    };
});