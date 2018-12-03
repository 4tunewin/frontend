import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const Wrapper = styled.div`
    color: #ffffff;
    font-size: 12px;
`;

const StyledHeader = styled(Header)`
    font-size: 18px;
`;

const Information = () => (
    <Wrapper>
        <StyledHeader as="h2">Fair dice game that pay Ether</StyledHeader>
        <p>
            Each bet result is derived from the final seed, named fseed. fseed
            is generated from 2 parts:
        </p>

        <p>
            sseed (server seed) is under OUR control, it is generated each time
            a bet is placed.
            <br />
            cseed (client seed) is under YOUR control, and taken from the input
            box above
            <br />
            All seeds are binary strings, 32 bytes long.
        </p>

        <p>
            sseed is different for every bet, and is generated in a
            deterministic but pseudorandom fashion. You can see the
            sha256(sseed) for your next bet. This enables you to verify that we
            did not change the sseed in response to your updated cseed. There is
            also a daily seed (dseed) which will be used to generate sseed, you
            can use it to verify fairness retroactively. At the starting of each
            UTC day (subject to accuracy of crond) we will publish the previous
            days dseed, and sha256 (todays dseed) Each time we change dseed it
            is logged along with the the id of the last bet made with that seed.
        </p>

        <StyledHeader as="h2">How is everything calculated?</StyledHeader>

        <p>
            fseed = hmac_sha256(cseed, sseed)
            <br />
            sseed = hmac_sha256("your name:betctr", dseed)
            <br />
            sha256(sseed) for betctr+1 and sha256(current dseed) are displayed
            above. If you want to be confident that we are not cheating, you
            should note them down and use them later for verification. dseed is
            generated in a hashchain fashion, i.e. yesterdays dseed is
            sha256(todays dseed), which assures you that every server side
            secret was known in advance since day zero. fseed determines the
            outcome of a game differently, depending on what game you are
            playing.
        </p>
    </Wrapper>
);

export default Information;
