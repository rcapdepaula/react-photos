import styled from 'styled-components'

export const Wrapper = styled.main`
  margin: 0 auto;
`
export const Grid = styled.div`
  margin-top: 62px;
  margin: 0 auto;
  max-width: var(--max-width);
  display: grid;
  grid-gap: 1em;
  position: relative;
  justify-items: center;

  @media (min-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(368px, 1fr));
    margin-top: 62px;
  }
`
export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--dark-grey);
  padding: 0 20px;
`

export const SearchBar = styled.div`
  position: relative;
  max-width: var(--max-width);
  width: 100%;
  height: 55px;
  background: var(--med-grey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  .icon {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: 28px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }

    @media (max-width: 720px) {
      font-size: 28px;
    }
  }
`
