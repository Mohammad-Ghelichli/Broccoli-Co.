import React from "react";
import {render,screen} from "@testing-library/react"
import { validation } from "./utils/Validation";
import Header from "./components/Header/Header"
describe("request invite",()=>{
  test("should input correct name at least 3 letters",()=>{
    const data ={
      fullName:'m',
      email:'mateo@gmail.com',
      confirmEmail: 'mateo@gmail.com' 
    }
    expect(validation(data).fullName).toMatch('Name is INVALID !')
      })
      test("should input correct email",()=>{
        const data ={
          fullName:'mateo',
          email:'matgmail.com',
        }
        expect(validation(data).email).toMatch('Email is INVALID !')
          })
    test("should confirm email correctly",()=>{
  const data ={
    fullName:'mateo',
    email:'mateo@gmail.com',
    confirmEmail: 'm@gmail.com' 
  }
  expect(validation(data)).toMatchObject({"confirmEmail": "Your Email not match !"})
    })
    test("If all of inputs would be ok",()=>{
      const data ={
        fullName:'mateo',
        email:'mateo@gmail.com',
        confirmEmail: 'mateo@gmail.com' 
      }
      expect(validation(data)).toMatchObject({})
        })
      test("should has header on screen",()=>{
        render(<Header/>)
        const component = screen.getByText(/Broccoli/i);
        expect(component).toBeInTheDocument(true)
      })
})
