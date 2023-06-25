import { NavBar, MiddlePart, Search } from "../components";
import styled from '@emotion/styled';

export const MainPage = () => {

    return (
        <StyledMainPage>
            <NavBar />
            <MiddlePart />
            <Search />
        </StyledMainPage>
    )
}

const StyledMainPage = styled.div`
    display: flex;
`;