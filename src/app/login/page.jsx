"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/layout/Layout";
import { useState } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        createPassword: "",
        confirmPassword: ""
    });

    const RegiterSubmit = (e) => {
        e.preventDefault();
        console.log(registerData);
        if(registerData.confirmPassword !== registerData.createPassword) {
            alert("Password is incorrect");
        }else {
            localStorage.setItem("registerData", JSON.stringify(registerData));
            alert("Success You have registered")
            setRegisterData({
                firstName: '',
                lastName: '',
                email: '',
                createPassword: '',
                confirmPassword: '',
            });
            window.location.href = '/';
        }
        
    }
    // if(!localStorage.getItem('registerData')) {
    //     window.location.href = '/register';
    // }


    const LoginSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);
        const login = JSON.parse(localStorage.getItem('registerData'));
        if (login.email !== loginData.email) {
          alert('Invalid Email');
        } else if (login.confirmPassword !== loginData.password) {
          alert('Invalid password');
        } else {
            localStorage.setItem("loginData", JSON.stringify(loginData));
            window.location.href = '/profile';
        }
      };


  return (
    <Layout><br />
      <Tabs defaultValue="account" className="w-[400px] mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Kirish</TabsTrigger>
          <TabsTrigger value="password">Ro'yhatdan o'tish</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Agar siz ro'yhatdan o'tmagan bo'lsangiz <span className="text-[#1FBA4A]"> Ro'yhatdan o'tish</span> tugmasini bosing!
              </CardDescription>
            </CardHeader>
            <form onSubmit={LoginSubmit}  action="">
                <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setLoginData({...loginData, email: e.target.value})} id="email" type="email" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setLoginData({...loginData, password: e.target.value})} id="password" type="password"/>
                </div>
                </CardContent>
                <CardFooter>
                <Button type="submit">Login</Button>
                </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Agar siz ro'yhatdan o'tgan bo'lsangiz <span className="text-[#1FBA4A]">Kirish</span> tugmasini bosing!
              </CardDescription>
            </CardHeader>
            <form onSubmit={RegiterSubmit} action="">
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="firstname">First Name</Label>
                <Input value={registerData.firstName} onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})} id="firstname" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lasname">Last Name</Label>
                <Input value={registerData.lastName} onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})} id="lastname" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input value={registerData.email} onChange={(e) => setRegisterData({...registerData, email: e.target.value})} id="email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="createpassword">Create Password</Label>
                <Input value={registerData.createPassword} onChange={(e) => setRegisterData({...registerData, createPassword: e.target.value})} id="createpassword" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmpassword">Create Password</Label>
                <Input value={registerData.confirmPassword} onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})} id="confirmpassword" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Register</Button>
            </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Login;
