import styled from "styled-components";

export const LogInFormStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  gap: 20px;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;
    background: #213e83;
    padding: 50px;
    border-radius: 50px;
    &__field {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    button {
      margin-top: 20px;
      height: 40px;
      width: 120px;
    }
  }
`;
