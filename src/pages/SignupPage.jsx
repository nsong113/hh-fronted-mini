// 회원가입 페이지
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import * as Styled from "../component/Signup/style";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import axios from 'axios';

function Join() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [userType, setUserType] = useState("");

  const registerMutation = useMutation(
    async ({ loginId, password, nickname, userType }) => {
      try {
        const response = await axios.post("http://localhost:4000/signup", {
          id: null,
          loginId,
          password,
          nickname,
          userType,
        });
        console.log('Response:', response.data);
        return response.data;
      } catch (error) {
        console.log('Error:', error);
        throw error;
      }
    }
  );

  const onJoinHandler = async () => {
    if (!loginId || !password || !nickname || !userType) {
      console.log('ID, password, nickname, and userType are required.');
      return;
    }

    try {
      const response = await registerMutation.mutateAsync({ loginId, password, nickname, userType });

      const jwtToken = response.token;

      document.cookie = `token=${jwtToken}; path=/`;

    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
        } else if (error.response.status === 409 && error.response.data.message === '409 중복된 닉네임으로 회원가입을 시도한 경우') {
          console.log('중복된 닉네임입니다.');
        } else {
          console.log('An unexpected error occurred.');
        }
      } else {
        console.log('An unexpected error occurred.');
      }
    }
  };

  return (
    <>
      <Header />
      <Styled.Container>
        <h2>Join</h2>
        <Styled.Form>
          <Styled.Label htmlFor="loginId">ID:</Styled.Label>
          <Styled.Input
            type="text"
            id="loginId"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />

          <Styled.Label htmlFor="password">Password:</Styled.Label>
          <Styled.Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Styled.Label htmlFor="nickname">Nickname:</Styled.Label>
          <Styled.Input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <Styled.Label htmlFor="userType">User Type:</Styled.Label>
          <Styled.Select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select User Type</option>
            <option value="BUYER">BUYER</option>
            <option value="SELLER">SELLER</option>
          </Styled.Select>

          <Styled.Button type="button" onClick={onJoinHandler} disabled={registerMutation.isLoading}>
            {registerMutation.isLoading ? 'Joining...' : 'Join!'}
          </Styled.Button>

          <Styled.LinkText>
            이미 계정이 있으신가요?{' '}
            <Link to="/login">로그인</Link>
          </Styled.LinkText>
        </Styled.Form>
      </Styled.Container>
      <Footer />
    </>
  );
}

export default Join;
