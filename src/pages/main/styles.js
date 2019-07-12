import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-left: 80px;
  margin-right: 80px;
`;

export const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  input {
    flex: 1;
    height: 70px;
    padding: 0 20px;
    background: #FFF;
    font-size: 22px;
    color: #444;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  button {
    max-width: 400px;
    height: 70px;
    padding: 0 20px;
    background: #778beb;
    color: #FFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    &:hover {
      background: #546de5;
    }

    @media(max-width: 816px) {
      max-width: 100%;
      width: 100%
      border-top-right-radius: 0px;
      border-bottom-left-radius: 5px;
    }
  }
`;

// facebook/react
// vuejs/vue
// angular/angular

export const List = styled.ul`

  li {
    width: 100%;
    background: #f7f1e3;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    border-radius: 3px;
    margin-bottom: 10px;

    img {
      position: relative;
      left: 10px;
      width: 64px;
    }

    h3 {
      position: relative;
      font-size: 20px;
      margin-left: 30px;
      margin-right: 30px;
    }

    div {
      width: 400px;
      text-align: center;
    }

    p {
      margin-right: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    a {
    max-width: 400px;
    height: 45px;
    padding: 10px 40px;
    margin-right: 20px;

    text-decoration: none;
    background: #778beb;
    color: #FFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    }
  }
`;
