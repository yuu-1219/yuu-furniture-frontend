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

import { useUser } from "../contexts/UserContext";
import { useCart } from "../contexts/CartContext";


export default function UserInfo() {
  const { user, login, setUser, changeUserInfo, deleteUserInfo } = useUser();
  const { cart, deleteCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleOnChange = async () => {
    // const newUser = { ...user, name, email };
    // setUser(newUser);
    // login(newUser); 

    changeUserInfo(user._id, name, email, password);
    navigate(`/user/${user._id}`); 
    alert("会員情報を変更しました"); 
  };

  const handleDelete = async () => {
    deleteCart(user._id);
    deleteUserInfo();
    navigate("/");
    alert("アカウントを削除しました"); 
  }


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
              お客様情報の確認・変更
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


              {/* (start)入力フォーム */}
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
                  <RunButton text={"変更する"} width={450} handleClick={handleOnChange} />
                </Box>

                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px 0px",
                    width: "35%",
                    color: "#f36136",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer"
                  }}
                  onClick={handleDelete}
                >
                  アカウントを削除する
                </Typography>

              </Box>
              {/* (end)入力フォーム*/}



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
            <BackButton text="マイページに戻る" link={`/user/${user._id}`} />
          </Box>


        </Box>

      </Box >

      <Footer />
    </>
  )
}