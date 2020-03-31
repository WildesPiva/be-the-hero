import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}
.back-link {
    color: ${({ theme }) => theme.text};
}

.profile-container ul li {
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
}

.new-incident-container .content, .register-container .content{
    background: ${({ theme }) => theme.form};
}

.new-incident-container .content section p, .register-container .content section p{
    color: ${({ theme }) => theme.text};
}

#theme-button{
    margin-top: 10px;
    left: 60vw;
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius:50%;
    background: transparent;
    transition: all 0.2s ease; 
}
`