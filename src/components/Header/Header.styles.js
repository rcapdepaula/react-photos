import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 50px;
  background-color: var(--med-grey);
  position: sticky;
  top: 0;
  z-index: 99;
`
export const Inner = styled.div`
  max-width: var(--max-width);

  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 50px;

  span {
    color: var(--white);
    display: flex;
    align-items: center;
    font-size: var(--font-big);
    font-family: 'Teko', 'sans-serif';
  }
`
