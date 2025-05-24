import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackButton from "../components/BackButton";
import RunButton from '../components/RunButton';
import EmailForm from "../components/EmailForm";
import PasswordForm from "../components/PasswordForm";
import NameForm from "../components/NameForm";

// import { useAuth } from '../contexts/AuthContext';
import { useUser } from "../contexts/UserContext";


export default function Register() {
  const { login } = useUser();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const newUser = { id: uuid(), name, email };
    login(newUser); 
    navigate("/");  // ホームに遷移
  };


  return (
    <>
      <Header />
      <Box className="background-overlay">

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "60px 0px 0px 0px",
            margin: "0px 0px 0px 0px",
          }}
        >


          <Box
            sx={{
              margin: "40px 0px 0px 0px",
              width: { xs: "100%", md: "70%" },
              padding: "30px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start"

            }}
          >


            <h1 class="title">
              会員登録
            </h1>


            {/* (start)フォーム */}
            <Box
              sx={{
                margin: "0px 0px",
                width: { xs: "100%", md: "100%" },
                padding: "10px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"

              }}
            >


              {/* (start)ログインBox */}
              <Box
                sx={{
                  width: "100%",
                  padding: "20px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",

                }}
              >

                <Box
                  sx={{
                    width: "80%",
                    padding: "10px 0px 0px 0px"
                  }}
                >
                  <NameForm name={name} setName={setName}/>
                </Box>

                <Box
                  sx={{
                    width: "80%",
                    padding: "10px 0px 0px 0px"
                  }}
                >
                  <EmailForm email={email} setEmail={setEmail}/>
                </Box>

                <Box
                  sx={{
                    width: "80%",
                    padding: "10px 0px 0px 0px"
                  }}
                >
                  <PasswordForm password={password} setPassword={setPassword}/>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px 0px",
                    width: "35%",
                  }}
                >
                  <RunButton text={"登録する"} width={450} handleClick={handleRegister} />
                </Box>
              </Box>
              {/* (end)ログインBox */}



            </Box>
            {/* (end)フォーム */}


          </Box>


        </Box>


        <Box
          sx={{
            margin: "0px 0px 60px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >


          <Box
            sx={{
              margin: "0px 0px 60px 0px",
            }}
          >
            <BackButton text="ホームに戻る" link="/" />
          </Box>


        </Box>

      </Box >

      <Footer />
    </>
  )
}