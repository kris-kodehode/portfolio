import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;

    @media (max-width: 768px) {
        gap: 4rem;
    }
`