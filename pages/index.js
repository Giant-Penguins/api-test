import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
return (
  <div>

  </div>
)
}

import React, { Component } from "react";
import ReactDOM from "react-dom";
import TableRows from "../TableRows";

class App extends Component {
render() {
  return (
    <table>
      <tbody>
        <TableRows/>
      </tbody>
    </table>
  );
}
}
