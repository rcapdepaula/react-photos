import styled from 'styled-components'

export const Wrapper = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
`
// image wrapper
export const ImageWrapper = styled.div`
  position: relative;
  height: 28.5rem;
  overflow: hidden;

  .img {
    width: 900px;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .photo-info {
    position: absolute;
    width: 100%;
    bottom: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: rgb(0, 0, 0, 0.4);
    color: var(--white);
    transform: translateY(0);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user-img {
    position: absolute;
    right: 0;
    bottom: 11px;
    border-radius: 90%;
    padding: 1rem;
  }
`
