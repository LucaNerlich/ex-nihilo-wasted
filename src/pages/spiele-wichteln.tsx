import React from 'react';
// @ts-ignore
import Layout from '@theme/Layout';
import './wichteln/spiele-wichteln.css';

interface spielewichtelnProps {
}

interface participant {
    name: string;
    link: string; // main gaming platform, such as steam profile page
}

interface pair {
    sender: participant;
    receiver: participant;
}

export default function spieleWichteln(props: Readonly<spielewichtelnProps>): React.ReactElement {
    // set demo participants
    const [participants, setParticipants] = React.useState<participant[]>([
        {name: 'Player 1', link: 'https://steamcommunity.com/id/player1'},
        {name: 'Player 2', link: 'https://steamcommunity.com/id/player2'},
        {name: 'Player 3', link: 'https://steamcommunity.com/id/player3'},
        {name: 'Player 4', link: 'https://steamcommunity.com/id/player4'},
        {name: 'Player 5', link: 'https://steamcommunity.com/id/player5'},
    ]);
    const [pairs, setPairs] = React.useState<pair[]>([]);


    function handleSubmit(event) {
        console.log('generate pairs');
        event.preventDefault();

        // set demo pairs
        setPairs([
            {sender: participants[0], receiver: participants[1]},
            {sender: participants[1], receiver: participants[2]},
            {sender: participants[2], receiver: participants[3]},
            {sender: participants[3], receiver: participants[4]},
            {sender: participants[4], receiver: participants[0]},
        ]);
    }

    return (
        <Layout title='Spiele-Wichteln' description='Web App zum Auslosen von Wichteln Paaren'>
            <div className='wrapper'>
                <h1>Spiele-Wichteln Auslosung</h1>
                <form onSubmit={handleSubmit}>
                    <button type='submit'>Paare auslosen</button>
                </form>

                <h2>Kopiervorlage <strong>Discourse</strong></h2>
                <h2>Kopiervorlage <strong>phpbb</strong></h2>
                <h2>Kopiervorlage <strong>Text</strong></h2>
                {pairs.map((pair, index) =>
                    <p key={index}>
                        <a href={pair.sender.link} target='_blank'>{pair.sender.name}</a>
                        <strong>&nbsp;bewichtelt ➡️&nbsp;</strong>
                        <a href={pair.receiver.link} target='_blank'>{pair.receiver.name}</a>
                    </p>,
                )}
            </div>
        </Layout>
    );
}
