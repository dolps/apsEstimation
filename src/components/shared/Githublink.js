import React from 'react';
import {IconButton,Link} from '@chakra-ui/react';
import {FaGithub} from 'react-icons/fa';

export const Githublink = props => {

    return (
        <Link _hover={undefined} href="https://github.com/dolps/apsEstimation">
            <IconButton
                size="md"
                fontSize="lg"
                aria-label={`github`}
                variant="ghost"
                color="current"
                marginLeft="2"
                to="/test"
                href="/test"
                icon={<FaGithub/>}
                {...props}
            />
        </Link>
    );
};
