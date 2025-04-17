import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged In!");
  };

  return (
    <Container>
      <SignInCard>
        <Logo>Soluna Jewelry</Logo>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Sign In</Button>
        </Form>
        <Links>
          <LinkText>Forgot Password?</LinkText>
          <LinkText>Create an Account</LinkText>
        </Links>
      </SignInCard>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, rgb(147, 211, 236), #1e2a47);
  font-family: "Times New Roman", serif;
`;

const SignInCard = styled.div`
  background: #f7f5f2;
  border-radius: 15px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #b09b5b;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 26px;
  color: #1e2a47;
  margin-bottom: 30px;
  font-family: "Times New Roman", serif;
  font-weight: lighter;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  transition: border 0.3s ease;
  background: #fff;

  &:focus {
    border: 2px solid #b09b5b;
  }

  ::placeholder {
    color: #b0a29d;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #b09b5b;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #a08747;
    transform: scale(1.05);
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  color: #1e2a47;
`;

const LinkText = styled.span`
  color: #b09b5b;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #a08747;
  }
`;
