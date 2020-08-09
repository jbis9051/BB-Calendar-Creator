import React from 'react';

export const About: React.FunctionComponent = ({}) => {
    return (
        <div style={{fontSize: "18px"}} className={"about-wrapper"}>
            <h1 className={"title"}>About</h1>
            <p>Blind Brook Schedule Creator was created to help students of Blind Brook with their schedule. Now it
                also supports teachers schedules. The website generates iCal files and a printable schedule in
                accordance with the letter day schedule and bell times.</p>
            <p>Blind Brook Schedule Creator is completely open source and is on GitHub: <a
                href="https://github.com/jbis9051/Blind-Brook-Calendar-Creator/">https://github.com/jbis9051/Blind-Brook-Calendar-Creator/</a>
            </p>
            <p>Blind Brook Schedule Creator was created by Josh Brown and Johnny Ramirez. It is released under
                the <a href="https://github.com/jbis9051/Blind-Brook-Calendar-Creator/blob/master/LICENSE">MIT
                    License</a>.</p>
            <p>If you encounter any issue with the website please <a
                href="https://github.com/jbis9051/Blind-Brook-Calendar-Creator/issues/new">open an issue</a> on
                GitHub or contact me directly.</p>
            <p>My website is <a href="https://joshbrown.info">https://joshbrown.info</a>.</p>
        </div>
    );
}
