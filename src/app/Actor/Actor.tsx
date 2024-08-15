import styled from 'styled-components';

export default function Actor() {
    return <SectionContainer>Pagina do Ator</SectionContainer>;
}

const SectionContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;

    padding: ${({ theme }) => theme.ref.padding['12']};

    ${({ theme }) =>
        theme.utils.screen('md', `padding-top: 0 !important; padding-bottom: ${theme.ref.padding['12']} !important;`)}

    ${({ theme }) =>
        theme.utils.screen(
            'lg',
            `
                justify-content: space-between;
                flex-direction: row;
                gap: ${theme.ref.spacing['12']};

                 ${theme.utils.screen('lg', `${theme.utils.container()}`)}

        `
        )}
`;
